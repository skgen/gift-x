import './env.js';

import process from 'node:process';

import { generate as cliGenerate } from '@graphql-codegen/cli';
import chokidar from 'chokidar';
import fs from 'fs-extra';
import { globSync } from 'glob';
import path from 'pathe';
import { joinURL } from 'ufo';

import { rootPath } from './utils.js';

const generatedDirPath = path.resolve(rootPath, './generated/graphql');

async function generatorFactory(options: {
  url: string;
  authorization?: string;
  documents: string[];
  destDirName?: string;
  watchPath?: string | string[];
}) {
  async function run() {
    const headers: Record<string, string> = {};
    if (options.authorization) {
      headers.Authorization = options.authorization;
    }

    const destDirPath = path.resolve(generatedDirPath, options.destDirName ?? '');

    const sdkFilePath = path.resolve(destDirPath, 'sdk.ts');
    const schemaFilePath = path.resolve(destDirPath, 'schema.json');

    try {
      await cliGenerate({
        schema: {
          [options.url]: {
            headers,
          },
        },
        documents: options.documents,
        // verbose: true,
        // debug: true,
        generates: {
          [sdkFilePath]: {
            plugins: [
              'typescript',
              'typescript-operations',
              'typescript-generic-sdk',
            ],
            config: {
              useTypeImports: true,
              avoidOptionals: {
                field: true,
                inputValue: false,
                object: true,
                defaultValue: true,
              },
              scalars: {
                Date: 'Date',
                GraphQLStringOrFloat: 'string | number',
                JSON: 'unknown',
                GraphQLBigInt: 'number',
                Void: 'null',
                Hash: 'string',
                permissions_me_type: 'string',
              },
              strictScalars: true,
            },
          },
          [schemaFilePath]: {
            plugins: [
              'introspection',
            ],
            config: {
              descriptions: false,
              schemaDescription: false,
            },
          },
        },
      });
    }
    catch (e) {
      console.error(e);
    }

    await optimize({ schemaFilePath });
    await patch({ sdkFilePath });
  };

  if (options.watchPath) {
    const watcher = chokidar.watch(globSync(options.watchPath), {
      ignored: (path, stats) => (stats?.isFile() && !path.endsWith('.gql')) ?? false,
      persistent: true,
      awaitWriteFinish: {
        stabilityThreshold: 1000,
      },
    });

    watcher.on('ready', () => {
      console.log('ready');

      run();
      watcher.on('all', run);
    });
  }
  else {
    await run();
  }

  return run;
}

async function patch(options: { sdkFilePath: string }) {
  const data = await fs.readFile(options.sdkFilePath, {
    encoding: 'utf8',
  });

  const updatedData = data
    .replace(
      /(export type Requester<C = \{\}> = <R, V>\(doc: DocumentNode, vars\?: V, options\?: C\) => )Promise<R> \| AsyncIterable<R>;?/g,
      `\n$1Promise<{ data?: R | null; errors?: ReadonlyArray<import('graphql').GraphQLFormattedError>; response: Response | null }>;\n`,
    )
    .replace(
      /(\w+\(variables\??: \w+, options\??: C\)): Promise<\w+>/g,
      '$1',
    )
    .replace(
      /(return requester<\w+, \w+>\(\w+, variables, options\)) as Promise<\w+>/g,
      '$1',
    );

  await fs.writeFile(options.sdkFilePath, updatedData, {
    encoding: 'utf8',
  });

  console.log('✔ SDK Patched !');
}

async function optimize(options: { schemaFilePath: string }) {
  const parsed = path.parse(options.schemaFilePath);
  const minifiedSchemaFilePath = path.format({
    dir: parsed.dir,
    name: `${parsed.name}.min`,
    ext: parsed.ext,
  });
  const inputData = await fs.readFile(options.schemaFilePath, { encoding: 'utf8' });

  const inputStat = await fs.stat(options.schemaFilePath);

  const schema = JSON.parse(inputData);

  if (!schema) {
    console.error(`Failed to parse: ${options.schemaFilePath}`);
  }

  const minifiedSchema = JSON.stringify(schema, replacer, 0);

  function replacer(key: string, value: unknown) {
    // Remove anything that is deprecated
    if (key === 'isDeprecated' || key === 'deprecationReason' || value === 'isDeprecated') {
      return undefined;
    }

    // Remove everything where the value is null
    if (value === null) {
      return undefined;
    }

    // Removing these things below break the schema. You get errors trying to load it with `buildClientSchema`
    // which is good because you can tell when you've gone too far and made the schema un-useable.

    // // Remove "args": []
    // if (key === "args" && Array.isArray(value) && value.length === 0) {
    //   return undefined;
    // }

    // // Remove all "kind":"NON_NULL"
    // if (key === "kind" && value === "NON_NULL") {
    //   return undefined;
    // }

    return value;
  }

  await fs.writeFile(minifiedSchemaFilePath, minifiedSchema);

  const outputStat = fs.statSync(minifiedSchemaFilePath);

  const sizeInBytes = inputStat.size - outputStat.size;
  const percentage = (sizeInBytes / inputStat.size) * 100;

  console.log(`✔ Schema Optimized and minified`);
  console.log(`Saved ${Math.trunc(sizeInBytes / 1024)}k (${Math.trunc(percentage)}%)`);
}

async function main() {
  await generatorFactory({
    destDirName: 'system',
    watchPath: path.resolve(rootPath, 'app/data/graphql/system'),
    documents: [
      path.resolve(rootPath, 'app/data/graphql/system/**/*.gql'),
    ],
    url: joinURL(process.env.CODEGEN_GRAPHQL_INTROSPECTION_URL, '/system'),
    authorization: `Bearer ${process.env.CODEGEN_ACCESS_TOKEN}`,
  });
  await generatorFactory({
    destDirName: 'app',
    watchPath: [
      path.resolve(rootPath, 'app/data/graphql/app'),
      path.resolve(rootPath, 'layers/**/data/graphql'),
    ],
    documents: [
      path.resolve(rootPath, 'app/data/graphql/app/**/*.gql'),
      path.resolve(rootPath, 'layers/**/data/graphql/**/*.gql'),
    ],
    url: process.env.CODEGEN_GRAPHQL_INTROSPECTION_URL,
    authorization: `Bearer ${process.env.CODEGEN_ACCESS_TOKEN}`,
  });
}

main();

import './env.js';

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { createClient } from '@hey-api/openapi-ts';
import chokidar from 'chokidar';
import { globSync } from 'glob';

import { rootPath } from './utils.js';

const generatedDirPath = path.resolve(rootPath, './generated/rest');

async function generate() {
  const res = await fetch(process.env.CODEGEN_OPENAPI_SCHEMA_URL, {
    headers: {
      Authorization: `Bearer ${process.env.CODEGEN_ACCESS_TOKEN}`,
    },
  });
  const oas = await res.json() as Record<string, unknown>;

  await createClient({
    input: oas,
    output: generatedDirPath,
    plugins: [
      {
        name: '@hey-api/typescript',
      },
      {
        name: '@hey-api/client-axios',
      },
      {
        name: 'zod',
      },
      {
        name: '@hey-api/sdk',
        validator: true,
      },
    ],
  });
}

// async function patch() {
//   const files = globSync(path.resolve(CONFIG_REST_GENERATED_FOLDER_PATH, '**/*.ts'));
//   // for (const file of files) {
//   //   const content = fs.readFileSync(file, { encoding: 'utf-8' });
//   //   const patched = content.replace(/(from\s+['"]\.\/[^'"]+)(?<!\.js)(['"])/g, '$1.js$2');
//   //   fs.writeFileSync(file, patched, { encoding: 'utf-8' });
//   // }
//   console.log('✔ Rest SDK Patched !');
// }

async function serie() {
  console.clear();
  await generate();
  // await patch();
}

async function main() {
  const paths = globSync(path.resolve(rootPath, './**/data/rest'));
  const watcher = chokidar.watch(paths, {
    persistent: true,
  });

  watcher.on('ready', () => {
    serie();
    watcher.on('add', serie);
    watcher.on('unlink', serie);
    watcher.on('change', serie);
    watcher.on('addDir', serie);
    watcher.on('unlinkDir', serie);
  });
}

main();

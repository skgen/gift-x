import type { OperationContext } from '@urql/core';
import type { IntrospectionQuery } from 'graphql';

// We just importe generic types heres
import type { Requester } from '@@/generated/graphql/app/sdk';

import { cacheExchange, Client, fetchExchange } from '@urql/core';
import { defu } from 'defu';

import { getSdk as getAppSdk } from '@@/generated/graphql/app/sdk';
import { getSdk as getSystemSdk } from '@@/generated/graphql/system/sdk';

import { createScalarsExchange } from './scalars';

export type GraphQLRequestOptions = RequestInit;

type GetSdkBase<C extends Record<string, any> = Record<string, any>> = (requester: Requester<C>) => {
  [key: string]: (variables?: Record<string, any>, options?: C) => ReturnType<typeof requester>;
};

interface CreateGraphQLSdkOptions<GetSdk extends GetSdkBase = GetSdkBase> {
  url: string;
  introspectionResult: IntrospectionQuery;
  getSdk: GetSdk;
  fetchOptions?: () => RequestInit;
}

export function createGraphQLSdk<GetSdk extends GetSdkBase>(options: CreateGraphQLSdkOptions<GetSdk>) {
  const scalarsExchange = createScalarsExchange(options.introspectionResult);

  const client = new Client({
    url: options.url,
    exchanges: [
      // cacheExchange,
      scalarsExchange,
      fetchExchange,
    ],
    fetchOptions: () => {
      const baseFetchOptions = options.fetchOptions ? options.fetchOptions() : {};
      return defu({}, baseFetchOptions);
    },
  });

  const sdk = options.getSdk(async (document, variables, _options) => {
    const def = document.definitions.find((v, i) => i === 0);
    if (!def || !('operation' in def)) {
      throw new Error('No graphql definition');
    }
    let operation = client.query;
    if (def.operation === 'mutation') {
      operation = client.mutation;
    }

    const context: Partial<OperationContext> = {};

    // if (options?.system) {
    //   context.url = '/system';
    // }

    const response = await operation(
      document,
      variables as { [prop: string]: any },
      context,
    );

    return {
      data: response.data,
      errors: response.error?.graphQLErrors,
      response: response.error?.response ?? null,
    };
  }) as ReturnType<GetSdk>;

  return sdk;
}

interface CreateUnifiedGraphQLSdkOptions {
  url: string;
  fetchOptions?: () => RequestInit;
}

export async function createUnifiedGraphQLSdk(options: CreateUnifiedGraphQLSdkOptions) {
  const systemIntrospectionSchema = await import('@@/generated/graphql/system/schema.min.json');
  const appIntrospectionSchema = await import('@@/generated/graphql/app/schema.min.json');

  // @ts-expect-error genericity issue
  const systemSdk = createGraphQLSdk<typeof getSystemSdk>({
    url: `${options.url}/system`,
    introspectionResult: systemIntrospectionSchema as IntrospectionQuery,
    getSdk: getSystemSdk,
    fetchOptions: options.fetchOptions,
  });

  // @ts-expect-error genericity issue
  const appSdk = await createGraphQLSdk<typeof getAppSdk>({
    url: options.url,
    introspectionResult: appIntrospectionSchema as IntrospectionQuery,
    getSdk: getAppSdk,
    fetchOptions: options.fetchOptions,
  });

  return {
    app: appSdk,
    system: systemSdk,
  };
}

export type UnifiedGraphQLSdk = Awaited<ReturnType<typeof createUnifiedGraphQLSdk>>;

export type GraphQLSdkData<T extends (...args: any) => any> = NonNullable<Awaited<ReturnType<T>>['data']>;

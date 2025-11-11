import { createUnifiedGraphQLSdk } from '@/data/graphql/sdk';

export default defineNuxtPlugin({
  name: 'graphql-plugin',
  setup: async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    const unifiedSdk = await createUnifiedGraphQLSdk({
      url: runtimeConfig.public.graphqlApiHost,
      fetchOptions: () => {
        return {
          credentials: 'include',
        };
      },
    });

    nuxtApp.provide('graphql', unifiedSdk);
  },
});

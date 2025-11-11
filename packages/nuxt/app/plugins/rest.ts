import { createRestSdk } from '@/data/rest/sdk';

export default defineNuxtPlugin({
  name: 'rest-plugin',
  setup: async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    const sdk = await createRestSdk({
      url: runtimeConfig.public.restApiHost,
      onBeforeRequest: (config) => {
        config.withCredentials = true;
        return config;
      },
    });

    nuxtApp.provide('rest', sdk);
  },
});

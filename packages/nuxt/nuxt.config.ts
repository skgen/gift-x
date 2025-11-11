import { Theme } from '@skgn/melkor/features';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig((() => {
  return {
    devtools: {
      enabled: true,

      timeline: {
        enabled: true,
      },
    },

    ssr: false,

    compatibilityDate: '2024-09-11',

    components: [
      {
        path: '@/components',
        pathPrefix: false,
      },
    ],

    runtimeConfig: {
      public: {
        appHost: '',
        restApiHost: '',
        graphqlApiHost: '',
      },
    },

    modules: ['@skgn/melkor/nuxt', '@nuxt/image', 'nuxt-svgo-loader', '@pinia/nuxt'],

    build: {
      transpile: [
        '@atmina/urql-custom-scalars-exchange',
      ],
    },

    image: {
      domains: [
        'api.xgift.skgen.me',
      ],
      // directus: {
      //   baseURL: new URL('/assets', process.env.NUXT_PUBLIC_ASSETS_API_HOST).href,
      // },
      // inject: true,
      // domains: [
      //   process.env.NUXT_PUBLIC_ASSETS_API_HOST,
      // ],
      alias: {
        d6s: new URL('/assets', 'https://api.xgift.skgen.me').href,
      },
    // quality: 100,
    },

    melkor: {
      themes: [Theme.dark],
      toast: {
        position: 'bottom-center',
      },
    },

    pinia: {
      storesDirs: [
        '../app/stores/**',
        '../layers/**/app/stores/**',
      ],
    },

    vite: {
      optimizeDeps: {
        include: [
          '@urql/core',
          'graphql-scalars',
          'lodash-es',
          'graphql-tag',
          'zod',
          'axios',
          '@vueuse/core',
          '@skgn/melkor/nuxt/components',
          'pretty-bytes',
        ],
      },
    },
  };
})());

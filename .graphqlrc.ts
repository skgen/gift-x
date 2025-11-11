export default {
  projects: {
    app: {
      schema: 'packages/nuxt/generated/graphql/app/schema.min.json',
      documents: 'packages/nuxt/app/**/data/graphql/app/**/*.{graphql,gql}',
    },
    system: {
      schema: 'packages/nuxt/generated/graphql/system/schema.min.json',
      documents: 'packages/nuxt/app/**/data/graphql/system/**/*.{graphql,gql}',
    },
  },
};

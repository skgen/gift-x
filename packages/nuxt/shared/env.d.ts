declare namespace NodeJS {
  interface ProcessEnv {
    CODEGEN_OPENAPI_SCHEMA_URL: string;
    CODEGEN_GRAPHQL_INTROSPECTION_URL: string;
    CODEGEN_ACCESS_TOKEN: string;

    NUXT_PUBLIC_APP_HOST: string;
    NUXT_PUBLIC_REST_API_HOST: string;
    NUXT_PUBLIC_GRAPHQL_API_HOST: string;
    NUXT_PUBLIC_ASSETS_API_HOST: string;
  }
}

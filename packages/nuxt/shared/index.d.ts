import type { UnifiedGraphQLSdk } from '@/data/graphql/sdk.js';
import type { RestSdk } from '@/data/rest/sdk.js';

// declare module 'graphql-tag' {
//   import type { DocumentNode } from 'graphql';

//   export function gql(literals: TemplateStringsArray, ...placeholders: any[]): DocumentNode;

//   export default gql;
// }

declare module '#app' {
  interface NuxtApp {
    $graphql: UnifiedGraphQLSdk;
    $rest: RestSdk;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $graphql: UnifiedGraphQLSdk;
    $rest: RestSdk;
  }
}

export {};

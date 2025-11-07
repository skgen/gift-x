import antfu from '@antfu/eslint-config';

export default antfu(
  {
    type: 'lib',
    typescript: {
      overrides: {
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type',
              [
                'parent-type',
                'sibling-type',
                'index-type',
                'internal-type',
              ],
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              // 'side-effect',
              'object',
              'unknown',
            ],
            newlinesBetween: 'always',
            internalPattern: ['^(@|@@)/.+'],
            order: 'asc',
            type: 'natural',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'off',
        ],
      },
    },
    pnpm: true,
    vue: true,
    stylistic: {
      semi: true,
    },
    ignores: [
      'packages/nuxt/dist',
      'packages/nuxt/.nuxt',
      'packages/nuxt/.output',
      'packages/nuxt/generated',
    ],
    formatters: {
      css: true,
    },
  },
  [
    {
      rules: {
        'vue/block-order': ['error', {
          order: ['template', 'script', 'style', 'i18n'],
        }],
        'perfectionist/sort-exports': ['error', {
          partitionByComment: true,
          ignoreCase: false,
        }],
      },
    },
  ],
);

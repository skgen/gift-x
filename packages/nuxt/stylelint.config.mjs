export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-class-pattern': ['sk-[A-Z][a-zA-Z]+|page', { resolveNestedSelectors: false }],
      },
    },
  ],
  ignoreFiles: [
    'dist/**',
    '.nuxt/**',
    '.output/**',
    '.node_modules/**',
  ],
};

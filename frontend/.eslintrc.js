module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  rules: {
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'always' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/semi': 'error',
    'react/display-name': 'off',
  },
};

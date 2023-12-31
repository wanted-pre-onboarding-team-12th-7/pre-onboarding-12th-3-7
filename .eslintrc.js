module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-uses-vars': 'error', // var로 JSX할당하면 에러
    'react/button-has-type': 'error', //button에 타입지정안하면 에러
    'react/jsx-sort-props': [
      // JSX prop을 정렬해줌
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'no-multiple-empty-lines': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }], // console.log() 금지
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'type', 'unknown'],
        pathGroups: [
          {
            pattern: '{.,..}/**/*.styled',
            group: 'object',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}

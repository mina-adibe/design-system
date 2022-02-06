module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'prettier/prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    // allow jsx syntax in js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', '.tsx'] }],
    'line-comment-position': [
      'error',
      {
        position: 'above',
      },
    ],
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/prop-types': 0,
  },
};

"use strict";

module.exports = {
  root: true,
  extends: ['@deepvision', '@deepvision/eslint-config/plugins/typescript'],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true
    }]
    /* [UGC rules] */

    /* [/UGC] */

  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
};
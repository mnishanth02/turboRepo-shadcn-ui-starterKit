/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@zealer/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-redeclare': 'off',
  },
};

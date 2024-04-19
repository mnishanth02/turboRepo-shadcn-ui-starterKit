// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  // ignorePatterns: ["apps/**", "packages/**"],
  root: true,
  extends: ["@zealer/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: ["./apps/*/tsconfig.json", "./packages/**/*/tsconfig.json"],
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:typescript-eslint-parser"],
  parser: "typescript-eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".ts"],
      },
    },
  },
};

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: {
      ts: "@typescript-eslint/parser",
      js: "@typescript-eslint/parser",
    },
  },
  rules: {
    "prettier/prettier": 2,
  },
};

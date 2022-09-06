module.exports = {
  env: {
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
  }
}

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {}
}

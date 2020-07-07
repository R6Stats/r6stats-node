module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules:  {
    'camelcase': 'off',
    'quotes': [1, 'single'],
    'semi': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off'
  },
}

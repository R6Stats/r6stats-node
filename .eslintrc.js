'use strict'

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    'ecmaVersion': 9,
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'semi': ['error', 'never'],
    'no-mixed-spaces-and-tabs': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'rest-spread-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'func-call-spacing': ['error', 'never'],
    'no-multi-spaces': 'error',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true }],
  }
}

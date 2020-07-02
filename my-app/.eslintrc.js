const path = require('path');

module.exports = {
  settings: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  rules: {
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-use-before-define': ['error', { functions: false }],
    'arrow-parens': 0,
    'no-trailing-spaces': 0,
    'no-return-assign': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'vue/no-unused-components': 0,
    'vue/no-unused-vars': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-empty': 0,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  plugins: ['vue'],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
};

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
  },
};

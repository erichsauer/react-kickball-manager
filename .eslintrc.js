module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['input'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'no-alert': 0,
    'no-restricted-globals': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
}

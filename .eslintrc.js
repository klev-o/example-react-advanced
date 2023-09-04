module.exports = {
  env: {
    browser: true,
    es2021: true
    },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
        },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json'
    },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'indent': ['error', 4],
    '@typescript-eslint/indent': ['error', 4],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn"
    },
  globals: {
    __IS_DEV__: true
    },
}

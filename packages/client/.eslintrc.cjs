module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:postcss-modules/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:typescript-sort-keys/recommended",
    'prettier',
  ],
  parserOptions: {
   project: './tsconfig.json'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'sort-keys-fix'],
  rules: {
    "react/jsx-sort-props": "warn",
     "sort-keys-fix/sort-keys-fix": "warn",
    "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Prevents the use of console.log.
    'no-console': 'error',
    // Prevents the use of TODO and other warning terms in comments.
    'no-warning-comments': 'error'
  },
}

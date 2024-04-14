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
    'prettier',
  ],
  parserOptions: {
   project: './tsconfig.json'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
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

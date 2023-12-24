module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Limites header to 50 characters
    "header-max-length": [2, "always", 50],
    // Enforces to add a reference to a ticket or GitHub issue.
    'references-empty': [2, 'never'],

  }
}
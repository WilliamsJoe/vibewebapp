module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    indent: ["error", 2],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-member-accessibility": {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'explicit',
        parameterProperties: 'explicit'
      }
    },
    "@typescript-eslint/no-explicit-any": "warn",
  }
}
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.html'],
    },
  ],
  rules: {
    'react/jsx-first-prop-new-line': [1, 'multiline'],

  },
  plugins: ['react', 'prettier'],

  extends: ["eslint:recommended", "plugin:react/recommended"]

};

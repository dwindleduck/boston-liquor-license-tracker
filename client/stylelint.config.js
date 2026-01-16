export default {
  rules: {
    'color-no-hex': null
  },
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        'color-no-hex': true
      }
    },
    {
      files: ['src/styles/index.css'],
      rules: {
        'color-no-hex': null
      }
    }
  ]
};


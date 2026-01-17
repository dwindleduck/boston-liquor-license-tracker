export default {
  rules: {
    'color-no-hex': [
      true,
      {
        message: `Hex color codes are only allowed in client/src/styles/index.css. Use Tailwind classes or CSS variables instead. See client/README.md#using-tailwind-utility-classes`
      }
    ]
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


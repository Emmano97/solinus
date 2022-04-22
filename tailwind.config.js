const colors = require('tailwindcss/colors')


module.exports = {
  content: [],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'background': '#F2F5F9',
      'background-card': '#FFFFFF',
      'primary': '#FF9C1B',
      'secondary': '#EC1B09',
      'content': '#FFEBD1',
      "nav": "#E1E8EF",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      orange: colors.orange,
    }
  },
  plugins: [],
}
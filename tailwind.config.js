const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    colors: {
      gray: colors.gray,
      white: '#FFFFFF'
    },
    extend: {
      colors: {
        'gray-825': '#1B1B1E',
        'gray-850': '#202023',
        'gray-750': '#333338'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

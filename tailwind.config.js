const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    colors: {
      gray: colors.gray,
      white: '#FFFFFF'
    },
    extend: {
      colors: {
        gray: {
          950: '#141417',
          925: '#161619',
          850: '#202023',
          825: '#232326',
          750: '#34343A',
          725: '#393940',
          650: '#44444B',
          625: '#4B4B53',
          550: '#5E5E65',
          525: '#67676F'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

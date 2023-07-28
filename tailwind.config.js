const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace']
    },
    colors: {
      gray: colors.gray,
      white: '#FFFFFF',
      transparent: 'transparent'
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
          525: '#67676F',
          450: '#B2B2B9',
          425: '#AAAAB2',
          350: '#AEAEB6',
          325: '#BBBBC1',
          250: '#D8D8DC',
          225: '#DCDCE0',
          150: '#E8E8EB',
          125: '#ECECEE',
          75: '#F7F7F8'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        'dark': '#101010',
        'dark-2': '#202020',
        'dark-light': '#888888'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ['layouts/**/*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bluegray': colors.blueGray,
        'coolgray': colors.coolGray,
        'schuettel': {
          '50':  '#f7f9fb',
          '100': '#e5f0fc',
          '200': '#cad7fa',
          '300': '#a3b3f3',
          '400': '#838bea',
          '500': '#7b68ee',
          '600': '#594ad6',
          '700': '#4338b7',
          '800': '#2f2689',
          '900': '#1a1856',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


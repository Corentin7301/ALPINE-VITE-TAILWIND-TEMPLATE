module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/assets/tailwindPerso.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        alpineBlue: '#7DC1D2',
        vitePurple: '#BD34FE',
        tailwind: '#16BDCA'
      },
      fontFamily: {
        lato: ['lato']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

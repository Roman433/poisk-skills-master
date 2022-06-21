module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yel': '#FFF200'
      },
      width: {
        'three': '32.5%'
      }
    },
  },
  plugins: [],
}

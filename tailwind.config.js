/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#DDDDDD'
      }
    },
  },
  plugins: [],
};

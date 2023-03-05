/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/js/*.js",  "./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // body: ["Valera Round", "sans-serif"],
        // title :["Syne", "serif"],
        body: ["Inter", "sans-serif"],
        title :["Raleway", "sans-serif"],
        },  screens: {
          'xs': '430px',
          // => @media (min-width: 992px) { ... }
        },
    },
  },
  plugins: [
  require('flowbite'),
  require('preline/plugin')],
}

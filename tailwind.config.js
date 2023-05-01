/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
  require('preline/plugin')
  ],
}

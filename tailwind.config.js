/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "/node_modules/flowbite-react/**/*.js",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
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
    require('tailwindcss-dark-mode'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'black': '#191A23',
      'green': '#B9FF66',
      'white': '#F3F3F3',
    },

    fontFamily:{
      'space':"'Space Grotesk', sans-serif"
    },
    extend: {},
  },
  plugins: [],
}


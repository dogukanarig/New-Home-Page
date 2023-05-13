/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
    colors: {
      softOrange : 'hsl(35, 77%, 62%)',
      softRed : 'hsl(5, 85%, 63%)',
      OffWhite : "hsl(36, 100%, 99%)",
      GrayishBlue: 'hsl(233, 8%, 79%)',
      DarkGrayishBlue: 'hsl(236, 13%, 42%)',
      VeryDarkBlue: 'hsl(240, 100%, 5%)'
    },

    fontFamily: {
      'inter' : ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}


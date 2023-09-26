/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        White: 'hsl(0, 0%, 100%)',
        OffWhite: 'hsl(0, 0%, 94%)',
        LightGrey: 'hsl(0, 0%, 86%)',
        SmokeyGrey: 'hsl(0, 1%, 44%)',
        OffBlack: 'hsl(0, 0%, 8%)',
        Purple: 'hsl(259, 100%, 65%)',
        LightRed: 'hsl(0, 100%, 67%)'
      },
      fontFamily: {
        'poppins' :['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
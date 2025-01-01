/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        customColor: '##1BD1C2', 
      },
      fontFamily: {
        instrument: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

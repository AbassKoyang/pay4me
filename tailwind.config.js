/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "serif"]
      },
      colors: {
        secondarygray: '#F9FAFF',
        primarygray: '#EDEDEDB2',
        primarygreen: '#80D727'
      }
    },
  },
  plugins: [],
}


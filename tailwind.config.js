/** @type {import('tailwindcss').Config} */
module.exports = { 
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'custom-back': "url('/src/assets/back.webp')",
      'custom-gradient': 'linear-gradient(89deg, rgb(0, 25, 31) 0%, rgba(9, 6, 17, 0.884) 80%)',
      'custom-calculator-back': "url('/src/assets/calculator.webp')",
    },
  },
  },
  plugins: [],
}

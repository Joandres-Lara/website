/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {},
  fontFamily: {
   sans: ["Railway", "sans-serif"],
  },
  colors: {
   black: "#333"
  }
 },
 plugins: [],
};

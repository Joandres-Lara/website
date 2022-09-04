/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {},
  fontFamily: {
   sans: ["Raleway", "sans-serif"],
  },
  colors: {
   transparent: "transparent",
   current: "currentColor",
   black: "#333",
   white: colors.white,
   gray: colors.slate,
   green: colors.emerald,
   purple: colors.violet,
   yellow: colors.amber,
   pink: colors.fuchsia
  }
 },
 plugins: [],
};

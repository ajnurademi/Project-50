/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sofachrome: ["Sofachrome", "sans-serif"],
        montserrat: [
          "Montserrat-ExtraBold",
          "Montserrat-BoldItalic",
          "Montserrat-SemiBold",
          "sans-serif",
        ],
        poppins: [
          "Poppins-Regular",
          "Poppins-Medium",
          "Poppins-SemiBold",
          "sans-serif",
        ],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
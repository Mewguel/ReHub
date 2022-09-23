/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vader: "#d92626",
        deepvader: "#b30000",
        rehub: {
          cerulean: "#00A2A3",
          deepblue: "#060834",
          lightblue: "#E7F0FE",
          orange: "#F48F03",
        },
      },
      textColor: {
        vader: "#d92626",
        rehub: {
          deepblue: "#060834",
          cerulean: "#00A2A3",
          orange: "#F48F03",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vader: "#d92626",
        deepvader: "#b30000",
        rehub: {
          cerulean: "#2beeee",
          darkcerulean: "#086e6e",
          deepblue: "#060834",
          lightblue: "#E7F0FE",
          orange: "#F48F03",
        },
      },
      textColor: {
        vader: "#d92626",
        rehub: {
          cerulean: "#2beeee",
          darkcerulean: "#086e6e",
          deepblue: "#060834",
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#000000",
        },
        light: {
          950: "#FFFFFF",
        },
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        denton: ["DentonTest", "sans"],
      },
      boxShadow: {
        border:
          "rgba(255, 255, 255, 0.08) 0px 1px 2px 2px, rgba(255, 255, 255, 0.2) 0px 0px 1px 1px;",
      },
    },
  },
  plugins: [],
};

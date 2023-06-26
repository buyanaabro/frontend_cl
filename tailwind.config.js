/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#321FDB",
        secondary: "#3499FE",
        warning: "#F9B114",
        error: "#E55353",
        sidebar: "#2F3C54",
        hovertext: "#ebedef",
        background: "#EF9620",
        main: "#7AB9F3",
        accent1: "#858585",
        accent2: "#015EB4",
        accent3: "#D8D8D8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

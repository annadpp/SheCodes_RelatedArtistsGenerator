/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime-green": "#D2FF59",
      },
    },
    fontFamily: {
      krona: ["Krona One", "sans-serif"],
    },
  },
  plugins: [],
};

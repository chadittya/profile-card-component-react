/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
      colors: {
        "c-darkCyan": "hsl(185, 75%, 39%)",
        "c-veryDarkDesaturatedBlue": "hsl(229, 23%, 23%)",
        "c-darkGrayishBlue": "hsl(227, 10%, 46%)",
        "c-darkGray": "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};

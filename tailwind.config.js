/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "title-color": "#333333",
        "title-color-dark": "#000000",
        "text-color": "#757575",
        "body-color": "#fafafa",
        "container-color": "#fff",
      },
    },
  },
  plugins: [],
};

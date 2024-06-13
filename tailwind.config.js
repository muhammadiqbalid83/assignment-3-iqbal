/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Inter Tight", "sans-serif"],
      },
      colors: {
        biru: "#1465ff",
        hitam: "#00030c",
        abu: "#35353d",
        kuning: "#e69601",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        error: "#d73328",
        lime: "#d7da2f",
        s100: "#e3f3fd",
        s300: "#9abed5",
        s500: "#6b94a8",
        s700: "#4e6e7e",
        s900: "#122f3f",
      },
    },
  },
  plugins: [],
};

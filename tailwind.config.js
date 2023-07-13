/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/partials/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

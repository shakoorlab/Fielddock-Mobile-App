/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-custom": "#181818",
        "orange-custom": "#f57931",
        "fd-custom": "#00e1b4",
        "gray-custom": "#797979",
      },
    },
  },
  plugins: [],
};

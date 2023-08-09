/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#faff00",
        grey: "#222222",
      },
    },
  },
  plugins: [],
};

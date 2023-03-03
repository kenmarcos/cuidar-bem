/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7114DA",
        "primary-light": "#981ae4",
        secondary: "#FF9AF4",
        "secondary-light": "#FBF4D7",
      },
    },
    fontFamily: {
      sans: ["Comfortaa", "sans-serif"],
    },
  },
  plugins: [],
};

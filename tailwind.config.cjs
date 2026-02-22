/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#eceff4",
        dark: "#0c1b3d",
        lightbg: "#e0e1dd",
      },
    },
  },
  plugins: [],
}

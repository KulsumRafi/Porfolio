/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#778da9",      // Elegant blue
        accent: "#1b263b",       // Soft purple
        dark: "#0c1b3d",         // Deep navy
        lightbg: "#e0e1dd"       // Soft background
      }
    },
  },
  plugins: [],
}

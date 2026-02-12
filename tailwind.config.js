/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",      // Elegant blue
        accent: "#7C3AED",       // Soft purple
        dark: "#0F172A",         // Deep navy
        lightbg: "#F8FAFC"       // Soft background
      }
    },
  },
  plugins: [],
}

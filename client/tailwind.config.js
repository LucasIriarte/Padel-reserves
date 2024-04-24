/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald"],
      },
      colors: {
        "primary-1": "#0aea18",
        "primary-2": "#08d712",
        "primary-3": "#05c40c",
        "primary-4": "#03b006",
        "primary-5": "#009d00",
      }
    },
  },
  plugins: [],
}
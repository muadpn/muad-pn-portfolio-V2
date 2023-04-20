/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: "#87B7FF",
        gray: "#DDDDDD",
        dimBlue: "rgba(135, 183, 255, 0.2)"
      },
      listStyleImage: {
        Polygon: 'url("./assets/Polygon.svg")',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }},
  },
  plugins: [],
}
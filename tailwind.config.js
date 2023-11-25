/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08D5B2", // Menyesuaikan warna primer
        secondary: "#606060", // Menyesuaikan warna sekunder
      },
      fontFamily: {
        quickSand: ["Quicksand", "sans - serif"],
        body: ["Tungsten-Bold", "sans - serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

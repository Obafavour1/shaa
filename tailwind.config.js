/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FFF700",
        white: "#FFFFFF",
        black: "#030303",
      },
      backgroundImage: {
        banner: "url('./src/assets/Images/background.png')",
      },
    },
  },
  plugins: [],
}


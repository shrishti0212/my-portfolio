/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeAccent: "#FD853A",
        darkBg: "#0F0F0F",
        mutedText: "#909090",
        lightPurple: "#F4EBFF",
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}

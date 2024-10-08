/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotateImage: 'rotate 50s linear infinite', // Adjust duration as needed
      },
    },
    fontFamily: {
      spaceGrotesk: ["Space Grotesk", "sans-serif"],
      fogLighten: ["FoglihtenNo07 Calt", "sans-serif"],
    }
  },
  plugins: [],
}

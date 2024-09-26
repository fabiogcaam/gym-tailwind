/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700'
      },
      height: {
        '128': '32rem',
        '256': '42rem'
      },
      perspective: {
        '1000': '1000px', // Define perspectiva
      },
    },
  },
  rotate: ['hover'],
  plugins: [],
}


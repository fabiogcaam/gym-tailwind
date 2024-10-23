/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        violet: '#4f46e5'
      },
      height: {
        '128': '32rem',
        '160': '42rem',
        '256': '46rem'
      },
      perspective: {
        '1000': '1000px', // Define perspectiva
      },
    },
  },
  rotate: ['hover'],
  plugins: [],
}


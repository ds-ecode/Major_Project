/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Green
          dark: '#059669',
          light: '#D1FAE5',
        },
        secondary: {
          DEFAULT: '#1F2937', // Dark gray/black
          light: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
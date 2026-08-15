/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          light: '#FFAA4D',
          DEFAULT: '#FF9933',
          dark: '#E67A00',
        },
        indiaGreen: {
          light: '#1B9D10',
          DEFAULT: '#128807',
          dark: '#0B5904',
        },
        indiaBlue: {
          light: '#1A1AFF',
          DEFAULT: '#000080',
          dark: '#00004D',
          deep: '#030712', // Background navy
        },
        parchment: {
          light: '#FDFBF7',
          DEFAULT: '#F7F2E8',
          dark: '#E8DCC4',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

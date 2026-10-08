/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fcfbf7',
          100: '#f8f4ea',
          200: '#f1e6ce',
          300: '#e5d3ac',
          400: '#d7bc84',
          500: '#caa361',
          600: '#b4864c',
          700: '#94663e',
          800: '#795137',
          900: '#644330',
        },
        gold: {
          light: '#fdf3b8',
          DEFAULT: '#d4af37',
          deep: '#b8860b',
          glow: '#ffd700',
        },
        crimson: {
          light: '#a81c2f',
          DEFAULT: '#800020',
          dark: '#4d0013',
          night: '#2b000b',
        },
        vedic: {
          darkest: '#0b0907',
          darker: '#13100c',
          dark: '#1c1712',
          surface: '#26201a',
          card: '#302922',
          border: '#4a3f32',
        },
        saffron: {
          light: '#ffa834',
          DEFAULT: '#ff7700',
          dark: '#cc5200',
        }
      },
      fontFamily: {
        epic: ['Cinzel', 'Cinzel Decorative', 'Georgia', 'serif'],
        body: ['Marcellus', 'Merriweather', 'serif'],
        sanskrit: ['Rozha One', 'Yatra One', 'serif']
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'gold-glow-lg': '0 0 35px rgba(212, 175, 55, 0.65)',
        'crimson-glow': '0 0 25px rgba(128, 0, 32, 0.5)',
        'parchment-inset': 'inset 0 2px 10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}

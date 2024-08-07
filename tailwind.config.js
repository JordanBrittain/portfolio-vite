/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Inter", "sans-serif"],
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '2/1': '2 / 1',
      },
      
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },

      fontSize: {
        '7.5xl' : ['86px', '108px'],
      },

      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#eaebff',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#2F00E9',
          600: '#a18072',
          700: '#2300AF',
          800: '#846358',
          900: '#43302b',
        },
       
      }
    },
  },
  plugins: [],
};

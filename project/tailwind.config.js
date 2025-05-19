/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Lora', 'ui-serif', 'Georgia', 'serif'],
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'blue': {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#c0e0fd',
          300: '#90c8fc',
          400: '#60a8f8',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4fd8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      }
    },
  },
  plugins: [],
};
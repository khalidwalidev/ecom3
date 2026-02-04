import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f6ff',
          100: '#dbe7ff',
          200: '#b3ccff',
          300: '#88b1ff',
          400: '#5d96ff',
          500: '#2f7cff',
          600: '#1b61db',
          700: '#124bb0',
          800: '#123d86',
          900: '#133362'
        }
      }
    }
  },
  plugins: []
};

export default config;

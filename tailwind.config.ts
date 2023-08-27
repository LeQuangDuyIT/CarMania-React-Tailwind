/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Geomanist: ['Geomanist', 'sans-serif']
      },
      colors: {
        'teal': '#20BFB6'
      },
      boxShadow: {
        'pick-up-date-box': '0px 16px 32px 0px rgba(32, 191, 182, 0.30);'
      }
    }
  },
  plugins: []
};

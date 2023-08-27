/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Geomanist: ['Geomanist', 'sans-serif']
      },
      colors: {
        'teal': '#20BFB6',
      },
      boxShadow: {
        'pick-up-date-box': '0px 16px 32px 0px rgba(32, 191, 182, 0.30)',
        'why-choose-reason-symbol-box': '0px 12px 32px 0px rgba(169, 169, 173, 0.16)'
      },
      backgroundImage: {
        'why-choose-city-map': "url('./assets/frames/whychoose-map.png')"
      }
    }
  },
  plugins: []
};

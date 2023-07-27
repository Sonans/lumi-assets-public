/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}',
    './dev/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FBE54D',
        'secondary': '#FF8DEF',
        'tertiary': '#76FF76',
        "white": "#FFFFFF",
        "black": "#000000",
      },
      animation: {
        'slide': 'slide 0.2s linear',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
};

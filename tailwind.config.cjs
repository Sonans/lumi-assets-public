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
    },
  },
  plugins: [],
};

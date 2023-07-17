/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}',
    './dev/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'first-color': '#FBE54D',
        'first-color-outline': '#DCC949',
        'second-color': '#FF8DEF',
        'second-color-outline': '#CE71C1',
        'third-color': '#76FF76',
        'third-color-outline': '#52CD52',
      },
    },
  },
  plugins: [],
};

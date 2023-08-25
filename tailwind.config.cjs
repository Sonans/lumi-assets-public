function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}',
    './dev/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '16rem',
      },
    },
    extend: {
      colors: {
        'primary': withOpacity('--primary'),
        'text-on-primary': withOpacity('--text-on-primary'),
        'secondary': withOpacity('--secondary'),
        'text-on-secondary': withOpacity('--text-on-secondary'),
        'tertiary': withOpacity('--tertiary'),
        "white": withOpacity('--white'),
        "black": withOpacity('--black'),
      },
      border: {
        border: 'var(--border)',
      },
      borderRadius: {
        radius: 'var(--borderRadius)',
      },
      animation: {
        'slide': 'slide 0.2s linear',
        'spin-slow': 'spin 4s linear infinite',
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

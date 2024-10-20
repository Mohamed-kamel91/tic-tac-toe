/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fredoka: ['Fredoka', 'sans-serif'],
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: {
          light: 'rgba(33, 33, 33, 0.2)',
          DEFAULT: '#212121',
          hover: 'rgba(33, 33, 33, 0.95)',
        },
        gray: {
          light: '#F9F9F9',
          DEFAULT: '#F2F2F2',
          dark: '#6B6B6B',
        },
        violet: {
          DEFAULT: '#ede9fe',
          dark: '#6b21a8',
        },
        success: '#02C66F',
        warning: '#FF9900',
        danger: '#e94d37',
      },
      boxShadow: {
        dropdown: 'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px',
        input: 'rgb(255, 255, 255) 0px 0px 1px 1px',
        'input-focus': 'rgb(255, 255, 255) 0px 0px 1px 2px',
        danger: '#e94d37 0px 0px 1px 2px',
        edit: '#212121 0px 0px 1px 3px',
      },
      transitionProperty: {
        checkbox:
          'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, border-width',
      },
      transitionDuration: {
        250: '250ms',
      },
      animation: {
        spin: 'spin 700ms linear infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fredoka: ['Fredoka', 'sans-serif'],
      Anton: ['Anton', 'sans-serif'],
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        primary: '#7AB2D3',
        black: {
          light: '#64748b',
          DEFAULT: '#334155',
          dark: '#1e293b',
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
        blue: {
          light: 'rgba(122, 178, 211, 0.1)',
        },
        success: '#02C66F',
        warning: '#FF9900',
        danger: '#e94d37',
        overlay: 'rgba(0, 0, 0, 0.36)',
      },
      boxShadow: {
        dropdown: 'rgba(0, 0, 0, 0.1) 0px 0px 12px 0px',
        input: 'rgb(255, 255, 255) 0px 0px 1px 1px',
        'input-focus': 'rgb(255, 255, 255) 0px 0px 1px 2px',
        danger: '#e94d37 0px 0px 1px 2px',
        edit: '#212121 0px 0px 1px 3px',
        primary:
          '0 6px 6px -1px rgba(122, 178, 211, 1), 0 2px 6px -2px rgba(122, 178, 211, 1)',
        dark: 'rgba(0, 0, 0, 0.5) 0px 3px 8px',
        dialog:
          '0px 8px 16px rgba(26, 32, 44, 0.1), 0px 0px 1px rgba(26, 32, 44, 0.3)',
      },
      transitionProperty: {
        checkbox:
          'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, border-width',
      },
      transitionDelay: {
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1100: '1100ms',
        1200: '1200ms',
      },
      transitionDuration: {
        250: '250ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },
      transitionTimingFunction: {
        'ease-inout-custom':
          'cubic-bezier(0.455,0.030,0.515,0.955)',
        'ease-out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animation: {
        spin: 'spin 700ms linear infinite',
      },
      zIndex: {
        dialog: 1000,
        overlay: 999,
      },
    },
  },
  plugins: [],
};

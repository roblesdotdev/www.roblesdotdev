const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        error: 'var(--error-color)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        'on-primary': 'var(--on-primary)',
        link: {
          DEFAULT: 'var(--link)',
          dark: 'var(--link-dark)',
        },
        canvas: {
          DEFAULT: 'var(--canvas-default)',
          primary: 'var(--canvas-primary)',
          overlay: 'var(--overlay)',
        },
        fg: {
          DEFAULT: 'var(--fg-default)',
          primary: 'var(--fg-primary)',
          muted: 'var(--fg-muted)',
        },
        'border-color': 'var(--border-color)',
      },
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}

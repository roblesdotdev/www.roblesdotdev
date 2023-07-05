import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '475px',
      },
      colors: {
        canvas: {
          DEFAULT: 'rgb(var(--canvas-default) / <alpha-value>)',
          muted: 'rgb(var(--canvas-muted) / <alpha-value>)',
          variant: 'rgb(var(--canvas-variant) / <alpha-value>)',
        },
        fg: {
          DEFAULT: 'rgb(var(--fg-default) / <alpha-value>)',
          muted: 'rgb(var(--fg-muted) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./data/posts/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "40px",
          "2xl": "128px",
        },
      },
      colors: {
        primary: colors.emerald[500],
        ["primary-shade"]: colors.emerald[300]
      },
      padding: {
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        // ... and so on for other sizes if needed
      },
      typography: (theme) => ({
        lg: {
          css: {
            h1: {
              marginTop: em(72, 48),
              marginBottom: em(40, 48),
            },

          },
        },
        DEFAULT: {
          css: {
            ul: {
              listStyleType: 'disc',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

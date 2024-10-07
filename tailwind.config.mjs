/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['DM Serif Display']
    },

    extend: {
      colors: {
        'bg-primary': '#34353A',
        'bg-secondary': '#31333B',
        'bg-accent': '#3D3E42',
        'text-primary': '#FFC86B',
        'text-accent': '#BCBCBC'
      }
    }
  },
  plugins: []
}

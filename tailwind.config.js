/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary-base': '#b1b1b1ff',
      'primary': '#2e8dffff',
      'card-base': 'rgb(251, 251, 251)',
      'card-overlay': 'rgba(203, 225, 250, 0.3)',
      'base': 'rgb(245, 245, 245)',
      'transparent-base': 'rgba(175, 175, 175, 0.4)',
      'heading': '#616161ff'
      },
    },
  },
  plugins: [],
}


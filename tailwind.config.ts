/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      title: `26px;`,
      default: `16px;`,
      small: '14px',
    },
    colors: {
      'black': '#042F4A',
      'blue': '#000099',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#48BB78',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'body': '#FBFBFD',
      'light-black': '#CDD5DB',
      'border-gray': '#D5DBE0',
      'disabled': '#9BACB7',
      'white': '#FFFFFF',
      'green-disabled': '#EDF8F1',
      'gray-icons': '#95A1B5'
    },
    extend: {},
  },
  plugins: [],
})
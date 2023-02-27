/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "grayishblue": "var(--grayishblue)",
        "darkblue": "var(--darkblue)",
        "lightgray": "var(--lightgray)",
        "white": "var(--white)"
      },
    },
  },
  plugins: [],
}

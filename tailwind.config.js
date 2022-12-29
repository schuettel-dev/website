/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        'raspberry': {
          // "50": "#ffe6ed",
          // "100": "#feccdc",
          // "200": "#fe99b8",
          // "300": "#fd6695",
          // "400": "#fd3371",
          "500": "#fc004e",
          // "600": "#ca003e",
          // "700": "#97002f",
          // "800": "#65001f",
          // "900": "#320010"
        },
        'blueberry': {
          "500": "#9028ff",
          "600": "#7200F0",
          "900": "#032031"
        },
        'kiwi': {
          "500": "#3ecf00"
        },
        'strawberry': {
          "500": "#ff1200"
        },
        'banana': {
          "500": "#edca05"
        }
      }
    },
  },
  plugins: [],
}

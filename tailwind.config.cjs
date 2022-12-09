/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#3577f0",
        secondary: "#ff497c",
        body: "#777777",
        heading: "#292930",
        light: {
          DEFAULT: "#F6F7FB",
          primary: "#8c71db",
        },
        lightest: "#C4C4C4",
      },
      boxShadow: {
        discount: "0 8px 16px 0 rgb(53 119 240 / 30%)",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': '1400px',
        '3xl': '1600px',
      },
      maxWidth: {
        'screen-sm': '540px',
        'screen-md': '720px',
        'screen-lg': '960px',
        'screen-xl': '1140px',
        'screen-2xl': '1320px',
        'screen-3xl': '1500px',
      },
    },
  },
  plugins: [],
}

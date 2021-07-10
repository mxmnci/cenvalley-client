const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      yellow: {
        DEFAULT: "#FFFF63",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        DEFAULT: "#000000",
      },
      grey: {
        DEFAULT: "#999",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Lithos Pro", ...defaultTheme.fontFamily.mono],
      },
      backgroundColor: (theme) => ({
        primary: "#252525",
        secondary: "#353535",
        tertiary: "#FFFF63",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};

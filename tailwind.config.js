/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      spacing: {
        "header-height": "90px"
      },
      colors: {
        subtitle: "#707BA0",
        "subtitle-dark": "#0D204A",
        "blur-circle": "#0083FF"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#0083FF",
          secondary: "#885EFE",
          "base-100": "#FCFDFF",
          "base-200": "#EDF5FE"
        }
      },
      "dark"
    ]
  }
}

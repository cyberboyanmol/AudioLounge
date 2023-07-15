/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      lgg: "1200px",
      xl: "1440px",
      xxl: "1640px",
    },
    extend: {
      colors: {
        primaryBgColor: "#121212",
        secondaryBgColor: "#1d1d1d",
        primaryTextColor: "#ffffff",
        secondaryTextColor: "#c4c5c5",
        blueColor: "#0077ff",
        indigoColor: "#5453e0",
        primaryBg2Color: "#181629",
        secondaryBg2Color: "#25223f",
        placeholderColor: "#454545",
        inputColor: "#262626",
        successColor: "#20bd5f",
        dangerColor: "#f44336",
        pinkColor: "#e91e63",
        pinkColor1: "#ff00cc",
        lineColor: "#323232",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

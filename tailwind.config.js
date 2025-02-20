/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Mitr"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        success_5: "#14d370",
        success_6: "#0aaf5a",
        primary_5: "#219ce8",
        primary_6: "#0a74bf",
        primary_7: "#0a5d94",
        danger_5: "#fe2a2a",
        danger_6: "#ec1616",
        theme_light_1: "#f0f6fe",
        theme_light_2: "#dae7fb",
        theme_dark_1: "#5d5d5d",
        theme_dark_2: "#4f4f4f",
      },
    },
  },
  plugins: [],
};

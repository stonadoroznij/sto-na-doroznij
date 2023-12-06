import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rider: {
          "1%": { transform: "translateX(0)", opacity: "1" },
          "50%": { transform: "translateX(435px)", opacity: "1" },
          "99%": { transform: "translateX(870px)", opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        rider: "rider 10s linear ",
      },
      screens: {
        xs: "540px",
      },
      colors: {
        "accent-yellow": "#FCEA10",
        coal: {
          "800": "#242424",
          "700": "#3C3C3B",
          "600": "#484848",
          "300": "#AFAFAF",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        title: ["var(--font-exo)"],
      },
      fontSize: {
        "7xxl": "5rem",
      },
      boxShadow: {
        dark: "0px 4px 16px 0px rgba(0, 0, 0, 0.80)",
        "accent-20": "0px 4px 16px 0px rgba(255, 224, 64, 0.20)",
        "accent-30": "0px 4px 16px 0px rgba(255, 224, 64, 0.30)",
      },
      maxWidth: {
        "352": "88rem",
        "171": "42.25rem",
      },
    },
  },
  plugins: [],
};
export default config;

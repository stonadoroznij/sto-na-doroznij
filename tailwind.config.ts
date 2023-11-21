import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-yellow": "#FCEA10",
        coal: {
          "800": "#242424",
          "700": "#3C3C3B",
          "600": "#484848",
        },
      },
      fontFamily: {
        sans: ["'Montserrat'", ...defaultTheme.fontFamily.sans],
        title: ["'Russo One'"],
      },
      fontSize: {
        "7xxl": "5rem",
      },
      boxShadow: {
        dark: "0px 4px 16px 0px rgba(0, 0, 0, 0.80)",
        accent: "0px 4px 16px 0px rgba(255, 224, 64, 0.20)",
      },
      maxWidth: {
        "352": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;

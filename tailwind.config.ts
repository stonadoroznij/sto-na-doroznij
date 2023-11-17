import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "accent-yellow" : "#FCEA10",
        "dark-gray" : "#242424",
        "light-gray" : "#3C3C3B",
        "stroke-gray": "#484848"
      },
      fontFamily : {
        'sans': ['"Montserrat"'],
        'title': ["'Russo One'"],
      },
      boxShadow: {
        'dark': '0px 4px 16px 0px rgba(0, 0, 0, 0.80)',
        'accent': '0px 4px 16px 0px rgba(255, 224, 64, 0.20)',
      },
    }
  },
  plugins: [],
}
export default config

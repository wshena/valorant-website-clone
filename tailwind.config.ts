import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textMain: '#0F1923',
        textSecondary: '#24203C',
        mainGray: '#ECE9E4',
        mediumGray: '#111111',
        darkGreen: 'rgb(15, 25, 35)',
        darkGray: '#292929',
        mainBlack: '#111111',
        mainRed: 'rgb(225, 70, 85)',
        secondaryRed: '#FF4655',
        bgHover: 'rgba(128,128,128,0.2)'
      },
    },
  },
  plugins: [],
} satisfies Config;

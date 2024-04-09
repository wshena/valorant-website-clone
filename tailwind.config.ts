import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
      colors: {
        darkRed: '#A30000',
        darkGray: '#ece8e1',
        darkBrown: '#292929',
        lightBrown: '#7e7e7e',
        grayishGreen: '#8b978f',
        lightGray: '#ece8e1',
        lightRed: '#ff4655'
      }
    },
  },
  plugins: [],
};
export default config;

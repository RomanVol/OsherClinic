import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f6',
          100: '#fbe8ed',
          200: '#f8d1dc',
          300: '#f3aac0',
          400: '#eb7a9d',
          500: '#e0507c',
          600: '#cd315f',
          700: '#b02249',
          800: '#921e3f',
          900: '#7c1d39',
        },
      },
    },
  },
  plugins: [],
};
export default config;

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
        terracotta: {
          DEFAULT: '#D4816B',
          light: '#E5A692',
          dark: '#B8614D',
        },
        sage: {
          DEFAULT: '#5A7B6F',
          light: '#E8EFED',
          dark: '#3D5249',
        },
        cream: {
          DEFAULT: '#FAF6F0',
          dark: '#F5EFE6',
        },
        peach: {
          DEFAULT: '#FFE5D9',
          light: '#FFF0E8',
        },
        gold: {
          DEFAULT: '#C9A875',
          light: '#E0C89A',
          dark: '#A8895F',
        },
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
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

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
        // Primary: Sage Green - healing, nature, calm
        sage: {
          50: '#f4f7f5',
          100: '#e8efe9',
          200: '#d1dfd3',
          300: '#afc7b3',
          400: '#8aab90',
          500: '#6b9272',
          600: '#557759',
          700: '#455f48',
          800: '#3a4e3c',
          900: '#314133',
          950: '#18231a',
        },
        // Secondary: Warm Sand/Beige - warmth, comfort, grounding
        sand: {
          50: '#fdfaf5',
          100: '#f9f3e8',
          200: '#f2e6d0',
          300: '#e8d4b1',
          400: '#dbc08e',
          500: '#d0ab70',
          600: '#c29558',
          700: '#a17947',
          800: '#83623d',
          900: '#6b5134',
          950: '#392a1a',
        },
        // Accent: Terracotta/Clay - earth, warmth, trust
        terracotta: {
          50: '#faf6f4',
          100: '#f5ede8',
          200: '#ebd9ce',
          300: '#ddc0ab',
          400: '#cca283',
          500: '#c08a65',
          600: '#b27453',
          700: '#945d45',
          800: '#794d3c',
          900: '#644134',
          950: '#35201a',
        },
        // Forest - deep text, elegance
        forest: {
          50: '#f3f6f4',
          100: '#e1e8e3',
          200: '#c5d2c8',
          300: '#9fb4a4',
          400: '#76927d',
          500: '#567560',
          600: '#435d4b',
          700: '#374b3d',
          800: '#2d3f34',
          900: '#27352c',
          950: '#141d18',
        },
        // Cream - backgrounds, purity
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf4ea',
          300: '#f5ebe0',
          400: '#ede0d0',
          500: '#e2d1bc',
          600: '#d3bc9e',
          700: '#bfa07d',
          800: '#a68562',
          900: '#8a6e52',
          950: '#49382a',
        },
        // Rose - feminine, softness
        rose: {
          50: '#faf7f6',
          100: '#f5efed',
          200: '#eddedd',
          300: '#dfcac8',
          400: '#ccaea9',
          500: '#b8918b',
          600: '#a37770',
          700: '#87615c',
          800: '#70524e',
          900: '#5f4744',
          950: '#322422',
        },
        // Legacy primary colors (for gradual migration)
        primary: {
          50: '#f4f7f5',
          100: '#e8efe9',
          200: '#d1dfd3',
          300: '#afc7b3',
          400: '#8aab90',
          500: '#6b9272',
          600: '#557759',
          700: '#455f48',
          800: '#3a4e3c',
          900: '#314133',
        },
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body': ['Nunito', 'system-ui', 'sans-serif'],
        'hebrew': ['Heebo', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'organic-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23afc7b3' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'linen-texture': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23c8a98a' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(45, 63, 52, 0.08)',
        'soft-lg': '0 10px 40px -4px rgba(45, 63, 52, 0.12)',
        'soft-xl': '0 20px 60px -8px rgba(45, 63, 52, 0.15)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(45, 63, 52, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
export default config;

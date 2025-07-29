/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'tinos': ['Tinos', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom': {
          'background': '#e2e5e4',
          'title': '#1f3161',
          'subtitle': '#547aae',
          'text': '#1f3161',
          'menu-normal': '#547aae',
          'menu-hover': '#7695be',
          'menu-active': '#547aae',
        },
        'sand': {
          50: '#e2e5e4',
          100: '#faf7f0',
          200: '#f5f0e3',
          300: '#eee4d0',
          400: '#e5d4b8',
          500: '#dcc19d',
          600: '#d1ad82',
          700: '#c59967',
          800: '#ba854c',
          900: '#af7131',
        },
        'blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

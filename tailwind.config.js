/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'brand-blue-dark': '#0A145A',
        'brand-blue-medium': '#0F1E8C',
        'brand-blue-light': '#2638C4',
        'brand-sky-blue': '#3A76AA',
        'brand-orange': '#FE704E'
      },
      transitionProperty: {
        'max-h': 'max-height'
      }
    }
  },
  safelist: [
    {
      pattern:
        /(bg|text|border)-(brand-green|brand-yellow|brand-orange|brand-blue-dark|brand-blue-medium|brand-blue-light|brand-gray-800|brand-gray-600|brand-gray-400|brand-gray-200|brand-white|brand-black|brand-gray-light|brand-surface-blue)/
    }
  ],
  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008533',
        'primary-dark': '#006341',
        secondary: '#010647',
        'secondary-dark': '#1a052e',
        light: '#f2f9f5',
        dark: '#252837',
        darker: '#0e0d13',
      },
    },
  },
  plugins: [],
};

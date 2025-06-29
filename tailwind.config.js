module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        artistry: {
          pink: '#FFB6B9',
          yellow: '#FFE156',
          blue: '#A2D5F2',
          green: '#B8E2C8',
          orange: '#FF9A76',
          dark: '#22223B',
          light: '#F9F9F9',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}; 
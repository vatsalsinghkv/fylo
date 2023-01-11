/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(217, 28%, 15%)',
        'dark-blue-1': 'hsl(218, 28%, 13%)',
        'dark-blue-2': 'hsl(216, 53%, 9%)',
        'dark-blue-3': 'hsl(219, 30%, 18%)',
        'accent-cyan': 'hsl(176, 68%, 64%)',
        'accent-blue': 'hsl(198, 60%, 50%)',
        'accent-red': 'hsl(0, 100%, 63%)',
      },
      screens: {
        xs: '475px',
      },
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'logo-dark': "url('../images/logo-dark-mode.svg')",
        'logo-light': "url('../images/logo-light-mode.svg')",
        'curvy-dark': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light': "url('../images/bg-curvy-light-mode.svg')",
        quotes: "url('../images/bg-quotes.png')",
      },
      gridTemplateColumns: {
        'auto-300': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};

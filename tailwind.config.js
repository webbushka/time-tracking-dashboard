/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'icon-work': 'url("images/icon-work.svg")',
        'icon-play': 'url("images/icon-play.svg")',
        'icon-study': 'url("images/icon-study.svg")',
        'icon-exercise': 'url("images/icon-exercise.svg")',
        'icon-social': 'url("images/icon-social.svg")',
        'icon-self-care': 'url("images/icon-self-care.svg")',
      },
    },
  },
  plugins: [],
};

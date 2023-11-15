/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown':'#780000',
        'red':'#c1121f',
        'neutral':'#fdf0d5',
        'darkblue':'#003049',
        'blue':'#669bbc',

        }
    },
  },
  plugins: [],
}


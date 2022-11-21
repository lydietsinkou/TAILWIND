/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'headerImg':"url('images/images-header.jpg')"
      },
      fontfamily: {
        barlow: ['barlow','sans-serif'],
      }
    },
  },
  plugins: [],
}

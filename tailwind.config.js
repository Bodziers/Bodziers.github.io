module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors : {
        'body': '#FEFEFE',
        'selected-text': '#5b5b5b',
        'theme': '#5b5b5b',
        'nav':'#2B303A',
        'secondary': '#c71e21',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input':'#7C7C7C'
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/baner-frontback.png')"
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}

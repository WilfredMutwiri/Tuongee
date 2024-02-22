/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{.html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    '@babel/plugin-proposal-optional-chaining'
  ],
}


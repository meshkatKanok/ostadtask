/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1440px',
      'xl': '1280px',
      '2xl': '1536px',
    }},
  },
  plugins: [
    require('flowbite/plugin')
]
}
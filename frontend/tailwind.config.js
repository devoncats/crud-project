/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
        '2/6': '33.33%'
      }
    }
  },
  plugins: []
}

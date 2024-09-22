/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'xs': '520px',
        '2xl': '1440px'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '1/1': '1 / 1',
      },
    },
  },
  plugins: [],
}
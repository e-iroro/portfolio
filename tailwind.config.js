/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'pink': '#EB455F',
      'black': '#181818',
      'light-pink': '#EFE2E4',     
      'blue': '#276EF1',     
      'violet': '#907AD6',     
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        'ZCOOL-XiaoWei': ['"ZCOOL XiaoWei"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

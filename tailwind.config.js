/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ZCOOL-XiaoWei": ['"ZCOOL XiaoWei"', "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
        "Days-One": ['"Days One"', "sans-serif"],
      },
      colors: {
        'pink': '#DD234B',
        'navy-blue' : '#2C3551',
        'grey' : '#E6EEF2',
        'yellow' : '#FFD049',
        'teal' : '#79CFCD'


      }
    },
  },
  plugins: [],
};

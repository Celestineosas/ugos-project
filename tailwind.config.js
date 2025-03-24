/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '3.5xl': ['35px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['60px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '7px 10px 5px -2px rgba(102,102,102,0.17)',
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },

      backgroundImage: {
        'background': "url('assets/images/background.jpg')",
        'background-sm': "url('assets/images/background-sm.jpg')",
        'background-md': "url('assets/images/background-md.jpg')",
 
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
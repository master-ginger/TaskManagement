/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Lato', 'sans-serif'],
        opensans: ['Merriweather', 'serif'],
      },
      animation: {
        gradient: 'gradientBG 10s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },      
      },
    },
  },
  plugins: [],
}


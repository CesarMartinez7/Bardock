/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bulmaColor:"#00BFA9",
        bulmaColorHover:"#04BFC9"
      },
      animation:{
        border: 'background ease infinite',
      },
      keyframes:{
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }
    },
  },
  plugins: [
    
  ],
}


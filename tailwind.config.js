/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#12297A',
        secondary: '#CEA839',
        accent: '#FF0000',
        koko: '#4A5568',
        white: '#ffffff',
        black: '#000000'
      },
      fontSize:{ 
        heading:'40px',
        subheading: '24px',
        primary: '18px',
        secondary: '16px',
       
        txt20: '20px',
        txt18: '18px',
        txt16: '16px',
        txt14: '14px',
        txt12: '12px'
      },
      fontFamily:{
        
      }

    },
  },
  plugins: [],
}


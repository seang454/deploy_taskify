/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      gradientColorStops:{
        'primary-gradient': 'rgba(255,255,255,0.1)',
        'secondary-gradient': 'rgba(255,255,255,0)',
      },
      backdropBlur:{
        'custom-blur': "10px",
        "border-dradient": "rgba(255,255,255,0.18)"
      },
      colors: {
        primary: "#1E429F", //blue
        secondary: "#E7B626", //yellow
        accent: "#FF0000", //red
        subaccent: "#1A56DB", //light blue
        foreground: "hsl(0 0% 8%)", // This can be used in place of --theme-color-foreground
        background: "hsl(0 0% 98%)", // This can be used in place of --theme-color-background
      },
      textColor:{
        txtPrimary:"#49454E"

      },
      fontSize: {
        "btn-txt": "14px",
        heading: "40px",
        subheading: "36px",
        txt20: "20px",
        txt18: "18px",
        txt16: "16px",
        txt14: "14px",
        txt12: "12px",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"], // This maps to --font-family
      },
      fontWeight: {
        900: "900", // This maps to --font-weight
      },
      borderImage: {
        dashed:
          "linear-gradient(to right, #4A5568 20%, transparent 20%, transparent 40%, #4A5568 40%, #4A5568 60%, transparent 60%, transparent 80%, #4A5568 80%) 1",
      },
      spacing: {
        "custom-dashed-line": "10px", // Margin for custom dashed line
      },
    },
  },
  darkMode: "class", // Enables dark mode support using the 'class' strategy

  plugins: [],
};
//note // Redius : using rounded-light
//note //  

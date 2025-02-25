/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12297A",
        secondary: "#CEA839",
        accent: "#FF0000",
        foreground: "hsl(0 0% 8%)", // This can be used in place of --theme-color-foreground
        background: "hsl(0 0% 98%)", // This can be used in place of --theme-color-background
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

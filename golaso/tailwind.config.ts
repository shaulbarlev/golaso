/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#0bc1df",
        accent: "#0000FF",
      },
      fontFamily: {
        "varela-round": ["Varela Round", "sans-serif"],
      },
      animation: {
        "light-sweep": "sweep 2.5s ease-in-out infinite",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-150%)" },
          "50%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(-150%)" },
        },
      },
    },
  },
  plugins: [],
};

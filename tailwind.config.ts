import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        subtext: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        rectangular: {
          "0%": { right: "28%", bottom: "30%", width: "50px", height: "50px" },
          "100%": {
            bottom: "90%",
            right: "95%",
            width: "300px",
            height: "300px",
          },
        },
        circle: {
          "0%": { top: "25%", left: "28%", width: "50px", height: "50px" },
          "100%": { top: "110%", left: "28%", width: "900px", height: "900px" },
        },
        verticalLine1: {
          "0%": { top: "0" },
          "100%": { top: "100%" },
        },
        verticalLine2: {
          "0%": { bottom: "0" },
          "100%": { bottom: "100%" },
        },
        semiHorizontalLine1: {
          "0%": { left: "35%", top: "15%", height: "130px" },
          "100%": { height: "800px", left: "0", top: "100%" },
        },
        semiHorizontalLine2: {
          "0%": { right: "35%", bottom: "18%", height: "130px" },
          "100%": { right: "0", bottom: "100%", height: "800px" },
        },
        text: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideTextIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": {
            bottom: "0",
          },
          "100%": { bottom: "66%" },
        },
        inActive: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(0.5)" },
        },
        activeSlide: {
          "0%": {
            transform: "rotate(-90deg)",
            left: "90%",
          },
          "100%": { transform: "rotate(0deg)", left: "50%" },
        },
      },
      animation: {
        rectangular: "rectangular 2s ease-in-out",
        circle: "circle 2s ease-in-out",
        verticalLine1: "verticalLine1 2s ease-in-out",
        verticalLine2: "verticalLine2 2s ease-in-out",
        semiHorizontalLine1: "semiHorizontalLine1 2s ease-in-out",
        semiHorizontalLine2: "semiHorizontalLine2 2s ease-in-out",
        text: "text 2s ease-in-out",
        singleLetter: "singleLetter 2s ease-in-out",
        subtext: "subtext 1s ease-in-out",
        slideIn: "slideIn 1s ease-in-out",
        inActive: "inActive 1s ease-in-out",
        activeSlide: "activeSlide 1s ease-in-out",
        slideTextIn: "slideTextIn 2s ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9F1C", // Dutch Orange
        secondary: "#2EC4B6", // Teal/Cyan
        darkBg: "#0F172A", // Deep Blue/Black
        lightText: "#F8FAFC",
        cardBg: "rgba(255, 255, 255, 0.05)",
        glassBorder: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        main: ["Outfit", "sans-serif"],
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

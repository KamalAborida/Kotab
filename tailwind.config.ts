// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFCC00B2",
        customGrey: "#FFFFFFB2",
        veryDarkGrey: "#31312E",
      },
      fontFamily: {
        almarai: ["Almarai", "['var(--font-amiri)']", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

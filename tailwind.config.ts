import { Indie_Flower } from "next/font/google";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A1C71",
        secondary: "#091A3C",
        tertiary: "#FFAD7B",
        neutral: "6B727A",
        primaryGradient: {
          start: "#722AE6", // Warna pada langkah pertama
          // center: "#D76D77", // Warna pada langkah kedua
          end: "#E4B5CB", // Warna pada langkah ketiga
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        indieFlower: ["var(--font-indie-flower)"],
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
    }),
  ],
};
export default config;

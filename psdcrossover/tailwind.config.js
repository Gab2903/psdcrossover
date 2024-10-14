/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#480ad0",
"secondary": "#faf0e8",
"base-100": "#faf0e8",
          },
        },
      ],
    },
  plugins: [daisyui],
};
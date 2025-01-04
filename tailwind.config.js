/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1A2B4E",
        "navy-light": "#203E75",
        "royal-blue": "#0056B3",
        "slate":"#94a3b8"
      },
    },
  },
  plugins: [require("daisyui")],
};

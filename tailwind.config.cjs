/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
    },
  },
  plugins: [],
};

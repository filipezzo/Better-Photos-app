/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid-area": "340px 1fr",
      },

      gridTemplateRows: {
        "grid-area": "65px 600px 1fr",
      },

      animation: {
        animate: "animate 1s backwards",
        animateDelay1: "animate  1s 0.1s backwards",
        animateDelay2: "animate 1s 0.2s  backwards",
        animateDelay3: "animate 1s  0.3s backwards",
        animateDelay4: "animate 1s 0.4s  backwards",
        animateDelay5: "animate 1s 0.5s  backwards",
      },
      keyframes: {
        animate: {
          "0%": {
            opacity: 0,

            transform: "scale(1.5)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

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
    },
  },
  plugins: [],
};

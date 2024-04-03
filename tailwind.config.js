/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Spartan: ["League Spartan", "sans-serif"],
      Antonio: ["Antonio", "sans-serif"],
    },
    screens: {
      tablet: "768px",
      neededSize: "800px",
      desktop: "1440px",
    },
  },
  plugins: [],
};

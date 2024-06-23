/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      md: { min: "576px", max: "767px" },
      // => @media (min-width: 576px and max-width: 767px) { ... }

      lg: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023) { ... }

      xl: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.25), 0 8px 40px rgba(34, 211, 238, 0.12)",
      },
    },
  },
  plugins: [],
};

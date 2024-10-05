/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Display"', "sans-serif"], // Add Google Sans Display here
      },
    },
  },
  plugins: [],
};

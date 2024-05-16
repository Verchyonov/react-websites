/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      cursor: {
        default: "url(public/cursor.png), default",
        pointer: "url(public/cursor.png), pointer",
        auto: "url(public/cursor.png), auto",
      },
    },
  },
  plugins: [],
};

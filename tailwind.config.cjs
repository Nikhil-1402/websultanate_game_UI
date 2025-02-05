// tailwind.config.js (or tailwind.config.cjs)
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", // If using HTML
      "./src/**/*.{js,ts,jsx,tsx}", // For React, Vue, etc.
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
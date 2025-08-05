/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Includes all files in the `app` directory
    "./app/(tabs)/**/*.{js,jsx,ts,tsx}", // Specifically includes files in the `(tabs)` directory
    "./components/**/*.{js,jsx,ts,tsx}" // Includes all files in the `components` directory
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
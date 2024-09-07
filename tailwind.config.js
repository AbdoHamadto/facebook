/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': "#f2f4f7",
        'face': "#0866ff",
        'log': "#0866ff",
        'create': "#42b72a",
      },
      screens:{
        'sm': {'max': '767px'},
      }
    },
  },
  plugins: [],
};

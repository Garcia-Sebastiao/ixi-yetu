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
        "primary-color": "#FFE500",
        "secondary-color": "#FF0F00",
        "third-color": "#00FA9C",
        "card-color": "#ffffff25",
        "menuActive": "#FFE50037",
        "linksBg": "#D7F8F120",
        "font-color": "#ffffff98",
      },
    },
  },
  plugins: [],
};

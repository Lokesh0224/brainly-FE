/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          gray:{
            100:'#eeeeef',
            200:"e6e9ed",
            600:"95989c"
          },
          purple: {
            300: "#e0e5fe",
            500: "#6106c0",
            600: "#7000e9",
          },
        },
      },
    },
    plugins: [],
  };
  
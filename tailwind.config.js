import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "grain-blue": "url(/public/assets/img/grain-blue.svg)",
        "grain-red": "url(/public/assets/img/grain-red.svg)",
        "grain-purple": "url(/public/assets/img/grain-purple.svg)",
      },
    },
  },

  plugins: [forms],
};

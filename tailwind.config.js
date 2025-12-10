/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // font-cascadia
        cascadia: ['CascadiaMono'],
        // font-inter
        inter: ['Inter'],

      },
    },
  },
  plugins: [],
};

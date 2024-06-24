import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Config>{
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDFFF2",
          100: "#D4FFE1",
          200: "#ABFFC6",
          300: "#6AFF9B",
          400: "#23FF68",
          500: "#00F044",
          600: "#00C834",
          700: "#009C2D",
          800: "#017827",
          900: "#036424",
          950: "#003911",
        },
      },
      fontFamily: {
        sans: ["Battambang", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "436px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1180px",
    },
    colors: ({ colors }) => ({
      transparent: colors.transparent,
      white: colors.white,
      gray: { ...colors.gray, 100: "#F2F2F2", 950: "#111111" },
      sky: colors.sky,
      emerald: colors.emerald,
    }),
    boxShadow: (theme) => ({
      undersky:
        theme("colors.slate.900") +
        " 0px -0.166667em 0px 0px inset, " +
        theme("colors.sky.800") +
        " 0px -0.333333em 0px 0px inset",
    }),
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      mono: ["Cascadia Code", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};

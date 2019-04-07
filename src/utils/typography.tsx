import Typography from "typography";

const typography = new Typography({
  baseFontSize: 16,
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Merriweather"],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "700", "700i"],
    },
    {
      name: "Merriweather",
      styles: ["400", "700", "700i"],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

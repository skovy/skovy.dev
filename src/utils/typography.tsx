import Typography from "typography"

const typography = new Typography({
  baseFontSize: 16,
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Lato"],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "700", "700i"],
    },
  ],
  overrideThemeStyles: ({ rhythm }) => ({
    "h1,h2,h3": {
      lineHeight: rhythm(1.3),
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

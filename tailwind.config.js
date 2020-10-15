module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    darkModeVariant: true,
  },
  purge: ["./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#660874",
      },
      backgroundColor: {
        accent: "#660874",
      },
    },
  },
};

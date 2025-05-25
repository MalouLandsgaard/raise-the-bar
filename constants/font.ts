export const fontSize = {
  heading: {
    lg: {
      fontSize: 32,
      lineHeight: 40,
    },
    md: {
      fontSize: 20,
      lineHeight: 26,
    },
    sm: {
      fontSize: 14,
      lineHeight: 18,
    },
  },
  body: {
    lg: {
      fontSize: 20,
      lineHeight: 28,
    },
    base: {
      fontSize: 16,
      lineHeight: 24,
    },
    sm: {
      fontSize: 12,
      lineHeight: 16,
    },
  },
  quote: {
    fontSize: 20,
    lineHeight: 26,
  },
} as const;

export type HeadingFontSizeKey = keyof (typeof fontSize)["heading"];
export type BodyFontSizeKey = keyof (typeof fontSize)["body"];


export const fontFamily = {
  FontNameHere: {
    medium: {
      fontFamily: "DMSans-Medium",
      fontWeight: "500",
    },
    regular: {
      fontFamily: "DMSans-Regular",
      fontWeight: "400",
    },
  },
} as const;
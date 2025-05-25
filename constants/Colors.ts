export const colors = {
  "brand.700": "#B25114",
  "brand.500": "#D2691E",
  "brand.300": "#DE8A48",
  "background.primary": "#000000",
  "text.primary": "#FFFFFF",
  "text.secondary": "#E0E0E0",
  "text.accent": "#DE8A48",
  "stroke.primary": "#424242",
  "stroke.accent": "#DE8A48",
  "stroke.subtle": "#212121",
  transparent: "transparent",
} as const;

export type ColorKey = keyof typeof colors;

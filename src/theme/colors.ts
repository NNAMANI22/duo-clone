// Design tokens — Lingua color palette.
// Mirrors the CSS custom properties defined in `src/global.css` (`@theme`).
// Use this file when a raw color value is needed in JS (icons, SVGs, StyleSheet
// exceptions). Use the matching NativeWind className (e.g. `bg-primary`) everywhere else.

export const colors = {
  // Brand
  primary: "#6C4EF5", // Lingua Purple
  primaryDeep: "#5B3BF6", // Lingua Deep Purple
  blue: "#4D8BFF", // Lingua Blue
  green: "#21C16B", // Lingua Green

  // Semantic
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // Neutrals
  foreground: "#0D132B", // Text / Primary
  muted: "#6B7280", // Text / Secondary
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export type ColorToken = keyof typeof colors;

// constants/themes.ts
export const THEMES = {
  VINTAGE: "vintage",
  ORIGIN: "origin",
} as const;

export type ThemeType = (typeof THEMES)[keyof typeof THEMES];
// constants/themes.ts
export const THEMES = {
  YOUTH: "youth",
  ORIGIN: "origin",
} as const;

export type ThemeType = (typeof THEMES)[keyof typeof THEMES];
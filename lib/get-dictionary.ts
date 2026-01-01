// lib/get-dictionary.ts
const dictionaries = {
  vi: () => import("@/dictionaries/vi.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "vi" | "en") => 
  dictionaries[locale]();
// lib/get-dictionary.ts
// const dictionaries = {
//   vi: () => import("@/dictionaries/vi.json").then((module) => module.default),
//   en: () => import("@/dictionaries/en.json").then((module) => module.default),
// };

// export const getDictionary = async (locale: "vi" | "en") => 
//   dictionaries[locale]();


const dictionaries = {
  vi: () => import("../dictionaries/vi.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // 1. Force lowercase and check if it's a valid key
  const lang = (locale?.toLowerCase() === "en" ? "en" : "vi") as "en" | "vi";

  // 2. Safety check: Ensure the function exists before calling ()
  if (typeof dictionaries[lang] !== "function") {
    console.warn(`Dictionary for ${lang} not found, falling back to 'vi'`);
    return dictionaries.vi();
  }

  return dictionaries[lang]();
};
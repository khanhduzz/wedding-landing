// import HeroSectionModernVintage from "@/components/landing/HeroSection/HeroSectionModernVintage";
// import HeroSectionVintage from "@/components/landing/HeroSectionVintage";
// import { notFound } from "next/navigation";

// export default function ThemePage({ params }: { params: { theme: string } }) {
//   const { theme } = params;

//   // Validate theme names
//   if (theme !== "vintage" && theme !== "origin") {
//     notFound();
//   }

//   return (
//     <main>
//       {theme === "vintage" ? (
//         <>
//           <HeroSectionVintage />
//         </>
//       ) : (
//         <>
//           <HeroSectionModernVintage />
//         </>
//       )}
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import { THEMES } from "@/constants/themes";

import OriginTheme from "@/components/landing/themes/OriginTheme";
import VintageTheme from "@/components/landing/themes/VintageTheme";

export default function ThemePage({ params }: { params: { theme: string } }) {
  const { theme } = params;

  // 1. Mapping component tương ứng với theme
  const ThemeContent: Record<string, React.ComponentType> = {
    [THEMES.VINTAGE]: VintageTheme,
    [THEMES.ORIGIN]: OriginTheme,
  };

  // 2. Kiểm tra xem theme có tồn tại trong mapping không
  const SelectedTheme = ThemeContent[theme];

  if (!SelectedTheme) {
    notFound();
  }

  return (
    <main>
      <SelectedTheme />
    </main>
  );
}

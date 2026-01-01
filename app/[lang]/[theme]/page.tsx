// import { notFound } from "next/navigation";
// import { THEMES } from "@/constants/themes";

// import OriginTheme from "@/components/landing/themes/OriginTheme";
// import YouthTheme from "@/components/landing/themes/YouthTheme";

// export default function ThemePage({ params }: { params: { theme: string } }) {
//   const { theme } = params;

//   const ThemeContent: Record<string, React.ComponentType> = {
//     [THEMES.YOUTH]: YouthTheme,
//     [THEMES.ORIGIN]: OriginTheme,
//   };

//   const SelectedTheme = ThemeContent[theme];

//   if (!SelectedTheme) {
//     notFound();
//   }

//   return (
//     <main>
//       <SelectedTheme />
//     </main>
//   );
// }

// app/[lang]/[theme]/page.tsx
import { getDictionary } from "@/lib/get-dictionary";
import YouthTheme from "@/components/landing/themes/YouthTheme";
import OriginTheme from "@/components/landing/themes/OriginTheme";
import { THEMES } from "@/constants/themes";
import { notFound } from "next/navigation";

export default async function ThemePage({
  params,
}: {
  params: { theme: string; lang: string };
}) {
  const { theme, lang } = params;
  const dict = await getDictionary(lang as "vi" | "en");

  const ThemeContent: Record<string, React.ComponentType<{ dict: any }>> = {
    [THEMES.YOUTH]: YouthTheme,
    [THEMES.ORIGIN]: OriginTheme,
  };

  const SelectedTheme = ThemeContent[theme];

  if (!SelectedTheme) notFound();

  return (
    <main>
      <SelectedTheme dict={dict} />
    </main>
  );
}

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

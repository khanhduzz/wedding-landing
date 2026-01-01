import { notFound } from "next/navigation";
import { THEMES } from "@/constants/themes";

import OriginTheme from "@/components/landing/themes/OriginTheme";
import VintageTheme from "@/components/landing/themes/VintageTheme";

export default function ThemePage({ params }: { params: { theme: string } }) {
  const { theme } = params;

  const ThemeContent: Record<string, React.ComponentType> = {
    [THEMES.VINTAGE]: VintageTheme,
    [THEMES.ORIGIN]: OriginTheme,
  };

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

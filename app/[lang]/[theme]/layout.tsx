import FooterOrigin from "@/components/shared/FooterOrigin";
import NavbarOrigin from "@/components/shared/NavbarOrigin";
import { notFound } from "next/navigation";
import { THEMES } from "@/constants/themes";

import { getDictionary } from "@/lib/get-dictionary";
import NavbarYouth from "@/components/shared/NavbarYouth";
import FooterYouth from "@/components/shared/FooterYouth";

export default async function ThemeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { theme: string; lang: string };
}) {
  const { theme, lang } = params;

  const supportedLangs = ["vi", "en"];
  if (!supportedLangs.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as "vi" | "en");

  const themeConfig = {
    [THEMES.YOUTH]: {
      Navbar: NavbarYouth,
      Footer: FooterYouth,
    },
    [THEMES.ORIGIN]: {
      Navbar: NavbarOrigin,
      Footer: FooterOrigin,
    },
  };

  const currentConfig = themeConfig[theme as keyof typeof themeConfig];

  if (!currentConfig) {
    notFound();
  }

  const { Navbar: SelectedNavbar, Footer: SelectedFooter } = currentConfig;

  return (
    <div className={`theme-wrapper ${theme}-theme-styles`}>
      <SelectedNavbar dict={dict.navbar} lang={lang} />
      <main>{children}</main>
      <SelectedFooter dict={dict.footer} />
    </div>
  );
}

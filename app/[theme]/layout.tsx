import Footer from "@/components/shared/Footer";
import FooterOrigin from "@/components/shared/FooterOrigin";
import Navbar from "@/components/shared/Navbar";
import NavbarOrigin from "@/components/shared/NavbarOrigin";
import { notFound } from "next/navigation";
import { THEMES } from "@/constants/themes";

export default function ThemeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { theme: string };
}) {
  const { theme } = params;

  const themeConfig = {
    [THEMES.VINTAGE]: {
      Navbar: Navbar,
      Footer: Footer,
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
      <SelectedNavbar />
      <main>{children}</main>
      <SelectedFooter />
    </div>
  );
}

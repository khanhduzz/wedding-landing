import Footer from "@/components/shared/Footer";
import FooterModern from "@/components/shared/FooterModern";
import Navbar from "@/components/shared/Navbar";
import NavbarModern from "@/components/shared/NavbarModern";
import { notFound } from "next/navigation";

export default function ThemeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { theme: string };
}) {
  const { theme } = params;

  // Validation
  const isValidTheme = theme === "vintage" || theme === "origin";
  if (!isValidTheme) notFound();

  return (
    <div className={`theme-wrapper ${theme}-theme-styles`}>
      {/* 1. Conditional Navbar */}
      {theme === "vintage" ? <Navbar /> : <NavbarModern />}

      {/* 2. Page Content */}
      <main>{children}</main>

      {/* 3. Conditional Footer */}
      {theme === "vintage" ? <Footer /> : <FooterModern />}
    </div>
  );
}

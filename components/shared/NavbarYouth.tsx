"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, SwatchBook, Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { THEMES } from "@/constants/themes";

export default function NavbarYouth({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { theme } = useParams();
  const router = useRouter();

  const displayThemes = [THEMES.ORIGIN, THEMES.YOUTH];

  const navItems = [
    { href: "#card", label: dict?.card || "" },
    { href: "#info", label: dict?.story || "" },
    { href: "#timeline", label: dict?.timeline || "" },
    { href: "#gallery", label: dict?.gallery || "" },
    { href: "#gift", label: dict?.gift || "" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 80;
        const elementPosition =
          elem.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }, 150);
  };

  const toggleLanguage = (newLang: string) => {
    router.push(`/${newLang}/${theme}`);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#E3F2FD]/90 backdrop-blur-md border-b-2 border-dashed border-[#1E88E5]/30 shadow-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section - Phong cách "Lớp học tình yêu" */}
        <Link
          href={`/${lang}/${theme}`}
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="group relative flex items-center gap-2"
        >
          <div className="bg-[#FFEB3B] p-2 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
            <Pencil className="w-5 h-5 text-[#1E88E5]" />
          </div>

          <div className="flex flex-col">
            <div className="relative flex items-baseline gap-1">
              <span className="font-sans font-black text-2xl md:text-3xl tracking-tight text-[#1E88E5]">
                D
              </span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-serif italic text-xl md:text-2xl text-[#F4511E] mx-0.5"
              >
                +
              </motion.span>
              <span className="font-sans font-black text-2xl md:text-3xl tracking-tight text-[#1E88E5]">
                L
              </span>
            </div>
            <motion.span
              animate={{ opacity: scrolled ? 0 : 1 }}
              className="text-[8px] font-bold uppercase tracking-wider text-[#1E88E5]/70"
            >
              Ký ức thanh xuân
            </motion.span>
          </div>
        </Link>

        {/* Desktop Nav + Theme Switcher */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 border-r-2 border-dotted border-[#1E88E5]/20 pr-6">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => handleScrollTo(e, it.href)}
                className="group relative text-[11px] uppercase tracking-wider font-black text-[#1E88E5] transition-all hover:scale-110"
              >
                {it.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FFEB3B] -z-10 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* THEME SWITCHER VỚI TONE MÀU NĂNG ĐỘNG */}
          <div className="flex bg-[#1E88E5]/10 p-1 rounded-xl relative border border-[#1E88E5]/20">
            {displayThemes.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => router.push(`/${lang}/${t}`)}
                className={`relative z-10 px-4 py-1.5 text-[9px] uppercase font-black transition-colors duration-500 ${
                  theme === t
                    ? "text-white"
                    : "text-[#1E88E5]/60 hover:text-[#1E88E5]"
                }`}
              >
                <span className="relative z-10">{t}</span>
                {theme === t && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#1E88E5] rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex bg-white/50 rounded-lg p-1 gap-1">
            {["vi", "en"].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => toggleLanguage(l)}
                className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded ${
                  lang === l
                    ? "bg-[#F4511E] text-white"
                    : "text-[#1E88E5]/40 hover:bg-[#1E88E5]/10"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => toggleLanguage(lang === "vi" ? "en" : "vi")}
            className="text-white font-black text-[10px] w-8 h-8 flex items-center justify-center bg-[#F4511E] rounded-full shadow-lg active:scale-90"
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>

          <button
            type="button"
            aria-label="Toggle Theme"
            onClick={() =>
              router.push(
                `/${lang}/${theme === THEMES.YOUTH ? THEMES.ORIGIN : THEMES.YOUTH}`
              )
            }
            className="text-[#1E88E5] p-2 bg-[#FFEB3B] rounded-lg shadow-sm active:scale-90"
          >
            <SwatchBook size={18} />
          </button>

          <button
            type="button"
            className="text-[#1E88E5] bg-white p-2 rounded-lg shadow-sm border border-[#1E88E5]/20"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full inset-x-0 bg-[#E3F2FD] border-b-4 border-[#1E88E5] md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-center py-10 space-y-6">
              {navItems.map((it, idx) => (
                <motion.a
                  key={it.href}
                  href={it.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={(e) => handleScrollTo(e, it.href)}
                  className="text-[#1E88E5] text-lg font-black uppercase tracking-widest hover:text-[#F4511E]"
                >
                  {it.label}
                </motion.a>
              ))}

              <div className="pt-6 w-full px-12 space-y-6">
                <div className="h-1 bg-dotted-pattern" />{" "}
                {/* Giả lập đường kẻ vở */}
                <div className="flex bg-white p-1 rounded-xl relative shadow-inner">
                  {displayThemes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => router.push(`/${lang}/${t}`)}
                      className={`flex-1 relative z-10 py-3 text-[10px] uppercase font-black transition-colors ${
                        theme === t ? "text-white" : "text-[#1E88E5]/50"
                      }`}
                    >
                      {t}
                      {theme === t && (
                        <motion.div
                          layoutId="activeTabMobile"
                          className="absolute inset-0 bg-[#1E88E5] rounded-lg -z-10"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

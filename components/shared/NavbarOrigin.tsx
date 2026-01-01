"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, SwatchBook } from "lucide-react"; // Added SwatchBook icon
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

const items = [
  { href: "#card", label: "Thiệp mời" },
  { href: "#info", label: "Câu chuyện" },
  { href: "#timeline", label: "Lịch trình" },
  { href: "#gallery", label: "Album" },
  { href: "#gift", label: "Quà" },
];

export default function NavbarOrigin() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { theme } = useParams();
  const router = useRouter();

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

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
        scrolled
          ? "py-3 bg-white/70 backdrop-blur-lg border-b border-[#BC8A5F]/10 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href={`/${theme}`}
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="group relative flex items-center justify-center"
        >
          <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none">
            <motion.svg
              className={`transition-all duration-500 ${scrolled ? "w-16 h-16" : "w-20 h-20"} text-[#BC8A5F]/20 group-hover:text-[#BC8A5F]/40`}
              viewBox="0 0 100 100"
            >
              <path
                d="M50,10 A40,40 0 1,1 49.9,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4 2"
              />
            </motion.svg>
          </div>
          <div className="relative flex items-baseline gap-1 px-4 py-2">
            <span className="font-serif text-2xl md:text-3xl tracking-tighter text-[#3D3831]">
              D
            </span>
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-serif italic text-xl md:text-2xl text-[#BC8A5F] mx-0.5"
            >
              &
            </motion.span>
            <span className="font-serif text-2xl md:text-3xl tracking-tighter text-[#3D3831]">
              L
            </span>
          </div>
          <motion.div
            animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -5 : 0 }}
            className="absolute -bottom-2 whitespace-nowrap"
          >
            <span className="text-[7px] uppercase tracking-[0.4em] text-[#BC8A5F] font-bold">
              Hà Nội — Sài Gòn
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav + Theme Switcher */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 border-r border-[#BC8A5F]/20 pr-8">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => handleScrollTo(e, it.href)}
                className="group relative text-[10px] uppercase tracking-[0.3em] font-bold text-[#3D3831] transition-colors hover:text-[#BC8A5F]"
              >
                {it.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#BC8A5F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* THE NEW THEME SWITCHER (Desktop) */}
          <div className="flex bg-[#3D3831]/5 p-1 rounded-full relative">
            {["origin", "vintage"].map((t) => (
              <button
                key={t}
                onClick={() => router.push(`/${t}`)}
                className={`relative z-10 px-4 py-1.5 text-[9px] uppercase tracking-widest transition-colors duration-300 ${theme === t ? "text-white" : "text-[#3D3831]/60 hover:text-[#3D3831]"}`}
              >
                {t}
                {theme === t && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#BC8A5F] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          {/* Quick Theme Toggle Icon for Mobile */}
          <button
            type="button" // Added type attribute
            onClick={() =>
              router.push(theme === "vintage" ? "/origin" : "/vintage")
            }
            className="text-[#BC8A5F] p-2 bg-[#BC8A5F]/5 rounded-full active:scale-90 transition-transform focus:outline-none"
            aria-label="Toggle Theme"
          >
            <SwatchBook size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button" // Added type attribute
            className="text-[#3D3831] transition-transform active:scale-90 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full inset-x-0 bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#BC8A5F]/20 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 space-y-6">
              {items.map((it, idx) => (
                <motion.a
                  key={it.href}
                  href={it.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => handleScrollTo(e, it.href)}
                  className="text-[#3D3831] text-sm uppercase tracking-[0.4em] font-medium hover:text-[#BC8A5F] py-1 w-full text-center"
                >
                  {it.label}
                </motion.a>
              ))}

              <div className="pt-4 flex flex-col items-center gap-6 w-full px-12">
                <div className="w-full h-[0.5px] bg-[#BC8A5F]/20" />

                {/* Theme Selector in Mobile Menu */}
                <div className="flex bg-[#3D3831]/5 p-1 rounded-full w-full max-w-[240px]">
                  {["origin", "vintage"].map((t) => (
                    <button
                      key={t}
                      onClick={() => router.push(`/${t}`)}
                      className={`flex-1 relative z-10 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${theme === t ? "text-white font-bold" : "text-[#3D3831]/50"}`}
                    >
                      {t}
                      {theme === t && (
                        <motion.div
                          layoutId="activeTabMobile"
                          className="absolute inset-0 bg-[#BC8A5F] rounded-full -z-10"
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

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { href: "#hero", label: "Thiệp mời" },
  { href: "#info", label: "Câu chuyện" },
  { href: "#timeline", label: "Dòng thời gian" },
  { href: "#gallery", label: "Album" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#4B3621]/70 backdrop-blur-sm shadow-sm text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left logo */}
        <Link
          href="/"
          className="font-script text-3xl text-white transition-colors"
        >
          D ♥ L
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-md tracking-wide font-heading text-white hover:text-yellow-200 transition"
            >
              {it.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="relative md:hidden">
          <button
            className="text-white relative z-20"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Dropdown (now covers the button area too) */}
          <div
            className={`absolute right-0 top-0 w-[220px] transition-all duration-500 ease-out origin-top-right ${
              menuOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-4 invisible"
            }`}
          >
            <div className="bg-[#d7c3ac]/85 backdrop-blur-sm border border-[#e7d8c8]/60 shadow-lg flex flex-col items-center space-y-3 py-6 pt-10">
              {/* The extra `pt-10` creates space behind the X button */}
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#3e2c1b] text-lg font-heading hover:text-[#7a5b3a] transition-colors duration-300"
                >
                  {it.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

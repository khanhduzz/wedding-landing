"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const items = [
  { href: "#hero", label: "Thiệp mời" },
  { href: "#info", label: "Câu chuyện" },
  { href: "#timeline", label: "Dòng thời gian" },
  { href: "#gallery", label: "Album" },
  // { href: "#guestbook", label: "Guestbook" },
  // { href: "#rsvp", label: "RSVP" },
  // { href: "#gift", label: "Gifts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left logo */}
        <Link
          href="/"
          className={`font-script text-3xl transition-colors ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          D ♥ L
        </Link>

        {/* Center nav items */}
        <div className="hidden sm:flex items-center gap-6 ml-auto -mr-20">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={`text-md tracking-wide font-heading transition-colors ${
                scrolled
                  ? "text-white hover:text-stone-900"
                  : "text-white hover:text-yellow-200"
              }`}
            >
              {it.label}
            </a>
          ))}
        </div>

        {/* Right placeholder for spacing symmetry */}
        <div className="hidden md:block w-[60px]" />
      </div>
    </nav>
  );
}

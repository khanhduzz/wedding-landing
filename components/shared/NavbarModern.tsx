// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const items = [
//   { href: "#card", label: "Thiệp mời" },
//   { href: "#info", label: "Câu chuyện" },
//   { href: "#timeline", label: "Lịch trình" },
//   { href: "#gallery", label: "Album" },
//   { href: "#gift", label: "Quà" },
// ];

// export default function NavbarModern() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
//         scrolled
//           ? "py-3 bg-white/60 backdrop-blur-md border-b border-[#BC8A5F]/10 shadow-sm"
//           : "py-6 bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
//         <Link
//           href="#hero"
//           className="group relative flex items-center justify-center"
//         >
//           {/* 1. The Decorative Crest (SVG) */}
//           <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none">
//             <motion.svg
//               initial={{ rotate: -10, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className={`transition-all duration-500 ${
//                 scrolled ? "w-16 h-16" : "w-20 h-20"
//               } text-[#BC8A5F]/20 group-hover:text-[#BC8A5F]/40`}
//               viewBox="0 0 100 100"
//             >
//               {/* Hand-drawn style circular wreath */}
//               <path
//                 d="M50,10 A40,40 0 1,1 49.9,10"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="0.5"
//                 strokeDasharray="4 2"
//               />
//             </motion.svg>
//           </div>

//           {/* 2. The Initials */}
//           <div className="relative flex items-baseline gap-1 px-4 py-2">
//             <span
//               className={`font-serif text-2xl md:text-3xl tracking-tighter transition-colors duration-500 ${
//                 scrolled ? "text-[#3D3831]" : "text-[#3D3831]"
//               }`}
//             >
//               D
//             </span>

//             {/* The Ampersand with a "Gold Shimmer" animation */}
//             <motion.span
//               animate={{
//                 opacity: [0.6, 1, 0.6],
//                 scale: [1, 1.05, 1],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="font-serif italic text-xl md:text-2xl text-[#BC8A5F] mx-0.5"
//             >
//               &
//             </motion.span>

//             <span
//               className={`font-serif text-2xl md:text-3xl tracking-tighter transition-colors duration-500 ${
//                 scrolled ? "text-[#3D3831]" : "text-[#3D3831]"
//               }`}
//             >
//               L
//             </span>
//           </div>

//           {/* 3. The "Est. Date" or Location Subtitle (Hidden on scroll) */}
//           <motion.div
//             animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -5 : 0 }}
//             className="absolute -bottom-2 whitespace-nowrap"
//           >
//             <span className="text-[7px] uppercase tracking-[0.4em] text-[#BC8A5F] font-bold">
//               Hà Nội — Sài Gòn
//             </span>
//           </motion.div>
//         </Link>

//         {/* Desktop Nav - High-end Editorial Style */}
//         <div className="hidden md:flex items-center gap-10">
//           {items.map((it) => (
//             <a
//               key={it.href}
//               href={it.href}
//               className="group relative text-[11px] uppercase tracking-[0.3em] font-bold text-[#3D3831] transition-colors hover:text-[#BC8A5F]"
//             >
//               {it.label}
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#BC8A5F] transition-all duration-300 group-hover:w-full" />
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             className="text-[#3D3831] transition-transform active:scale-90"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <X size={24} strokeWidth={1.5} />
//             ) : (
//               <Menu size={24} strokeWidth={1.5} />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown - Smooth Parchment Slide */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             /* FIX: Changed bg-[#FAF7F2]/FB to bg-[#FAF7F2] (Solid)
//          Added z-50 and a stronger shadow
//       */
//             className="absolute top-full inset-x-0 bg-[#FAF7F2] border-b border-[#BC8A5F]/30 shadow-2xl md:hidden overflow-hidden"
//           >
//             <div className="flex flex-col items-center py-12 space-y-8">
//               {items.map((it, idx) => (
//                 <motion.a
//                   key={it.href}
//                   href={it.href}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: idx * 0.05 }}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-[#3D3831] text-base uppercase tracking-[0.4em] font-medium hover:text-[#BC8A5F] transition-colors"
//                 >
//                   {it.label}
//                 </motion.a>
//               ))}

//               {/* Decorative Ornament */}
//               <div className="pt-4 flex items-center gap-4">
//                 <div className="w-12 h-[1px] bg-[#BC8A5F]/40" />
//                 <span className="text-[#BC8A5F] text-sm font-serif italic">
//                   Wedding Day
//                 </span>
//                 <div className="w-12 h-[1px] bg-[#BC8A5F]/40" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react"; // Added useRef
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const items = [
//   { href: "#card", label: "Thiệp mời" },
//   { href: "#info", label: "Câu chuyện" },
//   { href: "#timeline", label: "Lịch trình" },
//   { href: "#gallery", label: "Album" },
//   { href: "#gift", label: "Quà" },
// ];

// export default function NavbarModern() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navRef = useRef<HTMLElement>(null); // To detect outside clicks

//   // Handle Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [menuOpen]);

//   return (
//     <nav
//       ref={navRef}
//       className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
//         scrolled
//           ? "py-3 bg-white/80 backdrop-blur-md border-b border-[#BC8A5F]/10 shadow-sm"
//           : "py-6 bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
//         <Link
//           href="#hero"
//           onClick={() => setMenuOpen(false)} // Close if logo is clicked
//           className="group relative flex items-center justify-center"
//         >
//           {/* Logo Section */}
//           <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none">
//             <motion.svg
//               animate={{ rotate: 0, opacity: 1 }}
//               className={`transition-all duration-500 ${
//                 scrolled ? "w-16 h-16" : "w-20 h-20"
//               } text-[#BC8A5F]/20`}
//               viewBox="0 0 100 100"
//             >
//               <path
//                 d="M50,10 A40,40 0 1,1 49.9,10"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="0.5"
//                 strokeDasharray="4 2"
//               />
//             </motion.svg>
//           </div>

//           <div className="relative flex items-baseline gap-1 px-4 py-2">
//             <span className="font-serif text-2xl md:text-3xl tracking-tighter text-[#3D3831]">
//               D
//             </span>
//             <span className="font-serif italic text-xl md:text-2xl text-[#BC8A5F] mx-0.5">
//               &
//             </span>
//             <span className="font-serif text-2xl md:text-3xl tracking-tighter text-[#3D3831]">
//               L
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-10">
//           {items.map((it) => (
//             <a
//               key={it.href}
//               href={it.href}
//               className="group relative text-[11px] uppercase tracking-[0.3em] font-bold text-[#3D3831] hover:text-[#BC8A5F] transition-colors"
//             >
//               {it.label}
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#BC8A5F] transition-all duration-300 group-hover:w-full" />
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             className="text-[#3D3831] p-2"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
// <AnimatePresence>
//   {menuOpen && (
//     <motion.div
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: 1, height: "auto" }}
//       exit={{ opacity: 0, height: 0 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="absolute top-full inset-x-0 bg-white/95 backdrop-blur-xl border-b border-[#BC8A5F]/20 shadow-2xl md:hidden overflow-hidden"
//     >
//       <div className="flex flex-col items-center py-10 space-y-6">
//         {items.map((it, idx) => (
//           <motion.a
//             key={it.href}
//             href={it.href}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.05 }}
//             // THE ACTION: This handles the navigation and closes the menu
//             onClick={() => setMenuOpen(false)}
//             className="text-[#3D3831] text-sm uppercase tracking-[0.4em] font-medium hover:text-[#BC8A5F] py-2 w-full text-center"
//           >
//             {it.label}
//           </motion.a>
//         ))}

//         <div className="pt-4 flex items-center gap-3 opacity-50">
//           <div className="w-8 h-[1px] bg-[#BC8A5F]" />
//           <span className="text-[#BC8A5F] text-[10px] uppercase tracking-widest">
//             Wedding Day
//           </span>
//           <div className="w-8 h-[1px] bg-[#BC8A5F]" />
//         </div>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { href: "#card", label: "Thiệp mời" },
  { href: "#info", label: "Câu chuyện" },
  { href: "#timeline", label: "Lịch trình" },
  { href: "#gallery", label: "Album" },
  { href: "#gift", label: "Quà" },
];

export default function NavbarModern() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // 1. Background scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Click outside logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // 3. Smooth Scroll Logic
  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    // Give the menu a tiny moment to start closing
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 80;
        const elementPosition =
          elem.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    }, 150);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
        scrolled
          ? "py-3 bg-white/60 backdrop-blur-md border-b border-[#BC8A5F]/10 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="#hero"
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="group relative flex items-center justify-center"
        >
          <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none">
            <motion.svg
              animate={{ rotate: 0, opacity: 1 }}
              className={`transition-all duration-500 ${
                scrolled ? "w-16 h-16" : "w-20 h-20"
              } text-[#BC8A5F]/20 group-hover:text-[#BC8A5F]/40`}
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => handleScrollTo(e, it.href)}
              className="group relative text-[11px] uppercase tracking-[0.3em] font-bold text-[#3D3831] transition-colors hover:text-[#BC8A5F]"
            >
              {it.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#BC8A5F] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-[#3D3831] transition-transform active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
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
            /* Reverting back to your Parchment/Blur Style */
            className="absolute top-full inset-x-0 bg-[#FAF7F2]/90 backdrop-blur-xl border-b border-[#BC8A5F]/20 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-12 space-y-7">
              {items.map((it, idx) => (
                <motion.a
                  key={it.href}
                  href={it.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => handleScrollTo(e, it.href)}
                  className="text-[#3D3831] text-sm uppercase tracking-[0.4em] font-medium hover:text-[#BC8A5F] py-2 w-full text-center"
                >
                  {it.label}
                </motion.a>
              ))}

              {/* Your Decorative Ornament */}
              <div className="pt-4 flex items-center gap-3 opacity-60">
                <div className="w-8 h-[1px] bg-[#BC8A5F]/40" />
                <span className="text-[#BC8A5F] text-[10px] uppercase tracking-widest font-serif italic">
                  Wedding Day
                </span>
                <div className="w-8 h-[1px] bg-[#BC8A5F]/40" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function YouthBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ y: 100, x: 0, rotate: 0 }}
          animate={{ y: 0, rotate: -5 }}
          exit={{ y: 100, rotate: 0 }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            y: -5,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          name="back-to-top"
          type="button"
          className="fixed bottom-10 right-6 md:right-10 z-[99] group"
        >
          {/* Bóng đổ khối cứng phía sau */}
          <div className="absolute inset-0 bg-black rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />

          {/* Nút chính phong cách Sticker */}
          <div className="relative bg-yellow-400 border-[3px] border-black px-4 py-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-inner">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </motion.div>

            <span className="text-[10px] font-black text-black uppercase tracking-tighter leading-none">
              Top
            </span>
          </div>

          {/* Trang trí thêm: Vết gạch chân doodle nhỏ phía dưới nút */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500/30 rounded-full blur-[1px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

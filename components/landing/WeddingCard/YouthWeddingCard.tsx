"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 1. Máy bay giấy bay lượn ngẫu hứng khi mở thiệp
const PaperPlane = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.7) * 500,
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.5],
        rotate: Math.random() * 360,
      }}
      transition={{ duration: 3, ease: "easeOut", delay }}
      className="absolute left-1/2 top-1/2 z-[60] text-4xl pointer-events-none"
    >
      ✈️
    </motion.div>
  );
};

export default function YouthWeddingCard({ dict }: { dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const inv = dict.invitation;

  return (
    <section className="relative py-24 bg-[#E0F2FE] flex flex-col items-center overflow-hidden min-h-[900px] font-sans">
      {/* Background Decor: Bầu trời xanh và mây */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:30px_30px]" />

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-center mb-16 px-6 z-10"
      >
        <span className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 text-xs font-black uppercase tracking-widest rounded-full shadow-sm mb-4">
          {inv.label}
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-blue-900 tracking-tighter">
          {inv.title}
          <span className="text-pink-500">!</span>
        </h2>
      </motion.div>

      {/* 3D LOCKER / ENVELOPE CONTAINER */}
      <div className="relative w-[90vw] max-w-[600px] aspect-[3/4] perspective-2000">
        <div className="relative w-full h-full preserve-3d">
          {/* --- TRANG TRONG CỦA THIỆP (The Love Letter) --- */}
          <motion.div
            animate={{
              scale: isOpen ? 1 : 0.8,
              y: isOpen ? 0 : 20,
              rotate: isOpen ? 0 : -5,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute inset-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden border-2 border-blue-100 z-10"
          >
            {/* Giấy kẻ ngang học sinh */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#3b82f6 1px, transparent 1px)",
                backgroundSize: "100% 2.5rem",
              }}
            />

            <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 md:p-12 text-center">
              <motion.div
                animate={
                  isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                className="mb-6 text-5xl"
              >
                💌
              </motion.div>

              <div className="space-y-6">
                <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">
                  {inv.upperTitle}
                </span>

                <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight">
                  {inv.names.first}
                  <span className="text-pink-500 block text-2xl my-2">&</span>
                  {inv.names.second}
                </h3>

                <div className="w-16 h-1.5 bg-yellow-400 mx-auto rounded-full" />

                <p className="text-gray-600 font-medium text-lg italic max-w-sm mx-auto">
                  &quot;{inv.message}&quot;
                </p>

                <div className="pt-8 flex flex-col items-center">
                  <div className="px-6 py-2 bg-blue-600 text-white font-black rounded-lg shadow-lg rotate-2">
                    {inv.dateTime}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- CÁNH CỬA LOCKER (The Cover) --- */}
          <motion.div
            animate={{
              rotateY: isOpen ? -110 : 0,
              x: isOpen ? "-20%" : "0%",
            }}
            transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute inset-0 bg-blue-500 rounded-2xl z-30 shadow-2xl flex flex-col items-center justify-between p-10 preserve-3d backface-hidden border-4 border-blue-600"
          >
            {/* Khe thoáng khí của Locker */}
            <div className="w-24 h-12 flex flex-col justify-between">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-full h-1 bg-blue-700 rounded-full" />
              ))}
            </div>

            <div className="text-center">
              <div className="text-7xl mb-4">🏫</div>
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded border border-white/30">
                <span className="text-white font-black tracking-widest text-xl uppercase">
                  CLASS OF 2026
                </span>
              </div>
            </div>

            <div className="w-full h-1 bg-blue-700/50" />
          </motion.div>

          {/* THE STICKER SEAL (Nút mở thiệp) */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setIsOpen(true)}
                className="absolute right-10 top-1/2 -translate-y-1/2 z-50 cursor-pointer group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-24 h-24 bg-pink-500 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white font-black text-center -rotate-12 group-hover:scale-110 transition-transform"
                >
                  OPEN <br /> ME!
                </motion.div>
                {/* Washi tape giả */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-yellow-300/80 rotate-12" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* BURST EFFECT: Máy bay giấy bay ra khi mở */}
          <AnimatePresence>
            {isOpen && (
              <>
                {[...Array(12)].map((_, i) => (
                  <PaperPlane key={i} delay={i * 0.15} />
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* BUTTON BOTTOM */}
      <div className="mt-20 z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-[0_8px_0_0_#1e3a8a] active:shadow-none active:translate-y-2
            ${isOpen ? "bg-red-500 text-white shadow-[0_8px_0_0_#991b1b]" : "bg-yellow-400 text-blue-900"}`}
        >
          {isOpen ? inv.btnClose : inv.btnOpen}
        </motion.button>
      </div>

      <style jsx global>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}

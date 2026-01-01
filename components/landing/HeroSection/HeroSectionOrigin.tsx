"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

// 1. Animated Petal Component - Giữ nguyên logic ban đầu
const FloatingPetal = ({ delay, x }: { delay: number; x: string }) => (
  <motion.svg
    initial={{ y: -100, opacity: 0, rotate: 0 }}
    animate={{
      y: "110vh",
      opacity: [0, 0.8, 0.8, 0],
      rotate: 360,
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      delay: delay,
      ease: "linear",
    }}
    className="absolute w-6 h-6 text-[#A27B5C] z-10 drop-shadow-sm"
    style={{ left: x }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z" />
  </motion.svg>
);

export default function HeroSectionOrigin({ dict }: { dict: any }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const flowerY = useTransform(scrollY, [0, 500], [0, 50]);

  // Shortcut để truy cập nội dung hero
  const h = dict.hero;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2] selection:bg-[#D4A373] selection:text-white"
    >
      {/* 1. BACKGROUND GRADIENT & PETALS */}
      <div className="absolute inset-0 z-0 bg-[#FAF7F2]">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#E9DCC9_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#D4A373_20%,transparent_50%)] opacity-40"
        />

        {/* Giữ nguyên danh sách petals để bạn tùy chỉnh tay các giá trị random */}
        <FloatingPetal delay={0} x="10%" />
        <FloatingPetal delay={4} x="25%" />
        <FloatingPetal delay={2} x="45%" />
        <FloatingPetal delay={7} x="60%" />
        <FloatingPetal delay={5} x="75%" />
        <FloatingPetal delay={3} x="90%" />
      </div>

      {/* 2. SURPRISE UI: The "Living Flourishes" */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <motion.svg
          style={{ y: flowerY }}
          className="absolute -top-10 -right-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] text-[#A27B5C]/60"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M10,90 Q30,10 90,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <circle cx="90" cy="10" r="1.2" fill="currentColor" />
        </motion.svg>

        <motion.svg
          style={{ y: flowerY, rotate: 180 }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] md:w-[550px] md:h-[550px] text-[#A27B5C]/40"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M10,90 Q50,50 90,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
          />
        </motion.svg>
      </div>

      {/* 3. TEXTURE & VIGNETTE */}
      <div className="absolute inset-0 z-25 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-30 pointer-events-none" />

      {/* 4. MAIN CONTENT - Đã gắn dict */}
      <motion.div
        style={{ y: textY }}
        className="relative z-40 flex flex-col items-center px-6"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="text-center space-y-10"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-12 h-[1px] bg-[#D4A373]/60" />
            <span className="text-[#8C7851] tracking-[0.5em] text-[10px] uppercase font-bold">
              {h.upperTitle}
            </span>
            <div className="w-12 h-[1px] bg-[#D4A373]/60" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-6xl md:text-9xl font-light text-[#3D3831] leading-none tracking-tight">
              {h.names.first}{" "}
              <span className="font-serif italic text-[#BC8A5F]">
                {h.names.and}
              </span>{" "}
              {h.names.second}
            </h1>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="space-y-4"
          >
            <p className="text-[#5E584F] font-serif italic text-2xl">
              {h.date}
            </p>
            <div className="h-[40px] w-[1px] bg-[#BC8A5F]/50 mx-auto" />
            <p className="text-[#3D3831] text-xs md:text-sm tracking-[0.4em] uppercase font-semibold">
              {h.location}
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.a
              href="#invite"
              whileHover={{ y: -5 }}
              className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden rounded-full transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-[#3D3831] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 w-full h-full border border-[#3D3831] rounded-full" />
              <span className="relative z-10 text-[#3D3831] group-hover:text-[#FAF7F2] text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-500">
                {h.cta}
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 5. OUTER BORDER FRAME */}
      <div className="absolute inset-8 border border-[#D4A373]/30 pointer-events-none z-50 rounded-sm" />
    </section>
  );
}

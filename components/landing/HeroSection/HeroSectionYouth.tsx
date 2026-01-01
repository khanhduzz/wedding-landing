"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { THEMES } from "@/constants/themes";

// 1. Máy bay giấy và Ngôi sao (Thay thế cho cánh hoa)
const FloatingElement = ({
  delay,
  x,
  type,
}: {
  delay: number;
  x: string;
  type: "plane" | "star";
}) => (
  <motion.div
    initial={{ y: -100, opacity: 0, rotate: 0 }}
    animate={{
      y: "110vh",
      opacity: [0, 1, 1, 0],
      rotate: type === "plane" ? [0, 20, -20, 10] : 360,
      x: type === "plane" ? [0, 50, -50, 0] : 0,
    }}
    transition={{
      duration: type === "plane" ? 10 : 15,
      repeat: Infinity,
      delay: delay,
      ease: "linear",
    }}
    className={`absolute z-10 drop-shadow-md ${type === "plane" ? "text-[#1E88E5]/40" : "text-[#FFEB3B]/60"}`}
    style={{ left: x }}
  >
    {type === "plane" ? (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
      </svg>
    ) : (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    )}
  </motion.div>
);

export default function HeroSectionYouth({ dict }: { dict: any }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Giữ nguyên logic Parallax của bạn
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const decorY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E3F2FD] selection:bg-[#1E88E5] selection:text-white"
    >
      {/* 1. BACKGROUND BẦU TRỜI MÙA HÈ */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#BBDEFB_0%,#E3F2FD_100%)]"
        />

        {/* Các phần tử bay lượn */}
        <FloatingElement delay={0} x="15%" type="plane" />
        <FloatingElement delay={5} x="85%" type="plane" />
        <FloatingElement delay={2} x="40%" type="star" />
        <FloatingElement delay={8} x="70%" type="star" />
      </div>

      {/* 2. DECOR: Nét vẽ tay nguệch ngoạc (Doodle) */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {/* Vòng tròn mặt trời vẽ tay góc trên */}
        <motion.svg
          style={{ y: decorY, rotate: 15 }}
          className="absolute -top-10 -left-10 w-[250px] h-[250px] text-[#FFEB3B]/40"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>
      </div>

      {/* 3. TEXTURE: Giấy kẻ ô ly */}
      <div
        className="absolute inset-0 z-25 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1E88E5 1px, transparent 1px), linear-gradient(90deg, #1E88E5 1px, transparent 1px)`,
          backgroundSize: `40px 40px`,
        }}
      />

      {/* 4. MAIN CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="relative z-40 flex flex-col items-center px-6"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="text-center space-y-8"
        >
          {/* Label: Lớp học tình yêu */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block bg-[#F4511E] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
          >
            Our School Anniversary
          </motion.div>

          {/* Name: Viết kiểu hiện đại, trẻ trung */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black text-[#1E88E5] leading-none tracking-tighter filter drop-shadow-[6px_6px_0px_#FFEB3B]">
              D <span className="text-[#F4511E]">+</span> L
            </h1>
          </motion.div>

          {/* Date & Location */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="space-y-4"
          >
            <p className="text-[#1E88E5] font-black text-2xl md:text-3xl uppercase italic">
              {dict?.hero?.date || "December 25, 2025"}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#F4511E]" />
              <p className="text-[#1E88E5] text-xs md:text-sm font-black tracking-[0.2em] uppercase">
                Hà Nội <span className="text-[#F4511E]">&bull;</span> Sài Gòn
              </p>
              <div className="h-[2px] w-12 bg-[#F4511E]" />
            </div>
          </motion.div>

          {/* Button: Sticker Style */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.a
              href="#invite"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-10 py-4 bg-[#FFEB3B] border-4 border-[#1E88E5] rounded-xl shadow-[6px_6px_0px_0px_#1E88E5] transition-all"
            >
              <span className="text-[#1E88E5] text-sm font-black uppercase tracking-widest">
                {dict?.hero?.viewInvitation || "Mở Lưu Bút"}
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 5. OUTER BORDER: Đường kẻ sổ tay */}
      <div className="absolute inset-6 border-4 border-dashed border-[#1E88E5]/20 pointer-events-none z-50 rounded-2xl" />
    </section>
  );
}

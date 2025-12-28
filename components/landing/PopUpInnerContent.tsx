"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const layeredVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const planeVariant = (delay = 0): Variants => ({
  closed: { opacity: 0, y: 30, scale: 0.96 },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay },
  },
});

const cardVariant: Variants = {
  closed: { opacity: 0, y: 40, scale: 0.95, rotateX: 8 },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.7, delay: 0.45, ease: [0.25, 0.8, 0.25, 1] },
  },
};

type Props = {
  isOpen: boolean;
};

export default function PopUpInnerContent({ isOpen }: Props) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 xs:p-3 sm:p-4 md:p-8 lg:p-10"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={layeredVariants}
    >
      {/* Perspective container (enables 3D feeling) */}
      <div
        className="relative w-full h-full max-w-[820px] max-h-[480px] min-h-[300px]"
        style={{
          perspective: 1400,
          WebkitPerspective: 1400,
          transformStyle: "preserve-3d",
        }}
      >
        {/* LAYER 1: far paper (shadowed) */}
        <motion.div
          variants={planeVariant(0.18)}
          className="absolute inset-4 rounded-xl"
          style={{
            background: "linear-gradient(180deg,#efe7dd,#f7f2ef)",
            boxShadow:
              "0 22px 50px rgba(12,10,8,0.14), inset 0 6px 0 rgba(255,255,255,0.35)",
            transform: "translateZ(-40px) scale(.99)",
            border: "2px solid rgba(196,164,132,0.6)",
            pointerEvents: "none",
          }}
        />

        {/* LAYER 2: mid paper (cut-edge feeling) */}
        <motion.div
          variants={planeVariant(0.28)}
          className="absolute inset-7 rounded-lg"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,238,230,1), rgba(251,246,242,1))",
            boxShadow:
              "0 20px 40px rgba(12,10,8,0.12), inset 0 4px 12px rgba(0,0,0,0.03)",
            transform: "translateZ(-18px) scale(.995)",
            border: "2px solid rgba(215,194,166,0.55)",
            pointerEvents: "none",
          }}
        />

        {/* LAYER 3: subtle rim (paper-cut border) */}
        <motion.div
          variants={planeVariant(0.36)}
          className="absolute inset-10 rounded-md"
          style={{
            background: "transparent",
            boxShadow:
              "inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -8px 20px rgba(0,0,0,0.03)",
            border: "6px solid rgba(244,238,232,1)",
            transform: "translateZ(-6px) scale(1)",
            pointerEvents: "none",
          }}
        />

        {/* POP-UP MAIN CARD (appears to rise from center) */}
        <motion.div
          variants={cardVariant}
          className="relative z-20 w-full h-full rounded-2xl bg-[#fdfaf6]/95 border-[3px] border-[#d7c2a6] shadow-[0_18px_45px_rgba(10,8,6,0.18)]
            px-4 xs:px-5 sm:px-7 md:px-10 py-6 xs:py-5 sm:py-6 md:py-8
            flex flex-col items-center gap-3 sm:gap-4 overflow-hidden"
          // preserve 3d look on card so title/ornaments can subtly tilt
          style={{ transformStyle: "preserve-3d" }}
          whileHover={
            isOpen
              ? {
                  rotateX: 2,
                  translateY: -6,
                  transition: { duration: 0.45 },
                }
              : {}
          }
        >
          {/* decorative top SVG / icon with tiny float */}
          <motion.div
            initial={{ y: -6, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: -6, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="relative"
          >
            <Image
              src="/icons/card-icon-2.png"
              alt="Wedding decorative"
              width={220}
              height={220}
              className="w-24 xs:w-28 sm:w-32 md:w-40 object-contain"
            />
          </motion.div>

          {/* NAMES: layered with subtle depth */}
          <motion.h3
            initial={{ y: 14, opacity: 0, scale: 0.995 }}
            animate={
              isOpen
                ? { y: 0, opacity: 1, scale: 1, transition: { delay: 0.6 } }
                : { y: 14, opacity: 0, scale: 0.995 }
            }
            className="font-serif italic text-[#9b6a3b] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
            style={{
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            Nguyễn Nhật Anh & Trần Thị Bích Ngọc
          </motion.h3>

          {/* Invitation body with an artistic divider */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={
              isOpen
                ? { y: 0, opacity: 1, transition: { delay: 0.68 } }
                : { y: 10, opacity: 0 }
            }
            className="text-[#6a5647] font-serif max-w-[92%] text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ transformStyle: "preserve-3d" }}
          >
            Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc của chúng
            tôi.
          </motion.p>

          {/* fancy divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isOpen ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.45, delay: 0.74 }}
            className="w-16 h-[2px] rounded-full bg-[#c4a484] my-1"
          />

          {/* Date & venue */}
          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={
              isOpen
                ? { y: 0, opacity: 1, transition: { delay: 0.78 } }
                : { y: 8, opacity: 0 }
            }
            className="italic text-[#6a5647] text-[10px] xs:text-xs sm:text-sm md:text-base"
          >
            11:00 — 01.10.2025 | Hội trường Ánh Kim
          </motion.p>

          {/* subtle bottom shadow / lift accent */}
          <div
            aria-hidden
            className="absolute left-6 right-6 bottom-6 h-4 rounded-xl"
            style={{
              filter: "blur(12px)",
              opacity: 0.22,
              background:
                "linear-gradient(180deg, rgba(10,8,6,0.06), rgba(10,8,6,0.12))",
              transform: "translateZ(40px) scale(0.98)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

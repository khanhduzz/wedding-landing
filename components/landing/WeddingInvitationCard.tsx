"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function WeddingInvitationCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-24 bg-[#faf7f3] flex flex-col items-center">
      <h2 className="font-script text-5xl text-[#4b3a2f] mb-10">Thiệp Cưới</h2>

      <div className="relative w-[90vw] max-w-[900px] h-[55vw] max-h-[520px] min-h-[350px] perspective-1000">
        {/* Outer Card */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-[2px] border-[#c4a484] bg-[#e9dfd3]">
          {/* LEFT FLAP */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full origin-left border-r-[2px] border-[#d7c2a6]"
            animate={{ rotateY: isOpen ? -150 : 0 }}
            transition={{ duration: 1.3, ease: [0.55, 0.1, 0.25, 1] }}
            style={{
              backgroundImage: "url('/images/vintage-paper-cream.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1.03) contrast(1.01)",
            }}
          />

          {/* RIGHT FLAP */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full origin-right border-l-[2px] border-[#d7c2a6]"
            animate={{ rotateY: isOpen ? 150 : 0 }}
            transition={{ duration: 1.3, ease: [0.55, 0.1, 0.25, 1] }}
            style={{
              backgroundImage: "url('/images/vintage-paper-cream.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1.03) contrast(1.01)",
            }}
          />

          {/* COFFEE BELT */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: isOpen ? 0 : 1,
              y: isOpen ? -10 : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-[95px] bg-[#d9c7b3] border-y-[2px] border-[#c4a484] opacity-70 rounded-lg"></div>

            {/* HEART EMBLEM */}
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="absolute flex items-center justify-center bg-[#faf7f3] border-[2px] border-[#c4a484] shadow-md rounded-full p-4 z-30 cursor-pointer pointer-events-auto"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-2xl font-script text-[#9b6a3b]">♥</span>
            </motion.div>
          </motion.div>

          {/* INNER CONTENT */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 xs:p-3 sm:p-4 md:p-8 lg:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.6, delay: isOpen ? 0.35 : 0 }}
          >
            {/* LAYERED PAPER BACKGROUND (3D effect) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.97,
                y: isOpen ? 0 : 20,
              }}
              transition={{ duration: 0.7, delay: isOpen ? 0.25 : 0 }}
              className="absolute inset-0 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
              style={{
                backgroundImage: "url('/images/vintage-paper-light.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.02) contrast(1.01)",
              }}
            />

            {/* SECOND LAYER (cut-paper effect) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{
                opacity: isOpen ? 0.6 : 0,
                scale: isOpen ? 1 : 0.94,
              }}
              transition={{ duration: 0.7, delay: isOpen ? 0.28 : 0 }}
              className="absolute inset-0 rounded-xl border-[2px] border-[#d7c2a6] pointer-events-none"
              style={{
                boxShadow: "inset 0 0 40px rgba(0,0,0,0.12)",
              }}
            />

            {/* POP-UP CONTENT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.93 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 40,
                scale: isOpen ? 1 : 0.93,
              }}
              transition={{
                duration: 0.65,
                delay: isOpen ? 0.45 : 0,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="
                relative z-10 w-full h-full max-w-[100%] sm:max-w-[100%] md:max-w-[100%]
                bg-[#fdfaf6]/95 rounded-2xl border-[3px] border-[#d7c2a6]
                shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                px-4 xs:px-5 sm:px-7 md:px-10 py-6 
                xs:py-5 sm:py-6 md:py-8
                flex flex-col items-center gap-4 sm:gap-5
                backdrop-blur-[1px]
              "
            >
              {/* Decorative top vine */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                transition={{ duration: 0.6, delay: isOpen ? 0.55 : 0 }}
              >
                <Image
                  src="/icons/card-icon-2.png"
                  alt="Wedding decorative"
                  width={180}
                  height={180}
                  className="w-24 xs:w-28 sm:w-32 md:w-40 object-contain opacity-90"
                />
              </motion.div>

              {/* Names */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 15 }}
                transition={{ duration: 0.6, delay: isOpen ? 0.6 : 0 }}
                className="font-serif italic text-[#9b6a3b] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                Nguyễn Nhật Anh & Trần Thị Bích Ngọc
              </motion.h3>

              {/* Invitation text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                transition={{ duration: 0.6, delay: isOpen ? 0.7 : 0 }}
                className="text-[#6a5647] font-serif max-w-[90%]
                 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed"
              >
                Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc của
                chúng tôi.
              </motion.p>

              {/* Date line with gold accent */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                transition={{ duration: 0.6, delay: isOpen ? 0.75 : 0 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-10 h-[2px] bg-[#c4a484] rounded-full"></div>
                <p className="italic text-[#6a5647] text-[10px] xs:text-xs sm:text-sm md:text-base">
                  11:00 — 01.10.2025 | Hội trường Ánh Kim
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-10 px-10 py-3 border border-[#c4a484] text-[#4b3a2f] font-serif rounded-full hover:bg-[#e7c8a2]/60 transition-all duration-300"
      >
        {isOpen ? "Đóng Thiệp" : "Mở Thiệp"}
      </button>
    </section>
  );
}

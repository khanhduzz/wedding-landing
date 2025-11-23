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
              <span className="text-2xl translate-y-1 font-script text-[#9b6a3b]">
                ♥
              </span>
            </motion.div>
          </motion.div>

          {/* INNER CONTENT */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.6, delay: isOpen ? 0.35 : 0 }}
          >
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 0.92 : 0 }}
              transition={{ duration: 0.6, delay: isOpen ? 0.25 : 0 }}
              className="absolute inset-0 border-[2px] border-[#c4a484] rounded-xl"
              style={{
                backgroundImage: "url('/images/vintage-paper-light.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.6, delay: isOpen ? 0.45 : 0 }}
              className="relative z-10 bg-[#fdfaf6]/90 border-[2px] border-[#d7c2a6] rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 max-w-full xs:max-w-[95%] sm:max-w-[90%] md:max-w-[80%] shadow-md"
            >
              <div className="flex justify-center mb-3 xs:mb-4 sm:mb-5">
                <Image
                  src="/icons/card-icon-2.png"
                  alt="Chibi Wedding Couple"
                  width={160}
                  height={160}
                  className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
                />
              </div>

              <h3 className="font-serif text-[#9b6a3b] mb-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Nguyễn Nhật Anh & Trần Thị Bích Ngọc
              </h3>

              <p className="text-[#6a5647] mb-3 xs:mb-4 sm:mb-5 font-serif text-xs xs:text-sm sm:text-base md:text-lg">
                Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc của
                chúng tôi.
              </p>

              <p className="italic text-[#6a5647] text-[10px] xs:text-xs sm:text-sm md:text-base">
                11:00 - 01.10.2025 | Hội trường Ánh Kim
              </p>
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

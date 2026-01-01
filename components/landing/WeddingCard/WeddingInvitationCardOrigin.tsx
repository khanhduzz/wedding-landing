"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 1. Component Lá Rơi Nội Khu (Phủ toàn bộ Inner)
const InternalLeaf = ({ delay }: { delay: number }) => {
  // Random vị trí ngang từ 0-100% để đảm bảo trải đều
  const randomLeft = Math.random() * 100;

  return (
    <motion.svg
      initial={{ y: -50, opacity: 0, left: `${randomLeft}%` }}
      animate={{
        y: ["0%", "120%"], // Rơi xuyên qua đáy thiệp
        opacity: [0, 0.6, 0.6, 0],
        rotate: [0, 360 + Math.random() * 360],
      }}
      transition={{
        duration: 8 + Math.random() * 5,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      // Kích thước cố định để không bị nhỏ xíu
      className="absolute w-4 h-4 md:w-6 md:h-6 text-[#BC8A5F]/40 pointer-events-none"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,2L4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15L12,2Z" />
    </motion.svg>
  );
};

export default function WeddingInvitationCard() {
  const [isOpen, setIsOpen] = useState(false);
  const leafColors = ["#BC8A5F", "#A27B5C", "#D4A373"];

  return (
    <section
      id="card"
      className="relative py-16 md:py-32 bg-[#FAF7F2] flex flex-col items-center overflow-hidden min-h-[750px]"
    >
      {/* HEADER TƯƠNG TỰ HERO SECTION CỦA BẠN */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-12 md:mb-20 px-6"
      >
        <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
          Private Invitation
        </span>
        <h2 className="text-4xl md:text-6xl font-light text-[#3D3831] tracking-tight">
          {/* Thiệp  */}
          <span className="font-serif italic text-[#BC8A5F]">Thiệp Cưới</span>
        </h2>
      </motion.div>

      {/* CONTAINER 3D ĐÁP ỨNG MỌI MÀN HÌNH */}
      <div className="relative w-[92vw] max-w-[750px] aspect-[4/5] sm:aspect-[16/10] perspective-2000">
        <div className="relative w-full h-full preserve-3d">
          {/* --- PHẦN NỘI DUNG BÊN TRONG (INNER) --- */}
          <motion.div
            initial={false}
            animate={{
              z: isOpen ? 20 : 0,
              scale: isOpen ? 1 : 0.95,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[#E9DCC9] shadow-2xl rounded-sm overflow-hidden border border-[#BC8A5F]/20"
          >
            {/* Lớp Texture & Coffee Gradient (Nền thấp nhất) */}
            <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper.png')] z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D7C2A6]/40 via-transparent to-[#BC8A5F]/10 z-0" />

            {/* LỚP LÁ RƠI NỘI KHU (Phủ kín nền thiệp) */}
            <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
              <AnimatePresence>
                {isOpen &&
                  [...Array(15)].map((_, i) => (
                    <InternalLeaf key={`drift-${i}`} delay={i * 1} />
                  ))}
              </AnimatePresence>
            </div>

            {/* LỚP NỘI DUNG CHỮ (Nằm trên lá) */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
              {/* Khung viền trang trí */}
              <div className="absolute inset-6 md:inset-10 border border-[#BC8A5F]/30 pointer-events-none" />

              <div className="space-y-6 md:space-y-10">
                <motion.div
                  animate={
                    isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-[#8C7851] tracking-[0.4em] text-[9px] uppercase font-bold">
                    The Union Of
                  </span>
                </motion.div>

                <motion.h3
                  animate={
                    isOpen
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.9, opacity: 0 }
                  }
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-4xl md:text-7xl font-serif italic text-[#3D3831] leading-tight"
                >
                  Nhật Anh{" "}
                  <span className="text-2xl md:text-3xl not-italic font-light text-[#BC8A5F]">
                    &
                  </span>{" "}
                  Bích Ngọc
                </motion.h3>

                <motion.div
                  animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-6"
                >
                  <p className="text-[#5E584F] font-serif italic text-lg md:text-xl max-w-sm mx-auto leading-relaxed">
                    &quot;Trân trọng kính mời bạn đến chung vui trong ngày hạnh
                    phúc nhất của chúng tôi.&quot;
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-[1px] bg-[#BC8A5F]/40" />
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#3D3831]">
                      20 . 12 . 2025 <span className="mx-2">—</span> 11:00 AM
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* --- HIỆU ỨNG BURST KHI MỞ --- */}
          <AnimatePresence>
            {isOpen &&
              [...Array(20)].map((_, i) => (
                <motion.div
                  key={`burst-${i}`}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0, z: 100 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.4, 0.5],
                    x:
                      (Math.random() - 0.5) *
                      (typeof window !== "undefined" && window.innerWidth < 768
                        ? 400
                        : 1000),
                    y: (Math.random() - 0.6) * 600,
                    rotate: Math.random() * 720,
                  }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
                  className="absolute left-1/2 top-1/2 z-[60] pointer-events-none"
                  style={{ color: leafColors[i % 3] }}
                >
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2L4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15L12,2Z" />
                  </svg>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* --- CÁNH THIỆP (FLAPS) --- */}
          <motion.div
            animate={{ rotateY: isOpen ? -120 : 0 }}
            transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full origin-left preserve-3d z-30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#E9DCC9] border border-[#BC8A5F]/20 backface-hidden" />
            <div className="absolute inset-0 bg-[#D7C2A6] rotate-y-180 backface-hidden border border-[#BC8A5F]/10" />
          </motion.div>

          <motion.div
            animate={{ rotateY: isOpen ? 120 : 0 }}
            transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full origin-right preserve-3d z-30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#E9DCC9] border border-[#BC8A5F]/20 backface-hidden" />
            <div className="absolute inset-0 bg-[#D7C2A6] rotate-y-180 backface-hidden border border-[#BC8A5F]/10" />
          </motion.div>

          {/* WAX SEAL (Nút Mở) */}
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0.5 : 1,
              z: isOpen ? 0 : 150,
            }}
            className="absolute inset-0 flex items-center justify-center z-40 cursor-pointer"
          >
            <div className="relative group">
              <div className="absolute inset-[-15px] bg-[#BC8A5F]/30 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#8B2323] rounded-full shadow-2xl border-4 border-[#7A1F1F] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-[#F5E6CA] font-serif italic text-2xl md:text-3xl">
                  N&B
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden rounded-full transition-all"
        >
          {/* Lớp nền màu trồi lên từ dưới (Translate-y) */}
          <div
            className={`absolute inset-0 w-full h-full bg-[#3D3831] transition-transform duration-500 ease-in-out ${
              isOpen
                ? "translate-y-0"
                : "translate-y-full group-hover:translate-y-0"
            }`}
          />

          {/* Viền của nút */}
          <div className="absolute inset-0 w-full h-full border border-[#3D3831] rounded-full" />

          {/* Chữ đổi màu: Nếu đang mở (isOpen) hoặc đang hover thì hiện màu kem, ngược lại hiện màu nâu đen */}
          <span
            className={`relative z-10 text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${
              isOpen
                ? "text-[#FAF7F2]"
                : "text-[#3D3831] group-hover:text-[#FAF7F2]"
            }`}
          >
            {isOpen ? "Đóng Thiệp" : "Mở Thiệp Mời"}
          </span>
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
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}

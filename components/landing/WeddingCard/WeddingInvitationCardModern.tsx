// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// export default function WeddingInvitationCardModern() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section className="relative py-32 bg-[#FAF7F2] flex flex-col items-center overflow-hidden">
//       {/* Title Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="text-center mb-16"
//       >
//         <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.6em] font-bold block mb-2">
//           Private Invitation
//         </span>
//         <h2 className="text-4xl md:text-5xl font-light text-[#3D3831]">
//           Thiệp <span className="font-serif italic text-[#BC8A5F]">Cưới</span>
//         </h2>
//       </motion.div>

//       {/* 3D CARD CONTAINER */}
//       <div className="relative w-[95vw] max-w-[800px] aspect-[16/10] perspective-2000">
//         {/* SHADOW BASE (The floor shadow) */}
//         <div
//           className={`absolute inset-x-10 bottom-[-20px] h-10 bg-black/10 blur-2xl rounded-full transition-opacity duration-1000 ${isOpen ? "opacity-40" : "opacity-20"}`}
//         />

//         <div className="relative w-full h-full preserve-3d">
//           {/* 1. THE INNER CONTENT (The Surprise) */}
//           <motion.div
//             initial={false}
//             animate={{
//               z: isOpen ? 50 : 0,
//               scale: isOpen ? 1 : 0.95,
//               opacity: isOpen ? 1 : 0,
//             }}
//             transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
//             className="absolute inset-0 bg-white shadow-2xl rounded-sm flex flex-col items-center justify-center p-8 border border-[#BC8A5F]/20"
//           >
//             {/* Gold Foil Inner Border */}
//             <div className="absolute inset-4 border border-[#BC8A5F]/10 pointer-events-none" />

//             {/* Inner Content Typography */}
//             <div className="text-center space-y-6 max-w-md">
//               <motion.div
//                 animate={isOpen ? { scale: [0.8, 1], opacity: [0, 1] } : {}}
//                 className="w-12 h-12 border border-[#BC8A5F] rotate-45 mx-auto flex items-center justify-center"
//               >
//                 <span className="text-[#BC8A5F] -rotate-45 font-serif italic text-xl">
//                   D&L
//                 </span>
//               </motion.div>

//               <h3 className="text-2xl md:text-4xl font-serif italic text-[#3D3831]">
//                 Nhật Anh & Bích Ngọc
//               </h3>

//               <p className="text-[#5E584F] font-serif text-sm md:text-lg leading-relaxed">
//                 Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc nhất
//                 của chúng tôi.
//               </p>

//               <div className="pt-4 space-y-2">
//                 <div className="h-[1px] w-12 bg-[#BC8A5F]/40 mx-auto" />
//                 <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#BC8A5F]">
//                   11:00 AM — 01 . 10 . 2025
//                 </p>
//                 <p className="text-xs tracking-widest text-[#3D3831] uppercase">
//                   Hội trường Ánh Kim
//                 </p>
//               </div>
//             </div>

//             {/* "Confetti" Leaves when opening */}
//             <AnimatePresence>
//               {isOpen &&
//                 [...Array(6)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
//                     animate={{
//                       opacity: [0, 1, 0],
//                       scale: 1,
//                       x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 200 + 100),
//                       y: Math.random() * -200 - 50,
//                     }}
//                     transition={{ duration: 2, delay: 0.3 }}
//                     className="absolute text-[#BC8A5F]/40 pointer-events-none"
//                   >
//                     <svg
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12,2L4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15L12,2Z" />
//                     </svg>
//                   </motion.div>
//                 ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* 2. LEFT FLAP (Outer) */}
//           <motion.div
//             initial={false}
//             animate={{ rotateY: isOpen ? -130 : 0 }}
//             transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
//             className="absolute top-0 left-0 w-1/2 h-full origin-left preserve-3d z-30 shadow-[5px_0_15px_rgba(0,0,0,0.05)]"
//           >
//             <div className="absolute inset-0 bg-[#E9DCC9] border border-[#BC8A5F]/20 backface-hidden" />
//             {/* Inner of flap */}
//             <div className="absolute inset-0 bg-[#F5EFE6] rotate-y-180 backface-hidden border border-[#BC8A5F]/10" />
//           </motion.div>

//           {/* 3. RIGHT FLAP (Outer) */}
//           <motion.div
//             initial={false}
//             animate={{ rotateY: isOpen ? 130 : 0 }}
//             transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
//             className="absolute top-0 right-0 w-1/2 h-full origin-right preserve-3d z-30 shadow-[-5px_0_15px_rgba(0,0,0,0.05)]"
//           >
//             <div className="absolute inset-0 bg-[#E9DCC9] border border-[#BC8A5F]/20 backface-hidden" />
//             {/* Inner of flap */}
//             <div className="absolute inset-0 bg-[#F5EFE6] rotate-y-180 backface-hidden border border-[#BC8A5F]/10" />
//           </motion.div>

//           {/* 4. THE WAX SEAL (The Lock) */}
//           <motion.div
//             onClick={() => setIsOpen(!isOpen)}
//             animate={{
//               opacity: isOpen ? 0 : 1,
//               scale: isOpen ? 0.8 : 1,
//               z: isOpen ? 0 : 60,
//             }}
//             transition={{ duration: 0.4 }}
//             className="absolute inset-0 flex items-center justify-center z-40 cursor-pointer"
//           >
//             <div className="relative group">
//               {/* Outer Golden Glow */}
//               <div className="absolute inset-[-10px] bg-[#BC8A5F]/10 rounded-full blur-md group-hover:bg-[#BC8A5F]/20 transition-colors" />

//               {/* The Wax Seal Disc */}
//               <div className="relative w-20 h-20 bg-[#8B2323] rounded-full shadow-lg border-4 border-[#7A1F1F] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
//                 <span className="text-[#F5E6CA] font-serif italic text-2xl drop-shadow-md">
//                   L&N
//                 </span>
//                 {/* Wax "Drips" Effect */}
//                 <div className="absolute -bottom-1 left-4 w-4 h-4 bg-[#8B2323] rounded-full" />
//                 <div className="absolute -top-1 right-3 w-3 h-3 bg-[#8B2323] rounded-full" />
//               </div>

//               {/* Tooltip */}
//               <div className="absolute top-24 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity">
//                 <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#3D3831]">
//                   Chạm để mở
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* RE-OPEN BUTTON (Optional fallback) */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="mt-20 px-12 py-3 border border-[#BC8A5F]/40 text-[#3D3831] text-[11px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-[#3D3831] hover:text-white transition-all duration-500"
//       >
//         {isOpen ? "Đóng Thiệp" : "Mở Lại Thiệp"}
//       </button>

//       {/* CSS For 3D Effects */}
//       <style jsx global>{`
//         .perspective-2000 {
//           perspective: 2000px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// // 1. Updated: Internal falling leaf covering full width/height
// const InternalFallingLeaf = ({ delay }: { delay: number }) => (
//   <motion.svg
//     initial={{ y: -50, opacity: 0, x: Math.random() * 100 + "%" }}
//     animate={{
//       y: ["0%", "120%"], // Covers the full vertical height of the card
//       opacity: [0, 0.4, 0.4, 0],
//       rotate: [0, 360 + Math.random() * 360],
//     }}
//     transition={{
//       duration: 7 + Math.random() * 5,
//       repeat: Infinity,
//       delay,
//       ease: "linear",
//     }}
//     className="absolute w-3 h-3 md:w-5 md:h-5 text-[#BC8A5F]/30 pointer-events-none z-0"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M12,2L4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15L12,2Z" />
//   </motion.svg>
// );

// export default function WeddingInvitationCard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const leafColors = ["#BC8A5F", "#A27B5C", "#D4A373"];

//   return (
//     <section className="relative py-16 md:py-32 bg-[#FAF7F2] flex flex-col items-center overflow-hidden min-h-[750px]">
//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="text-center mb-12 md:mb-20 px-6"
//       >
//         <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.6em] font-bold block mb-2">
//           Private Invitation
//         </span>
//         <h2 className="text-4xl md:text-5xl font-light text-[#3D3831]">
//           Thiệp <span className="font-serif italic text-[#BC8A5F]">Cưới</span>
//         </h2>
//       </motion.div>

//       {/* RESPONSIVE 3D CONTAINER */}
//       <div className="relative w-[92vw] max-w-[750px] aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] perspective-2000">
//         <div className="relative w-full h-full preserve-3d">
//           {/* 1. THE INNER CONTENT (COFFEE THEME) */}
//           <motion.div
//             initial={false}
//             animate={{
//               z: isOpen ? 20 : 0,
//               scale: isOpen ? 1 : 0.95,
//               opacity: isOpen ? 1 : 0,
//             }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="absolute inset-0 bg-[#E9DCC9] shadow-2xl rounded-sm overflow-hidden border border-[#BC8A5F]/20 flex items-center justify-center"
//           >
//             {/* Coffee Texture & Gradient Overlay */}
//             <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
//             <div className="absolute inset-0 bg-gradient-to-b from-[#D7C2A6]/30 via-transparent to-[#BC8A5F]/10" />

//             {/* FULL-AREA CONTINUOUS DRIFT */}
//             <AnimatePresence>
//               {isOpen &&
//                 [...Array(15)].map((_, i) => (
//                   <InternalFallingLeaf key={`drift-${i}`} delay={i * 0.8} />
//                 ))}
//             </AnimatePresence>

//             {/* STATIONERY DESIGN */}
//             <div className="absolute inset-4 md:inset-8 border-[1px] border-[#BC8A5F]/30 pointer-events-none" />
//             <div className="absolute inset-[6px] md:inset-[12px] border-[1px] border-[#BC8A5F]/10 pointer-events-none" />

//             <div className="relative z-10 text-center flex flex-col items-center gap-4 md:gap-8 w-full px-6">
//               <motion.div
//                 animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <span className="text-[#3D3831] text-[9px] uppercase tracking-[0.4em] font-bold opacity-70">
//                   The Wedding of
//                 </span>
//               </motion.div>

//               <motion.h3
//                 animate={
//                   isOpen ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
//                 }
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-3xl md:text-5xl font-serif italic text-[#3D3831] leading-tight drop-shadow-sm"
//               >
//                 Nhật Anh <br />
//                 <span className="text-xl md:text-2xl not-italic font-light text-[#BC8A5F]">
//                   &
//                 </span>{" "}
//                 <br />
//                 Bích Ngọc
//               </motion.h3>

//               <motion.div
//                 animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ delay: 0.7 }}
//                 className="space-y-4"
//               >
//                 <p className="text-[#5E4B3C] font-serif text-sm md:text-lg italic max-w-md mx-auto leading-relaxed">
//                   "Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc
//                   nhất của chúng tôi."
//                 </p>
//                 <div className="pt-2">
//                   <div className="h-[1px] w-12 bg-[#3D3831]/20 mx-auto mb-4" />
//                   <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#3D3831]">
//                     20 . 12 . 2025 — 11:00 AM
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* 2. THE BURST CONFETTI */}
//           <AnimatePresence>
//             {isOpen &&
//               [...Array(25)].map((_, i) => (
//                 <motion.div
//                   key={`burst-${i}`}
//                   initial={{ opacity: 0, scale: 0, x: 0, y: 0, z: 100 }}
//                   animate={{
//                     opacity: [0, 1, 0],
//                     scale: [0.5, 1.4, 0.5],
//                     x:
//                       (Math.random() - 0.5) *
//                       (typeof window !== "undefined" && window.innerWidth < 768
//                         ? 350
//                         : 800),
//                     y: (Math.random() - 0.6) * 500,
//                     rotate: Math.random() * 720,
//                   }}
//                   transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
//                   className="absolute left-1/2 top-1/2 z-[60] pointer-events-none"
//                   style={{ color: leafColors[i % 3] }}
//                 >
//                   <svg
//                     className="w-6 h-6 md:w-10 md:h-10"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12,2L4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15L12,2Z" />
//                   </svg>
//                 </motion.div>
//               ))}
//           </AnimatePresence>

//           {/* 3. FLAPS */}
//           <motion.div
//             animate={{ rotateY: isOpen ? -115 : 0 }}
//             transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
//             className="absolute top-0 left-0 w-1/2 h-full origin-left preserve-3d z-30 shadow-2xl"
//           >
//             <div className="absolute inset-0 bg-[#E9DCC9] border border-[#BC8A5F]/20 backface-hidden" />
//             <div className="absolute inset-0 bg-[#D7C2A6] rotate-y-180 backface-hidden border border-[#BC8A5F]/10" />
//           </motion.div>

//           <motion.div
//             animate={{ rotateY: isOpen ? 115 : 0 }}
//             transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
//             className="absolute top-0 right-0 w-1/2 h-full origin-right preserve-3d z-30 shadow-2xl"
//           >
//             <div className="absolute inset-0 bg-[#E9DCC9] border border-[#BC8A5F]/20 backface-hidden" />
//             <div className="absolute inset-0 bg-[#D7C2A6] rotate-y-180 backface-hidden border border-[#BC8A5F]/10" />
//           </motion.div>

//           {/* 4. THE WAX SEAL */}
//           <motion.div
//             onClick={() => setIsOpen(!isOpen)}
//             animate={{
//               opacity: isOpen ? 0 : 1,
//               scale: isOpen ? 0.5 : 1,
//               z: isOpen ? 0 : 120,
//             }}
//             transition={{ duration: 0.4 }}
//             className="absolute inset-0 flex items-center justify-center z-40 cursor-pointer"
//           >
//             <div className="relative group">
//               <div className="absolute inset-[-15px] bg-[#BC8A5F]/20 rounded-full blur-xl animate-pulse" />
//               <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#8B2323] rounded-full shadow-2xl border-4 border-[#7A1F1F] flex items-center justify-center transform transition-transform group-hover:scale-110">
//                 <span className="text-[#F5E6CA] font-serif italic text-2xl md:text-3xl">
//                   N&B
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="mt-12 md:mt-20 px-12 py-3 border border-[#BC8A5F]/40 text-[#3D3831] text-[11px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-[#3D3831] hover:text-white transition-all duration-500"
//       >
//         {isOpen ? "Đóng Thiệp" : "Mở Thiệp Mời"}
//       </button>

//       <style jsx global>{`
//         .perspective-2000 {
//           perspective: 2000px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }

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

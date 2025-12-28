// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function HeroSectionStunningVintage() {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F2EDE4]">
//       {/* 1. STUNNING CSS BACKUP: Animated Gradient Background */}
//       {/* This shows immediately and stays if no image is present */}
//       <div className="absolute inset-0 z-0 bg-[#F2EDE4]">
//         <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,#D4A373_0%,transparent_50%),radial-gradient(circle_at_100%_0%,#E9C46A_0%,transparent_30%)] animate-pulse" />
//       </div>

//       {/* 2. THE IMAGE: With a transition for "Smooth Loading" */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: imageLoaded ? 0.4 : 0 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 z-10"
//       >
//         <img
//           src="/images/gallery3.jpg"
//           alt="Wedding"
//           onLoad={() => setImageLoaded(true)}
//           className="w-full h-full object-cover sepia-[0.3] brightness-90 contrast-110"
//         />
//       </motion.div>

//       {/* 3. RETRO OVERLAYS: Grain & Vignette */}
//       <div className="absolute inset-0 z-20 pointer-events-none">
//         {/* Grain Texture (CSS trick) */}
//         <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
//         {/* Soft Vignette to focus center */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(242,237,228,0.4)_100%)]" />
//       </div>

//       {/* 4. CONTENT: High Contrast for Readability */}
//       <div className="relative z-30 flex flex-col items-center max-w-5xl px-6 text-center">
//         {/* Floating Frames (Surprise UI) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//           className="absolute -top-20 md:-top-32 w-48 md:w-64 h-48 md:h-64 border-[0.5px] border-[#8C7851]/20 rounded-full flex items-center justify-center pointer-events-none"
//         >
//           <div className="w-[90%] h-[90%] border-[0.5px] border-[#8C7851]/10 rounded-full" />
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: {
//               opacity: 1,
//               y: 0,
//               transition: {
//                 staggerChildren: 0.2,
//                 duration: 0.8,
//                 ease: "easeOut",
//               },
//             },
//           }}
//           className="space-y-8"
//         >
//           {/* Top Label */}
//           <motion.p
//             variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             className="font-serif italic text-[#8C7851] text-lg tracking-[0.3em] uppercase"
//           >
//             Save the Date
//           </motion.p>

//           {/* Main Typography: Mix of Classic & Modern */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <h1 className="text-[12vw] md:text-8xl lg:text-9xl font-light text-[#3D3831] leading-none flex flex-col md:flex-row items-center justify-center gap-x-6">
//               <span>Lorem</span>
//               <span className="font-serif italic text-[#BC8A5F] text-[15vw] md:text-9xl">
//                 &
//               </span>
//               <span>Ipsum</span>
//             </h1>
//           </motion.div>

//           {/* Date with a sophisticated line element */}
//           <motion.div
//             variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             className="flex flex-col items-center gap-4"
//           >
//             <div className="w-12 h-[1px] bg-[#BC8A5F]/50" />
//             <div className="text-[#5E584F] text-sm md:text-base tracking-[0.4em] font-medium">
//               25 . 12 . 2020 <span className="mx-2 text-[#BC8A5F]">✦</span> 09 .
//               01 . 2021
//             </div>
//             <p className="text-[#8C7851] font-serif italic text-lg tracking-wide">
//               Hà Nội — Sài Gòn
//             </p>
//           </motion.div>

//           {/* Elegant Button */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="pt-6"
//           >
//             <motion.a
//               href="#details"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block px-10 py-4 bg-white/40 backdrop-blur-md border border-[#BC8A5F]/30 text-[#433E37] text-xs font-bold tracking-[0.2em] uppercase rounded-sm shadow-sm hover:shadow-xl hover:bg-[#BC8A5F] hover:text-white transition-all duration-500"
//             >
//               Explore Our Story
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Aesthetic Border Frame */}
//       <div className="absolute inset-6 border-[0.5px] border-[#8C7851]/10 pointer-events-none z-40 hidden md:block" />
//     </section>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

// 1. Animated Petal Component - Updated for Higher Visibility
const FloatingPetal = ({ delay, x }: { delay: number; x: string }) => (
  <motion.svg
    initial={{ y: -100, opacity: 0, rotate: 0 }}
    animate={{
      y: "110vh",
      // Increased opacity from 0.4 to 0.8 for "Heavier" look
      opacity: [0, 0.8, 0.8, 0],
      rotate: 360,
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      delay: delay,
      ease: "linear",
    }}
    // Changed color to a more saturated gold (#A27B5C) and added a drop shadow
    className="absolute w-6 h-6 text-[#A27B5C] z-10 drop-shadow-sm"
    style={{ left: x }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z" />
  </motion.svg>
);

export default function HeroSectionWeddingVintage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const flowerY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section
      ref={containerRef}
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

        {/* Floating Petals Layer - Added more for a richer feel */}
        <FloatingPetal delay={0} x="10%" />
        <FloatingPetal delay={4} x="25%" />
        <FloatingPetal delay={2} x="45%" />
        <FloatingPetal delay={7} x="60%" />
        <FloatingPetal delay={5} x="75%" />
        <FloatingPetal delay={3} x="90%" />
      </div>

      {/* 2. OPTIONAL IMAGE LAYER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 0.25 : 0 }}
        className="absolute inset-0 z-10"
      >
        <img
          src="/images/gallery3.jpg"
          alt="Wedding backdrop"
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover mix-blend-multiply filter sepia-[0.2] contrast-[0.8]"
        />
      </motion.div>

      {/* 3. SURPRISE UI: The "Living Flourishes" */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {/* Top Right Botanical Line - Color darkened for visibility */}
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

        {/* Bottom Left Botanical Line */}
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

      {/* 4. TEXTURE & VIGNETTE */}
      <div className="absolute inset-0 z-25 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-30 pointer-events-none" />

      {/* 5. MAIN CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="relative z-40 flex flex-col items-center px-6"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
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
              The Union Of
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
              Lorem <span className="font-serif italic text-[#BC8A5F]">&</span>{" "}
              Ipsum
            </h1>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="space-y-4"
          >
            <p className="text-[#5E584F] font-serif italic text-2xl">
              Twenty-fifth of December
            </p>
            <div className="h-[40px] w-[1px] bg-[#BC8A5F]/50 mx-auto" />
            <p className="text-[#3D3831] text-xs md:text-sm tracking-[0.4em] uppercase font-semibold">
              Hà Nội <span className="mx-4 text-[#BC8A5F]">|</span> Sài Gòn
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
                View Invitation
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 6. OUTER BORDER FRAME */}
      <div className="absolute inset-8 border border-[#D4A373]/30 pointer-events-none z-50 rounded-sm" />
    </section>
  );
}

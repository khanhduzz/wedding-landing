"use client";

import { motion } from "framer-motion";

export default function HeroSectionVintage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5efe6]">
      {/* Vintage paper texture overlay */}
      <img
        src="/images/vintage-paper-texture.jpg"
        alt="Paper texture"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Background photo with warm filter */}
      <img
        src="/images/gallery3.jpg"
        alt="Wedding background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 sepia-20 contrast-90"
      />

      {/* Soft warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a27b5c]/60 via-transparent to-[#3b2f2f]/50 mix-blend-multiply" />

      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      {/* Text content aligned right */}
      <div className="relative z-10 flex justify-end items-center w-full h-full px-8 sm:px-16 md:px-28 lg:px-40">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-2xl text-right text-[#3b2f2f] space-y-4"
        >
          <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6b4f3b] drop-shadow-sm">
            Chúng tôi kết hôn
          </h3>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-4 text-[#4b3a2f]">
            Lorem <span className="text-[#a27b5c]">&</span> Isbum
          </h1>

          <p className="text-lg sm:text-xl font-serif italic mb-8 text-[#5e4b3c] drop-shadow-sm">
            25/12/2020 – Hà Nội <span className="mx-2">⇌</span> 09/01/2021 – Sài
            Gòn
          </p>

          <motion.a
            href="#details"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-4 px-10 py-3 text-lg font-medium border border-[#a27b5c] rounded-full bg-[#f2e6d9]/70 hover:bg-[#a27b5c]/50 hover:text-white transition duration-300 backdrop-blur-sm shadow-lg"
          >
            Xem thêm
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

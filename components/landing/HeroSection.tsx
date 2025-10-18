"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base background (coffee tone) */}
      <img
        src="/images/gallery3.jpg"
        alt="Wedding background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] saturate-50"
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b2f2f]/70 via-transparent to-[#a27b5c]/50 mix-blend-multiply" />

      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

      {/* Masked couple color overlay */}
      {/* <img
        src="/images/gallery3.jpg"
        alt="Wedding couple color overlay"
        className="absolute inset-0 w-full h-full object-cover mix-blend-color-dodge opacity-80"
        style={{
          WebkitMaskImage: "url('/images/couple-mask.png')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: "url('/images/couple-mask.png')",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      /> */}

      {/* Right-aligned text, wider layout */}
      <div className="relative z-10 flex justify-end items-center w-full h-full px-8 sm:px-16 md:px-28 lg:px-40">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-2xl text-right text-white space-y-4"
        >
          <h3 className="font-script text-4xl sm:text-5xl md:text-8xl text-[#f2d7b6] drop-shadow-md">
            Lorem ipsum dolor
          </h3>

          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-semibold leading-tight mb-4">
            Lorem <span className="text-[#f7e0b2]">&</span> Isbum
          </h1>

          <p className="text-lg sm:text-xl font-light italic mb-8 text-gray-100 drop-shadow-sm">
            25/12/2020 – Hà Nội <span className="mx-2">⇌</span> 09/01/2021 – Sài
            Gòn
          </p>

          <motion.a
            href="#details"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-4 px-10 py-3 text-lg font-medium border border-white/80 rounded-full bg-white/10 hover:bg-white/80 hover:text-gray-900 transition duration-300 backdrop-blur-sm shadow-lg"
          >
            Xem thêm
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

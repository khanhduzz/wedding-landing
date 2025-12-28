"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Reusing your high-visibility leaf for consistency
const FloatingLeaf = ({
  delay,
  x,
  top,
}: {
  delay: number;
  x: string;
  top: string;
}) => (
  <motion.svg
    initial={{ y: 0, opacity: 0, rotate: 0 }}
    whileInView={{
      y: [0, 20, 0],
      opacity: [0, 0.6, 0.6, 0],
      rotate: [0, 45, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
    className="absolute w-6 h-6 text-[#A27B5C] z-10 pointer-events-none"
    style={{ left: x, top: top }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z" />
  </motion.svg>
);

export default function LoveStoryModernSection() {
  return (
    <section className="relative py-32 bg-[#FAF7F2] overflow-hidden">
      {/* 1. Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Floating Leaves specific to this section */}
      <FloatingLeaf delay={0} x="5%" top="10%" />
      <FloatingLeaf delay={3} x="90%" top="20%" />
      <FloatingLeaf delay={5} x="15%" top="80%" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content: The Story (Span 5) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-5 relative z-20"
        >
          {/* Section Label */}
          <span className="block text-[#BC8A5F] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
            Our Journey
          </span>

          <h2 className="text-4xl md:text-6xl font-light text-[#3D3831] leading-tight mb-8">
            Chuyện{" "}
            <span className="font-serif italic text-[#BC8A5F]">chúng mình</span>
          </h2>

          <div className="relative p-1 border-l border-[#BC8A5F]/30 pl-8">
            <p className="text-[#5E584F] leading-[2] font-serif text-lg font-light text-justify italic">
              &quot;Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
              cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed
              diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
              bibendum egestas.&quot;
            </p>

            <p className="mt-6 text-[#5E584F] leading-[1.8] font-sans text-base font-light text-justify">
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Quisque faucibus
              ex sapien vitae pellentesque sem placerat.
            </p>

            {/* Signature style closing */}
            <div className="mt-12">
              <span className="font-serif italic text-2xl text-[#3D3831]">
                D & L
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content: The Gallery Collage (Span 7) */}
        <div className="lg:col-span-7 relative min-h-[600px] flex items-center justify-center">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-[300px] h-[450px] md:w-[400px] md:h-[550px] z-10 border-[12px] border-white shadow-xl shadow-black/5 rotate-[-2deg]"
          >
            <Image
              src="/images/gallery1.jpg"
              alt="Main Story"
              fill
              className="object-cover grayscale-[0.2] sepia-[0.1]"
            />
          </motion.div>

          {/* Overlapping Small Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-10 right-0 md:right-10 w-[180px] h-[240px] md:w-[240px] md:h-[320px] z-20 border-[8px] border-white shadow-2xl rotate-[4deg]"
          >
            <Image
              src="/images/gallery2.jpg"
              alt="Detail"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlapping Small Image 2 (Polaroid) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-0 left-0 md:left-10 w-[160px] h-[200px] md:w-[220px] md:h-[280px] z-30 bg-white p-3 pb-10 shadow-2xl rotate-[-6deg]"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/gallery3.jpg"
                alt="Polaroid"
                fill
                className="object-cover saturate-50"
              />
            </div>
            <p className="absolute bottom-2 left-0 w-full text-center font-serif italic text-xs text-[#8C7851]">
              Sweet Memories
            </p>
          </motion.div>

          {/* Decorative SVG Ornament in background */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#BC8A5F]">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.1"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

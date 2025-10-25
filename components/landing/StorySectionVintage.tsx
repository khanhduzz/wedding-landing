"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySectionVintage() {
  return (
    <section className="relative py-32 bg-[#f7f1e8] overflow-hidden">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-30 mix-blend-multiply pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-20 items-start">
        {/* Left: Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-[#fdf9f4] border border-[#e2d2bf] shadow-[0_6px_25px_rgba(120,100,80,0.12)] rounded-3xl p-8 sm:p-10 md:p-16 flex flex-col justify-start"
        >
          {/* Decorative Icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <Image
              src="/icons/icon3.png"
              alt="decorative icon"
              width={72}
              height={72}
              className="opacity-90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-serif text-[#4b3a2f] mb-6 md:mb-10 text-center tracking-wide">
            Lorem ipsum dolor
          </h2>

          {/* Divider Line */}
          <div className="w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#c7a06b] to-transparent mx-auto mb-8 opacity-80" />

          {/* Story Text */}
          <p className="text-[#5b4638] leading-relaxed text-justify text-[16px] sm:text-[17px] md:text-[18px] font-light tracking-[0.02em] max-h-[28rem] overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
            sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
            vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
            convallis. Tempus leo eu aenean sed diam urna tempor.
          </p>

          {/* Subtle floral underline */}
          <div className="mt-8 flex justify-center opacity-60">
            <Image
              src="/icons/floral-line.png"
              alt="decorative floral line"
              width={120}
              height={20}
            />
          </div>
        </motion.div>

        {/* Right: Image Collage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative flex flex-col md:block justify-center items-center gap-8"
        >
          {/* Top Image */}
          <div className="relative w-full max-w-[500px] aspect-[3/2] md:w-[480px] md:h-[320px] rounded-2xl overflow-hidden border-[3px] border-[#d6c4ad] shadow-[0_8px_25px_rgba(80,60,40,0.15)] rotate-[-1deg] bg-[#f7eee3]">
            <Image
              src="/images/gallery1.jpg"
              alt="Couple in the field"
              fill
              className="object-cover saturate-[0.9] brightness-[0.95] sepia-[0.05] hover:scale-[1.05] transition-transform duration-1000"
            />
          </div>

          {/* Second Image (desktop layered) */}
          <div className="hidden md:block absolute top-[280px] left-[40px] w-[380px] h-[260px] rounded-2xl overflow-hidden border-[3px] border-[#d6c4ad] shadow-[0_8px_25px_rgba(80,60,40,0.15)] rotate-[3deg] bg-[#f7eee3]">
            <Image
              src="/images/gallery2.jpg"
              alt="Couple laughing"
              fill
              className="object-cover saturate-[0.9] brightness-[0.95] sepia-[0.05] hover:scale-[1.05] transition-transform duration-1000"
            />
          </div>

          {/* Mobile layout fallback */}
          <div className="md:hidden relative w-full max-w-[400px] aspect-[3/2] rounded-2xl overflow-hidden border-[3px] border-[#d6c4ad] shadow-[0_8px_25px_rgba(80,60,40,0.15)] bg-[#f7eee3]">
            <Image
              src="/images/gallery2.jpg"
              alt="Couple laughing"
              fill
              className="object-cover saturate-[0.9] brightness-[0.95] sepia-[0.05] hover:scale-[1.05] transition-transform duration-1000"
            />
          </div>

          {/* Polaroid Style Image */}
          <div className="relative md:absolute md:top-[520px] md:right-[20px] w-full max-w-[300px] md:w-[260px] md:h-[200px] bg-[#faf4ed] border-[3px] border-[#d6c4ad] shadow-[0_8px_25px_rgba(80,60,40,0.12)] rounded-[12px] rotate-[-2deg] overflow-hidden hover:scale-[1.03] transition-transform duration-500">
            <Image
              src="/images/gallery3.jpg"
              alt="Wedding kiss"
              fill
              className="object-cover saturate-[0.85] brightness-[0.94] sepia-[0.1] hover:scale-[1.1] transition-transform duration-1000"
            />
            <div className="absolute bottom-0 w-full bg-white/85 py-1 text-center text-sm font-serif text-[#70553e] italic tracking-wide">
              “Love in every glance”
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

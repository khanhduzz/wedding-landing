"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="relative py-32 bg-[#f4eee8] overflow-hidden">
      {/* Subtle paper texture */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-20 items-start">
        {/* Left: Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-[#f9f6f1] border border-[#d8cfc4] shadow-[0_8px_30px_rgba(0,0,0,0.05)] rounded-3xl p-8 sm:p-10 md:p-16 flex flex-col justify-start"
        >
          {/* Decorative Icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <Image
              src="/icons/icon3.png"
              alt="decorative icon"
              width={72}
              height={72}
              className="opacity-100"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-script text-[#4b3a2f] mb-6 md:mb-10 text-center tracking-wide">
            Chuyện chúng mình
          </h2>

          {/* Divider Line */}
          <div className="w-20 md:w-24 h-[2px] bg-[#c4a484] mx-auto mb-8 opacity-70" />

          {/* Story Text */}
          <p className="text-[#5e4b3c] text-justify leading-relaxed font-serif text-[16px] sm:text-[17px] md:text-[18px] font-light tracking-[0.015em] max-h-[28rem] overflow-y-auto">
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
        </motion.div>

        {/* Right: Image Collage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative flex flex-col md:block justify-center items-center gap-8"
        >
          {/* Mobile layout: stacked images */}
          <div className="relative w-full max-w-[500px] aspect-[3/2] md:w-[480px] md:h-[320px] rounded-2xl overflow-hidden border-[3px] border-[#d3c2b3] shadow-lg rotate-[-1deg] bg-[#f5ede5]">
            <Image
              src="/images/gallery1.jpg"
              alt="Couple in the field"
              fill
              className="object-cover saturate-[0.9] brightness-[0.95] hover:scale-[1.1] transition-transform duration-1000"
            />
          </div>

          {/* Desktop: layered look */}
          <div className="hidden md:block absolute top-[280px] left-[40px] w-[380px] h-[260px] rounded-2xl overflow-hidden border-[3px] border-[#d3c2b3] shadow-lg rotate-[3deg] bg-[#f5ede5]">
            <Image
              src="/images/gallery2.jpg"
              alt="Couple laughing"
              fill
              className="object-cover saturate-[0.9] brightness-[0.95] hover:scale-[1.1] transition-transform duration-1000"
            />
          </div>

          {/* Mobile: show second image normally below */}
          <div className="md:hidden relative w-full max-w-[400px] aspect-[3/2] rounded-2xl overflow-hidden border-[3px] border-[#d3c2b3] shadow-lg bg-[#f5ede5]">
            <Image
              src="/images/gallery2.jpg"
              alt="Couple laughing"
              fill
              className="object-cover saturate-[0.9] brightness-[0.95] hover:scale-[1.1] transition-transform duration-1000"
            />
          </div>

          {/* Polaroid Style */}
          <div className="relative md:absolute md:top-[520px] md:right-[20px] w-full max-w-[300px] md:w-[260px] md:h-[200px] bg-[#f9f3ec] border-[3px] border-[#d3c2b3] shadow-lg rounded-[12px] rotate-[-2deg] overflow-hidden hover:scale-[1.03] transition-transform duration-500">
            <Image
              src="/images/gallery3.jpg"
              alt="Wedding kiss"
              fill
              className="object-cover saturate-[0.85] brightness-[0.95] hover:scale-[1.1] transition-transform duration-1000"
            />
            <div className="absolute bottom-0 w-full bg-white/80 py-1 text-center text-sm font-serif text-[#6a5240] italic">
              “Love in every glance”
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

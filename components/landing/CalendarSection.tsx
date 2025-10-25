"use client";

import { motion } from "framer-motion";

export default function CalendarSection() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const highlightDay = 12; // Example wedding day

  return (
    <section className="relative py-24 bg-[#f9f6f1] overflow-hidden">
      <div className="relative mx-auto max-w-[600px] text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-10"
        >
          Tháng 10
        </motion.h2>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-4 text-[#6a5647] font-serif">
          {days.map((d, i) => (
            <div
              key={i}
              className="text-sm tracking-wider text-[#9b6a3b] uppercase"
            >
              {d}
            </div>
          ))}
          {dates.map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.1 }}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                ${
                  num === highlightDay
                    ? "bg-[#d9b99b] text-white shadow-md font-semibold"
                    : "hover:bg-[#f1e2d1] hover:text-[#4b3a2f]"
                }`}
            >
              {num}
              {num === highlightDay && (
                <motion.span
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-script text-[#4b3a2f]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Lễ cưới
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#c4a484] mx-auto mt-16 mb-8 opacity-60" />

        {/* Subtitle */}
        <p className="text-[#6a5647] font-serif italic text-lg">
          Thân mời quý khách đến dự lễ cưới thân mật
        </p>
      </div>
    </section>
  );
}

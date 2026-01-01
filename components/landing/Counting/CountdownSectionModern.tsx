"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Floating Leaf Component for consistency
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
      opacity: [0, 0.7, 0.7, 0],
      rotate: [0, 90, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      delay: delay,
      ease: "linear",
    }}
    className="absolute w-5 h-5 text-[#A27B5C] z-10 pointer-events-none"
    style={{ left: x, top: top }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z" />
  </motion.svg>
);

export default function CountdownSectionModern() {
  const weddingDate = new Date("2026-01-20T10:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-[#FAF7F2] overflow-hidden">
      {/* 1. SECTION DECOR */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <FloatingLeaf delay={1} x="80%" top="10%" />
      <FloatingLeaf delay={4} x="10%" top="60%" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="block text-[#BC8A5F] text-[10px] uppercase tracking-[0.6em] font-bold mb-4">
            Save The Date
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#3D3831]">
            {/* Cùng đếm ngược{" "} */}
            <span className="font-serif italic text-[#BC8A5F]">
              Cùng đếm ngược đến ngày vui...
            </span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#BC8A5F]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#BC8A5F]" />
            <div className="w-8 h-[1px] bg-[#BC8A5F]/40" />
          </div>
        </motion.div>

        {/* 2. THE COUNTDOWN UNITS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Ngày", value: timeLeft.days },
            { label: "Giờ", value: timeLeft.hours },
            { label: "Phút", value: timeLeft.minutes },
            { label: "Giây", value: timeLeft.seconds },
          ].map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Spinning Decorative Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] border border-dashed border-[#BC8A5F]/20 rounded-full"
              />

              {/* Main Circle */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#D4A373]/20 overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,#FAF7F2_100%)] opacity-50" />

                <span className="relative z-10 text-3xl md:text-4xl font-light text-[#3D3831] tracking-tighter">
                  {t.value.toString().padStart(2, "0")}
                </span>
                <span className="relative z-10 text-[9px] uppercase tracking-[0.3em] font-bold text-[#BC8A5F] mt-2">
                  {t.label}
                </span>

                {/* Shimmer Effect on hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#BC8A5F]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. FINAL DECORATIVE LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20 h-[1px] w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-[#BC8A5F]/40 to-transparent"
        />
      </div>
    </section>
  );
}

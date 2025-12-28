"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownSectionVintage() {
  const weddingDate = new Date("2025-12-20T10:00:00");
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
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-3xl md:text-3xl text-[#4b3a2f] mb-6"
        >
          Cùng đếm ngược nào...
        </motion.h2>

        {/* Subtext */}
        <p className="text-[#6a5647] font-serif italic mb-12">
          {/* Cùng nhau chờ đón khoảnh khắc ngọt ngào */}
        </p>

        {/* Countdown boxes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-6 text-[#4b3a2f] font-serif"
        >
          {[
            { label: "Ngày", value: timeLeft.days },
            { label: "Giờ", value: timeLeft.hours },
            { label: "Phút", value: timeLeft.minutes },
            { label: "Giây", value: timeLeft.seconds },
          ].map((t, i) => (
            <motion.div
              key={t.label}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-[#fdfaf6] rounded-full shadow-lg ring-1 ring-[#d9b99b]/60 flex flex-col items-center justify-center"
              style={{ zIndex: 10 - i }}
            >
              <span className="text-3xl font-bold text-[#9b6a3b]">
                {t.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#6a5647] mt-1">
                {t.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

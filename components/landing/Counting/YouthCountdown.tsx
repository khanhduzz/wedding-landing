"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TwinkleStar = ({
  delay,
  x,
  top,
}: {
  delay: number;
  x: string;
  top: string;
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1.2, 0],
      opacity: [0, 1, 0],
      rotate: [0, 90, 180],
    }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className="absolute text-yellow-400 text-2xl z-10 pointer-events-none"
    style={{ left: x, top: top }}
  >
    ✨
  </motion.div>
);

export default function YouthCountdown({ dict }: { dict: any }) {
  const c = dict.countdown;
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
  }, [weddingDate]);

  const timeUnits = [
    {
      key: "days",
      value: timeLeft.days,
      color: "bg-[#FF6B6B]",
      shadow: "shadow-[#ee5253]",
    },
    {
      key: "hours",
      value: timeLeft.hours,
      color: "bg-[#4834d4]",
      shadow: "shadow-[#30336b]",
    },
    {
      key: "minutes",
      value: timeLeft.minutes,
      color: "bg-[#f0932b]",
      shadow: "shadow-[#e67e22]",
    },
    {
      key: "seconds",
      value: timeLeft.seconds,
      color: "bg-[#6ab04c]",
      shadow: "shadow-[#4bad32]",
    },
  ];

  return (
    <section className="relative py-32 bg-[#e0f2fe] overflow-hidden">
      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] text-6xl opacity-30 select-none"
      >
        ☁️
      </motion.div>
      <motion.div
        animate={{ x: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[5%] text-7xl opacity-20 select-none"
      >
        ☁️
      </motion.div>

      <TwinkleStar delay={0} x="15%" top="20%" />
      <TwinkleStar delay={1.5} x="85%" top="50%" />
      <TwinkleStar delay={0.8} x="50%" top="80%" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 relative inline-block"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-1 bg-dashed border-t-2 border-blue-400/50 border-dashed" />

          <span className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-sm mb-4 border-2 border-blue-600 transform -rotate-2">
            {c.saveTheDate}
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-blue-900 drop-shadow-[4px_4px_0px_#fff]">
            {c.title}
          </h2>

          <div className="mt-4 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-3 h-3 rounded-full bg-pink-400"
              />
            ))}
          </div>
        </motion.div>

        {/* Countdown Units */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {timeUnits.map((t, i) => (
            <motion.div
              key={t.key}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 5 : -5 }}
              className="relative"
            >
              {/* Box*/}
              <div
                className={`relative aspect-square ${t.color} rounded-3xl flex flex-col items-center justify-center border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden group`}
              >
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_50%,#fff_50%,#fff_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />

                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={t.value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 text-5xl md:text-7xl font-black text-white"
                  >
                    {t.value.toString().padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>

                <span className="relative z-10 text-xs md:text-sm uppercase font-black text-white/90 tracking-widest mt-2 bg-black/20 px-3 py-1 rounded-full">
                  {c.units[t.key]}
                </span>

                {/* Sticker*/}
                <div className="absolute top-2 right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  ⭐
                </div>
              </div>

              {i < 3 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 text-4xl font-black text-blue-300">
                  :
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 relative">
          <motion.div
            animate={{ x: ["-100%", "200%"], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 text-3xl"
          >
            ✈️
          </motion.div>
          <p className="font-serif italic text-2xl text-blue-800/60">
            Cùng chờ đón khoảnh khắc tuyệt vời nhất...
          </p>
          <div className="mt-4 flex justify-center">
            <svg
              width="100"
              height="20"
              viewBox="0 0 100 20"
              className="text-blue-400 fill-none stroke-current stroke-2"
            >
              <path d="M0,10 Q25,0 50,10 T100,10" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

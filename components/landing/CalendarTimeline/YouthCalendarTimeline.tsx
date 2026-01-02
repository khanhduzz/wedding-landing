"use client";
import { motion } from "framer-motion";

// DỮ LIỆU CỐ ĐỊNH (Vì các thông số này không thay đổi theo ngôn ngữ)
const WEDDING_CONFIG = {
  monthNumber: "12",
  highlightDay: 20,
  timelineIcons: ["🏫", "🥂", "🎊"], // Icon cho từng mốc trong ct.eventLabels
  dressColors: [
    { hex: "#9b6a3b", label: "Mochaccino" },
    { hex: "#e7c8a2", label: "Latte" },
    { hex: "#e8b5a0", label: "Peach" },
    { hex: "#a4383e", label: "Bordeaux" },
    { hex: "#f3d9c2", label: "Cream" },
  ],
};

export default function CalendarTimelineUltimateDict({ dict }: { dict: any }) {
  // Shortcut truy cập dictionary
  const ct = dict.calendarTimeline;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section
      id="timeline"
      className="relative py-32 bg-[#2D241E] overflow-hidden font-sans"
    >
      {/* Nền mặt bàn gỗ tối */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />

      {/* Hiệu ứng ánh đèn bàn */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-yellow-100/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 flex flex-col items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full items-start">
          {/* === CỘT TRÁI: CALENDAR (Trang giấy xé từ sổ tay) === */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ rotate: -5, y: 20 }}
              whileInView={{ rotate: -2, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#fffdf0] p-8 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-b-[8px] border-r-[8px] border-gray-300/50"
              style={{ clipPath: "polygon(0% 0%, 100% 1%, 99% 99%, 1% 100%)" }}
            >
              {/* Lỗ xé giấy ruy-băng */}
              <div className="absolute -top-3 left-0 w-full flex justify-around opacity-20">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 bg-[#2D241E] rounded-full shadow-inner"
                  />
                ))}
              </div>

              <div className="text-center mb-10">
                <h2 className="text-4xl font-black text-blue-900 uppercase tracking-tighter italic">
                  {ct.month}{" "}
                  <span className="text-7xl text-pink-500 block md:inline leading-none">
                    {WEDDING_CONFIG.monthNumber}
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-7 gap-y-6">
                {days.map((d) => (
                  <div
                    key={d}
                    className="text-[10px] font-black text-gray-400 uppercase text-center"
                  >
                    {d}
                  </div>
                ))}
                {dates.map((num) => (
                  <div
                    key={num}
                    className="relative flex items-center justify-center text-lg font-bold"
                  >
                    {num === WEDDING_CONFIG.highlightDay && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute w-12 h-12 border-2 border-dashed border-pink-400 rounded-full"
                      />
                    )}
                    <span
                      className={
                        num === WEDDING_CONFIG.highlightDay
                          ? "text-pink-600 text-2xl font-black scale-110"
                          : "text-gray-700 opacity-40"
                      }
                    >
                      {num}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* STICKY NOTE (Kéo thả được - Dùng Dict) */}
            <motion.div
              drag
              dragConstraints={{
                left: -100,
                right: 100,
                top: -100,
                bottom: 100,
              }}
              className="absolute -bottom-10 -right-4 md:-right-10 bg-yellow-300 p-6 shadow-2xl rotate-12 w-52 cursor-grab active:cursor-grabbing z-20 border-l-4 border-yellow-400"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-white/40 rotate-[-5deg]" />{" "}
              {/* Băng dính giả */}
              <p className="font-serif text-yellow-900 font-black italic text-xl leading-tight text-center">
                {ct.inviteNote}
              </p>
            </motion.div>
          </div>

          {/* === CỘT PHẢI: TIMELINE & DRESSCODE === */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Timeline Bảng Đen */}
            <div className="relative p-8 md:p-12 border-4 border-dashed border-white/10 rounded-[40px] bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-12">
                <h3 className="text-white text-3xl font-black italic tracking-tighter uppercase">
                  {ct.timelineTitle}
                </h3>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-white/40 to-transparent" />
              </div>

              <div className="space-y-12">
                {ct.eventLabels.map((label: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 15 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl border-2 border-white/20 flex items-center justify-center text-4xl bg-white/5 group-hover:bg-yellow-400 group-hover:border-black transition-all duration-300 group-hover:-rotate-6">
                        {WEDDING_CONFIG.timelineIcons[i]}
                      </div>
                      {i < ct.eventLabels.length - 1 && (
                        <div className="absolute top-20 left-1/2 w-[2px] h-12 bg-dashed bg-gradient-to-b from-white/20 to-transparent" />
                      )}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-yellow-400 font-black tracking-[0.2em] text-sm uppercase">
                        {/* Nếu bạn có mảng time trong config, hãy dùng nó ở đây */}
                        {i === 0
                          ? "10:30 AM"
                          : i === 1
                            ? "11:30 AM"
                            : "12:00 PM"}
                      </span>
                      <span className="text-white text-3xl font-bold tracking-tight group-hover:text-yellow-400 transition-colors">
                        {label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dresscode Hộp Màu (Dùng Dict) */}
            <div className="relative group">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🎨</span>
                <h4 className="text-white/60 font-black uppercase tracking-[0.3em] text-xs">
                  {ct.dresscodeTitle}
                </h4>
              </div>

              <div className="flex flex-wrap gap-4">
                {WEDDING_CONFIG.dressColors.map((color, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.05 }}
                    initial={{ rotate: i % 2 === 0 ? 5 : -5 }}
                    className="px-5 py-3 rounded-xl border border-white/10 flex items-center gap-3 bg-white/5 hover:bg-white hover:text-black transition-all cursor-default shadow-lg group/item"
                  >
                    <div
                      className="w-5 h-5 rounded-full shadow-inner border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-white group-hover/item:text-black font-black text-[10px] uppercase tracking-widest">
                      {color.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-pink-500/10 border-l-4 border-pink-500 text-pink-200 font-serif italic text-sm">
                &quot;{ct.dresscodeNote}&quot;
              </div>
            </div>
          </div>
        </div>

        {/* Trang trí chân trang */}
        <div className="mt-24 opacity-5 flex items-center gap-10 select-none">
          <div className="h-1 flex-grow bg-white" />
          <span className="text-white text-9xl font-black">2026</span>
          <div className="h-1 flex-grow bg-white" />
        </div>
      </div>

      <style jsx>{`
        section::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            transparent 20%,
            rgba(0, 0, 0, 0.6) 100%
          );
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const WEDDING_CONFIG = {
  monthNumber: "12",
  highlightDay: 20,
  timeline: [
    { time: "10:30 AM", icon: "/icons/flower-1.png" },
    { time: "11:30 AM", icon: "/icons/ring.png" },
    { time: "12:00 PM", icon: "/icons/dish.png" },
  ],
  dressColors: [
    { hex: "#9b6a3b", label: "Mochaccino" },
    { hex: "#e7c8a2", label: "Latte" },
    { hex: "#e8b5a0", label: "Peach" },
    { hex: "#a4383e", label: "Bordeaux" },
    { hex: "#f3d9c2", label: "Cream" },
  ],
};

export default function CalendarTimelineOrigin({ dict }: { dict: any }) {
  const ct = dict.calendarTimeline;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section
      id="timeline"
      className="relative py-24 bg-[#FAF7F2] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#BC8A5F"
          strokeWidth="0.5"
        >
          <path d="M100,0 Q70,50 100,100" />
          <path d="M100,20 Q80,50 100,80" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* === LEFT: CALENDAR === */}
        <div className="relative flex flex-col items-center">
          <div className="relative bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(188,138,95,0.1)] border border-white w-full">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#3D3831]">
                {ct.month}{" "}
                <span className="text-[#BC8A5F]">
                  {WEDDING_CONFIG.monthNumber}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-7 gap-2 md:gap-3">
              {days.map((d, i) => (
                <div
                  key={i}
                  className="text-[10px] tracking-widest text-[#BC8A5F]/60 uppercase font-bold text-center pb-4"
                >
                  {d}
                </div>
              ))}
              {dates.map((num) => (
                <div
                  key={num}
                  className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                >
                  {num === WEDDING_CONFIG.highlightDay && (
                    <>
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-1 bg-[#BC8A5F]/20 rounded-full border-2 border-[#BC8A5F]/40"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.1 }}
                      />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-serif italic text-[#3D3831] whitespace-nowrap">
                        {ct.weddingDayLabel}
                      </span>
                    </>
                  )}
                  <span
                    className={`relative z-10 text-sm font-serif ${num === WEDDING_CONFIG.highlightDay ? "text-[#3D3831] font-bold" : "text-[#3D3831]/60"}`}
                  >
                    {num}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#6a5647] font-serif italic text-lg mt-14 opacity-80 text-center">
            {ct.inviteNote}
          </p>
        </div>

        {/* === RIGHT: TIMELINE & DRESSCODE === */}
        <div className="flex flex-col space-y-16">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#3D3831] text-center lg:text-left">
              {ct.timelineTitle}
            </h3>

            <div className="relative space-y-8 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-[1px] before:bg-[#BC8A5F]/30">
              {WEDDING_CONFIG.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center gap-10 group"
                >
                  <div className="relative z-10 w-16 h-16 bg-white rounded-2xl shadow-md border border-[#BC8A5F]/10 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#BC8A5F] tracking-widest">
                      {item.time}
                    </span>

                    <span className="text-xl font-serif text-[#3D3831]">
                      {ct.eventLabels[index]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#E9DCC9]/20 p-10 rounded-[2.5rem] border border-[#BC8A5F]/10 text-center">
            <h4 className="font-serif italic text-[#3D3831] mb-10 text-2xl md:text-3xl">
              {ct.dresscodeTitle}
            </h4>
            <div className="flex justify-center -space-x-3 md:-space-x-5 mb-10">
              {WEDDING_CONFIG.dressColors.map((color, i) => (
                <div key={i} className="group relative">
                  <motion.span
                    whileHover={{ y: -10 }}
                    className="block w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg border-4 border-white cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all z-50">
                    <span className="text-[10px] font-bold text-[#BC8A5F] bg-white px-2 py-1 rounded shadow-sm border border-[#BC8A5F]/10 uppercase">
                      {color.label}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#6a5647] font-serif italic opacity-60 text-sm">
              {ct.dresscodeNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

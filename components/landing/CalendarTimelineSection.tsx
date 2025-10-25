"use client";

import { motion } from "framer-motion";

export default function CalendarTimelineSection() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const highlightDay = 12; // Wedding day highlight

  const timelineItems = [
    {
      time: "10:30",
      label: "ĐÓN KHÁCH",
      icon: "/icons/flower-1.png",
      delay: 0,
    },
    {
      time: "11:30",
      label: "LỄ THÀNH HÔN",
      icon: "/icons/ring.png",
      delay: 0.2,
    },
    {
      time: "12:00",
      label: "KHAI TIỆC",
      icon: "/icons/dish.png",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative py-24 bg-[#f9f6f1] overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* === CALENDAR === */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-10"
          >
            Tháng 10
          </motion.h2>

          {/* Calendar grid */}
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
                whileHover={{ scale: 1.3 }}
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
                    className="absolute w-full -bottom-5 left-1/2 -translate-x-1/2 text-xs font-script text-[#4b3a2f]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Lễ cưới
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Optional note under calendar */}
          <p className="text-[#6a5647] font-serif italic text-lg mt-12">
            Thân mời quý khách đến dự lễ cưới thân mật
          </p>
        </div>

        {/* === TIMELINE === */}
        <div className="flex flex-col items-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-10"
          >
            Timeline
          </motion.h3>

          <div className="flex flex-col pl-12 items-center gap-10 w-full max-w-sm">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                className="flex items-center justify-start w-full gap-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0 flex justify-center items-center w-32 h-32">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-28 h-28 object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center text-left leading-snug">
                  <span className="text-xl text-[#4b3a2f] font-script font-medium tracking-wide">
                    {item.time}
                  </span>
                  <span className="text-[#6a5647] font-serif text-lg">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-script text-[#4b3a2f] text-center mb-6">
          Dress code
        </h3>
      </div>
      {/* <div className="flex justify-center -space-x-5">
        {["#9b6a3b", "#e7c8a2", "#e8b5a0", "#a4383e", "#f3d9c2"].map(
          (color, i) => (
            <span
              key={i}
              className="w-13 h-13 rounded-full shadow-lg hover:scale-150 transition-transform duration-500"
              style={{
                backgroundColor: color,
                zIndex: 5 - i,
              }}
            />
          )
        )}
      </div> */}
      <div className="flex justify-center -space-x-5">
        {["#9b6a3b", "#e7c8a2", "#e8b5a0", "#a4383e", "#f3d9c2"].map(
          (color, i) => (
            <span
              key={i}
              className={`w-13 h-13 rounded-full shadow-lg hover:scale-150 transition-transform duration-500 bg-[${color}] z-[${5 - i}]`}
            />
          )
        )}
      </div>
    </section>
  );
}

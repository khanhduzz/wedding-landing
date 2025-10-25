"use client";

import { motion } from "framer-motion";

export default function TimelineSection() {
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
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-15 mix-blend-multiply pointer-events-none" />

      <div className="relative mx-auto max-w-[400px] px-6">
        {/* Timeline list */}
        <div className="flex flex-col items-center gap-10">
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
              <div className="flex-shrink-0 flex justify-center items-center w-40 h-40">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-40 h-40 object-contain"
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

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#c4a484] mx-auto mt-16 mb-8 opacity-60" />

        {/* Dress code */}
        <h3 className="text-3xl md:text-4xl font-script text-[#4b3a2f] text-center mb-6">
          Dress code
        </h3>

        {/* Palette */}
        {/* <div className="flex justify-center -space-x-4">
          <span className="w-10 h-10 rounded-full bg-[#9b6a3b]" />
          <span className="w-10 h-10 rounded-full bg-[#e7c8a2]" />
          <span className="w-10 h-10 rounded-full bg-[#e8b5a0]" />
          <span className="w-10 h-10 rounded-full bg-[#a4383e]" />
          <span className="w-10 h-10 rounded-full bg-[#f3d9c2]" />
        </div> */}

        <div className="flex justify-center -space-x-5">
          {["#9b6a3b", "#e7c8a2", "#e8b5a0", "#a4383e", "#f3d9c2"].map(
            (color, i) => (
              <span
                key={i}
                className="w-20 h-20 rounded-full shadow-lg hover:scale-150 transition-transform duration-300"
                style={{
                  backgroundColor: color,
                  zIndex: 5 - i,
                }}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

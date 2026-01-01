"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Reusing the consistent high-visibility leaf
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
      y: [0, 25, 0],
      opacity: [0, 0.7, 0.7, 0],
      rotate: [0, 120, 0],
    }}
    transition={{ duration: 10, repeat: Infinity, delay, ease: "linear" }}
    className="absolute w-5 h-5 text-[#A27B5C] z-10 pointer-events-none"
    style={{ left: x, top: top }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z" />
  </motion.svg>
);

export default function WeddingInfoModern() {
  const places = [
    {
      title: "Lễ Thành Hôn",
      time: "10:00 AM",
      location: "Grand Palace",
      desc: "Buổi lễ thiêng liêng được tổ chức tại Grand Palace — nơi tình yêu bắt đầu một hành trình mới.",
      map: "https://maps.app.goo.gl/tFmp2cmgL6ptUM9M9",
      img: "/images/grand-palace.jpg",
    },
    {
      title: "Tiệc Chiêu Đãi",
      time: "06:00 PM",
      location: "The Adora",
      desc: "Cùng chung vui trong không gian ấm áp tại The Adora — nơi âm nhạc và niềm vui hòa quyện.",
      map: "https://maps.app.goo.gl/gSwWkvh2tbyZ6DgLA",
      img: "/images/the-adora.webp",
    },
  ];

  return (
    <section className="relative py-32 bg-[#FAF7F2] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <FloatingLeaf delay={2} x="85%" top="15%" />
      <FloatingLeaf delay={5} x="10%" top="75%" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
            The Celebration
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-[#3D3831]">
            {/* Ngày{" "} */}
            <span className="font-serif italic text-[#BC8A5F]">
              Ngày Trọng Đại
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-[#BC8A5F] mx-auto mt-6" />
        </motion.div>

        {/* Place Cards */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {places.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Image Frame with Offset Shadow */}
              <div className="relative aspect-[4/3] mb-10">
                {/* Decorative border behind image */}
                <div className="absolute inset-4 border border-[#BC8A5F]/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />

                <div className="relative w-full h-full overflow-hidden border-8 border-white shadow-xl">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover saturate-[0.8] hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left space-y-4">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-[#BC8A5F]/20 pb-4">
                  <h3 className="text-3xl font-serif italic text-[#3D3831]">
                    {p.title}
                  </h3>
                  <span className="text-[#BC8A5F] font-bold tracking-widest text-xs uppercase">
                    {p.time}
                  </span>
                </div>

                <p className="text-[#8C7851] font-bold text-sm tracking-widest uppercase">
                  {p.location}
                </p>

                <p className="text-[#5E584F] font-serif text-lg leading-relaxed italic">
                  {p.desc}
                </p>

                <div className="pt-4">
                  <a
                    href={p.map}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#3D3831] hover:text-[#BC8A5F] transition-colors group"
                  >
                    <span>View on Map</span>
                    <div className="w-8 h-[1px] bg-[#BC8A5F] transition-all group-hover:w-12" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtitle Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-[#8C7851] font-serif italic text-xl max-w-xl mx-auto leading-relaxed">
            &quot;Chúng tôi mong được đón tiếp bạn trong ngày tràn ngập yêu
            thương này.&quot;
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#BC8A5F]/30"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

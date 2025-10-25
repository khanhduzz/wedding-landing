"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingInfoVintage() {
  const places = [
    {
      title: "Lễ Thành Hôn",
      img: "/images/grand-palace.jpg",
      desc: "Buổi lễ thiêng liêng được tổ chức tại Grand Palace — nơi tình yêu bắt đầu một hành trình mới.",
      map: "https://maps.app.goo.gl/tFmp2cmgL6ptUM9M9",
    },
    {
      title: "Tiệc Chiêu Đãi",
      img: "/images/the-adora.webp",
      desc: "Cùng chung vui trong không gian ấm áp tại The Adora — nơi âm nhạc và niềm vui hòa quyện.",
      map: "https://maps.app.goo.gl/gSwWkvh2tbyZ6DgLA",
    },
  ];

  return (
    <section className="relative py-24 bg-[#faf7f3] overflow-hidden">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-25 mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center font-script text-4xl md:text-5xl text-[#4b3a2f] mb-12"
        >
          Ngày Trọng Đại Của Chúng Tôi
        </motion.h2>

        {/* Place Cards */}
        <div className="grid sm:grid-cols-2 gap-10">
          {places.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#fdfaf6] rounded-3xl overflow-hidden shadow-lg ring-1 ring-[#e7c8a2]/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Vintage overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#f9f6f1]/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-3 font-serif text-[#6a5647]">
                <h3 className="text-2xl font-script text-[#9b6a3b]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed">{p.desc}</p>
                <a
                  href={p.map}
                  target="_blank"
                  className="inline-block mt-2 text-[#a05a3b] hover:text-[#4b3a2f] underline decoration-[#d9b99b]/60 decoration-2 transition-colors"
                >
                  Xem trên Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#c4a484] mx-auto mt-16 opacity-60" />

        {/* Subtitle */}
        <p className="text-center text-[#6a5647] font-serif italic mt-8 text-lg">
          Chúng tôi mong được đón tiếp bạn trong ngày tràn ngập yêu thương này.
        </p>
      </div>
    </section>
  );
}

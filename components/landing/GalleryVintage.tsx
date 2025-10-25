"use client";

import { motion } from "framer-motion";

export default function GalleryVintage() {
  const imgs = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ];

  return (
    // <section className="relative py-24 bg-[#f9f6f1] overflow-hidden">
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-10"
        >
          Hành Trình Của Chúng Tôi
        </motion.h2>

        {/* Subtext */}
        <p className="text-[#6a5647] font-serif italic mb-12 max-w-2xl mx-auto">
          Những khoảnh khắc ngọt ngào và kỷ niệm đáng nhớ trên hành trình yêu
          thương.
        </p>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imgs.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-md ring-1 ring-[#d9b99b]/60"
            >
              {/* Image */}
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-[#00000033] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Decorative frame corners */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#c4a484]/60" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#c4a484]/60" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#c4a484]/60" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#c4a484]/60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#c4a484] mx-auto mt-16 opacity-60" />

        {/* Caption */}
        <p className="text-[#6a5647] font-serif italic mt-8 text-lg">
          Mỗi bức hình là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm.
        </p>
      </div>
    </section>
  );
}

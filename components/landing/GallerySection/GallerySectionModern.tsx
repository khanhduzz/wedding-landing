"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

export default function GalleryVintage() {
  const imgs = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/the-adora.webp",
    "/images/hero-img-2.jpg",
    "/images/hero.jpg",
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/the-adora.webp",
    "/images/hero-img-2.jpg",
    "/images/hero.jpg",
  ];

  const randomized = useMemo(
    () =>
      imgs.map((src, i) => ({
        src,
        sizeClass: ["h-48", "h-64", "h-80", "h-[24rem]"][
          Math.floor(Math.random() * 4)
        ],
        delay: (i % 5) * 0.1,
      })),
    []
  );

  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      setIsMobile(mobile);
      setVisibleCount(mobile ? 4 : 10);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMore = () => setVisibleCount((v) => v + (isMobile ? 4 : 6));

  return (
    <section
      id="gallery"
      className="relative py-24 bg-[#FAF7F2] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.6em] font-bold block mb-4"
          >
            Our Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-[#3D3831]"
          >
            {/* Hành Trình{" "} */}
            <span className="font-serif italic text-[#BC8A5F]">
              Hành Trình Của Chúng Tôi
            </span>
          </motion.h2>
          <p className="mt-6 text-[#6a5647] font-serif italic max-w-2xl mx-auto opacity-80 text-lg">
            &quot;Những khoảnh khắc ngọt ngào và kỷ niệm đáng nhớ trên hành
            trình yêu thương.&quot;
          </p>
        </div>

        {/* Gallery grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {randomized
            .slice(0, visibleCount)
            .map(({ src, sizeClass, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
                onClick={() => setSelected(src)}
                className={`relative group cursor-pointer overflow-hidden rounded-sm bg-white p-2 shadow-xl border border-[#d9b99b]/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className={`relative overflow-hidden ${sizeClass}`}>
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3D3831]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-3 border border-white/20 pointer-events-none" />
                </div>
              </motion.div>
            ))}
        </div>

        {/* --- CẬP NHẬT BUTTON THEO STYLE BẠN MUỐN --- */}
        {visibleCount < imgs.length && (
          <div className="flex justify-center mt-16">
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden rounded-full transition-all"
            >
              {/* Lớp nền fill từ dưới lên */}
              <div className="absolute inset-0 w-full h-full bg-[#3D3831] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

              {/* Viền nút */}
              <div className="absolute inset-0 w-full h-full border border-[#3D3831] rounded-full" />

              {/* Chữ đổi màu khi hover */}
              <span className="relative z-10 text-[#3D3831] group-hover:text-[#FAF7F2] text-[11px] font-bold tracking-[0.3em] uppercase transition-colors duration-500">
                Xem thêm khoảnh khắc
              </span>
            </motion.button>
          </div>
        )}

        <div className="w-24 h-[1px] bg-[#BC8A5F]/40 mx-auto mt-20" />
        <p className="text-[#6a5647] font-serif italic mt-8 text-center text-lg opacity-70">
          Mỗi bức hình là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm.
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1A1815]/95 flex items-center justify-center z-[100] backdrop-blur-md p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
            >
              <img
                alt=""
                src={selected}
                className="w-full h-auto max-h-[85vh] object-contain rounded-sm border-[10px] md:border-[16px] border-white shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

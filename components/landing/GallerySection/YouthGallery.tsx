"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function YouthGalleryColor({ dict }: { dict: any }) {
  const g = dict.gallery;
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
  ];

  const [mounted, setMounted] = useState(false);
  const [randomized, setRandomized] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const data = imgs.map((src, i) => ({
      src,
      rotation: Math.floor(Math.random() * 16) - 8,
      sticker: ["⭐", "💖", "✨", "🔥", "🎀", "🍀", "🌈", "🍭"][i % 8],
      border: [
        "border-blue-400",
        "border-yellow-400",
        "border-pink-400",
        "border-green-400",
      ][i % 4],
      bgTag: ["bg-blue-500", "bg-yellow-500", "bg-pink-500", "bg-green-500"][
        i % 4
      ],
    }));
    setRandomized(data);
    setMounted(true);
  }, []);

  const showMore = () => setVisibleCount((v) => v + 4);

  if (!mounted) return <section className="py-24 bg-[#FFF9F0] min-h-screen" />;

  return (
    <section
      id="gallery"
      className="relative py-32 bg-[#FFF9F0] overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, rotate: -2 }}
            className="inline-block bg-white px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_#3b82f6] relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">
              {g.title}
            </h2>
          </motion.div>
          <p className="mt-12 text-blue-900/60 font-bold text-xl max-w-xl mx-auto italic">
            &quot;{g.subTitle}&quot;
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {randomized.slice(0, visibleCount).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
              transition={{
                type: "spring",
                stiffness: 60,
                delay: (i % 3) * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 50 }}
              onClick={() => setSelected(item.src)}
              className="relative group cursor-pointer"
            >
              {/* Sticker */}
              <div className="absolute -top-6 -right-6 text-4xl z-20 transition-transform duration-300 group-hover:scale-150 group-hover:rotate-12">
                {item.sticker}
              </div>

              <div
                className={`bg-white p-4 pb-14 shadow-[15px_15px_0px_rgba(0,0,0,0.05)] border-2 ${item.border} hover:shadow-[20px_20px_0px_rgba(0,0,0,0.1)] transition-all duration-300`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={item.src}
                    alt="Gallery"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="mt-6 flex justify-between items-center px-2">
                  <div
                    className={`h-3 w-1/2 ${item.bgTag} opacity-20 rounded-full`}
                  />
                  <span className="font-mono text-[10px] font-bold text-gray-400">
                    MAY 2024
                  </span>
                </div>
              </div>

              {/* Washi Tape */}
              <div
                className={`absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-9 opacity-80 mix-blend-multiply rotate-2 ${
                  i % 4 === 0
                    ? "bg-yellow-300"
                    : i % 4 === 1
                      ? "bg-pink-300"
                      : i % 4 === 2
                        ? "bg-blue-300"
                        : "bg-green-300"
                }`}
                style={{
                  clipPath: "polygon(5% 20%, 95% 0%, 100% 80%, 0% 100%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Button Show More */}
        {visibleCount < imgs.length && (
          <div className="flex justify-center mt-24">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={showMore}
              className="relative px-14 py-6 bg-blue-600 text-white font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_#000]"
            >
              <span className="relative z-10">{g.btnMore} !!!</span>
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-black text-[10px] px-2 py-1 font-bold rounded-sm border border-black animate-bounce">
                CLICK!
              </div>
            </motion.button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[110] p-4 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: 5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white p-2 md:p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white font-black hover:text-yellow-400 transition-colors"
                onClick={() => setSelected(null)}
              >
                CLOSE [X]
              </button>
              <img
                alt=""
                src={selected}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

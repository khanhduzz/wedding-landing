// "use client";

// import { motion } from "framer-motion";
// import { useMemo } from "react";

// export default function GalleryVintage() {
//   const imgs = [
//     "/images/gallery1.jpg",
//     "/images/gallery2.jpg",
//     "/images/gallery3.jpg",
//     "/images/gallery4.jpg",
//     "/images/hero1.jpg",
//     "/images/hero2.jpg",
//     "/images/hero3.jpg",
//     "/images/the-adora.webp",
//     "/images/hero-img-2.jpg",
//     "/images/hero.jpg",
//   ];

//   // Randomize each image's height style for a natural gallery look
//   const randomized = useMemo(
//     () =>
//       imgs.map((src, i) => ({
//         src,
//         sizeClass: [
//           "h-48", // small
//           "h-64", // medium
//           "h-80", // large
//           "row-span-2 h-[28rem]", // tall
//         ][Math.floor(Math.random() * 4)],
//         delay: i * 0.08,
//       })),
//     []
//   );

//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       {/* Paper texture overlay */}
//       <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

//       <div className="relative mx-auto max-w-6xl px-6 text-center">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-10"
//         >
//           Hành Trình Của Chúng Tôi
//         </motion.h2>

//         {/* Subtext */}
//         <p className="text-[#6a5647] font-serif italic mb-12 max-w-2xl mx-auto">
//           Những khoảnh khắc ngọt ngào và kỷ niệm đáng nhớ trên hành trình yêu
//           thương.
//         </p>

//         {/* Masonry-like gallery grid */}
//         <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
//           {randomized.map(({ src, sizeClass, delay }, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay }}
//               viewport={{ once: true }}
//               className={`relative group overflow-hidden rounded-2xl shadow-md ring-1 ring-[#d9b99b]/60 ${sizeClass}`}
//             >
//               <img
//                 src={src}
//                 alt={`Gallery ${i + 1}`}
//                 loading="lazy"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Overlay hover effect */}
//               <div className="absolute inset-0 bg-[#00000033] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

//               {/* Decorative frame corners */}
//               <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#c4a484]/60" />
//                 <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#c4a484]/60" />
//                 <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#c4a484]/60" />
//                 <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#c4a484]/60" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="w-24 h-[2px] bg-[#c4a484] mx-auto mt-16 opacity-60" />

//         {/* Caption */}
//         <p className="text-[#6a5647] font-serif italic mt-8 text-lg">
//           Mỗi bức hình là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm.
//         </p>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { useMemo, useState, useEffect } from "react";
// import { PhotoProvider, PhotoView } from "react-photo-view";

// export default function GalleryVintage() {
//   const imgs = [
//     "/images/gallery1.jpg",
//     "/images/gallery2.jpg",
//     "/images/gallery3.jpg",
//     "/images/gallery4.jpg",
//     "/images/hero1.jpg",
//     "/images/hero2.jpg",
//     "/images/hero3.jpg",
//     "/images/the-adora.webp",
//     "/images/hero-img-2.jpg",
//     "/images/hero.jpg",
//   ];

//   // Randomized image size for natural look
//   const randomized = useMemo(
//     () =>
//       imgs.map((src, i) => ({
//         src,
//         sizeClass: [
//           "h-48", // small
//           "h-64", // medium
//           "h-80", // large
//           "row-span-2 h-[28rem]", // tall
//         ][Math.floor(Math.random() * 4)],
//         delay: i * 0.08,
//       })),
//     []
//   );

//   // Responsive load-more state
//   const [visibleCount, setVisibleCount] = useState(4);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkSize = () => setIsMobile(window.innerWidth < 768);
//     checkSize();
//     window.addEventListener("resize", checkSize);
//     return () => window.removeEventListener("resize", checkSize);
//   }, []);

//   const visibleImages = isMobile
//     ? randomized.slice(0, visibleCount)
//     : randomized;

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 4);
//   };

//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       {/* Paper texture overlay */}
//       <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

//       <div className="relative mx-auto max-w-6xl px-6 text-center">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-10"
//         >
//           Hành Trình Của Chúng Tôi
//         </motion.h2>

//         {/* Subtext */}
//         <p className="text-[#6a5647] font-serif italic mb-12 max-w-2xl mx-auto">
//           Những khoảnh khắc ngọt ngào và kỷ niệm đáng nhớ trên hành trình yêu
//           thương.
//         </p>

//         {/* Gallery */}
//         <PhotoProvider>
//           <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
//             {visibleImages.map(({ src, sizeClass, delay }, i) => (
//               <PhotoView key={i} src={src}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay }}
//                   viewport={{ once: true }}
//                   className={`relative group overflow-hidden rounded-2xl shadow-md ring-1 ring-[#d9b99b]/60 cursor-pointer ${sizeClass}`}
//                 >
//                   <img
//                     src={src}
//                     alt={`Gallery ${i + 1}`}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay hover effect */}
//                   <div className="absolute inset-0 bg-[#00000033] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

//                   {/* Decorative frame corners */}
//                   <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#c4a484]/60" />
//                     <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#c4a484]/60" />
//                     <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#c4a484]/60" />
//                     <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#c4a484]/60" />
//                   </div>
//                 </motion.div>
//               </PhotoView>
//             ))}
//           </div>
//         </PhotoProvider>

//         {/* Load more (only on mobile) */}
//         {isMobile && visibleCount < randomized.length && (
//           <button
//             onClick={handleLoadMore}
//             className="mt-8 px-6 py-2 border border-[#c4a484] text-[#5e4b3c] font-serif text-sm rounded-full hover:bg-[#f8f4ef] transition-colors duration-300"
//           >
//             Xem thêm ảnh
//           </button>
//         )}

//         {/* Divider */}
//         <div className="w-24 h-[2px] bg-[#c4a484] mx-auto mt-16 opacity-60" />

//         {/* Caption */}
//         <p className="text-[#6a5647] font-serif italic mt-8 text-lg">
//           Mỗi bức hình là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm.
//         </p>
//       </div>
//     </section>
//   );
// }

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

  // Randomize heights for vintage layout
  const randomized = useMemo(
    () =>
      imgs.map((src, i) => ({
        src,
        sizeClass: [
          "h-48", // small
          "h-64", // medium
          "h-80", // large
          "row-span-2 h-[28rem]", // tall
        ][Math.floor(Math.random() * 4)],
        delay: i * 0.06,
      })),
    []
  );

  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  // ✅ Detect screen size and set initial visible count
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

  const showMore = (p0: number) => setVisibleCount((v) => v + p0);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {randomized
            .slice(0, visibleCount)
            .map(({ src, sizeClass, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay }}
                viewport={{ once: true }}
                onClick={() => setSelected(src)}
                className={`relative group overflow-hidden rounded-2xl shadow-md ring-1 ring-[#d9b99b]/60 cursor-pointer ${sizeClass}`}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#00000033] opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </motion.div>
            ))}
        </div>

        {/* Load more button — only on mobile */}
        {visibleCount < imgs.length && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => showMore(isMobile ? 4 : 10)}
            className="mt-10 px-6 py-2 border border-[#c4a484] text-[#4b3a2f] font-serif rounded-full hover:bg-[#f2e6d9] transition-colors"
          >
            Xem thêm
          </motion.button>
        )}

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#c4a484] mx-auto mt-16 opacity-60" />

        {/* Caption */}
        <p className="text-[#6a5647] font-serif italic mt-8 text-lg">
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#000000aa] flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.img
              key={selected}
              src={selected}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-[75vw] max-h-[75vh] rounded-3xl shadow-2xl border-4 border-[#f2e6d9] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

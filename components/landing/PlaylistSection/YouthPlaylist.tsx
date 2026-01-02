"use client";
import { motion } from "framer-motion";

// Hiệu ứng Nốt nhạc bay (Floating Notes)
const MusicNote = ({ delay, x }: { delay: number; x: string }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: -100, opacity: [0, 1, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className="absolute text-2xl text-blue-400 pointer-events-none"
    style={{ left: x, bottom: "20%" }}
  >
    ♫
  </motion.div>
);

export default function YouthPlaylist({ dict }: { dict: any }) {
  const p = dict.playlist;

  return (
    <section className="relative bg-[#FFF9F0] py-32 px-6 lg:px-12 overflow-hidden">
      {/* Background Decor: Những đường kẻ nhạc (Staff lines) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-col justify-around py-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-[2px] bg-blue-900" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* LEFT: CONTENT - Thiết kế như một trang nhật ký âm nhạc */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="inline-block bg-pink-500 text-white px-4 py-1 rounded-md font-black text-xs uppercase tracking-widest mb-6 rotate-[-2deg]">
              {p.label}
            </span>

            <h2 className="text-5xl md:text-7xl font-black text-blue-900 leading-none mb-8">
              <span
                className="inline-block bg-yellow-300 px-2 leading-tight"
                dangerouslySetInnerHTML={{ __html: p.title }}
              />
            </h2>

            <div className="space-y-6 relative">
              {/* Sticker trang trí */}
              <div className="absolute -left-10 top-0 text-5xl opacity-20 rotate-[-20deg] hidden md:block">
                🎸
              </div>

              <p className="text-2xl font-serif italic text-blue-800 leading-relaxed border-l-4 border-pink-400 pl-6">
                &quot;{p.quote}&quot;
              </p>

              <p className="text-gray-600 font-medium leading-relaxed max-w-lg">
                {p.description}
              </p>

              {/* Decorative Music Tape */}
              <div className="flex gap-2 pt-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-12 rounded-full ${i % 2 === 0 ? "bg-blue-400" : "bg-yellow-400"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: VIDEO (RETRO TV STYLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full relative"
        >
          {/* Nốt nhạc bay ra từ video */}
          <MusicNote delay={0} x="20%" />
          <MusicNote delay={1} x="50%" />
          <MusicNote delay={0.5} x="80%" />

          {/* Khung Tivi/Monitor cổ điển */}
          <div className="relative bg-[#3D3831] p-4 md:p-8 rounded-[40px] shadow-[20px_20px_0px_#BC8A5F] border-8 border-[#2D2821]">
            {/* Màn hình chính */}
            <div className="relative aspect-video bg-black overflow-hidden rounded-[20px] border-4 border-[#1a1a1a]">
              <iframe
                className="w-full h-full"
                src={p.videoUrl}
                title="Wedding Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Hiệu ứng kính quét (Scanlines) giả lập màn hình cũ */}
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
            </div>

            {/* Nút bấm Tivi bên dưới (Dành cho Mobile/Tablet) hoặc bên cạnh (Desktop) */}
            <div className="mt-6 flex justify-between items-center px-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500 shadow-inner" />
                <div className="w-12 h-4 rounded-full bg-gray-600" />
              </div>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-8 bg-gray-700 rounded-sm" />
                ))}
              </div>
            </div>

            {/* Anten Tivi giả lập */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-12 flex justify-between pointer-events-none hidden md:flex">
              <div className="w-1 h-20 bg-[#3D3831] origin-bottom -rotate-45" />
              <div className="w-1 h-20 bg-[#3D3831] origin-bottom rotate-45" />
            </div>
          </div>

          {/* Sticker trang trí quanh Video */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-lg border-2 border-black rotate-12 z-20"
          >
            <span className="text-2xl">🔥</span>
          </motion.div>

          <div className="absolute -bottom-10 -left-10 bg-blue-500 text-white px-4 py-2 font-black text-sm uppercase -rotate-12 border-2 border-black">
            ON AIR
          </div>
        </motion.div>
      </div>

      {/* Footer Line */}
      <div className="mt-24 flex justify-center opacity-20">
        <svg width="200" height="20" viewBox="0 0 200 20">
          <path
            d="M0,10 L200,10"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
    </section>
  );
}

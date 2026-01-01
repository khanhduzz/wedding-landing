"use client";
import { motion } from "framer-motion";

export default function PlaylistSectionOrigin() {
  return (
    <section className="relative bg-[#FAF7F2] py-24 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT: CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">
              Our Playlist
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-[#3D3831] leading-tight">
              {/* Giai Điệu <br /> */}
              <span className="font-serif italic text-[#BC8A5F]">
                Giai Điệu <br />
                Tình Yêu
              </span>
            </h2>

            <div className="h-[1px] w-20 bg-[#BC8A5F]/40 my-8 mx-auto lg:mx-0" />

            <p className="text-[#5E584F] font-serif italic text-xl leading-relaxed">
              &quot;Âm nhạc là ngôn ngữ của trái tim, kể lại hành trình mà chúng
              mình đã đi qua.&quot;
            </p>

            <p className="mt-6 text-[#7c6a58]/90 leading-relaxed font-light">
              Những bản nhạc này mang theo ký ức, tiếng cười và những khoảnh
              khắc đưa chúng mình đến gần nhau hơn. Hãy cùng lắng nghe và hòa
              mình vào nhịp đập câu chuyện của chúng mình nhé.
            </p>
          </motion.div>
        </div>

        {/* RIGHT: VIDEO (FRAME STYLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#BC8A5F]/10 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-white p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#d9b99b]/20 rounded-sm">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/327_OFjUOfo"
                  title="Wedding Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <div className="absolute inset-4 border border-white/10 pointer-events-none" />
              </div>
            </div>

            <svg
              className="absolute -bottom-6 -right-6 w-24 h-24 text-[#BC8A5F]/30 rotate-12"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M10,90 Q30,10 90,10" />
              <circle cx="90" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

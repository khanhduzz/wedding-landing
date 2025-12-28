"use client";

import { motion } from "framer-motion";

// Hiệu ứng lá rơi đồng bộ màu đậm cho đoạn kết
const FloatingLeaf = ({ delay, x }: { delay: number; x: string }) => (
  <motion.svg
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{
      y: "100vh",
      opacity: [0, 0.6, 0.6, 0],
      rotate: 360,
      x: [0, 10, -10, 0],
    }}
    transition={{ duration: 10, repeat: Infinity, delay, ease: "linear" }}
    className="absolute w-5 h-5 text-[#8B5E3C]/30 pointer-events-none z-0"
    style={{ left: x }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </motion.svg>
);

export default function FooterModern() {
  return (
    <footer className="relative py-20 bg-[#FAF7F2] text-center overflow-hidden">
      {/* Texture & Leaves */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />
      <FloatingLeaf delay={1} x="20%" />
      <FloatingLeaf delay={5} x="75%" />

      {/* Decorative Border Top - Mềm mại hơn */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#BC8A5F]/40 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Logo/Icon trung tâm */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full border border-[#BC8A5F]/30 flex items-center justify-center mb-4">
            <span className="text-[#BC8A5F] font-serif italic text-xl">
              A&B
            </span>
          </div>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#BC8A5F]/40 to-transparent" />
        </motion.div>

        {/* Cảm ơn chính */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#3D3831] font-serif italic text-xl md:text-2xl mb-4 leading-relaxed"
        >
          Cảm ơn bạn đã cùng chúng tôi chia sẻ ngày trọng đại này 💍
        </motion.p>

        <p className="text-[#6a5647] font-serif italic opacity-70 text-base mb-10">
          Mỗi lời chúc và nụ cười của bạn là món quà quý giá nhất.
        </p>

        {/* Divider & Credits */}
        <div className="relative pt-10 border-t border-[#BC8A5F]/10">
          <p className="text-[#BC8A5F] text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
            © {new Date().getFullYear()} — Made with love
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="/admin/login"
              className="text-[10px] font-bold tracking-widest text-[#3D3831]/40 hover:text-[#BC8A5F] transition-colors uppercase"
            >
              Trang quản trị
            </a>
          </div>
        </div>
      </div>

      {/* Trang trí Botanical cuối trang */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none w-full max-w-4xl">
        <svg
          viewBox="0 0 1000 100"
          fill="none"
          stroke="#BC8A5F"
          strokeWidth="0.5"
        >
          <path d="M0,100 Q500,0 1000,100" />
        </svg>
      </div>
    </footer>
  );
}

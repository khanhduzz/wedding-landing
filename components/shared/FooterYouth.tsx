"use client";

import { motion } from "framer-motion";

const PaperPlane = ({ delay, x }: { delay: number; x: string }) => (
  <motion.svg
    initial={{ y: -20, opacity: 0, rotate: -20 }}
    animate={{
      y: "100vh",
      opacity: [0, 1, 1, 0],
      rotate: [0, 20, -20, 10],
      x: [0, 50, -50, 20],
    }}
    transition={{ duration: 12, repeat: Infinity, delay, ease: "easeInOut" }}
    className="absolute w-6 h-6 text-[#1E88E5]/20 pointer-events-none z-0"
    style={{ left: x }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
  </motion.svg>
);

export default function FooterYouth({ dict }: { dict: any }) {
  return (
    <footer className="relative py-20 bg-[#E3F2FD] text-center overflow-hidden">
      {/* Background Pattern: Giả lập giấy kẻ ô ly (Graph Paper) */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E88E5 0.5px, transparent 0.5px), radial-gradient(#1E88E5 0.5px, #E3F2FD 0.5px)`,
          backgroundSize: `20px 20px`,
        }}
      />

      {/* Máy bay giấy bay lượn */}
      <PaperPlane delay={0} x="15%" />
      <PaperPlane delay={4} x="80%" />
      <PaperPlane delay={8} x="45%" />

      {/* Đường kẻ trên: Dạng đường ziczac hoặc răng cưa cho trẻ trung */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA4Ij48cGF0aCBkPSJNMCA4TDYgMkwxMiA4TDE4IDJMMjQgOEwzMCAyTDM2IDhMNDAgNCIgc3Ryb2tlPSIjMUU4OEU1IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] bg-repeat-x" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Logo/Icon: Phong cách sticker tròn */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 5 }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#FFEB3B] border-2 border-[#1E88E5] flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(30,136,229,1)]">
            <span className="text-[#1E88E5] font-black text-2xl uppercase">
              D+L
            </span>
          </div>
          <div className="w-1 h-8 bg-dashed border-l-2 border-[#1E88E5]/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#1E88E5] font-sans font-black text-2xl md:text-3xl mb-4 leading-relaxed uppercase tracking-tight"
        >
          {dict.thankYou} 🎈
        </motion.p>

        <p className="text-[#1E88E5]/70 font-medium text-base mb-10 max-w-md mx-auto">
          {dict.subThankYou}
        </p>

        {/* Divider & Credits */}
        <div className="relative pt-10 border-t-2 border-dashed border-[#1E88E5]/20">
          <p className="text-[#F4511E] text-xs font-black tracking-widest uppercase mb-3">
            © {new Date().getFullYear()} — {dict.madeWithLove}
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="/admin/login"
              className="px-4 py-2 bg-white border-2 border-[#1E88E5] rounded-lg text-[10px] font-black tracking-widest text-[#1E88E5] hover:bg-[#FFEB3B] transition-all uppercase shadow-[3px_3px_0px_0px_rgba(30,136,229,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              {dict.adminLink}
            </a>
          </div>
        </div>
      </div>

      {/* Họa tiết lượn sóng ở đáy */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 bg-[#1E88E5]/10 clip-path-wave"
        style={{
          clipPath:
            "polygon(0% 50%, 5% 40%, 10% 50%, 15% 60%, 20% 50%, 25% 40%, 30% 50%, 35% 60%, 40% 50%, 45% 40%, 50% 50%, 55% 60%, 60% 50%, 65% 40%, 70% 50%, 75% 60%, 80% 50%, 85% 40%, 90% 50%, 95% 60%, 100% 50%, 100% 100%, 0% 100%)",
        }}
      />
    </footer>
  );
}

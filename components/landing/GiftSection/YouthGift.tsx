"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function YouthGift({ dict }: { dict: any }) {
  const g = dict.gift;
  const [copied, setCopied] = useState(false);

  const account1 = "1234 5678 9012";
  const account2 = "5678 9012 3456";

  function copy(account: string) {
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      {/* Background: Họa tiết những đồng xu và trái tim nhỏ vẽ tay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] pointer-events-none" />

      {/* Toast thông báo tinh nghịch */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-yellow-400 border-4 border-black px-6 py-2 font-black shadow-[8px_8px_0px_#000] flex items-center gap-2"
          >
            <span>✨</span> {g.copySuccess} <span>❤️</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 relative inline-block"
        >
          <div className="absolute -top-10 -right-12 text-6xl rotate-12 animate-bounce hidden md:block">
            🐷
          </div>
          <span className="bg-pink-500 text-white px-4 py-1 font-black uppercase text-[10px] tracking-widest shadow-[4px_4px_0px_#000] mb-6 inline-block">
            {g.label}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-6">
            {g.title}
          </h2>
          <p className="text-gray-500 font-bold italic max-w-lg mx-auto leading-relaxed">
            &quot;{g.description}&quot;
          </p>
        </motion.div>

        {/* Gift Cards Area */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {[
            {
              acc: account1,
              bank: "ACB BANK",
              name: "LOREM",
              color: "border-blue-500",
              tag: "Groom's Team",
              rotate: -3,
            },
            {
              acc: account2,
              bank: "VIETCOMBANK",
              name: "ISBUM",
              color: "border-green-500",
              tag: "Bride's Team",
              rotate: 3,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[340px]"
            >
              {/* Thẻ Thư Viện / Thẻ ATM phong cách Retro */}
              <div
                className={`relative bg-white border-4 border-black p-8 shadow-[15px_15px_0px_rgba(0,0,0,0.1)] transition-transform hover:rotate-0 hover:-translate-y-2`}
                style={{ transform: `rotate(${item.rotate}deg)` }}
              >
                {/* Sticker Team */}
                <div className="absolute -top-4 -right-4 bg-black text-white text-[9px] font-black px-3 py-1 uppercase tracking-tighter rotate-12">
                  {item.tag}
                </div>

                <div className="mb-8 relative bg-gray-50 border-2 border-dashed border-gray-300 p-4 rounded-xl">
                  <img
                    src="/qr/qr-sample.png"
                    alt="QR"
                    className="w-full aspect-square object-contain mix-blend-multiply"
                  />
                  {/* Hiệu ứng tia sét/trang trí */}
                  <div className="absolute -bottom-2 -left-2 text-2xl">⚡</div>
                </div>

                <div className="text-left space-y-4 mb-8">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Bank Name
                    </p>
                    <p className="text-xl font-black text-black leading-none">
                      {item.bank}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Account Holder
                    </p>
                    <p className="text-xl font-black text-blue-600 leading-none uppercase">
                      {item.name}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copy(item.acc)}
                  className="w-full bg-yellow-400 border-4 border-black py-3 font-black uppercase text-sm shadow-[5px_5px_0px_#000] hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>📋</span> {g.copyBtn}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phụ kiện trang trí dưới chân */}
        <div className="mt-20 flex justify-center gap-4 opacity-20">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-4xl">
              💰
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

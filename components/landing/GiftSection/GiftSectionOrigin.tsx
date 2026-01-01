"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingLeaf = ({ delay, x }: { delay: number; x: string }) => (
  <motion.svg
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{
      y: "100vh",
      opacity: [0, 0.7, 0.7, 0],
      rotate: 360,
      x: [0, 15, -15, 0],
    }}
    transition={{ duration: 12, repeat: Infinity, delay, ease: "linear" }}
    className="absolute w-6 h-6 text-[#8B5E3C]/30 pointer-events-none z-0"
    style={{ left: x }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </motion.svg>
);

export default function GiftSectionOrigin() {
  const [copied, setCopied] = useState(false);

  const account1 = "1234 5678 9012";
  const account2 = "5678 9012 3456";

  function copy(account: string) {
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />
      <FloatingLeaf delay={0} x="15%" />
      <FloatingLeaf delay={6} x="80%" />

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#3D3831] text-[#FAF7F2] font-serif px-8 py-3 rounded-full shadow-2xl z-[100] text-sm tracking-wide"
          >
            Đã sao chép số tài khoản 💝
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
            Wedding Gift
          </span>
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#3D3831] mb-6">
            {/* Gửi Trao  */}
            <span className="text-[#BC8A5F]">Gửi Trao Yêu Thương</span>
          </h2>
          <p className="text-[#6a5647] font-serif italic max-w-xl mx-auto opacity-80 leading-relaxed">
            Sự hiện diện của bạn là món quà quý giá nhất đối với chúng tôi. Nếu
            bạn muốn gửi thêm yêu thương, xin vui lòng quét mã QR bên dưới.
          </p>
        </motion.div>

        {/* Gift QR Cards Area */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 md:gap-8">
          {[
            {
              acc: account1,
              bank: "Ngân hàng ACB",
              name: "Lorem",
              delay: 0,
            },
            {
              acc: account2,
              bank: "Ngân hàng Vietcombank",
              name: "Isbum",
              delay: 0.2,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              viewport={{ once: true }}
              className="relative group w-full max-w-[320px] mx-auto"
            >
              <div className="absolute -inset-3 bg-[#E9DCC9]/40 rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />

              <div className="relative bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(188,138,95,0.08)] border border-white flex flex-col h-full items-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 border border-[#BC8A5F]/20 rounded-2xl rotate-3" />
                  <img
                    src="/qr/qr-sample.png"
                    alt="QR"
                    className="relative z-10 w-40 h-40 rounded-xl shadow-sm bg-white p-2 object-contain"
                  />
                </div>

                <div className="mb-8 space-y-1">
                  <p className="text-[#BC8A5F] text-[10px] font-bold tracking-widest uppercase">
                    {item.bank}
                  </p>
                  <p className="text-[#3D3831] font-serif font-bold text-lg">
                    {item.name}
                  </p>
                </div>

                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copy(item.acc)}
                  className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-full mt-auto w-full"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#3D3831] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 w-full h-full border border-[#3D3831] rounded-full" />
                  <span className="relative z-10 text-[#3D3831] group-hover:text-[#FAF7F2] text-[10px] font-bold tracking-widest uppercase transition-colors duration-500">
                    Sao chép số tài khoản
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 opacity-10 pointer-events-none -rotate-45">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#BC8A5F"
          strokeWidth="0.5"
        >
          <path d="M0,100 Q50,70 100,100" />
          <path d="M20,100 Q50,80 80,100" />
        </svg>
      </div>
    </section>
  );
}

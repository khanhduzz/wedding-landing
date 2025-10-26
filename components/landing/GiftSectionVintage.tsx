"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftSectionVintage() {
  const [copied, setCopied] = useState(false);

  const account1 = "1234 5678 9012";
  const account2 = "5678 9012 3456";

  function copy(account: string) {
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000); // hide after 5s
  }

  return (
    <section
      id="gift-vintage"
      className="relative py-24 bg-[#f4eee8] overflow-hidden"
    >
      {/* ✅ Floating toast message */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-1 ml-2 translate-x-[-50%] bg-[#4b3a2f]/90 text-[#fffaf5] font-serif px-6 py-3 rounded-2xl shadow-lg z-50"
          >
            Đã sao chép số tài khoản 💝
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-6"
        >
          Lời Cảm Ơn & Chia Sẻ Yêu Thương
        </motion.h2>

        {/* Subtitle */}
        <p className="text-[#6a5647] font-serif italic mb-12 max-w-2xl mx-auto leading-relaxed">
          Sự hiện diện của bạn là món quà quý giá nhất đối với chúng tôi. Nếu
          bạn muốn gửi thêm yêu thương, xin vui lòng quét mã QR bên dưới 💝
        </p>

        {/* Gift QR Area */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Gift 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between bg-[#fffaf5]/80 py-12 px-3 rounded-3xl shadow-inner border border-[#e8e0d6]/40 w-[85%] sm:w-[60%] md:w-64 lg:w-72"
          >
            <div>
              <img
                src="/qr/placeholder.png"
                alt="QR 1"
                className="mx-auto w-40 h-40 rounded-2xl shadow bg-white object-contain"
              />
              <p className="text-[#5c4638] font-serif mt-4 text-sm">
                Ngân hàng ACB – Nguyễn Văn A
              </p>
            </div>

            <button
              onClick={() => copy(account1)}
              className="mt-5 rounded-xl bg-[#c4a484] hover:bg-[#b39472] text-white px-5 py-2 text-sm transition-all duration-300 font-serif shadow-sm"
            >
              Sao chép số tài khoản
            </button>
          </motion.div>

          {/* Gift 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between bg-[#fffaf5]/80 py-12 px-3 rounded-3xl shadow-inner border border-[#e8e0d6]/40 w-[85%] sm:w-[60%] md:w-64 lg:w-72"
          >
            <div>
              <img
                src="/qr/placeholder.png"
                alt="QR 2"
                className="mx-auto w-40 h-40 rounded-2xl shadow bg-white object-contain"
              />
              <p className="text-[#5c4638] font-serif mt-4 text-sm">
                Ngân hàng Vietcombank – Trần Thị B
              </p>
            </div>

            <button
              onClick={() => copy(account2)}
              className="mt-5 rounded-xl bg-[#c4a484] hover:bg-[#b39472] text-white px-5 py-2 text-sm transition-all duration-300 font-serif shadow-sm"
            >
              Sao chép số tài khoản
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

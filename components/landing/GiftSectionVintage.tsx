"use client";

import { motion } from "framer-motion";

export default function GiftSectionVintage() {
  const account1 = "1234 5678 9012";
  const account2 = "5678 9012 3456";

  function copy(account: string) {
    navigator.clipboard.writeText(account);
    alert("Đã sao chép số tài khoản 💝");
  }

  return (
    <section
      id="gift-vintage"
      className="relative py-24 bg-[#f4eee8] overflow-hidden"
    >
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

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
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Gift 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#fffaf5]/80 p-6 rounded-3xl shadow-inner border border-[#e8e0d6]/40"
          >
            <img
              src="/qr/placeholder.png"
              alt="QR 1"
              className="mx-auto w-48 h-48 rounded-2xl shadow bg-white object-contain"
            />
            <p className="text-[#5c4638] font-serif mt-4 text-sm">
              Ngân hàng ACB – Nguyễn Văn A
            </p>
            <button
              onClick={() => copy(account1)}
              className="mt-3 rounded-xl bg-[#c4a484] hover:bg-[#b39472] text-white px-5 py-2 text-sm transition-all duration-300 font-serif shadow-sm"
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
            className="bg-[#fffaf5]/80 p-6 rounded-3xl shadow-inner border border-[#e8e0d6]/40"
          >
            <img
              src="/qr/placeholder.png"
              alt="QR 2"
              className="mx-auto w-48 h-48 rounded-2xl shadow bg-white object-contain"
            />
            <p className="text-[#5c4638] font-serif mt-4 text-sm">
              Ngân hàng Vietcombank – Trần Thị B
            </p>
            <button
              onClick={() => copy(account2)}
              className="mt-3 rounded-xl bg-[#c4a484] hover:bg-[#b39472] text-white px-5 py-2 text-sm transition-all duration-300 font-serif shadow-sm"
            >
              Sao chép số tài khoản
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

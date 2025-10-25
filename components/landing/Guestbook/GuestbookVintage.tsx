"use client";

import { motion } from "framer-motion";
import MessageFormVintage from "./MessageFormVintage";
import MessageListVintage from "./MessageListVintage";

export default function GuestbookVintage() {
  return (
    <section className="relative py-24 bg-[#f4eee8] overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ✅ Reverse on mobile, normal on desktop */}
        <div className="flex flex-col-reverse md:flex-row gap-12 items-start justify-between">
          {/* Left (on desktop): Message Form */}
          <div className="w-full md:w-1/2 min-h-[600px] flex">
            <div className="w-full bg-[#f9f6f1]/70 rounded-3xl shadow-inner backdrop-blur-sm flex flex-col justify-center p-6">
              <MessageFormVintage />
            </div>
          </div>

          {/* Right (on mobile appears first): Title + Message List */}
          <div className="w-full md:w-1/2 flex flex-col min-h-[600px]">
            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-4">
                Sổ Lưu Bút
              </h2>
              <p className="text-[#6a5647] font-serif italic max-w-md mx-auto">
                Hãy gửi những lời chúc, kỷ niệm, hoặc thông điệp yêu thương dành
                cho chúng tôi 💌
              </p>
            </motion.div>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto flex flex-col-reverse bg-[#f9f6f1]/70 rounded-3xl shadow-inner backdrop-blur-sm p-6">
              <MessageListVintage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

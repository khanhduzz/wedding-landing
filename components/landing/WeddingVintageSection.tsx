"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingVintageSection() {
  return (
    <section className="relative py-24 bg-[#faf7f3] overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-[320px] h-[420px] rounded-[2rem] overflow-hidden shadow-lg ring-4 ring-[#e7c8a2]/50">
            <Image
              src="/images/wedding-couple.jpg"
              alt="Wedding couple"
              fill
              className="object-cover"
              sizes="auto"
            />
            {/* Vintage overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f9f6f1]/60 to-transparent" />
          </div>

          {/* Floating decorative circles */}
          {/* <div className="absolute -top-6 -left-6 flex -space-x-5">
            {["#9b6a3b", "#e7c8a2", "#e8b5a0", "#a4383e", "#f3d9c2"].map(
              (color, i) => (
                <span
                  key={i}
                  className="w-10 h-10 rounded-full shadow-md"
                  style={{ backgroundColor: color, zIndex: 5 - i }}
                />
              )
            )}
          </div> */}
          <div className="absolute -top-6 -left-6 flex -space-x-5">
            {["#9b6a3b", "#e7c8a2", "#e8b5a0", "#a4383e", "#f3d9c2"].map(
              (color, i) => (
                <span
                  key={i}
                  className={`w-10 h-10 rounded-full shadow-md bg-[${color}] z-[${5 - i}]`}
                />
              )
            )}
          </div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="font-script text-4xl md:text-5xl text-[#4b3a2f] mb-6">
            Khoảnh khắc yêu thương
          </h2>
          <p className="text-[#6a5647] font-serif leading-relaxed max-w-lg">
            Trong hương vị ngọt ngào của tháng mười, hai tâm hồn hòa cùng một
            nhịp đập. Chúng tôi hân hoan mời bạn đến chung vui trong ngày trọng
            đại — nơi mọi kỷ niệm được lưu giữ bằng nụ cười và ánh mắt yêu
            thương.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="px-6 py-3 border border-[#c4a484] text-[#4b3a2f] font-serif tracking-wide rounded-full hover:bg-[#e7c8a2] transition-colors duration-300">
              Xem Thêm
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

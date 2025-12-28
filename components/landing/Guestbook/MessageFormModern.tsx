"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MessageFormModern() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Tự động giãn chiều cao textarea theo nội dung
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [form.message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...form, is_public: true }),
    });
    if (res.ok) {
      setStatus("Cảm ơn bạn vì những lời chúc 💌");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  }

  return (
    <section className="relative overflow-hidden h-full min-h-[500px] p-2">
      <div className="relative mx-auto h-full flex flex-col">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-transparent space-y-8 flex flex-col flex-grow p-4 md:p-6"
        >
          {/* Hàng 1: Tên & Email theo style gạch chân */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="relative group">
              <label className="block text-[10px] font-bold text-[#BC8A5F] uppercase tracking-widest mb-1">
                Tên của bạn
              </label>
              <input
                type="text"
                placeholder="Nhập tên..."
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
                className="w-full bg-transparent border-b border-[#BC8A5F]/30 py-2 text-[#3D3831] placeholder-[#BC8A5F]/40 outline-none focus:border-[#BC8A5F] transition-colors font-serif"
              />
            </div>
            <div className="relative group">
              <label className="block text-[10px] font-bold text-[#BC8A5F] uppercase tracking-widest mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="không bắt buộc..."
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="w-full bg-transparent border-b border-[#BC8A5F]/30 py-2 text-[#3D3831] placeholder-[#BC8A5F]/40 outline-none focus:border-[#BC8A5F] transition-colors font-serif"
              />
            </div>
          </div>

          {/* Ô nhập lời chúc - Style như tờ giấy viết tay */}
          <div className="relative flex-grow flex flex-col">
            <label className="block text-[10px] font-bold text-[#BC8A5F] uppercase tracking-widest mb-1">
              Lời chúc của bạn
            </label>
            <textarea
              ref={textareaRef}
              placeholder="Viết lời chúc tại đây..."
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              required
              className="w-full flex-grow bg-transparent border-b border-[#BC8A5F]/30 py-2 text-[#3D3831] placeholder-[#BC8A5F]/40 outline-none focus:border-[#BC8A5F] transition-all font-serif resize-none leading-relaxed"
            />
          </div>

          {/* Nút bấm Gửi lời chúc - Style Fill màu đặc trưng */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-10 py-3.5 overflow-hidden rounded-full transition-all"
            >
              {/* Lớp nền trồi lên */}
              <div className="absolute inset-0 w-full h-full bg-[#3D3831] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

              {/* Viền nút */}
              <div className="absolute inset-0 w-full h-full border border-[#3D3831] rounded-full" />

              {/* Text nút */}
              <span className="relative z-10 text-[#3D3831] group-hover:text-[#FAF7F2] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500">
                Gửi lời chúc 💌
              </span>
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-[#BC8A5F] font-serif italic"
              >
                {status}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

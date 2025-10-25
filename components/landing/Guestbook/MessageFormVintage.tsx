"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MessageFormVintage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea height based on content
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
    <section className="relative overflow-hidden h-full min-h-[500px]">
      <div className="relative mx-auto h-full flex flex-col">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#faf7f2] rounded-3xl shadow-inner p-6 md:p-8 space-y-5 flex flex-col flex-grow"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tên của bạn"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              className="w-full rounded-md bg-[#fffdf9]/80 px-3 py-2 text-[#4d3f33] placeholder-[#a99b8b] focus:outline-none focus:ring-2 focus:ring-[#c4a484]/50 transition-all"
            />
            <input
              type="email"
              placeholder="Email (không bắt buộc)"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className="w-full rounded-md bg-[#fffdf9]/80 px-3 py-2 text-[#4d3f33] placeholder-[#a99b8b] focus:outline-none focus:ring-2 focus:ring-[#c4a484]/50 transition-all"
            />
          </div>

          {/* Auto-resizing textarea */}
          <textarea
            ref={textareaRef}
            placeholder="Lời chúc của bạn..."
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            required
            className="w-full flex-grow rounded-md bg-[#fffdf9]/80 px-3 py-2 text-[#4d3f33] placeholder-[#a99b8b] focus:outline-none focus:ring-2 focus:ring-[#c4a484]/50 resize-none transition-all"
          />

          <div className="flex justify-center mt-auto">
            <button
              type="submit"
              className="rounded-lg bg-[#c4a484] hover:bg-[#b39472] text-white px-6 py-2 transition-all duration-300 font-serif shadow-sm"
            >
              Gửi lời chúc 💌
            </button>
          </div>

          {status && (
            <p className="text-center text-sm text-[#6a5647] italic mt-2">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

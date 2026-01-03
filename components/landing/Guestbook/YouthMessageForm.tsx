"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function YouthMessageForm({ dict }: { dict: any }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const f = dict;

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
    setIsSending(true);

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...form, is_public: true }),
    });

    setIsSending(false);
    if (res.ok) {
      setStatus(f.success);
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus(f.error);
    }
  }

  return (
    <section className="relative h-full p-4 md:p-8 bg-[#fffdf0] rounded-xl overflow-hidden shadow-inner">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(#94a3b8 1px, transparent 1px)",
          backgroundSize: "100% 2rem",
          marginTop: "3.5rem",
        }}
      />

      <div className="absolute left-10 md:left-14 top-0 bottom-0 w-[2px] bg-red-400 opacity-40 pointer-events-none" />

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative z-10 space-y-10 flex flex-col h-full"
      >
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900">
          <div className="flex items-end gap-2 border-b-2 border-blue-200 pb-1">
            <span className="text-[10px] font-black uppercase whitespace-nowrap opacity-50">
              {f.nameLabel}:
            </span>
            <input
              type="text"
              placeholder={f.namePlaceholder}
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              className="w-full bg-transparent outline-none font-bold text-lg placeholder:font-normal placeholder:opacity-30"
            />
          </div>
          <div className="flex items-end gap-2 border-b-2 border-blue-200 pb-1">
            <span className="text-[10px] font-black uppercase whitespace-nowrap opacity-50">
              {f.emailLabel}:
            </span>
            <input
              type="email"
              placeholder={f.emailPlaceholder}
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              className="w-full bg-transparent outline-none font-bold text-lg placeholder:font-normal placeholder:opacity-30"
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="relative flex-grow pt-4">
          <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-4">
            {f.messageLabel}
          </label>
          <textarea
            ref={textareaRef}
            placeholder={f.messagePlaceholder}
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
            required
            className="w-full bg-transparent outline-none font-medium text-xl leading-[2rem] placeholder:opacity-20 resize-none min-h-[200px] text-gray-800"
            style={{ backgroundImage: "none" }}
          />
        </div>

        {/* Sticker/Badge */}
        <div className="flex flex-col items-center gap-6 pb-4">
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-black rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />

            <div
              className={`relative px-12 py-4 rounded-xl border-4 border-black font-black uppercase tracking-tighter text-xl transition-colors
              ${isSending ? "bg-gray-400 text-white" : "bg-yellow-400 text-black group-hover:bg-blue-500 group-hover:text-white"}
            `}
            >
              {isSending ? "..." : f.submitBtn}
              <span className="ml-2">🚀</span>
            </div>
          </motion.button>

          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-green-100 text-green-700 px-6 py-2 rounded-full border-2 border-green-500 font-bold italic text-sm"
              >
                ✨ {status}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.form>

      <div className="absolute -bottom-10 -left-10 text-8xl opacity-5 pointer-events-none rotate-12">
        ✍️
      </div>
    </section>
  );
}

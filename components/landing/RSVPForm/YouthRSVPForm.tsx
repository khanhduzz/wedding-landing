"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function YouthRSVPForm({ dict }: { dict: any }) {
  const r = dict.rsvp;

  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: true,
    guest_count: 1,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email || undefined,
          attending: form.attending,
          // Nếu không đi, gửi 0
          guest_count: form.attending ? form.guest_count : 0,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus({ type: "success", msg: r.success });
      // Reset form sau khi thành công
      setForm({ name: "", email: "", attending: true, guest_count: 1 });
    } catch (err: any) {
      console.error("RSVP Youth Error:", err);
      setStatus({ type: "error", msg: "Lỗi rồi! Thử lại sau nhé 😭" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.2] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ rotate: -5 }}
            className="inline-block bg-yellow-400 border-4 border-black px-8 py-2 mb-6 shadow-[8px_8px_0px_#000]"
          >
            <span className="text-black text-xs uppercase font-black tracking-[0.4em]">
              {r.label}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter"
          >
            {r.title} <span className="text-blue-600">?</span>
          </motion.h2>
          <p className="text-gray-500 font-bold italic mt-4">
            --- {r.subTitle} ---
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Băng dính giả */}
          <div className="absolute -top-4 -left-4 w-20 h-8 bg-white/40 rotate-[-35deg] shadow-sm z-20 border border-white/20" />
          <div className="absolute -bottom-4 -right-4 w-20 h-8 bg-white/40 rotate-[-35deg] shadow-sm z-20 border border-white/20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white border-4 border-black p-8 md:p-12 shadow-[15px_15px_0px_rgba(0,0,0,0.1)]"
          >
            <form onSubmit={onSubmit} className="space-y-12">
              <div className="space-y-8">
                {/* Name Input */}
                <div
                  className={`relative border-b-4 border-black pb-2 transition-opacity ${loading ? "opacity-50" : ""}`}
                >
                  <label className="text-[10px] font-black text-blue-600 uppercase mb-2 block">
                    {r.nameLabel}
                  </label>
                  <input
                    disabled={loading}
                    className="w-full bg-transparent outline-none text-2xl font-bold placeholder:text-gray-200"
                    placeholder={r.namePlaceholder}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                  />
                </div>

                {/* Email Input */}
                <div
                  className={`relative border-b-4 border-black pb-2 transition-opacity ${loading ? "opacity-50" : ""}`}
                >
                  <label className="text-[10px] font-black text-blue-600 uppercase mb-2 block">
                    {r.emailLabel}
                  </label>
                  <input
                    disabled={loading}
                    type="email"
                    className="w-full bg-transparent outline-none text-2xl font-bold placeholder:text-gray-200"
                    placeholder="student_id@wedding.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* Attendance Options */}
              <div className="space-y-6">
                <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest">
                  {r.attendingLabel}
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { val: true, label: r.yes, emoji: "✅" },
                    { val: false, label: r.no, emoji: "❌" },
                  ].map((option) => (
                    <label
                      key={String(option.val)}
                      className={`flex items-center gap-4 cursor-pointer group ${loading ? "pointer-events-none opacity-50" : ""}`}
                    >
                      <div className="relative w-8 h-8 border-4 border-black flex items-center justify-center transition-colors group-hover:bg-gray-50">
                        <input
                          type="radio"
                          name="attending"
                          checked={form.attending === option.val}
                          onChange={() =>
                            setForm((f) => ({ ...f, attending: option.val }))
                          }
                          className="peer hidden"
                        />
                        <AnimatePresence>
                          {form.attending === option.val && (
                            <motion.span
                              initial={{ scale: 0, rotate: -45 }}
                              animate={{ scale: 1.2, rotate: 0 }}
                              className="text-2xl font-black text-black"
                            >
                              X
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      <span
                        className={`text-xl font-black uppercase ${form.attending === option.val ? "text-black" : "text-gray-300"}`}
                      >
                        {option.label} {option.emoji}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guest Count Selector (Chỉ hiện khi Attending = true) */}
              <AnimatePresence>
                {form.attending && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex items-center gap-8 py-6 bg-blue-50 border-4 border-blue-600 p-6 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute -top-4 -right-4 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-black">
                      ?
                    </div>
                    <label className="text-[10px] font-black text-blue-600 uppercase">
                      {r.guestsLabel}
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        disabled={loading}
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            guest_count: Math.max(1, f.guest_count - 1),
                          }))
                        }
                        className="w-10 h-10 border-4 border-black bg-white font-black text-xl active:translate-y-1 shadow-[4px_4px_0px_#000] disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="text-3xl font-black min-w-[40px] text-center">
                        {form.guest_count}
                      </span>
                      <button
                        type="button"
                        disabled={loading}
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            guest_count: Math.min(10, f.guest_count + 1),
                          }))
                        }
                        className="w-10 h-10 border-4 border-black bg-white font-black text-xl active:translate-y-1 shadow-[4px_4px_0px_#000] disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-8">
                <motion.button
                  disabled={loading}
                  type="submit"
                  whileHover={loading ? {} : { scale: 1.05, rotate: -2 }}
                  whileTap={loading ? {} : { scale: 0.95 }}
                  className="w-full bg-green-400 border-4 border-black py-5 shadow-[10px_10px_0px_#000] flex items-center justify-center gap-4 group transition-colors hover:bg-green-300 disabled:bg-gray-200 disabled:shadow-none disabled:translate-x-[5px] disabled:translate-y-[5px]"
                >
                  <span className="text-2xl font-black uppercase tracking-widest text-black">
                    {loading ? "ĐANG GỬI..." : r.submitBtn}
                  </span>
                  {!loading && (
                    <span className="text-3xl group-hover:animate-bounce">
                      💌
                    </span>
                  )}
                </motion.button>
              </div>

              {/* Status Display */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`border-4 p-4 text-center font-black uppercase tracking-tight ${
                    status.type === "success"
                      ? "bg-pink-100 border-pink-500 text-pink-600"
                      : "bg-red-100 border-red-500 text-red-600"
                  }`}
                >
                  {status.type === "success" ? "✨" : "⚠️"} {status.msg}{" "}
                  {status.type === "success" ? "✨" : ""}
                </motion.div>
              )}
            </form>
          </motion.div>

          <div className="absolute -bottom-16 -left-10 text-6xl rotate-[120deg] opacity-20 pointer-events-none">
            ✏️
          </div>
        </div>
      </div>
    </section>
  );
}

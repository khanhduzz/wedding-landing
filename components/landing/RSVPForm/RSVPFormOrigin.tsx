"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Giữ nguyên FloatingLeaf của bạn...
const FloatingLeaf = ({ delay, x }: { delay: number; x: string }) => (
  <motion.svg
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{
      y: "100vh",
      opacity: [0, 0.7, 0.7, 0],
      rotate: 360,
    }}
    transition={{ duration: 12, repeat: Infinity, delay, ease: "linear" }}
    className="absolute w-6 h-6 text-[#8B5E3C]/40 pointer-events-none z-0"
    style={{ left: x }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </motion.svg>
);

export default function RSVPFormOrigin({ dict }: { dict: any }) {
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
          // Nếu không đi, gửi 0 hoặc 1 tùy bạn, nhưng logic API thường là guest_count từ form
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
      console.error("RSVP Error:", err);
      setStatus({ type: "error", msg: "Có lỗi xảy ra, vui lòng thử lại sau." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#BC8A5F]/10">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />
      <FloatingLeaf delay={0} x="5%" />
      <FloatingLeaf delay={5} x="90%" />
      <FloatingLeaf delay={2} x="45%" />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">
            {r.label}
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-serif italic text-[#3D3831] mb-6">
            {r.title}
          </motion.h2>
          <div className="w-16 h-[1px] bg-[#BC8A5F]/40 mx-auto mb-6" />
          <p className="text-[#6a5647] font-serif italic opacity-80 max-w-md mx-auto">
            {r.subTitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-[#E9DCC9]/20 rounded-[3.5rem] blur-2xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-[0_40px_100px_rgba(61,56,49,0.07)] border border-white p-10 md:p-16 overflow-hidden"
          >
            <form onSubmit={onSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="group">
                  <label className="block text-[10px] font-bold text-[#BC8A5F] tracking-[0.2em] uppercase mb-2 ml-1">
                    {r.nameLabel}
                  </label>
                  <input
                    disabled={loading}
                    className="w-full bg-transparent border-b border-[#BC8A5F]/20 focus:border-[#3D3831] py-3 outline-none text-[#3D3831] font-serif transition-all duration-500 placeholder-[#BC8A5F]/30 disabled:opacity-50"
                    placeholder={r.namePlaceholder}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold text-[#BC8A5F] tracking-[0.2em] uppercase mb-2 ml-1">
                    {r.emailLabel}
                  </label>
                  <input
                    disabled={loading}
                    type="email"
                    className="w-full bg-transparent border-b border-[#BC8A5F]/20 focus:border-[#3D3831] py-3 outline-none text-[#3D3831] font-serif transition-all duration-500 placeholder-[#BC8A5F]/30 disabled:opacity-50"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* Attendance Selection */}
              <div className="space-y-6">
                <p className="text-[10px] font-bold text-[#BC8A5F] tracking-[0.2em] uppercase ml-1">
                  {r.attendingLabel}
                </p>
                <div className="flex flex-col sm:flex-row gap-8 pl-1">
                  {[
                    { val: true, label: r.yes },
                    { val: false, label: r.no },
                  ].map((option) => (
                    <label
                      key={String(option.val)}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          disabled={loading}
                          type="radio"
                          name="attending"
                          checked={form.attending === option.val}
                          onChange={() =>
                            setForm((f) => ({ ...f, attending: option.val }))
                          }
                          className="peer appearance-none w-5 h-5 border border-[#BC8A5F]/40 rounded-full checked:border-[#3D3831] transition-all disabled:opacity-50"
                        />
                        <div className="absolute w-2.5 h-2.5 bg-[#3D3831] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span
                        className={`font-serif text-lg ${form.attending === option.val ? "text-[#3D3831]" : "text-[#3D3831]/50"}`}
                      >
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guest Count - Chỉ hiện nếu chọn "Có" tham gia */}
              <AnimatePresence>
                {form.attending && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex items-center gap-6 py-6 border-t border-[#BC8A5F]/10 overflow-hidden"
                  >
                    <label
                      htmlFor="number"
                      className="text-[10px] font-bold text-[#BC8A5F] tracking-[0.2em] uppercase"
                    >
                      {r.guestsLabel}
                    </label>
                    <input
                      disabled={loading}
                      id="number"
                      type="number"
                      min={1}
                      max={10}
                      className="bg-[#FAF7F2] border border-[#BC8A5F]/20 rounded-xl px-4 py-2 w-20 text-[#3D3831] font-serif focus:ring-1 focus:ring-[#3D3831] outline-none transition-all disabled:opacity-50"
                      value={form.guest_count}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          guest_count: Number(e.target.value),
                        }))
                      }
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-4 text-center">
                <motion.button
                  disabled={loading}
                  type="submit"
                  whileHover={loading ? {} : { y: -4 }}
                  whileTap={loading ? {} : { scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center px-16 py-4 overflow-hidden rounded-full transition-all disabled:opacity-50"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#3D3831] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 w-full h-full border border-[#3D3831] rounded-full" />
                  <span className="relative z-10 text-[#3D3831] group-hover:text-[#FAF7F2] text-[11px] font-bold tracking-[0.3em] uppercase transition-colors duration-500">
                    {loading ? "..." : r.submitBtn}
                  </span>
                </motion.button>
              </div>

              {/* Status Message */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-serif italic ${status.type === "success" ? "text-[#BC8A5F]" : "text-red-500"}`}
                >
                  {status.msg}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

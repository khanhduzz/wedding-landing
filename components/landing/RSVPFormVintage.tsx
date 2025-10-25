"use client";
import { useState } from "react";

export default function RSVPFormVintage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: true,
    guest_count: 1,
  });
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(
      res.ok
        ? "Cảm ơn bạn đã phản hồi 💌"
        : "Đã có lỗi xảy ra, vui lòng thử lại."
    );
    if (res.ok)
      setForm({ name: "", email: "", attending: true, guest_count: 1 });
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background paper texture */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-script text-[#4b3a2f] mb-3">
          Will You Join Us?
        </h2>
        <p className="text-[#6a5647] font-serif italic mb-10">
          Chúng tôi rất hạnh phúc khi có bạn cùng chia sẻ ngày đặc biệt này 💖
        </p>

        <form
          onSubmit={onSubmit}
          className="bg-[#fdfaf6] rounded-2xl shadow-lg ring-1 ring-[#d9b99b]/60 p-8 space-y-4 text-left font-serif"
        >
          <div>
            <label className="block text-sm text-[#6a5647] mb-1">
              Tên của bạn *
            </label>
            <input
              className="w-full border border-[#d9b99b]/50 bg-[#fffdf9] focus:ring-2 focus:ring-[#c4a484]/50 rounded-xl px-4 py-2 placeholder-[#b39b85] text-[#4b3a2f] transition-all"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#6a5647] mb-1">
              Email (tùy chọn)
            </label>
            <input
              className="w-full border border-[#d9b99b]/50 bg-[#fffdf9] focus:ring-2 focus:ring-[#c4a484]/50 rounded-xl px-4 py-2 placeholder-[#b39b85] text-[#4b3a2f] transition-all"
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
            />
          </div>

          <div>
            <p className="text-sm text-[#6a5647] mb-1">Sự tham dự:</p>
            <div className="flex items-center gap-6 pl-1">
              <label className="flex items-center gap-2 text-[#4b3a2f]">
                <input
                  type="radio"
                  name="attending"
                  checked={form.attending}
                  onChange={() => setForm((f) => ({ ...f, attending: true }))}
                  className="accent-[#c4a484]"
                />
                Sẽ tham dự 💕
              </label>
              <label className="flex items-center gap-2 text-[#4b3a2f]">
                <input
                  type="radio"
                  name="attending"
                  checked={!form.attending}
                  onChange={() => setForm((f) => ({ ...f, attending: false }))}
                  className="accent-[#c4a484]"
                />
                Xin lỗi, không thể tham dự 😢
              </label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="people-join" className="text-sm text-[#6a5647]">
              Số khách đi cùng:
            </label>
            <input
              id="people-join"
              type="number"
              min={1}
              max={10}
              className="border border-[#d9b99b]/50 bg-[#fffdf9] rounded-xl px-4 py-2 w-24 text-[#4b3a2f] focus:ring-2 focus:ring-[#c4a484]/50 transition-all"
              value={form.guest_count}
              onChange={(e) =>
                setForm((f) => ({ ...f, guest_count: Number(e.target.value) }))
              }
            />
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="rounded-full bg-[#c4a484] hover:bg-[#b8916f] text-white px-8 py-2 font-serif shadow-md transition-all"
            >
              Gửi phản hồi
            </button>
          </div>

          {status && (
            <div className="text-sm text-[#6a5647] mt-4 text-center italic">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

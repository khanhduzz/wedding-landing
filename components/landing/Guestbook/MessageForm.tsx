"use client";
import { useState } from "react";

export default function MessageForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...form, is_public: true }),
    });
    if (res.ok) {
      setStatus("Thanks for your message! 💖");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input className="border rounded px-3 py-2" placeholder="Your name" value={form.name} onChange={(e)=>setForm(f=>({...f, name: e.target.value}))} required />
        <input className="border rounded px-3 py-2" placeholder="Email (optional)" value={form.email} onChange={(e)=>setForm(f=>({...f, email: e.target.value}))} />
      </div>
      <textarea className="border rounded px-3 py-2 w-full min-h-[120px]" placeholder="Your message" value={form.message} onChange={(e)=>setForm(f=>({...f, message: e.target.value}))} required />
      <button className="rounded-xl bg-primary px-4 py-2">Send Message</button>
      {status && <div className="text-sm text-ink/70">{status}</div>}
    </form>
  );
}

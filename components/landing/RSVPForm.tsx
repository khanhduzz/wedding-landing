"use client";
import { useState } from "react";

export default function RSVPForm() {
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
    setStatus(res.ok ? "Thanks for your RSVP! 🎉" : "Something went wrong.");
    if (res.ok)
      setForm({ name: "", email: "", attending: true, guest_count: 1 });
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-heading text-primary mb-4">
        Will You Join Us?
      </h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          required
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Email (optional)"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="attending"
              checked={form.attending}
              onChange={() => setForm((f) => ({ ...f, attending: true }))}
            />
            Attending
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="attending"
              checked={!form.attending}
              onChange={() => setForm((f) => ({ ...f, attending: false }))}
            />
            Not attending
          </label>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="people-join" className="text-sm">
            Guests:
          </label>
          <input
            id="people-join"
            type="number"
            min={1}
            max={10}
            className="border rounded px-3 py-2 w-24"
            value={form.guest_count}
            onChange={(e) =>
              setForm((f) => ({ ...f, guest_count: Number(e.target.value) }))
            }
          />
        </div>
        <button className="rounded-xl bg-primary px-4 py-2">Send RSVP</button>
        {status && <div className="text-sm text-ink/70">{status}</div>}
      </form>
    </div>
  );
}

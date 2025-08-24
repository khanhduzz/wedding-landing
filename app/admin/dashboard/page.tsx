"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Dashboard() {
  const { data, mutate } = useSWR("/api/admin/messages", fetcher);
  const [query, setQuery] = useState("");

  async function onDelete(id: string) {
    await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
    mutate();
  }

  const filtered = (data?.messages || []).filter((m: any) =>
    [m.name, m.email, m.message].join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-heading mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl shadow p-4 bg-white">
          <div className="text-sm text-ink/60">Total Messages</div>
          <div className="text-2xl">{data?.messages?.length ?? 0}</div>
        </div>
        <div className="rounded-2xl shadow p-4 bg-white">
          <div className="text-sm text-ink/60">Visitors (placeholder)</div>
          <div className="text-2xl">{data?.visitors ?? 0}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <input className="border rounded px-3 py-2 flex-1" placeholder="Search name/email/message" value={query} onChange={e=>setQuery(e.target.value)} />
        <a className="rounded-xl border px-3 py-2" href="/api/admin/messages?export=csv">Export CSV</a>
      </div>
      <div className="overflow-x-auto rounded-2xl shadow bg-white">
        <table className="min-w-full">
          <thead className="bg-ink/5">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Message</th>
              <th className="text-left p-3">Public</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m: any) => (
              <tr key={m.id} className="border-t">
                <td className="p-3">{m.name}</td>
                <td className="p-3">{m.email || "-"}</td>
                <td className="p-3 max-w-md">{m.message}</td>
                <td className="p-3">{m.is_public ? "Yes" : "No"}</td>
                <td className="p-3">{new Date(m.created_at).toLocaleString()}</td>
                <td className="p-3 text-right">
                  <button className="text-red-600" onClick={() => onDelete(m.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

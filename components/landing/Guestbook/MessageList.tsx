"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function MessageList() {
  const { data } = useSWR("/api/messages", fetcher, {
    refreshInterval: 30_000,
  });
  return (
    <div className="grid gap-3">
      {(data?.messages ?? []).map((m: any) => (
        <div key={m.id} className="rounded-2xl border p-4 bg-white">
          <div className="text-sm text-ink/60">
            {new Date(m.created_at).toLocaleString()}
          </div>
          <div className="font-medium">
            {m.name}{" "}
            {m.email && (
              <span className="text-ink/60 text-sm">({m.email})</span>
            )}
          </div>
          <p className="mt-1">{m.message}</p>
        </div>
      ))}
      {!data?.messages?.length && (
        <div className="text-ink/60">No messages yet. Be the first! ✨</div>
      )}
    </div>
  );
}

"use client";
import useSWR from "swr";
import { motion } from "framer-motion";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function MessageListVintage() {
  const { data } = useSWR("/api/messages", fetcher, {
    refreshInterval: 30_000,
  });

  const messages = data?.messages ?? [];

  return (
    <div className="relative">
      <div className="relative p-8">
        {messages.length > 0 ? (
          <div className="space-y-4 text-left max-h-[21.5rem] overflow-y-auto">
            {messages.map((m: any, i: number) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="text-[#3d3327]"
              >
                <span className="font-serif italic text-2xl text-[#3a2f23]">
                  {/* <span className="font-serif italic text-2xl text-[#1c15d4]"> */}
                  {m.name}
                </span>
                {m.email && (
                  <span className="text-[#a59a8a] text-sm ml-1">
                    ({m.email})
                  </span>
                )}
                <span className="text-[#9a8b77] text-xs italic ml-2">
                  {new Date(m.created_at).toLocaleString()}
                </span>
                <p className="mt-1 ml-2 text-justify text-[#4d3f33] leading-relaxed italic border-l-[2px] border-[#d9cbb8]/50 pl-3">
                  {m.message}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-[#9b8f7e] italic">
            Chưa có lời nhắn nào — hãy là người đầu tiên gửi lời chúc ✨
          </div>
        )}
      </div>
    </div>
  );
}

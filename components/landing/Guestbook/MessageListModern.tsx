"use client";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function MessageListModern() {
  const { data } = useSWR("/api/messages", fetcher, {
    refreshInterval: 15_000,
  });

  const messages = data?.messages ?? [];

  return (
    <div className="relative h-full">
      <div className="relative px-2 py-2 h-full">
        {messages.length > 0 ? (
          <div className="space-y-6">
            <AnimatePresence>
              {messages.map((m: any, i: number) => (
                <motion.div
                  key={m.id || i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative group pb-4 border-b border-[#BC8A5F]/10 last:border-0"
                >
                  {/* Header: Tên khách & Ngày tháng (Gọn hơn) */}
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif italic text-lg text-[#3D3831] font-semibold">
                        {m.name}
                      </span>
                      {m.email && (
                        <span className="hidden sm:inline text-[9px] text-[#A99B8B] font-light italic">
                          ({m.email})
                        </span>
                      )}
                    </div>
                    <span className="text-[9px] font-bold tracking-widest text-[#BC8A5F]/60 uppercase">
                      {new Date(m.created_at).toLocaleDateString("vi-VN")}
                    </span>
                  </div>

                  {/* Nội dung: Gọn gàng và súc tích */}
                  <div className="relative pl-4 border-l border-[#BC8A5F]/20">
                    <p className="text-[#5E584F] font-serif italic text-sm md:text-base leading-relaxed">
                      {m.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-[#BC8A5F]/60 italic font-serif py-10">
            <p className="text-sm">Chưa có lời nhắn nào ✨</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// Danh sách màu sắc cho Post-it
const COLORS = [
  "bg-yellow-100 border-yellow-200",
  "bg-blue-100 border-blue-200",
  "bg-pink-100 border-pink-200",
  "bg-green-100 border-green-200",
  "bg-orange-100 border-orange-200",
];

export default function YouthMessageList({ dict }: { dict: any }) {
  const { data } = useSWR("/api/messages", fetcher, {
    refreshInterval: 15_000,
  });

  const messages = data?.messages ?? [];

  return (
    <div className="relative min-h-[400px]">
      <div className="relative px-2 py-4 h-full">
        {messages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {messages.map((m: any, i: number) => {
                // Tạo độ nghiêng và màu sắc ngẫu nhiên dựa trên index hoặc id
                const rotation = i % 3 === 0 ? 2 : i % 2 === 0 ? -2 : 1;
                const colorClass = COLORS[i % COLORS.length];

                return (
                  <motion.div
                    key={m.id || i}
                    initial={{ opacity: 0, scale: 0.8, rotate: rotation * 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: rotation }}
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`relative p-6 shadow-lg border-t-4 ${colorClass} group`}
                  >
                    {/* Chiếc ghim (Pin) ở giữa trên cùng */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-md z-20">
                      <div className="absolute inset-1 bg-white/30 rounded-full" />
                    </div>

                    {/* Nội dung tin nhắn */}
                    <div className="flex flex-col h-full space-y-3">
                      <div className="flex justify-between items-start border-b border-black/5 pb-2">
                        <div className="flex flex-col">
                          <span className="font-black text-blue-900 text-lg leading-none">
                            {m.name}
                          </span>
                          {m.email && (
                            <span className="text-[9px] text-gray-400 font-mono italic mt-1">
                              {m.email}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <p className="text-gray-700 font-medium italic text-base leading-relaxed">
                          &quot;{m.message}&quot;
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-black tracking-widest text-black/30 uppercase font-mono">
                          {new Date(m.created_at).toLocaleDateString(
                            dict.locale || "vi-VN",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Hiệu ứng bóng đổ khi hover */}
                    <div className="absolute inset-0 bg-black/5 -z-10 translate-x-2 translate-y-2 rounded-sm group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-white/40 italic py-20">
            <div className="text-6xl mb-4 opacity-20">📭</div>
            <p className="text-lg font-bold uppercase tracking-widest">
              {dict.empty}
            </p>
          </div>
        )}
      </div>

      {/* Hiệu ứng trang trí góc bảng */}
      <style jsx>{`
        .grid {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

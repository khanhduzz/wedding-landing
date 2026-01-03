"use client";

import { motion } from "framer-motion";
import YouthMessageForm from "./YouthMessageForm";
import YouthMessageList from "./YouthMessageList";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const PaperPlane = ({ delay, y }: { delay: number; y: string }) => (
  <motion.div
    initial={{ x: -100, y: 0, opacity: 0, rotate: 10 }}
    animate={{
      x: "110vw",
      y: [0, -50, 50, 0],
      opacity: [0, 1, 1, 0],
      rotate: [10, -5, 15, 10],
    }}
    transition={{ duration: 10, repeat: Infinity, delay, ease: "easeInOut" }}
    className="absolute text-3xl pointer-events-none z-0"
    style={{ top: y }}
  >
    ✈️
  </motion.div>
);

export default function YouthGuestBook({ dict }: { dict: any }) {
  const gb = dict.guestbook;

  const { data } = useSWR("/api/messages", fetcher);
  const messagesCount = data?.messages?.length || 0;

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] pointer-events-none" />

      <PaperPlane delay={0} y="12%" />
      <PaperPlane delay={5} y="85%" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="bg-blue-600 text-white inline-block px-6 py-2 font-black uppercase tracking-tighter mb-4 shadow-[6px_6px_0px_#000]">
            {gb.label}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-6">
            {gb.title}{" "}
            <span className="text-pink-500 text-6xl md:text-8xl">!</span>
          </h2>
        </motion.div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* LEFT COLUMN: FORM */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-pink-200 rounded-3xl rotate-1 group-hover:rotate-0 transition-transform" />
              <div className="relative bg-white border-4 border-black p-4 shadow-[12px_12px_0px_#000]">
                <div className="border-2 border-dashed border-gray-200 p-6 bg-[#fffdf0]">
                  <h3 className="text-blue-900 font-black mb-6 flex items-center gap-2 tracking-tight uppercase">
                    <span className="text-2xl">✍️</span>{" "}
                    {gb.formTitle || "Gửi lời chúc"}
                  </h3>
                  <YouthMessageForm dict={gb.form} />
                </div>
              </div>
            </motion.div>

            <div className="mt-auto pt-12 relative hidden lg:block">
              <div className="opacity-10 pointer-events-none select-none">
                <div className="font-black text-6xl uppercase leading-[0.8] mb-2">
                  YOUTH
                </div>
                <div className="font-black text-6xl uppercase leading-[0.8] text-pink-500 ml-8">
                  MEMORIES
                </div>
              </div>
              <p className="mt-6 text-gray-400 font-serif italic text-lg border-l-4 border-yellow-400 pl-4 max-w-xs">
                &quot;{gb.description}&quot;
              </p>
              <div className="absolute bottom-0 right-0 text-8xl opacity-10 rotate-12">
                🎨
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MESSAGE BOARD */}
          <div className="lg:col-span-7 flex flex-col min-h-[650px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex-1 flex flex-col"
            >
              {/* Corkboard */}
              <div className="absolute inset-0 bg-[#D2B48C] rounded-[2.5rem] shadow-2xl border-[12px] border-[#8B4513]" />
              <div className="absolute inset-4 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] opacity-50" />

              <div className="relative z-10 p-6 md:p-10 flex-1 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="bg-yellow-400 text-black font-black px-4 py-1 rotate-[-2deg] border-2 border-black text-xs uppercase shadow-md">
                    STICKY NOTES
                  </div>
                  <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
                    {messagesCount} LỜI CHÚC
                  </div>
                </div>

                <div className="flex-grow h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 custom-scroll-area pr-4">
                  <YouthMessageList dict={gb.list} />
                </div>
              </div>

              {/* Decor */}
              <div className="absolute -bottom-6 -right-4 bg-pink-500 text-white font-black px-5 py-2 rotate-[-3deg] border-4 border-black shadow-lg z-20 uppercase tracking-tighter">
                Lưu Bút
              </div>
            </motion.div>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-16 text-center font-black text-gray-300 uppercase tracking-[0.3em] text-[10px] italic">
          --- Scroll down for more ---
        </p>
      </div>

      <style jsx global>{`
        .custom-scroll-area::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll-area::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scroll-area::-webkit-scrollbar-thumb {
          background: #8b4513;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}

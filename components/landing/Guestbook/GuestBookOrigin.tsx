"use client";

import { motion } from "framer-motion";
import MessageFormOrigin from "./MessageFormOrigin";
import MessageListOrigin from "./MessageListOrigin";

const FloatingLeaf = ({ delay, x }: { delay: number; x: string }) => (
  <motion.svg
    initial={{ y: -20, opacity: 0, rotate: 0, x: 0 }}
    animate={{
      y: "100vh",
      opacity: [0, 0.7, 0.7, 0],
      rotate: 360,
      x: [0, 20, -20, 0],
    }}
    transition={{ duration: 15, repeat: Infinity, delay, ease: "linear" }}
    className="absolute w-6 h-6 text-[#8B5E3C]/40 pointer-events-none z-0"
    style={{ left: x }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </motion.svg>
);

export default function GuestbookOrigin({ dict }: { dict: any }) {
  const gb = dict.guestbook;

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      {/* 1. Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />

      <FloatingLeaf delay={0} x="5%" />
      <FloatingLeaf delay={4} x="45%" />
      <FloatingLeaf delay={8} x="90%" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-stretch justify-between">
          {/* LEFT (Desktop): Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 flex"
          >
            <div className="w-full relative group">
              <div className="absolute -inset-2 bg-[#E9DCC9]/40 rounded-[2.5rem] -rotate-1 blur-sm pointer-events-none" />
              <div className="relative w-full h-full bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(188,138,95,0.1)] border border-white p-2">
                <MessageFormOrigin dict={gb.form} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Title and wishes */}
          <div className="w-full lg:w-6/12 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left mb-10"
            >
              <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                {gb.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#3D3831] mb-6">
                <span className="text-[#BC8A5F]">{gb.title}</span>
              </h2>
              <p className="text-[#6a5647] font-serif italic text-lg opacity-80 leading-relaxed">
                {gb.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#E9DCC9]/20 rounded-[2rem] translate-x-2 translate-y-2 pointer-events-none" />

              <div className="relative flex flex-col bg-white/40 border border-white rounded-[2rem] shadow-xl backdrop-blur-md p-6 h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#BC8A5F]/20">
                <MessageListOrigin dict={gb.list} />
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 text-[#BC8A5F]/20 pointer-events-none rotate-12">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M10,90 Q30,10 90,10" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

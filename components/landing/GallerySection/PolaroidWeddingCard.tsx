"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function PolaroidWeddingCard({ dict }: { dict: any }) {
  const [spread, setSpread] = useState(false);
  const inv = dict.invitation;

  const photos = [
    { emoji: "🌸", rotate: -15, x: -50, y: -20, color: "bg-pink-100" },
    { emoji: "📸", rotate: 10, x: 60, y: -40, color: "bg-blue-100" },
    { emoji: "💍", rotate: -5, x: -70, y: 50, color: "bg-yellow-100" },
    { emoji: "✨", rotate: 20, x: 80, y: 60, color: "bg-purple-100" },
  ];

  return (
    <section className="relative py-24 bg-[#F0FDF4] flex flex-col items-center justify-center overflow-hidden min-h-[700px]">
      <div className="relative w-72 h-96">
        {/* Scattered Background Photos */}
        {photos.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              x: spread ? p.x * 2.5 : 0,
              y: spread ? p.y * 2.5 : 0,
              rotate: spread ? p.rotate : 0,
            }}
            className={`absolute inset-0 ${p.color} border-8 border-white shadow-lg p-4 flex items-center justify-center text-6xl rounded-sm`}
          >
            {p.emoji}
          </motion.div>
        ))}

        {/* MAIN INVITATION CARD */}
        <motion.div
          onClick={() => setSpread(!spread)}
          whileHover={{ scale: 1.02 }}
          className="absolute inset-0 bg-white border-[12px] border-white shadow-2xl z-30 cursor-pointer flex flex-col"
        >
          <div className="flex-1 bg-gray-200 overflow-hidden relative">
            <img
              src="/api/placeholder/400/500"
              alt="Couple"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="h-28 flex flex-col items-center justify-center px-4 py-2">
            <span className="font-serif italic text-gray-700 text-lg">
              {inv.names.first} & {inv.names.second}
            </span>
            <div className="w-full h-px bg-gray-200 my-2" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
              {spread ? "SAVE THE DATE" : "TAP TO REVEAL"}
            </p>
          </div>
        </motion.div>

        {/* DATA POPUP */}
        <AnimatePresence>
          {spread && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 bg-black text-white p-6 rounded-2xl z-40 text-center"
            >
              <h4 className="font-black text-xl mb-2">{inv.dateTime}</h4>
              <p className="text-sm text-gray-400">{inv.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

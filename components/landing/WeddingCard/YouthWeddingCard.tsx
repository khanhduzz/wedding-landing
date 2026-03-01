// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// export default function MusicWeddingCard({ dict }: { dict: any }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const inv = dict.invitation;

//   return (
//     <section className="relative py-24 bg-[#FFF4E0] flex flex-col items-center overflow-hidden min-h-[800px]">
//       <div className="text-center mb-12 z-10">
//         <h2 className="text-4xl font-black text-[#2D3436] uppercase tracking-tighter italic">
//           Our Life <span className="text-[#FF7675]">Soundtrack</span>
//         </h2>
//       </div>

//       <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
//         {/* VINYL RECORD */}
//         <motion.div
//           animate={{
//             x: isPlaying ? "50%" : "0%",
//             rotate: isPlaying ? 360 : 0,
//           }}
//           transition={{
//             duration: 1.5,
//             ease: "circOut",
//             rotate: { repeat: Infinity, duration: 4, ease: "linear" },
//           }}
//           className="absolute inset-0 bg-[#2d2d2d] rounded-full border-[12px] border-[#1a1a1a] flex items-center justify-center shadow-2xl"
//         >
//           <div className="w-32 h-32 rounded-full border-4 border-[#FF7675] bg-white flex items-center justify-center overflow-hidden">
//             <span className="text-[10px] font-bold text-center text-gray-800 px-2 uppercase">
//               {inv.names.first} & {inv.names.second}
//             </span>
//           </div>
//           {/* Grooves */}
//           <div className="absolute inset-0 rounded-full border border-white/10 m-4" />
//           <div className="absolute inset-0 rounded-full border border-white/10 m-12" />
//         </motion.div>

//         {/* SLEEVE / COVER */}
//         <motion.div className="absolute inset-0 bg-[#FF7675] z-20 shadow-xl flex flex-col items-center justify-center p-6 border-8 border-white group">
//           <div className="border-2 border-white/50 w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
//             <div className="absolute top-4 left-4 text-white font-black text-2xl opacity-20">
//               SIDE A
//             </div>
//             <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">
//               🎧
//             </div>
//             <h3 className="text-white font-black text-3xl text-center leading-none">
//               THE <br /> WEDDING <br /> ALBUM
//             </h3>
//             <button
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="mt-8 bg-white text-[#FF7675] px-6 py-2 rounded-full font-black text-sm hover:bg-[#2D3436] hover:text-white transition-colors"
//             >
//               {isPlaying ? "PAUSE" : "PLAY NOW"}
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* REVEALED INFO */}
//       <AnimatePresence>
//         {isPlaying && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-12 text-center z-10 bg-white p-8 rounded-3xl border-4 border-[#2D3436] shadow-[8px_8px_0_0_#2D3436]"
//           >
//             <p className="text-[#2D3436] font-black text-xl mb-2">
//               {inv.dateTime}
//             </p>
//             <p className="text-[#FF7675] font-bold italic">"{inv.message}"</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// --- Music Note Component for the burst effect ---
const MusicNote = ({ delay, color }: { delay: number; color: string }) => {
  const notes = ["♫", "♪", "♬", "♩"];
  const randomNote = notes[Math.floor(Math.random() * notes.length)];
  return (
    <motion.div
      initial={{ y: 0, opacity: 0, scale: 0 }}
      animate={{
        y: -150 - Math.random() * 100,
        x: (Math.random() - 0.5) * 200,
        opacity: [0, 1, 0],
        scale: [0.5, 1.5, 0.5],
        rotate: Math.random() * 360,
      }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      className={`absolute text-2xl pointer-events-none ${color} z-[60]`}
    >
      {randomNote}
    </motion.div>
  );
};

export default function MusicWeddingCard({ dict }: { dict: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scratchRef = useRef<HTMLAudioElement | null>(null);
  const inv = dict.invitation;

  // Toggle Playback and Sound
  const togglePlay = () => {
    if (!isPlaying) {
      scratchRef.current?.play();
      setTimeout(() => audioRef.current?.play(), 500);
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative py-16 bg-[#FFF4E0] flex flex-col items-center overflow-hidden min-h-[900px] font-sans">
      {/* Hidden Audio Elements - Replace URLs with your actual assets */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <audio
        ref={scratchRef}
        src="https://assets.mixkit.co/active_storage/sfx/710/710-preview.mp3"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-10 px-6 z-10"
      >
        <h2 className="text-4xl md:text-6xl font-black text-[#2D3436] uppercase tracking-tighter italic">
          Our Life <span className="text-[#FF7675]">Soundtrack</span>
        </h2>
        <p className="text-gray-500 font-bold mt-2 uppercase tracking-widest text-xs">
          Press play to reveal the date
        </p>
      </motion.div>

      {/* RECORD PLAYER CONTAINER */}
      <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
        {/* VINYL RECORD */}
        <motion.div
          animate={{
            // Mobile: Slides Up | Desktop: Slides Right
            x: isPlaying ? (window.innerWidth < 768 ? 0 : "55%") : "0%",
            y: isPlaying ? (window.innerWidth < 768 ? "-50%" : 0) : "0%",
            rotate: isPlaying ? 360 : 0,
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            rotate: { repeat: Infinity, duration: 5, ease: "linear" },
          }}
          className="absolute inset-4 bg-[#1a1a1a] rounded-full border-[10px] border-[#2d2d2d] flex items-center justify-center shadow-2xl z-10"
        >
          {/* Record Label */}
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-[#FF7675] bg-white flex flex-col items-center justify-center text-center p-2">
            <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase">
              Side A
            </span>
            <span className="text-[10px] md:text-xs font-bold text-gray-800 leading-tight">
              {inv.names.first} <br /> & <br /> {inv.names.second}
            </span>
          </div>
          {/* Subtle Grooves */}
          <div className="absolute inset-0 rounded-full border border-white/5 opacity-20 m-6 md:m-10" />
          <div className="absolute inset-0 rounded-full border border-white/5 opacity-20 m-12 md:m-20" />
        </motion.div>

        {/* SLEEVE / COVER */}
        <motion.div className="absolute inset-0 bg-[#FF7675] z-30 shadow-2xl flex flex-col items-center justify-center p-4 md:p-8 border-[6px] md:border-[10px] border-white group">
          <div className="border-2 border-white/40 w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-2 left-2 md:top-4 md:left-4 text-white font-black text-xl md:text-3xl opacity-30">
              LP
            </div>

            <motion.div
              animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-7xl md:text-9xl mb-4 drop-shadow-lg"
            >
              💿
            </motion.div>

            <h3 className="text-white font-black text-2xl md:text-5xl text-center leading-none tracking-tighter mb-6">
              THE <br /> WEDDING <br /> ALBUM
            </h3>

            <button
              onClick={togglePlay}
              className="relative overflow-hidden group bg-white text-[#FF7675] px-8 py-3 rounded-full font-black text-sm md:text-base shadow-lg active:scale-95 transition-all"
            >
              <span className="relative z-10">
                {isPlaying ? "PAUSE TRACK" : "DROP THE NEEDLE"}
              </span>
              <motion.div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Floating Notes when playing */}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <MusicNote
                key={i}
                delay={i * 0.4}
                color={i % 2 === 0 ? "text-pink-500" : "text-yellow-500"}
              />
            ))}
          </div>
        )}
      </div>

      {/* REVEALED INFO BOX */}
      <div className="mt-16 md:mt-24 px-6 w-full max-w-md z-40">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white p-8 rounded-3xl border-4 border-[#2D3436] shadow-[10px_10px_0_0_#2D3436] text-center"
            >
              <span className="inline-block bg-[#FF7675] text-white text-[10px] font-black px-3 py-1 rounded-full mb-4 uppercase">
                Now Playing
              </span>
              <h4 className="text-3xl font-black text-[#2D3436] mb-2 uppercase italic">
                {inv.dateTime}
              </h4>
              <p className="text-gray-600 font-bold italic leading-relaxed">
                "{inv.message}"
              </p>
              <div className="mt-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [10, 30, 10] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      delay: i * 0.1,
                    }}
                    className="w-1.5 bg-[#FF7675] rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

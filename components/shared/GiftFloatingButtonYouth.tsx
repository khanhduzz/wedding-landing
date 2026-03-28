"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Sparkles } from "lucide-react";
import Image from "next/image";

// Youthful Sticker-style Gift Icon
const YouthGiftIcon = ({ hover }: { hover: boolean }) => (
  <motion.div
    animate={hover ? { rotate: [0, -10, 10, -10, 0], scale: 1.1 } : {}}
    className="w-16 h-16 bg-[#FFEB3B] border-4 border-[#1E88E5] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(30,136,229,1)] relative"
  >
    <div className="absolute -top-2 -right-2 bg-[#F4511E] text-white p-1 rounded-full border-2 border-[#1E88E5]">
      <Sparkles size={12} fill="currentColor" />
    </div>
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 text-[#1E88E5]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  </motion.div>
);

export default function GiftFloatingButtonYouth({ dict }: { dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const giftData = dict.giftInfo;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50, rotate: 5 }}
            className="mb-8 w-[340px] bg-white border-4 border-[#1E88E5] rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(30,136,229,1)] relative"
          >
            {/* Graph Paper Background Pattern */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#1E88E5 1px, transparent 0), radial-gradient(#1E88E5 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Close Button - Round Sticker Style */}
            <button
              aria-label="close"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-[#F4511E] text-white p-1.5 rounded-full border-2 border-[#1E88E5] z-20 hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(30,136,229,1)]"
            >
              <X size={18} strokeWidth={3} />
            </button>

            {/* Header: Comic/Pop Art Style */}
            <div className="pt-10 pb-6 px-8 text-center bg-[#E3F2FD] border-b-4 border-dashed border-[#1E88E5]/30">
              <span className="inline-block bg-[#FFEB3B] border-2 border-[#1E88E5] px-3 py-1 text-[10px] font-black tracking-widest text-[#1E88E5] uppercase mb-3 rotate-[-2deg]">
                {giftData.label}
              </span>
              <h3 className="text-2xl font-black text-[#1E88E5] uppercase tracking-tighter">
                {giftData.title} 🧧
              </h3>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-8 max-h-[50vh] overflow-y-auto custom-scrollbar-youth">
              {giftData.accounts.map((acc: any, idx: number) => (
                <div
                  key={idx}
                  className="relative group p-4 bg-white border-2 border-[#1E88E5] rounded-2xl shadow-[4px_4px_0px_0px_rgba(30,136,229,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(30,136,229,1)] transition-all"
                >
                  <div className="text-center space-y-4">
                    <p className="text-xs font-black tracking-widest text-[#F4511E] uppercase">
                      {acc.owner}
                    </p>

                    {/* QR Frame - Modern "Sticker" look */}
                    <div className="bg-white p-2 border-2 border-[#1E88E5] rounded-xl inline-block shadow-sm">
                      <div className="relative aspect-square w-40 bg-white overflow-hidden rounded-lg">
                        <Image
                          src={acc.qrImage}
                          alt="QR Code"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[#1E88E5] font-black text-lg uppercase">
                        {acc.bankName}
                      </p>
                      <button
                        onClick={() => handleCopy(acc.accountNumber, acc.owner)}
                        className="flex items-center justify-center gap-2 mx-auto px-4 py-1.5 bg-[#E3F2FD] border-2 border-[#1E88E5] rounded-full text-[#1E88E5] hover:bg-[#FFEB3B] transition-colors"
                      >
                        <span className="text-xs font-bold font-mono">
                          {acc.accountNumber}
                        </span>
                        {copied === acc.owner ? (
                          <Check size={14} className="text-green-600" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-5 text-center bg-[#FFEB3B]/20 border-t-4 border-[#1E88E5]">
              <p className="text-[11px] font-bold text-[#1E88E5] leading-tight uppercase italic">
                &quot;{giftData.thankYou}&quot;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Button */}
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative focus:outline-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
              className="w-16 h-16 bg-[#F4511E] text-white border-4 border-[#1E88E5] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(30,136,229,1)]"
            >
              <X size={32} strokeWidth={3} />
            </motion.div>
          ) : (
            <motion.div key="gift">
              <YouthGiftIcon hover={isHovered} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Tooltip Label */}
        {!isOpen && (
          <div className="absolute left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-[#1E88E5] text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-lg whitespace-nowrap shadow-[3px_3px_0px_0px_rgba(255,235,59,1)]">
              Gửi lời chúc 🎈
            </span>
          </div>
        )}
      </motion.button>

      <style jsx global>{`
        .custom-scrollbar-youth::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-youth::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar-youth::-webkit-scrollbar-thumb {
          background: #1e88e5;
          border-radius: 10px;
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Copy, Check, Gift, Sparkles } from "lucide-react";
// import Image from "next/image";

// export default function GiftFloatingButtonYouth({ dict }: { dict: any }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [copied, setCopied] = useState<string | null>(null);

//   // 1. Check if dict exists. If it's missing (due to the route issue),
//   // we return null to prevent the crash.
//   if (!dict || !dict.giftInfo) {
//     return null;
//   }

//   const giftData = dict.giftInfo;

//   const handleCopy = (text: string, id: string) => {
//     navigator.clipboard.writeText(text);
//     setCopied(id);
//     setTimeout(() => setCopied(null), 2000);
//   };

//   return (
//     <div className="fixed bottom-8 left-8 z-[120] flex flex-col items-start">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             className="mb-6 w-[300px] bg-white border-4 border-[#1E88E5] rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(30,136,229,1)] relative font-sans"
//           >
//             {/* Header - Youth Style */}
//             <div className="pt-8 pb-4 px-6 text-center bg-[#E3F2FD] border-b-2 border-dashed border-[#1E88E5]/30">
//               <span className="bg-[#FFEB3B] border-2 border-[#1E88E5] px-3 py-0.5 text-[9px] font-black text-[#1E88E5] uppercase mb-2 inline-block -rotate-1">
//                 {giftData.label}
//               </span>
//               <h3 className="text-xl font-black text-[#1E88E5] uppercase italic">
//                 {giftData.title}
//               </h3>
//             </div>

//             {/* Content */}
//             <div className="p-4 space-y-4 max-h-[40vh] overflow-y-auto custom-scrollbar-youth">
//               {giftData.accounts?.map((acc: any, idx: number) => (
//                 <div
//                   key={idx}
//                   className="p-4 border-2 border-[#1E88E5] rounded-2xl bg-white shadow-[3px_3px_0px_0px_rgba(30,136,229,0.1)]"
//                 >
//                   <div className="text-center space-y-3">
//                     <p className="text-[9px] font-black text-[#F4511E] uppercase tracking-widest">
//                       {acc.owner}
//                     </p>

//                     <div className="relative w-32 h-32 mx-auto border-2 border-[#1E88E5] rounded-lg p-1 bg-white">
//                       <Image
//                         src={acc.qrImage}
//                         alt="QR"
//                         fill
//                         className="object-contain"
//                       />
//                     </div>

//                     <button
//                       onClick={() => handleCopy(acc.accountNumber, acc.owner)}
//                       className="w-full flex items-center justify-center gap-2 py-2 bg-[#E3F2FD] border-2 border-[#1E88E5] rounded-xl text-[#1E88E5] hover:bg-[#FFEB3B] transition-all active:translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(30,136,229,1)]"
//                     >
//                       <span className="text-[11px] font-mono font-bold">
//                         {acc.accountNumber}
//                       </span>
//                       {copied === acc.owner ? (
//                         <Check size={12} />
//                       ) : (
//                         <Copy size={12} />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Footer */}
//             <div className="p-3 bg-[#1E88E5] text-white text-center text-[10px] font-bold uppercase italic">
//               {giftData.thankYou}
//             </div>

//             <button
//               aria-label="close"
//               onClick={() => setIsOpen(false)}
//               className="absolute top-3 right-3 text-[#1E88E5] hover:scale-110 transition-transform"
//             >
//               <X size={20} strokeWidth={3} />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* The Main Trigger Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-16 h-16 rounded-2xl border-4 border-[#1E88E5] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(30,136,229,1)] transition-colors ${isOpen ? "bg-[#F4511E]" : "bg-[#FFEB3B]"}`}
//       >
//         {isOpen ? (
//           <X size={32} strokeWidth={3} className="text-white" />
//         ) : (
//           <div className="relative">
//             <Gift size={32} strokeWidth={2.5} className="text-[#1E88E5]" />
//             <Sparkles
//               size={14}
//               className="absolute -top-2 -right-2 text-[#F4511E]"
//               fill="currentColor"
//             />
//           </div>
//         )}
//       </motion.button>

//       <style jsx global>{`
//         .custom-scrollbar-youth::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar-youth::-webkit-scrollbar-thumb {
//           background: #1e88e5;
//           border-radius: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

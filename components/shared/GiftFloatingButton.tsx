"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Gift } from "lucide-react";
import Image from "next/image";

// Custom SVG: Coffe-Vintage Style Gift Box
// Features softer edges, rounded corners, and a coffee color palette
const GiftBoxIcon = ({ hover }: { hover: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 drop-shadow-[0_8px_15px_rgba(61,56,49,0.2)]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Box Body (Rich Dark Coffee / Espresso) */}
    {/* Using higher rx for smoother, chill shape */}
    <rect
      x="20"
      y="45"
      width="60"
      height="40"
      rx="8"
      fill="#3D3831"
      stroke="#2B2721"
      strokeWidth="1.5"
    />

    {/* Ribbons (Body - Warm Latte/Cream) */}
    <rect
      x="45"
      y="45"
      width="10"
      height="40"
      fill="#E8D9CB"
      fillOpacity="0.8"
    />

    {/* Lid (Animated) */}
    <motion.g
      initial={{ y: 0 }}
      animate={{ y: hover ? -8 : 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Lid Shape (Matching smoothed corners) */}
      <rect
        x="15"
        y="30"
        width="70"
        height="15"
        rx="5"
        fill="#3D3831"
        stroke="#2B2721"
        strokeWidth="1.5"
      />
      {/* Ribbons (Lid) */}
      <rect
        x="45"
        y="30"
        width="10"
        height="15"
        fill="#E8D9CB"
        fillOpacity="0.8"
      />

      {/* Bow Structure (Smoother, less geometric lines) */}
      <path
        d="M50 30C50 30 38 18 43 11C48 4 50 15 50 15Z"
        fill="#E8D9CB"
        stroke="#BFA590"
        strokeWidth="1"
      />
      <path
        d="M50 30C50 30 62 18 57 11C52 4 50 15 50 15Z"
        fill="#E8D9CB"
        stroke="#BFA590"
        strokeWidth="1"
      />
      {/* Center Knot (Latte Accent) */}
      <circle
        cx="50"
        cy="29"
        r="3.5"
        fill="#E8D9CB"
        stroke="#BFA590"
        strokeWidth="1.5"
      />
    </motion.g>
  </svg>
);

export default function GiftBoxButton({ dict }: { dict: any }) {
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
            initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
            className="mb-8 w-[340px] bg-[#FCF9F2] shadow-[20px_20px_60px_rgba(61,56,49,0.1),-5px_-5px_20px_rgba(255,255,255,0.4)] rounded-xl overflow-hidden border border-[#D4C4A8] origin-bottom-left relative"
          >
            {/* Parchment Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-the-nation.png')]" />

            {/* Close Button */}
            <button
              aria-label="Close Gift Box"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#8C7851] hover:text-[#3D3831] z-20 transition-colors"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Header: Vintage Letter Style */}
            <div className="pt-12 pb-6 px-8 text-center border-b border-[#D4C4A8]/40 bg-[#FAF7F2]">
              <div className="w-10 h-[1px] bg-[#BC8A5F] mx-auto mb-4" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#BC8A5F] uppercase block mb-1">
                {giftData.label}
              </span>
              <h3 className="text-3xl font-serif italic text-[#3D3831]">
                {giftData.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
              {giftData.accounts.map((acc: any, idx: number) => (
                <div key={idx} className="relative group">
                  <div className="text-center space-y-4">
                    <p className="text-[11px] font-bold tracking-widest text-[#8C7851] uppercase border-b border-[#D4C4A8]/30 pb-2 inline-block">
                      {acc.owner}
                    </p>

                    {/* QR Frame - Polaroid Style */}
                    <div className="bg-white p-3 shadow-md border border-[#D4C4A8]/20 group-hover:rotate-0 transition-transform duration-500 mx-auto w-44">
                      <div className="relative aspect-square w-full bg-[#fdfdfd]">
                        <Image
                          src={acc.qrImage}
                          alt="QR Code"
                          fill
                          className="object-contain p-1 mix-blend-multiply contrast-[1.1]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-[#3D3831] font-serif italic text-lg">
                        {acc.bankName}
                      </p>
                      <button
                        onClick={() => handleCopy(acc.accountNumber, acc.owner)}
                        className="flex items-center justify-center gap-2 mx-auto text-[#8C7851] hover:text-[#BC8A5F] transition-colors group/btn"
                      >
                        <span className="text-sm font-serif tracking-widest">
                          {acc.accountNumber}
                        </span>
                        {copied === acc.owner ? (
                          <Check size={12} className="text-green-700" />
                        ) : (
                          <Copy
                            size={12}
                            className="opacity-40 group-hover/btn:opacity-100"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 text-center border-t border-[#D4C4A8]/40 bg-[#FAF7F2]">
              <p className="text-xs font-serif italic text-[#8C7851] leading-relaxed">
                &quot;{giftData.thankYou}&quot;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Gift Box Button */}
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative focus:outline-none flex items-center gap-4 group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="bg-[#3D3831] text-white p-4 rounded-full shadow-lg"
            >
              <X size={24} strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="gift"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <GiftBoxIcon hover={isHovered} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip Label (persistent on hover) */}
        {!isOpen && (
          <span className="absolute left-20 bg-[#BC8A5F] text-white text-[9px] font-bold uppercase tracking-[0.3em] py-2.5 px-5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl">
            Chúc phúc
          </span>
        )}
      </motion.button>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #faf7f2;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4c4a8;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Copy, Check, Gift } from "lucide-react";
// import Image from "next/image";

// // Custom SVG for an elegant, vintage-style gift box
// const GiftBoxIcon = ({ hover }: { hover: boolean }) => (
//   <svg
//     viewBox="0 0 100 100"
//     className="w-16 h-16 drop-shadow-[0_8px_15px_rgba(166,61,45,0.3)]"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     {/* Box Body (Red/Terracotta) */}
//     <rect
//       x="20"
//       y="45"
//       width="60"
//       height="40"
//       rx="3"
//       fill="#A63D2D"
//       stroke="#8B2E21"
//       strokeWidth="2"
//     />

//     {/* Ribbons (Body) */}
//     <rect
//       x="45"
//       y="45"
//       width="10"
//       height="40"
//       fill="#D4C4A8"
//       fillOpacity="0.8"
//     />

//     {/* Lid (Animated) */}
//     <motion.g
//       initial={{ y: 0 }}
//       animate={{ y: hover ? -8 : 0 }}
//       transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//     >
//       <rect
//         x="15"
//         y="30"
//         width="70"
//         height="15"
//         rx="2"
//         fill="#A63D2D"
//         stroke="#8B2E21"
//         strokeWidth="2"
//       />
//       {/* Ribbons (Lid) */}
//       <rect
//         x="45"
//         y="30"
//         width="10"
//         height="15"
//         fill="#D4C4A8"
//         fillOpacity="0.8"
//       />

//       {/* Bow Structure */}
//       <path
//         d="M50 30C50 30 35 15 42 8C49 1 50 15 50 15Z"
//         fill="#D4C4A8"
//         stroke="#B8A276"
//         strokeWidth="1.5"
//       />
//       <path
//         d="M50 30C50 30 65 15 58 8C51 1 50 15 50 15Z"
//         fill="#D4C4A8"
//         stroke="#B8A276"
//         strokeWidth="1.5"
//       />
//       <circle
//         cx="50"
//         cy="28"
//         r="4"
//         fill="#D4C4A8"
//         stroke="#B8A276"
//         strokeWidth="2"
//       />
//     </motion.g>
//   </svg>
// );

// export default function GiftBoxButton({ dict }: { dict: any }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [copied, setCopied] = useState<string | null>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   const giftData = dict.giftInfo;

//   const handleCopy = (text: string, id: string) => {
//     navigator.clipboard.writeText(text);
//     setCopied(id);
//     setTimeout(() => setCopied(null), 2000);
//   };

//   return (
//     <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-start">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
//             animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
//             className="mb-8 w-[340px] bg-[#FCF9F2] shadow-[20px_20px_60px_rgba(166,61,45,0.1),-5px_-5px_20px_rgba(255,255,255,0.4)] rounded-xl overflow-hidden border border-[#D4C4A8] origin-bottom-left relative"
//           >
//             {/* Parchment Texture Overlay */}
//             <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-the-nation.png')]" />

//             {/* Close Button */}
//             <button
//               aria-label="asd"
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-[#8C7851] hover:text-[#3D3831] z-20 transition-colors"
//             >
//               <X size={20} strokeWidth={1.5} />
//             </button>

//             {/* Header: Vintage Letter Style */}
//             <div className="pt-12 pb-6 px-8 text-center border-b border-[#D4C4A8]/40 bg-[#FAF7F2]">
//               <div className="w-10 h-[1px] bg-[#BC8A5F] mx-auto mb-4" />
//               <span className="text-[10px] font-bold tracking-[0.4em] text-[#BC8A5F] uppercase block mb-1">
//                 {giftData.label}
//               </span>
//               <h3 className="text-3xl font-serif italic text-[#3D3831]">
//                 {giftData.title}
//               </h3>
//             </div>

//             {/* Content: Enclosed in a soft frame */}
//             <div className="p-6 space-y-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
//               {giftData.accounts.map((acc: any, idx: number) => (
//                 <div key={idx} className="relative group">
//                   <div className="text-center space-y-4">
//                     <p className="text-[11px] font-bold tracking-widest text-[#8C7851] uppercase border-b border-[#D4C4A8]/30 pb-2 inline-block">
//                       {acc.owner}
//                     </p>

//                     {/* QR Frame - Polaroid Style */}
//                     <div className="bg-white p-3 shadow-md border border-[#D4C4A8]/20 group-hover:rotate-0 transition-transform duration-500 mx-auto w-44">
//                       <div className="relative aspect-square w-full bg-[#fdfdfd]">
//                         <Image
//                           src={acc.qrImage}
//                           alt="QR Code"
//                           fill
//                           className="object-contain p-1 mix-blend-multiply contrast-[1.1]"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-1">
//                       <p className="text-[#3D3831] font-serif italic text-lg">
//                         {acc.bankName}
//                       </p>
//                       <button
//                         onClick={() => handleCopy(acc.accountNumber, acc.owner)}
//                         className="flex items-center justify-center gap-2 mx-auto text-[#8C7851] hover:text-[#BC8A5F] transition-colors group/btn"
//                       >
//                         <span className="text-sm font-serif tracking-widest">
//                           {acc.accountNumber}
//                         </span>
//                         {copied === acc.owner ? (
//                           <Check size={12} className="text-green-700" />
//                         ) : (
//                           <Copy
//                             size={12}
//                             className="opacity-40 group-hover/btn:opacity-100"
//                           />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Footer */}
//             <div className="p-6 text-center border-t border-[#D4C4A8]/40 bg-[#FAF7F2]">
//               <p className="text-xs font-serif italic text-[#8C7851] leading-relaxed">
//                 "{giftData.thankYou}"
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Persistent Gift Box Button */}
//       <motion.button
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="relative focus:outline-none flex items-center gap-4 group"
//       >
//         <AnimatePresence mode="wait">
//           {isOpen ? (
//             <motion.div
//               key="close"
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//               className="bg-[#3D3831] text-white p-4 rounded-full shadow-lg"
//             >
//               <X size={24} strokeWidth={1.5} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="gift"
//               initial={{ rotate: 90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: -90, opacity: 0 }}
//             >
//               <GiftBoxIcon hover={isHovered} />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Tooltip Label (persistent on hover) */}
//         {!isOpen && (
//           <span className="absolute left-20 bg-[#3D3831] text-white text-[9px] font-bold uppercase tracking-[0.3em] py-2.5 px-5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl">
//             Chúc phúc (Gift)
//           </span>
//         )}
//       </motion.button>

//       {/* Custom Scrollbar Styles */}
//       <style jsx global>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #faf7f2;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #d4c4a8;
//           border-radius: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

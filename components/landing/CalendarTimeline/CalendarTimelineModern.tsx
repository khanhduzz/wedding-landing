// "use client";

// import { motion } from "framer-motion";

// export default function CalendarTimelineModern() {
//   const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
//   const dates = Array.from({ length: 31 }, (_, i) => i + 1);
//   const highlightDay = 20; // Ngày cưới (Giả định 20/12 theo các phần trước)

//   const timelineItems = [
//     {
//       time: "10:30",
//       label: "ĐÓN KHÁCH",
//       icon: "/icons/flower-1.png",
//       delay: 0,
//     },
//     {
//       time: "11:30",
//       label: "LỄ THÀNH HÔN",
//       icon: "/icons/ring.png",
//       delay: 0.2,
//     },
//     {
//       time: "12:00",
//       label: "KHAI TIỆC",
//       icon: "/icons/dish.png",
//       delay: 0.4,
//     },
//   ];

//   const dressColors = [
//     { hex: "#9b6a3b", label: "Mochaccino" },
//     { hex: "#e7c8a2", label: "Latte" },
//     { hex: "#e8b5a0", label: "Peach" },
//     { hex: "#a4383e", label: "Red Wine" },
//     { hex: "#f3d9c2", label: "Cream" },
//   ];

//   return (
//     <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
//       {/* Texture giấy cũ mờ */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />

//       <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//         {/* === CỘT TRÁI: LỊCH THÁNG === */}
//         <div className="flex flex-col items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-10"
//           >
//             <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
//               Save the Date
//             </span>
//             <h2 className="text-4xl md:text-5xl font-light text-[#3D3831]">
//               Tháng{" "}
//               <span className="font-serif italic text-[#BC8A5F]">Mười Hai</span>
//             </h2>
//           </motion.div>

//           {/* Calendar grid */}
//           <div className="bg-white/40 p-8 rounded-sm border border-[#d9b99b]/20 backdrop-blur-sm shadow-xl">
//             <div className="grid grid-cols-7 gap-2 md:gap-4 text-[#3D3831] font-serif">
//               {days.map((d, i) => (
//                 <div
//                   key={i}
//                   className="text-[10px] tracking-widest text-[#BC8A5F] uppercase font-bold text-center pb-4"
//                 >
//                   {d}
//                 </div>
//               ))}
//               {dates.map((num) => (
//                 <motion.div
//                   key={num}
//                   whileHover={{ scale: 1.2, color: "#BC8A5F" }}
//                   className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-sm transition-all duration-300
//                     ${
//                       num === highlightDay
//                         ? "bg-[#3D3831] text-[#FAF7F2] rounded-full shadow-lg font-bold"
//                         : "text-[#6a5647] opacity-70"
//                     }`}
//                 >
//                   {num}
//                   {num === highlightDay && (
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute -top-1 -right-1 w-3 h-3 bg-[#BC8A5F] rounded-full border-2 border-white"
//                     />
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <p className="text-[#6a5647] font-serif italic text-lg mt-10 text-center opacity-80">
//             "Sự hiện diện của bạn là món quà ý nghĩa nhất đối với chúng tôi."
//           </p>
//         </div>

//         {/* === CỘT PHẢI: TIMELINE & DRESS CODE === */}
//         <div className="flex flex-col items-center w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-10"
//           >
//             <span className="text-[#BC8A5F] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
//               The Day Schedule
//             </span>
//             <h3 className="text-4xl md:text-5xl font-light text-[#3D3831]">
//               Lễ{" "}
//               <span className="font-serif italic text-[#BC8A5F]">
//                 Thành Hôn
//               </span>
//             </h3>
//           </motion.div>

//           <div className="flex flex-col gap-8 w-full max-w-md">
//             {timelineItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: item.delay }}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-8 bg-white/30 p-4 rounded-sm border-l-2 border-[#BC8A5F] hover:bg-white/60 transition-colors shadow-sm"
//               >
//                 <div className="w-16 h-16 flex-shrink-0 bg-[#E9DCC9] rounded-full p-3 flex items-center justify-center shadow-inner">
//                   <img
//                     src={item.icon}
//                     alt={item.label}
//                     className="w-full h-full object-contain grayscale-[0.2]"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-[#BC8A5F] font-bold tracking-widest text-sm">
//                     {item.time}
//                   </span>
//                   <span className="text-[#3D3831] font-serif text-lg uppercase tracking-wider">
//                     {item.label}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* DRESS CODE CẬP NHẬT */}
//           <div className="mt-20 text-center">
//             <h3 className="text-2xl md:text-3xl font-serif italic text-[#3D3831] mb-8">
//               Dress code
//             </h3>
//             <div className="flex justify-center -space-x-4">
//               {dressColors.map((color, i) => (
//                 <div key={i} className="group relative">
//                   <span
//                     className="block w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl border-2 border-white hover:scale-125 hover:z-50 transition-all duration-500 cursor-help"
//                     style={{ backgroundColor: color.hex, zIndex: 5 - i }}
//                   />
//                   <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[#BC8A5F]">
//                     {color.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <p className="mt-12 text-[#6a5647] text-xs tracking-[0.2em] uppercase opacity-60">
//               Để những khung hình thêm phần đồng điệu
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function CalendarTimelineSection() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const highlightDay = 20;

  const timelineItems = [
    {
      time: "10:30 AM",
      label: "Đón Khách",
      icon: "/icons/flower-1.png",
      delay: 0.1,
    },
    {
      time: "11:30 AM",
      label: "Lễ Thành Hôn",
      icon: "/icons/ring.png",
      delay: 0.3,
    },
    {
      time: "12:00 PM",
      label: "Khai Tiệc",
      icon: "/icons/dish.png",
      delay: 0.5,
    },
  ];

  const dressColors = [
    { hex: "#9b6a3b", label: "Mochaccino" },
    { hex: "#e7c8a2", label: "Latte" },
    { hex: "#e8b5a0", label: "Peach" },
    { hex: "#a4383e", label: "Red Wine" },
    { hex: "#f3d9c2", label: "Cream" },
  ];

  return (
    <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      {/* Họa tiết Botanical cong mềm mại ở các góc nền */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#BC8A5F"
          strokeWidth="0.5"
        >
          <path d="M100,0 Q70,50 100,100" />
          <path d="M100,20 Q80,50 100,80" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* === CỘT TRÁI: CALENDAR === */}
        <div className="relative flex flex-col items-center">
          <div className="absolute -inset-4 bg-[#E9DCC9]/30 rounded-[3rem] rotate-2 blur-sm pointer-events-none" />

          <div className="relative bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(188,138,95,0.1)] border border-white w-full">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#3D3831]">
                Tháng <span className="text-[#BC8A5F]">12</span>
              </h2>
              <div className="w-12 h-[2px] bg-[#BC8A5F]/30 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-7 gap-2 md:gap-3">
              {days.map((d, i) => (
                <div
                  key={i}
                  className="text-[10px] tracking-widest text-[#BC8A5F]/60 uppercase font-bold text-center pb-4"
                >
                  {d}
                </div>
              ))}
              {dates.map((num) => (
                <div
                  key={num}
                  className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                >
                  {num === highlightDay && (
                    <>
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-1 bg-[#BC8A5F]/20 rounded-full border-2 border-[#BC8A5F]/40"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.1 }}
                      />
                      {/* Thêm lại text Lễ cưới dưới ngày highlight */}
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-serif italic text-[#3D3831] whitespace-nowrap">
                        Lễ cưới
                      </span>
                    </>
                  )}
                  <span
                    className={`relative z-10 text-sm font-serif ${num === highlightDay ? "text-[#3D3831] font-bold" : "text-[#3D3831]/60"}`}
                  >
                    {num}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Thêm lại text mời dự tiệc */}
          <p className="text-[#6a5647] font-serif italic text-lg mt-14 opacity-80 text-center leading-relaxed">
            Thân mời quý khách đến dự lễ cưới thân mật
          </p>
        </div>

        {/* === CỘT PHẢI: TIMELINE & DRESSCODE === */}
        <div className="flex flex-col space-y-16">
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-serif italic text-[#3D3831]">
                Timeline
              </h3>
            </div>

            <div className="relative space-y-8 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#BC8A5F]/30 before:to-transparent">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay }}
                  className="relative flex items-center gap-10 group"
                >
                  <div className="relative z-10 w-16 h-16 bg-white rounded-2xl shadow-md border border-[#BC8A5F]/10 flex items-center justify-center transition-transform group-hover:rotate-6">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#BC8A5F] tracking-widest">
                      {item.time}
                    </span>
                    <span className="text-xl font-serif text-[#3D3831]">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dresscode với hiệu ứng Hover đẹp và thêm text chú thích */}
          <div className="bg-[#E9DCC9]/20 p-10 rounded-[2.5rem] border border-[#BC8A5F]/10 text-center">
            <h4 className="font-serif italic text-[#3D3831] mb-10 text-2xl md:text-3xl">
              Dress code
            </h4>
            <div className="flex justify-center -space-x-3 md:-space-x-5 mb-10">
              {dressColors.map((color, i) => (
                <div key={i} className="group relative">
                  <motion.span
                    whileHover={{ y: -10, scale: 1.1 }}
                    className="block w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg border-4 border-white cursor-pointer relative"
                    style={{ backgroundColor: color.hex, zIndex: 10 - i }}
                  />
                  {/* Hiệu ứng hover hiện tên màu sang trọng */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none">
                    <span className="text-[10px] font-bold text-[#BC8A5F] tracking-widest uppercase whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm border border-[#BC8A5F]/10">
                      {color.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Thêm lại dòng text chú thích dresscode */}
            <p className="text-[#6a5647] font-serif italic opacity-60 text-sm">
              Để những khung hình thêm phần đồng điệu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// // Hiệu ứng Ghim bấm (Push Pin)
// const PushPin = ({ color }: { color: string }) => (
//   <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-50`}>
//     <div
//       className={`w-full h-full ${color} rounded-full shadow-md border-b-4 border-black/20`}
//     />
//     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-gray-400 -z-10" />
//   </div>
// );

// export default function YouthWeddingInfo({ dict }: { dict: any }) {
//   const info = dict.weddingInfo;
//   const placeImages = ["/images/grand-palace.jpg", "/images/the-adora.webp"];

//   return (
//     <section className="relative py-32 bg-[#fffdf0] overflow-hidden">
//       {/* Background: Texture của bảng ghim bần (Corkboard) hoặc Bảng xanh lớp học */}
//       <div
//         className="absolute inset-0 z-0 opacity-10"
//         style={{
//           backgroundImage: `url('https://www.transparenttextures.com/patterns/notebook.png')`,
//         }}
//       />

//       {/* Các đường vẽ bậy (Doodles) */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <motion.svg
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           className="w-full h-full text-blue-300 opacity-20"
//         >
//           <path
//             d="M100,200 Q300,50 600,200 T1100,100"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="3"
//             strokeDasharray="10 10"
//           />
//           <circle
//             cx="5%"
//             cy="10%"
//             r="20"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           />
//         </motion.svg>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6 z-10">
//         {/* Header: Kiểu tiêu đề báo tường */}
//         <motion.div
//           initial={{ rotate: -2, scale: 0.9 }}
//           whileInView={{ rotate: 1, scale: 1 }}
//           className="text-center mb-24 relative"
//         >
//           <div className="absolute inset-0 bg-yellow-300 -rotate-1 -z-10 translate-y-2 translate-x-1" />
//           <div className="bg-white border-4 border-black p-6 inline-block">
//             <span className="text-blue-600 font-black tracking-widest text-sm uppercase block mb-2">
//               {info.label}
//             </span>
//             <h2 className="text-5xl md:text-7xl font-black text-black uppercase">
//               {info.title}
//             </h2>
//           </div>
//         </motion.div>

//         {/* Place Cards: Biến thành các "Event Tickets" */}
//         <div className="grid md:grid-cols-2 gap-20">
//           {info.places.map((p: any, i: number) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ type: "spring", bounce: 0.4 }}
//               className="relative group"
//             >
//               <PushPin color={i === 0 ? "bg-red-500" : "bg-blue-500"} />

//               {/* Tấm vé (Ticket Body) */}
//               <div className="relative bg-white border-2 border-black rounded-lg overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:shadow-[15px_15px_0px_rgba(0,0,0,1)] transition-all">
//                 {/* Image Section: Cắt răng cưa ở dưới */}
//                 <div className="relative h-64 overflow-hidden group">
//                   <Image
//                     src={placeImages[i]}
//                     alt={p.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                   <div className="absolute bottom-4 left-6 right-6">
//                     <p className="text-white font-black text-2xl uppercase italic">
//                       {p.time}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Info Section */}
//                 <div className="p-8 relative">
//                   {/* Đường xé vé răng cưa giả bằng CSS */}
//                   <div className="absolute top-0 left-0 right-0 h-4 -translate-y-1/2 flex justify-around px-2">
//                     {[...Array(12)].map((_, j) => (
//                       <div
//                         key={j}
//                         className="w-6 h-6 bg-[#fffdf0] rounded-full border-2 border-black -mt-3"
//                       />
//                     ))}
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-3xl font-black text-blue-900 leading-none">
//                       {p.title}
//                     </h3>

//                     <div className="flex items-center gap-2 bg-yellow-100 p-2 inline-block rounded-md border border-yellow-200">
//                       <span className="text-sm font-bold text-yellow-700">
//                         📍 {p.location}
//                       </span>
//                     </div>

//                     <p className="text-gray-600 font-medium leading-relaxed italic">
//                       &quot;{p.desc}&quot;
//                     </p>

//                     {/* Button: Biến thành hình tem thư */}
//                     <div className="pt-6">
//                       <a
//                         href={p.map}
//                         target="_blank"
//                         className="inline-block relative px-8 py-3 bg-black text-white font-black uppercase tracking-tighter hover:bg-blue-600 hover:-translate-y-1 transition-all active:translate-y-0"
//                       >
//                         <span className="relative z-10">{info.viewMap}</span>
//                         {/* Hiệu ứng tia chớp/ngôi sao khi hover */}
//                         <div className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
//                           ⚡
//                         </div>
//                       </a>
//                     </div>
//                   </div>

//                   {/* Giả mã vạch (Barcode) ở góc */}
//                   <div className="absolute bottom-8 right-8 w-16 h-12 flex flex-col justify-between opacity-30">
//                     {[...Array(6)].map((_, j) => (
//                       <div
//                         key={j}
//                         className="h-[2px] bg-black w-full"
//                         style={{ width: `${Math.random() * 100}%` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Nhãn dán trang trí ngẫu hứng */}
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center -rotate-12 z-20 text-xs font-black text-white text-center"
//               >
//                 JOIN US!
//                 <br />⭐
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Footer: Dòng chữ chạy (Marquee) hoặc Lời nhắn lưu bút */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-32 text-center"
//         >
//           <div className="inline-block relative">
//             <svg
//               className="absolute -top-10 -left-10 w-20 h-20 text-yellow-400 opacity-50"
//               viewBox="0 0 100 100"
//             >
//               <path
//                 d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
//                 fill="currentColor"
//               />
//             </svg>
//             <p className="text-3xl font-serif text-blue-900 font-bold max-w-2xl mx-auto leading-tight">
//               &quot;{info.footerNote}&quot;
//             </p>
//           </div>

//           <div className="mt-12 flex justify-center gap-4">
//             {["SAVE", "THE", "DATE"].map((word, i) => (
//               <div
//                 key={i}
//                 className="px-4 py-2 border-2 border-black font-black text-xs uppercase bg-white rotate-2 hover:rotate-0 transition-transform cursor-pointer"
//               >
//                 {word}
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingInfoCinemaTicket({ dict }: { dict: any }) {
  const info = dict.weddingInfo;
  const placeImages = ["/images/grand-palace.jpg", "/images/the-adora.webp"];

  return (
    <section className="relative py-32 bg-[#1a1a1a] overflow-hidden font-sans">
      {/* Nền giả lập thảm rạp phim với các chấm sáng bokeh */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Header: Kiểu bảng đèn Cinema (Marquee) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-24"
        >
          <div className="inline-block border-4 border-yellow-400 p-4 md:p-8 relative">
            {/* Đèn nhấp nháy xung quanh viền */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  top: i < 3 ? -1 : i > 4 ? "auto" : "50%",
                  bottom: i > 4 ? -1 : "auto",
                  left: i === 0 ? -1 : i === 7 ? -1 : i === 6 ? "50%" : "auto",
                  right: i === 3 ? -1 : i === 4 ? -1 : i === 5 ? "50%" : "auto",
                }}
              />
            ))}
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              NOW SHOWING: <span className="text-yellow-400">{info.title}</span>
            </h2>
          </div>
        </motion.div>

        {/* Tickets Container */}
        <div className="flex flex-col gap-12">
          {info.places.map((p: any, i: number) => (
            <motion.div
              key={p.title}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row group shadow-2xl"
            >
              {/* PHẦN CHÍNH CỦA VÉ (Main Body) */}
              <div className="relative flex-grow bg-white p-6 md:p-10 rounded-l-xl border-r-2 border-dashed border-gray-300">
                {/* Lỗ khuyết của vé (Circle cutouts) */}
                <div className="absolute -right-3 -top-3 w-6 h-6 bg-[#1a1a1a] rounded-full z-20" />
                <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-[#1a1a1a] rounded-full z-20" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Ảnh địa điểm như một frame hình trong phim */}
                  <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg border-2 border-black">
                    <Image
                      src={placeImages[i]}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-red-600 text-white px-2 py-0.5 text-xs font-bold rounded">
                        PREMIERE
                      </span>
                      <span className="text-gray-400 font-mono text-xs">
                        #000{i + 1}-2026
                      </span>
                    </div>
                    <h3 className="text-4xl font-black text-black uppercase leading-none">
                      {p.title}
                    </h3>
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                      📍 {p.location}
                    </p>
                    <p className="text-gray-600 font-medium italic">
                      &quot;{p.desc}&quot;
                    </p>
                  </div>
                </div>

                {/* Info Bar ở đáy vé */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-8">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">
                      Showtime
                    </p>
                    <p className="font-black text-xl text-black">{p.time}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">
                      Theater
                    </p>
                    <p className="font-black text-xl text-black">
                      Grand Hall {i + 1}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">
                      Row / Seat
                    </p>
                    <p className="font-black text-xl text-black">A1 / Sweet</p>
                  </div>
                </div>
              </div>

              {/* PHẦN CUỐNG VÉ (Ticket Stub) */}
              <div className="bg-yellow-400 w-full md:w-48 p-6 md:p-10 flex flex-col justify-center items-center rounded-r-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-black/5" />{" "}
                {/* Bóng đổ nhẹ ở rãnh xé */}
                {/* Link Google Maps như một mã vạch lớn */}
                <a
                  href={p.map}
                  target="_blank"
                  className="flex flex-col items-center group/btn cursor-pointer"
                >
                  <div className="w-full h-24 bg-black flex items-center justify-center p-2 mb-4 group-hover/btn:bg-blue-700 transition-colors">
                    {/* Giả lập Barcode bằng các vạch trắng */}
                    <div className="flex gap-1 h-full items-center">
                      {[...Array(15)].map((_, j) => (
                        <div
                          key={j}
                          className="bg-white"
                          style={{
                            width: `${Math.random() * 4 + 1}px`,
                            height: "80%",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-black font-black text-center leading-tight text-sm uppercase">
                    {info.viewMap} <br /> (Scan Me)
                  </span>
                </a>
                {/* Icon trang trí */}
                <div className="mt-6 text-4xl">🎟️</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-block border-2 border-dashed border-gray-600 p-6 rounded-3xl">
            <p className="text-gray-400 font-mono text-xl">
              &quot;{info.footerNote}&quot;
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-12 text-white/30 font-black text-5xl">
            <span>🍿</span>
            <span>🎬</span>
            <span>✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

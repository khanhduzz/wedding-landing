// "use client";

// import { motion } from "framer-motion";
// import YouthMessageForm from "./YouthMessageForm";
// import YouthMessageList from "./YouthMessageList";

// // Hiệu ứng Máy bay giấy bay ngang trời
// const PaperPlane = ({ delay, y }: { delay: number; y: string }) => (
//   <motion.div
//     initial={{ x: -100, y: 0, opacity: 0, rotate: 10 }}
//     animate={{
//       x: "110vw",
//       y: [0, -50, 50, 0],
//       opacity: [0, 1, 1, 0],
//       rotate: [10, -5, 15, 10],
//     }}
//     transition={{ duration: 10, repeat: Infinity, delay, ease: "easeInOut" }}
//     className="absolute text-3xl pointer-events-none z-0"
//     style={{ top: y }}
//   >
//     ✈️
//   </motion.div>
// );

// export default function YouthGuestBook({ dict }: { dict: any }) {
//   const gb = dict.guestbook;

//   return (
//     <section className="relative py-32 bg-[#FAF7F2] overflow-hidden">
//       {/* 1. Background: Giấy kẻ ô ly & Máy bay giấy */}
//       <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] pointer-events-none" />

//       <PaperPlane delay={0} y="15%" />
//       <PaperPlane delay={5} y="65%" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="flex flex-col lg:flex-row gap-16 items-start">
//           {/* LEFT: TITLE & DESCRIPTION - Kiểu tiêu đề báo tường */}
//           <div className="w-full lg:w-5/12">
//             <motion.div
//               initial={{ opacity: 0, rotate: -3 }}
//               whileInView={{ opacity: 1, rotate: 0 }}
//               viewport={{ once: true }}
//               className="relative mb-12"
//             >
//               {/* Sticker trang trí */}
//               <div className="absolute -top-10 -left-6 text-6xl animate-bounce">
//                 ✉️
//               </div>

//               <div className="bg-blue-600 text-white inline-block px-6 py-2 font-black uppercase tracking-tighter mb-6 shadow-[6px_6px_0px_#000]">
//                 {gb.label}
//               </div>

//               <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-8">
//                 {gb.title} <span className="text-pink-500">!</span>
//               </h2>

//               <div className="relative">
//                 <p className="text-xl font-bold text-gray-600 leading-relaxed italic z-10 relative">
//                   &quot;{gb.description}&quot;
//                 </p>
//                 {/* Vết bút dạ quang (Highlighter) */}
//                 <div className="absolute bottom-0 left-0 w-full h-4 bg-yellow-300 -z-10 opacity-50" />
//               </div>
//             </motion.div>

//             {/* Form: Thiết kế như một phong bì thư */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute -inset-4 bg-pink-200 rounded-3xl rotate-2 group-hover:rotate-1 transition-transform" />
//               <div className="relative bg-white border-4 border-black p-4 shadow-[12px_12px_0px_#000]">
//                 <div className="border-2 border-dashed border-gray-200 p-4">
//                   <YouthMessageForm dict={gb.form} />
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT: WISHES LIST - Bảng tin Post-it */}
//           <div className="w-full lg:w-7/12 flex flex-col">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="relative"
//             >
//               {/* Khung bảng ghim (Corkboard) */}
//               <div className="absolute inset-0 bg-[#D2B48C] rounded-3xl shadow-inner border-8 border-[#8B4513]" />

//               {/* Họa tiết mặt gỗ/bảng ghim */}
//               <div className="absolute inset-4 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] opacity-40" />

//               <div className="relative p-8 h-[650px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 custom-scroll-area">
//                 {/* LƯU Ý: Ở đây MessageListOrigin sẽ render danh sách tin nhắn.
//                   Bạn nên yêu cầu MessageListOrigin render các tin nhắn dưới dạng các thẻ <motion.div>
//                   có màu sắc ngẫu nhiên và góc nghiêng (rotate) ngẫu nhiên để giống Post-it.
//                 */}
//                 <div className="relative z-10">
//                   <YouthMessageList dict={gb.list} />
//                 </div>
//               </div>

//               {/* Trang trí góc bảng */}
//               <div className="absolute -bottom-8 -right-8 w-32 h-32 text-6xl rotate-12 drop-shadow-lg">
//                 🎨
//               </div>
//             </motion.div>

//             <p className="mt-8 text-center font-black text-gray-400 uppercase tracking-widest text-sm italic">
//               --- Scroll to read more memories ---
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .custom-scroll-area::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scroll-area::-webkit-scrollbar-track {
//           background: rgba(0, 0, 0, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scroll-area::-webkit-scrollbar-thumb {
//           background: #8b4513;
//           border-radius: 10px;
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import YouthMessageForm from "./YouthMessageForm";
// import YouthMessageList from "./YouthMessageList";

// // Hiệu ứng Máy bay giấy
// const PaperPlane = ({ delay, y }: { delay: number; y: string }) => (
//   <motion.div
//     initial={{ x: -100, y: 0, opacity: 0, rotate: 10 }}
//     animate={{
//       x: "110vw",
//       y: [0, -50, 50, 0],
//       opacity: [0, 1, 1, 0],
//       rotate: [10, -5, 15, 10],
//     }}
//     transition={{ duration: 10, repeat: Infinity, delay, ease: "easeInOut" }}
//     className="absolute text-3xl pointer-events-none z-0"
//     style={{ top: y }}
//   >
//     ✈️
//   </motion.div>
// );

// export default function YouthGuestBook({ dict }: { dict: any }) {
//   const gb = dict.guestbook;

//   return (
//     <section className="relative py-24 bg-[#FAF7F2] overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] pointer-events-none" />

//       <PaperPlane delay={0} y="10%" />
//       <PaperPlane delay={5} y="75%" />

//       <div className="relative max-w-[90rem] mx-auto px-6">
//         {/* HEADER: Căn giữa để tạo sự cân đối tổng thể */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="bg-blue-600 text-white inline-block px-6 py-2 font-black uppercase tracking-tighter mb-4 shadow-[6px_6px_0px_#000]">
//             {gb.label}
//           </div>
//           <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-6">
//             {gb.title}{" "}
//             <span className="text-pink-500 text-6xl md:text-8xl">!</span>
//           </h2>
//           <p className="text-xl font-bold text-gray-500 italic max-w-2xl mx-auto">
//             &quot;{gb.description}&quot;
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//           {/* LEFT: FORM (Chiếm 4/12) - Giữ sticky để khách luôn thấy khi cuộn */}
//           <div className="lg:col-span-4 sticky top-10">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute -inset-4 bg-pink-200 rounded-3xl rotate-2 group-hover:rotate-1 transition-transform" />
//               <div className="relative bg-white border-4 border-black p-4 shadow-[12px_12px_0px_#000]">
//                 <div className="border-2 border-dashed border-gray-200 p-6 bg-[#fffdf0]">
//                   <h3 className="text-blue-900 font-black mb-6 flex items-center gap-2 tracking-tight">
//                     <span className="text-2xl">✍️</span> GỬI LỜI CHÚC
//                   </h3>
//                   <YouthMessageForm dict={gb.form} />
//                 </div>
//               </div>

//               {/* Sticker trang trí dưới form */}
//               <div className="absolute -bottom-12 -left-6 text-6xl opacity-20 rotate-[-15deg] hidden lg:block">
//                 🖍️
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT: WISHES LIST (Chiếm 8/12) - Không gian bảng ghim rộng mở */}
//           <div className="lg:col-span-8 w-full">
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               {/* Tag trang trí bảng */}
//               <div className="absolute -top-5 right-10 bg-yellow-400 text-black font-black px-6 py-2 rotate-3 border-4 border-black shadow-lg z-20 text-sm uppercase">
//                 Memories Wall
//               </div>

//               {/* Khung bảng ghim (Corkboard) */}
//               <div className="absolute inset-0 bg-[#D2B48C] rounded-[2.5rem] shadow-2xl border-[12px] border-[#8B4513]" />

//               {/* Họa tiết mặt bảng ghim */}
//               <div className="absolute inset-4 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] opacity-50" />

//               <div className="relative p-6 md:p-10 min-h-[700px] h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 custom-scroll-area">
//                 <div className="relative z-10">
//                   {/* Hãy đảm bảo YouthMessageList bên trong sử dụng grid-cols-2 trên desktop */}
//                   <YouthMessageList dict={gb.list} />
//                 </div>
//               </div>

//               {/* Trang trí góc bảng */}
//               <div className="absolute -bottom-10 -right-6 text-7xl rotate-12 drop-shadow-xl select-none">
//                 🎨
//               </div>
//             </motion.div>

//             <p className="mt-8 text-center font-black text-gray-400 uppercase tracking-widest text-xs italic animate-pulse">
//               --- Scroll to read more memories ---
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .custom-scroll-area::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scroll-area::-webkit-scrollbar-track {
//           background: rgba(0, 0, 0, 0.1);
//           border-radius: 10px;
//         }
//         .custom-scroll-area::-webkit-scrollbar-thumb {
//           background: #8b4513;
//           border-radius: 10px;
//           border: 2px solid #d2b48c;
//         }
//       `}</style>
//     </section>
//   );
// }

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

  // Lấy dữ liệu để tính toán số lượng tin nhắn ngay tại đây
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

        {/* GRID CONTAINER: Sử dụng items-stretch để ép 2 cột cao bằng nhau */}
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

            {/* Phần bù chiều cao bên trái: Doodle & Quote */}
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
              {/* Khung Corkboard */}
              <div className="absolute inset-0 bg-[#D2B48C] rounded-[2.5rem] shadow-2xl border-[12px] border-[#8B4513]" />
              <div className="absolute inset-4 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] opacity-50" />

              {/* Nội dung bên trong bảng */}
              <div className="relative z-10 p-6 md:p-10 flex-1 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="bg-yellow-400 text-black font-black px-4 py-1 rotate-[-2deg] border-2 border-black text-xs uppercase shadow-md">
                    STICKY NOTES
                  </div>
                  <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
                    {messagesCount} LỜI CHÚC
                  </div>
                </div>

                {/* Khu vực chứa List - Quan trọng: h-0 và flex-grow để scroll hoạt động chuẩn */}
                <div className="flex-grow h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 custom-scroll-area pr-4">
                  <YouthMessageList dict={gb.list} />
                </div>
              </div>

              {/* Decor góc bảng */}
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

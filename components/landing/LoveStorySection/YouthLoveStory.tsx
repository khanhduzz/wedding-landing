// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// // Hiệu ứng Băng dính (Washi Tape) trang trí ảnh
// const WashiTape = ({ className }: { className?: string }) => (
//   <div
//     className={`absolute h-8 w-24 bg-blue-400/40 backdrop-blur-sm z-40 rotate-[-15deg] shadow-sm ${className}`}
//     style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
//   />
// );

// export default function YouthLoveStory({ dict }: { dict: any }) {
//   const s = dict.story;

//   return (
//     <section
//       id="info"
//       className="relative py-24 bg-white overflow-hidden font-sans"
//     >
//       {/* Nền kẻ ô ly (Graph Paper) đặc trưng của học sinh */}
//       <div
//         className="absolute inset-0 z-0 opacity-[0.15]"
//         style={{
//           backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="relative mx-auto max-w-6xl px-6">
//         {/* HEADER: Phá cách với Title nghiêng và Badge */}
//         <div className="relative mb-20">
//           <motion.div
//             initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
//             whileInView={{ rotate: -2, scale: 1, opacity: 1 }}
//             className="inline-block bg-yellow-400 px-8 py-4 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]"
//           >
//             <h2 className="text-4xl md:text-6xl font-black text-blue-900 uppercase tracking-tighter">
//               {s.title}
//             </h2>
//           </motion.div>
//           <div className="absolute -top-6 -left-4 text-6xl text-blue-500/20 font-black italic select-none">
//             OUR MEMORIES
//           </div>
//         </div>

//         {/* MAIN CONTENT: Layout đan xen như cắt dán nhật ký */}
//         <div className="relative grid grid-cols-1 md:grid-cols-10 gap-4">
//           {/* Block 1: Đoạn văn 1 nằm trong một mẩu giấy Note */}
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             className="md:col-span-4 bg-white p-8 shadow-xl border-t-4 border-blue-500 relative z-10 self-start rotate-1"
//           >
//             <div className="absolute top-2 right-4 text-4xl opacity-20">“</div>
//             <p className="text-gray-700 text-lg leading-relaxed font-medium">
//               {s.paragraph1}
//             </p>
//             {/* Vẽ tay trang trí */}
//             <div className="mt-4 h-1 w-20 bg-yellow-400" />
//           </motion.div>

//           {/* Block 2: Ảnh chính với hiệu ứng Scrapbook */}
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             className="md:col-span-6 relative flex justify-center py-12"
//           >
//             <WashiTape className="-top-4 left-1/4" />
//             <div className="relative w-full max-w-[500px] aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden shadow-2xl rotate-2 border-[12px] border-white">
//               <Image
//                 src="/images/gallery1.jpg"
//                 alt="Main"
//                 fill
//                 className="object-cover hover:scale-110 transition-transform duration-700"
//               />
//             </div>
//             {/* Sticker tròn bay lơ lửng */}
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-center -rotate-12 shadow-lg border-4 border-dashed border-white">
//               Forever <br /> Young
//             </div>
//           </motion.div>

//           {/* Block 3: Ảnh nhỏ và Signature đè lên nhau */}
//           <div className="md:col-span-5 relative mt-12 md:-mt-20">
//             <motion.div
//               whileHover={{ scale: 1.05, rotate: 0 }}
//               className="relative w-64 h-80 bg-white p-2 shadow-lg -rotate-6 border border-gray-100"
//             >
//               <Image
//                 src="/images/gallery2.jpg"
//                 alt="Memory"
//                 fill
//                 className="object-cover p-2"
//               />
//               <WashiTape className="top-0 -right-8 !bg-yellow-300/60" />
//             </motion.div>
//           </div>

//           {/* Block 4: Đoạn văn 2 và Chữ ký - Layout bay tự do */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="md:col-span-5 flex flex-col justify-end pb-12"
//           >
//             <div className="relative p-6 bg-blue-50 rounded-2xl border-2 border-dashed border-blue-200">
//               <p className="text-blue-900/80 text-base leading-relaxed">
//                 {s.paragraph2}
//               </p>
//               <div className="mt-8 text-right">
//                 <span className="text-5xl font-serif text-blue-600 inline-block transform hover:scale-110 transition-transform cursor-pointer">
//                   {s.signature}
//                 </span>
//                 <div className="text-xs tracking-widest text-blue-400 mt-2 uppercase font-bold">
//                   Thắt nút tình yêu • 2024
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Decorative Floating Elements (Máy bay, tim, ngôi sao vẽ tay) */}
//         <div className="absolute top-1/2 right-10 opacity-20 hidden lg:block">
//           <svg width="100" height="100" viewBox="0 0 100 100">
//             <path
//               d="M10,50 Q25,25 40,50 T70,50"
//               fill="none"
//               stroke="#3b82f6"
//               strokeWidth="2"
//               strokeDasharray="5,5"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Component mẩu giấy note rung rinh
const StickyNote = ({ children, color, rotate }: any) => (
  <motion.div
    animate={{ rotate: [rotate, rotate + 2, rotate - 1, rotate] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`p-6 shadow-xl ${color} relative border-b-[10px] border-black/10`}
    style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)" }}
  >
    {children}
  </motion.div>
);

export default function YouthLoveStory({ dict }: { dict: any }) {
  const s = dict.story;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Hiệu ứng Parallax cho các sticker
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotateS = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#fffdf0] overflow-hidden cursor-default"
    >
      {/* 1. Nền vở kẻ ngang (Notebook Paper) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#94a3b8 1px, transparent 1px)",
          backgroundSize: "100% 2rem",
        }}
      />

      {/* 2. Floating Objects - Những thứ gây "Wow" khi cuộn */}
      <motion.div
        style={{ y: y1, rotate: rotateS }}
        className="absolute top-20 left-[5%] z-30"
      >
        <div className="bg-pink-400 text-white p-3 rounded-lg font-bold -rotate-12 shadow-lg border-2 border-white">
          First Date! ❤️
        </div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-[10%] z-30"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="text-yellow-500 fill-current drop-shadow-lg"
        >
          <path d="M50 5 L63 40 L95 40 L70 60 L80 95 L50 75 L20 95 L30 60 L5 40 L37 40 Z" />
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT: Layout chồng lấp ảnh cực mạnh */}
        <div className="lg:col-span-7 relative h-[600px]">
          {/* Ảnh chính - Hiệu ứng nghiêng khi hover */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: 0 }}
            initial={{ rotate: -3 }}
            className="absolute top-10 left-10 w-[70%] aspect-[4/5] z-20 group"
          >
            <div className="relative w-full h-full border-[15px] border-white shadow-[20px_20px_0px_rgba(0,0,0,0.05)] overflow-hidden">
              <Image
                src="/images/gallery1.jpg"
                alt="Us"
                fill
                className="object-cover transition-filter duration-500 group-hover:saturate-150"
              />
              {/* Overlay nhãn dán */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 text-sm font-black transform -rotate-12">
                OUR CLASS 2024
              </div>
            </div>
          </motion.div>

          {/* Ảnh phụ 1 - Cắt hình răng cưa */}
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[40%] aspect-square z-10 border-8 border-white shadow-xl rotate-12"
          >
            <Image
              src="/images/gallery2.jpg"
              alt="Memory"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Ảnh phụ 2 - Dạng hình tròn Sticker */}
          <motion.div
            style={{ x: y2 }}
            className="absolute bottom-10 right-20 w-48 h-48 z-30 rounded-full border-8 border-yellow-300 shadow-2xl overflow-hidden hidden md:block"
          >
            <Image
              src="/images/gallery3.jpg"
              alt="Sticker"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT: Nội dung dạng Storyboard */}
        <div className="lg:col-span-5 space-y-8 relative">
          {/* Title với hiệu ứng "Highlight" bút dạ quang */}
          <div className="relative inline-block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-2 left-0 h-8 bg-yellow-200 -z-10"
            />
            <h2 className="text-6xl font-black text-blue-900 tracking-tight leading-none">
              {s.title}
            </h2>
          </div>

          {/* Đoạn văn 1 - Trong mẩu giấy note rung rinh */}
          <StickyNote color="bg-white" rotate={-2}>
            <p className="text-xl font-medium text-gray-800 leading-relaxed font-handwriting">
              {s.paragraph1}
            </p>
          </StickyNote>

          {/* Đoạn văn 2 - Kèm icon vẽ tay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-0 text-4xl text-blue-400 font-bold">
              #
            </div>
            <p className="text-gray-600 text-lg">{s.paragraph2}</p>
          </motion.div>

          {/* Signature & Cánh hoa rơi */}
          <div className="pt-10 relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="text-7xl font-serif text-pink-500 -rotate-6 drop-shadow-md cursor-pointer hover:scale-125 transition-transform"
            >
              {s.signature}
            </motion.div>

            {/* Cánh hoa anh đào rơi giả lập (CSS) */}
            <div className="absolute -top-10 right-0 animate-bounce">🌸</div>
          </div>
        </div>
      </div>

      {/* Trang trí thêm ở viền trang web */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    </section>
  );
}

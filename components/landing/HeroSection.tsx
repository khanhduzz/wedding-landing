// "use client";

// export default function HeroSection() {
//   const target = new Date(Date.UTC(2025, 10, 15, 8, 0, 0)).getTime(); // Nov 15, 2025
//   return (
//     <div className="min-h-[80vh] grid place-items-center bg-[url('/images/hero-img-2.jpg')] bg-cover bg-center relative mt-12">
//       <div className="absolute inset-0 bg-white/60" />
//       <div className="relative text-center px-6 py-24">
//         <h1 className="font-script text-8xl text-primary">Alice & Bob</h1>
//         <p className="mt-2 text-lg font-medium text-gray-800">
//           November 15, 2025
//         </p>
//         <Countdown target={target} />
//       </div>
//     </div>
//   );
// }

// function Countdown({ target }: { target: number }) {
//   const [remain, setRemain] = require("react").useState(target - Date.now());
//   require("react").useEffect(() => {
//     const id = setInterval(() => setRemain(target - Date.now()), 1000);
//     return () => clearInterval(id);
//   }, [target]);
//   const s = Math.max(0, Math.floor(remain / 1000));
//   const d = Math.floor(s / 86400);
//   const h = Math.floor((s % 86400) / 3600);
//   const m = Math.floor((s % 3600) / 60);
//   const sec = s % 60;
//   return (
//     <div className="mt-6 text-xl font-semibold text-white">
//       {d}d {h}h {m}m {sec}s
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const target = new Date(Date.UTC(2025, 8, 1, 8, 0, 0)).getTime(); // Sep 1, 2025
  return (
    <div className="min-h-[80vh] grid place-items-center bg-[url('/images/hero-img-2.jpg')] bg-cover bg-center relative mt-12">
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative text-center px-6 py-24">
        <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg">
          <h1 className="font-script text-6xl sm:text-8xl text-secondary">
            Alice & Bob
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-800">
            September 1, 2025
          </p>
          <Countdown target={target} />
        </div>
      </div>
    </div>
  );
}

function Countdown({ target }: { target: number }) {
  const [remain, setRemain] = require("react").useState(0);

  require("react").useEffect(() => {
    const update = () => setRemain(target - Date.now());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remain <= 0) {
    return (
      <div className="mt-8 flex gap-6 justify-center">
        {["0", "0", "0", "0"].map((val, idx) => (
          <div key={idx} className="text-center">
            <div className="text-5xl font-bold text-primary">0</div>
            <div className="text-sm uppercase tracking-widest text-gray-700">
              {["Days", "Hrs", "Min", "Sec"][idx]}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const s = Math.floor(remain / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  const parts = [
    { label: "Days", value: d },
    { label: "Hrs", value: h },
    { label: "Min", value: m },
    { label: "Sec", value: sec },
  ];

  return (
    <div className="mt-8 flex gap-6 justify-center">
      {parts.map((p) => (
        <div key={p.label} className="text-center">
          <div className="text-5xl sm:text-6xl text-secondary">
            {String(p.value).padStart(2, "0")}
          </div>
          <div className="text-sm uppercase font-bold tracking-widest text-gray-700">
            {p.label}
          </div>
        </div>
      ))}
    </div>
  );
}

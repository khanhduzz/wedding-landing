"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const target = new Date(Date.UTC(2025, 8, 1, 8, 0, 0)).getTime(); // Sept 1, 2025

  return (
    <section className="relative min-h-[90vh] mt-10 flex items-center overflow-hidden">
      {/* Left background image with blurred edge */}
      <div className="absolute inset-y-0 left-0 w-3/4">
        <img
          src="/images/hero3.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Blur fade on right side */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-[#faf7f2]/95 backdrop-blur-sm" />
      </div>

      {/* Right text block */}
      <div className="relative z-10 w-2/5 ml-auto pr-10">
        {/* <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg px-10 py-12 animate-fadeIn">
          <h1 className="font-script text-7xl sm:text-8xl text-gray-800 leading-tight">
            Alice <br />
            <span className="pl-20 text-primary">&</span> <br />
            <span className="pl-40">Bob</span>
          </h1>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent my-6" />

          <p className="text-lg sm:text-xl font-serif text-gray-600 italic">
            September 1, 2025 — Ho Chi Minh City
          </p>

          <Countdown target={target} />

          <div className="mt-10">
            <a
              href="#details"
              className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
            >
              Save the Date
            </a>
          </div>
        </div> */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-[2rem] shadow-xl px-10 py-12 animate-fadeIn overflow-hidden text-block">
          {/* Artistic background image */}
          <img
            src="/images/paper-texture2.jpg"
            alt="decor"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />

          <div className="relative z-10">
            <h1 className="font-script text-7xl sm:text-8xl text-gray-800 leading-tight">
              Alice <br />
              <span className="pl-20">&</span> <br />
              <span className="pl-40">Bob</span>
            </h1>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent my-6" />
            <p className="text-lg sm:text-xl font-serif text-gray-600 italic">
              September 1, 2025 — Ho Chi Minh City
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#details"
              className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
            >
              Save the Date
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Countdown({ target }: { target: number }) {
  const [remain, setRemain] = useState(0);

  useEffect(() => {
    const update = () => setRemain(target - Date.now());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remain <= 0) return null;

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
    <div className="mt-10 flex gap-4 sm:gap-6 justify-center">
      {parts.map((p) => (
        <div
          key={p.label}
          className="px-5 py-4 rounded-2xl border border-yellow-600/30 bg-white/60 backdrop-blur-md shadow-sm"
        >
          <div className="text-3xl sm:text-4xl font-bold text-gray-800">
            {String(p.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium">
            {p.label}
          </div>
        </div>
      ))}
    </div>
  );
}
<style jsx>{`
  .text-block {
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    clip-path: polygon(0 0, 100% 10%, 90% 100%, 10% 90%);
  }
`}</style>;

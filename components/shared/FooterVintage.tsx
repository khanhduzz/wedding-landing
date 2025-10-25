"use client";

import { Heart } from "lucide-react";

export default function FooterVintage() {
  return (
    <footer className="relative py-10 bg-white text-center overflow-hidden">
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

      {/* Decorative subtle border top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#cbb79e] to-transparent opacity-60" />

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Heart icon */}
        <div className="flex justify-center mb-3">
          <Heart className="w-6 h-6 text-[#c4a484]" fill="#c4a484" />
        </div>

        {/* Text */}
        <p className="text-[#5c4638] font-serif italic text-base">
          Cảm ơn bạn đã cùng chúng tôi chia sẻ ngày trọng đại này 💍
        </p>
        <p className="text-[#6a5647]/80 font-serif mt-2 text-sm">
          Mỗi lời chúc và nụ cười của bạn là món quà quý giá nhất.
        </p>

        {/* Divider line */}
        <div className="my-6 mx-auto w-16 h-[1px] bg-[#c4a484]/50"></div>

        {/* Footer credits */}
        <p className="text-[#6a5647]/70 text-xs font-serif">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">A & B</span> — Made with love and
          gratitude 💕
        </p>

        {/* Admin link */}
        <div className="mt-2">
          <a
            href="/admin/login"
            className="underline text-[#8a745f]/80 hover:text-[#b39472] transition-colors text-xs"
          >
            Trang quản trị
          </a>
        </div>
      </div>
    </footer>
  );
}

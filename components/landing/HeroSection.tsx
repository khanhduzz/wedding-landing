"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base background (grayscale) */}
      <img
        src="/images/gallery3.jpg" // Replace with your image
        alt="Wedding background"
        className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-[0.8]"
      />

      {/* Colored couple overlay */}
      <img
        src="/images/gallery3.jpg" // Same image, will mask to color only couple
        alt="Wedding color overlay"
        className="absolute inset-0 w-full h-full object-cover mix-blend-color"
        style={{
          WebkitMaskImage: "url('/images/couple-mask.png')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: "url('/images/couple-mask.png')",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40" />

      {/* Text content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-10">
        <h3 className="font-script text-4xl sm:text-5xl text-yellow-200 mb-4">
          Happy wedding
        </h3>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold mb-6 text-white">
          Hải Nam <span className="text-yellow-300">&</span> Quỳnh Mai
        </h1>

        <p className="text-base sm:text-lg font-light italic mb-8">
          25/12/2020 – Hà Nội <span className="mx-2">⇌</span> 09/01/2021 – Sài
          Gòn
        </p>

        <a
          href="#details"
          className="inline-block mt-4 px-8 py-3 text-lg font-medium border border-white/80 rounded-full hover:bg-white hover:text-gray-900 transition duration-300"
        >
          Xem thêm
        </a>
      </div>
    </section>
  );
}

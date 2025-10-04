"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Story = { title: string; text: string; image: string };

export default function LoveStorySection() {
  const stories: Story[] = [
    {
      title: "First Meet",
      text: "Our journey started with a simple meeting that changed everything.",
      image: "/images/gallery1.jpg",
    },
    {
      title: "Falling in Love",
      text: "Day by day, our bond grew stronger until we knew it was love.",
      image: "/images/gallery2.jpg",
    },
    {
      title: "Proposal",
      text: "The unforgettable moment when we decided to spend forever together.",
      image: "/images/gallery3.jpg",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3500, stopOnInteraction: true })]
  );

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-heading mb-10 text-gray-800">
        Our Love Story
      </h2>

      <div className="relative w-full max-w-6xl mx-auto pb-12">
        {/* added pb-12 to make space for dots */}

        {/* Embla viewport */}
        <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex items-center">
            {stories.map((s, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 px-4"
                  style={{
                    minWidth: "68%",
                    transition:
                      "transform 500ms cubic-bezier(.22,.9,.2,1), filter 500ms ease, opacity 500ms ease",
                    transform: isActive ? "scale(1)" : "scale(0.95)",
                    opacity: isActive ? 1 : 0.65,
                    filter: isActive ? "blur(0px)" : "blur(4px)",
                    zIndex: isActive ? 20 : 10,
                  }}
                >
                  <div className="rounded-2xl overflow-hidden bg-white">
                    <div className="relative w-full h-[400px]">
                      {/* ⬆ bumped height */}
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {isActive && (
                      <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          {s.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{s.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* pagination / dots */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {stories.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-4 h-4 rounded-full transition ${
                selected === idx ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .embla {
          -webkit-overflow-scrolling: touch;
        }
        .embla > div {
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
}

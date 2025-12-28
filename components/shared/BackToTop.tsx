"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          name="back-to-top"
          type="button"
          role="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#5e4b3c] text-white rounded-full shadow-lg hover:bg-[#7a5b48] transition"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}

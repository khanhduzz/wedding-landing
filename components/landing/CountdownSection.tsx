// components/landing/CountdownSection.tsx
"use client";
import { useEffect, useState } from "react";

export default function CountdownSection() {
  const weddingDate = new Date("2021-03-11T07:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-heading mb-6">Counting Days</h2>
      <div className="flex justify-center gap-6 text-xl font-mono">
        <div>
          <span className="text-4xl font-bold">{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div>
          <span className="text-4xl font-bold">{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div>
          <span className="text-4xl font-bold">{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div>
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";

const items = [
  { href: "#hero", label: "Home" },
  { href: "#info", label: "Info" },
  { href: "#timeline", label: "Timeline" },
  { href: "#gallery", label: "Gallery" },
  { href: "#guestbook", label: "Guestbook" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#gift", label: "Gifts" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-script text-2xl text-primary">
          D ♥ L
        </Link>
        <div className="hidden sm:flex items-center gap-4">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm hover:text-primary"
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

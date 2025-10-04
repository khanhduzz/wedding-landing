// components/landing/LiveStreamSection.tsx
import { FaInstagram, FaYoutube, FaVideo } from "react-icons/fa";

export default function LiveStreamSection() {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-heading mb-10 text-gray-800">Live Stream</h2>
      <div className="flex justify-center gap-8">
        {/* <a
          href="https://instagram.com"
          target="_blank"
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <FaInstagram size={40} className="text-pink-500 mb-2" />
          Instagram
        </a>
        <a
          href="https://zoom.us"
          target="_blank"
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <FaVideo size={40} className="text-blue-500 mb-2" />
          Zoom
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:scale-105 transition"
        >
          <FaYoutube size={40} className="text-red-500 mb-2" />
          YouTube
        </a> */}
      </div>
    </div>
  );
}

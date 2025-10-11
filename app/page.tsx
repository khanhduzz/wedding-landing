import dynamic from "next/dynamic";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing/HeroSection";
import WeddingInfo from "@/components/landing/WeddingInfo";
import LoveStorySection from "@/components/landing/LoveStorySection";
import WeddingDetails from "@/components/landing/WeddingDetails";
import CountdownSection from "@/components/landing/CountdownSection";
import LiveStreamSection from "@/components/landing/LiveStreamSection";
import HealthProtocol from "@/components/landing/HealthProtocol";

const Gallery = dynamic(() => import("@/components/landing/Gallery"), {
  ssr: false,
});
const PlaylistSection = dynamic(
  () => import("@/components/landing/PlaylistSection"),
  { ssr: false }
);
const Guestbook = dynamic(
  () => import("@/components/landing/Guestbook/MessageList"),
  { ssr: false }
);
const MessageForm = dynamic(
  () => import("@/components/landing/Guestbook/MessageForm"),
  { ssr: false }
);
const GiftSection = dynamic(() => import("@/components/landing/GiftSection"), {
  ssr: false,
});
const RSVPForm = dynamic(() => import("@/components/landing/RSVPForm"), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Love Story */}
        <section id="love-story">
          <LoveStorySection />
        </section>

        {/* Bride & Groom Info */}
        <section id="info">
          <WeddingInfo />
        </section>

        {/* Venue & Schedule */}
        {/* <section id="details">
          <WeddingDetails />
        </section> */}

        {/* Countdown */}
        {/* <section id="countdown">
          <CountdownSection />
        </section> */}

        {/* Live Stream */}
        {/* <section id="livestream">
          <LiveStreamSection />
        </section> */}

        {/* Health Protocol */}
        {/* <section id="protocol">
          <HealthProtocol />
        </section> */}

        {/* Gallery */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Playlist (optional) */}
        <section id="playlist">
          <PlaylistSection />
        </section>

        {/* Guestbook (Wishes) */}
        <section id="guestbook" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-heading mb-6 text-primary text-center">
              Leave Us a Note
            </h2>
            <MessageForm />
            <div className="mt-10">
              <Guestbook />
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp">
          <RSVPForm />
        </section>

        {/* Gift Section */}
        <section id="gift">
          <GiftSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

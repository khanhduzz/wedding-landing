import dynamic from "next/dynamic";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing/HeroSection";
import WeddingInfo from "@/components/landing/WeddingInfo";
import Timeline from "@/components/landing/Timeline";

const Gallery = dynamic(() => import("@/components/landing/Gallery"), { ssr: false });
const PlaylistSection = dynamic(() => import("@/components/landing/PlaylistSection"), { ssr: false });
const Guestbook = dynamic(() => import("@/components/landing/Guestbook/MessageList"), { ssr: false });
const MessageForm = dynamic(() => import("@/components/landing/Guestbook/MessageForm"), { ssr: false });
const GiftSection = dynamic(() => import("@/components/landing/GiftSection"), { ssr: false });
const RSVPForm = dynamic(() => import("@/components/landing/RSVPForm"), { ssr: false });

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="info"><WeddingInfo /></section>
        <section id="timeline"><Timeline /></section>
        <section id="gallery"><Gallery /></section>
        <section id="playlist"><PlaylistSection /></section>
        <section id="guestbook" className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-heading mb-6 text-primary">Leave Us a Message</h2>
            <MessageForm />
            <div className="mt-10">
              <Guestbook />
            </div>
          </div>
        </section>
        <section id="rsvp"><RSVPForm /></section>
        <section id="gift"><GiftSection /></section>
      </main>
      <Footer />
    </div>
  );
}

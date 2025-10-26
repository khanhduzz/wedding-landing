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
import TimelineSection from "@/components/landing/TimelineSection";
import CalendarSection from "@/components/landing/CalendarSection";
import CalendarTimelineSection from "@/components/landing/CalendarTimelineSection";
import WeddingVintageSection from "@/components/landing/WeddingVintageSection";
import WeddingInfoVintage from "@/components/landing/WeddingInfoVintage";
import CountdownSectionVintage from "@/components/landing/CountdownSectionVintage";
// import GalleryVintage from "@/components/landing/GalleryVintage";
import PlaylistVintageSection from "@/components/landing/PlaylistVintageSection";
import RSVPFormVintage from "@/components/landing/RSVPFormVintage";
import MessageFormVintage from "@/components/landing/Guestbook/MessageFormVintage";
import GuestbookVintage from "@/components/landing/Guestbook/GuestbookVintage";
import GiftSectionVintage from "@/components/landing/GiftSectionVintage";
import FooterVintage from "@/components/shared/FooterVintage";
import Guestbook from "@/components/landing/Guestbook/Guestbook";
import StorySectionVintage from "@/components/landing/StorySectionVintage";
import HeroSectionVintage from "@/components/landing/HeroSectionVintage";
import BackToTop from "@/components/shared/BackToTop";

const Gallery = dynamic(() => import("@/components/landing/Gallery"), {
  ssr: false,
});
const PlaylistSection = dynamic(
  () => import("@/components/landing/PlaylistSection"),
  { ssr: false }
);
// const Guestbook = dynamic(
//   () => import("@/components/landing/Guestbook/MessageList"),
//   { ssr: false }
// );
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
const GalleryVintage = dynamic(
  () => import("@/components/landing/GalleryVintage"),
  { ssr: false }
);

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>
        {/* <section id="hero-vintage">
          <HeroSectionVintage />
        </section> */}

        {/* Love Story */}
        <section id="love-story">
          <LoveStorySection />
        </section>
        {/* <section id="love-story-vintage">
          <StorySectionVintage />
        </section> */}

        {/* Bride & Groom Info */}
        {/* <section id="info">
          <WeddingInfo />
        </section> */}

        {/* Countdown Vintage */}
        <section id="wedding-vintage">
          <CountdownSectionVintage />
        </section>

        {/* Wedding Vintage Section */}
        <section id="wedding-vintage">
          <WeddingInfoVintage />
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
        {/* <section id="gallery">
          <Gallery />
        </section> */}

        <section id="gallery-vintage">
          <GalleryVintage />
        </section>

        {/* Playlist (optional) */}
        {/* <section id="playlist">
          <PlaylistSection />
        </section> */}
        <section id="playlist-vintage">
          <PlaylistVintageSection />
        </section>

        {/* Calendar Timeline (optional) */}
        <section id="calendar-timeline">
          <CalendarTimelineSection />
        </section>

        {/* Calendar (optional) */}
        {/* <section id="calendar">
          <CalendarSection />
        </section> */}

        {/* Timeline section */}
        {/* <section id="timeline">
          <TimelineSection />
        </section> */}

        {/* Guestbook (Wishes) */}

        <section id="guestbook">
          <GuestbookVintage />
        </section>

        {/* <section id="guestbook">
          <Guestbook />
        </section> */}

        {/* RSVP */}
        {/* <section id="rsvp">
          <RSVPForm />
        </section> */}
        <section id="rsvp-vintage">
          <RSVPFormVintage />
        </section>

        {/* Gift Section */}
        {/* <section id="gift">
          <GiftSection />
        </section> */}
        <section id="gift-vintage">
          <GiftSectionVintage />
        </section>
      </main>
      {/* <Footer /> */}
      <BackToTop />
      <FooterVintage />
    </div>
  );
}

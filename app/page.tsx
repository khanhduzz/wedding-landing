import dynamic from "next/dynamic";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import LoveStorySection from "@/components/landing/LoveStorySection";
import CalendarTimelineSection from "@/components/landing/CalendarTimelineSection";
import WeddingInfoVintage from "@/components/landing/WeddingInfoVintage";
import CountdownSectionVintage from "@/components/landing/CountdownSectionVintage";
import PlaylistVintageSection from "@/components/landing/PlaylistVintageSection";
import RSVPFormVintage from "@/components/landing/RSVPFormVintage";
import GuestbookVintage from "@/components/landing/Guestbook/GuestbookVintage";
import GiftSectionVintage from "@/components/landing/GiftSectionVintage";
import FooterVintage from "@/components/shared/FooterVintage";
import BackToTop from "@/components/shared/BackToTop";
import WeddingInvitationCard from "@/components/landing/WeddingInvitationCard";

const Gallery = dynamic(() => import("@/components/landing/Gallery"), {
  ssr: false,
});
const PlaylistSection = dynamic(
  () => import("@/components/landing/PlaylistSection"),
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
const GalleryVintage = dynamic(
  () => import("@/components/landing/GalleryVintage"),
  { ssr: false }
);

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="love-story">
          <LoveStorySection />
        </section>

        <section id="wedding-vintage">
          <CountdownSectionVintage />
        </section>

        <section id="wedding-vintage">
          <WeddingInfoVintage />
        </section>

        <section id="wedding-vintage">
          <WeddingInvitationCard />
        </section>

        <section id="gallery-vintage">
          <GalleryVintage />
        </section>

        <section id="playlist-vintage">
          <PlaylistVintageSection />
        </section>

        <section id="calendar-timeline">
          <CalendarTimelineSection />
        </section>

        <section id="guestbook">
          <GuestbookVintage />
        </section>

        <section id="rsvp-vintage">
          <RSVPFormVintage />
        </section>

        <section id="gift-vintage">
          <GiftSectionVintage />
        </section>
      </main>

      <BackToTop />
      <FooterVintage />
    </div>
  );
}

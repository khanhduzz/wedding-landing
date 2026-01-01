import BackToTop from "@/components/shared/BackToTop";
import CountdownSectionOrigin from "@/components/landing/Counting/CountdownSectionOrigin";
import WeddingInfoOrigin from "@/components/landing/WeddingInformation/WeddingInfoOrigin";
import WeddingInvitationCardOrigin from "@/components/landing/WeddingCard/WeddingInvitationCardOrigin";
import GallerySectionOrigin from "@/components/landing/GallerySection/GallerySectionOrigin";
import PlaylistSectionOrigin from "@/components/landing/PlaylistSection/PlaylistSectionOrigin";
import RSVPFormOrigin from "@/components/landing/RSVPForm/RSVPFormOrigin";
import GiftSectionOrigin from "@/components/landing/GiftSection/GiftSectionOrigin";
import CalendarTimelineOrigin from "@/components/landing/CalendarTimeline/CalendarTimelineOrigin";
import GuestbookOrigin from "../Guestbook/GuestBookOrigin";
import HeroSectionOrigin from "@/components/landing/HeroSection/HeroSectionOrigin";
import LoveStorySectionOrigin from "@/components/landing/LoveStorySection/LoveStorySectionOrigin";

export default function OriginTheme() {
  return (
    <div>
      <main>
        <section id="hero">
          <HeroSectionOrigin />
        </section>

        <section id="love-story">
          <LoveStorySectionOrigin />
        </section>

        <section id="countdown">
          <CountdownSectionOrigin />
        </section>

        <section id="info">
          <WeddingInfoOrigin />
        </section>

        <section id="invidation-card">
          <WeddingInvitationCardOrigin />
        </section>

        <section id="gallery">
          <GallerySectionOrigin />
        </section>

        <section id="playlist">
          <PlaylistSectionOrigin />
        </section>

        <section id="timeline">
          <CalendarTimelineOrigin />
        </section>

        <section id="guestbook">
          <GuestbookOrigin />
        </section>

        <section id="rsvp">
          <RSVPFormOrigin />
        </section>

        <section id="gift">
          <GiftSectionOrigin />
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

import BackToTop from "@/components/shared/BackToTop";
import NavbarOrigin from "@/components/shared/NavbarOrigin";
import CountdownSectionOrigin from "@/components/landing/Counting/CountdownSectionOrigin";
import WeddingInfoOrigin from "@/components/landing/WeddingInformation/WeddingInfoOrigin";
import WeddingInvitationCardOrigin from "@/components/landing/WeddingCard/WeddingInvitationCardOrigin";
import GallerySectionOrigin from "@/components/landing/GallerySection/GallerySectionOrigin";
import PlaylistSectionOrigin from "@/components/landing/PlaylistSection/PlaylistSectionOrigin";
import RSVPFormOrigin from "@/components/landing/RSVPForm/RSVPFormOrigin";
import GiftSectionOrigin from "@/components/landing/GiftSection/GiftSectionOrigin";
import FooterOrigin from "@/components/shared/FooterOrigin";
import CalendarTimelineOrigin from "@/components/landing/CalendarTimeline/CalendarTimelineOrigin";
import GuestbookOrigin from "../Guestbook/GuestBookOrigin";
import HeroSectionOrigin from "@/components/landing/HeroSection/HeroSectionOrigin";
import LoveStorySectionOrigin from "@/components/landing/LoveStorySection/LoveStorySectionOrigin";

export default function OriginTheme() {
  return (
    <div>
      <NavbarOrigin />
      <main>
        <section id="hero">
          <HeroSectionOrigin />
        </section>

        <section id="love-story">
          <LoveStorySectionOrigin />
        </section>

        <section id="wedding-vintage">
          <CountdownSectionOrigin />
        </section>

        <section id="wedding-vintage">
          <WeddingInfoOrigin />
        </section>

        <section id="wedding-vintage">
          <WeddingInvitationCardOrigin />
        </section>

        <section id="gallery-vintage">
          <GallerySectionOrigin />
        </section>

        <section id="playlist-vintage">
          <PlaylistSectionOrigin />
        </section>

        <section id="calendar-timeline">
          <CalendarTimelineOrigin />
        </section>

        <section id="guestbook">
          <GuestbookOrigin />
        </section>

        <section id="rsvp-vintage">
          <RSVPFormOrigin />
        </section>

        <section id="gift">
          <GiftSectionOrigin />
        </section>
      </main>

      <BackToTop />
      <FooterOrigin />
    </div>
  );
}

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

export default function OriginTheme({ dict }: { dict: any }) {
  return (
    <div>
      <main>
        <section id="hero">
          <HeroSectionOrigin dict={dict} />
        </section>

        <section id="love-story">
          <LoveStorySectionOrigin dict={dict} />
        </section>

        <section id="countdown">
          <CountdownSectionOrigin dict={dict} />
        </section>

        <section id="info">
          <WeddingInfoOrigin dict={dict} />
        </section>

        <section id="invidation-card">
          <WeddingInvitationCardOrigin dict={dict} />
        </section>

        <section id="gallery">
          <GallerySectionOrigin dict={dict} />
        </section>

        <section id="playlist">
          <PlaylistSectionOrigin dict={dict} />
        </section>

        <section id="timeline">
          <CalendarTimelineOrigin dict={dict} />
        </section>

        <section id="guestbook">
          <GuestbookOrigin dict={dict} />
        </section>

        <section id="rsvp">
          <RSVPFormOrigin dict={dict} />
        </section>

        <section id="gift">
          <GiftSectionOrigin dict={dict} />
        </section>
      </main>
      <BackToTop />
    </div>
  );
}

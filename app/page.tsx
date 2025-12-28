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
import HeroSectionModernVintage from "@/components/landing/HeroSection/HeroSectionModernVintage";
import NavbarModern from "@/components/shared/NavbarModern";
import LoveStoryModernSection from "@/components/landing/LoveStorySection/LoveStorySectionModern";
import CountdownSectionModern from "@/components/landing/Counting/CountdownSectionModern";
import WeddingInfoModern from "@/components/landing/WeddingInformation/WeddingInfoModern";
import WeddingInvitationCardModern from "@/components/landing/WeddingCard/WeddingInvitationCardModern";
import GallerySectionModern from "@/components/landing/GallerySection/GallerySectionModern";
import PlaylistSectionModern from "@/components/landing/PlaylistSection/PlaylistSectionModern";
import CalendarTimelineModern from "@/components/landing/CalendarTimeline/CalendarTimelineModern";
import RSVPFormModern from "@/components/landing/RSVPForm/RSVPFormModern";
import GuestbookModern from "@/components/landing/Guestbook/GuestBookModern";
import GiftSectionModern from "@/components/landing/GiftSection/GiftSectionModern";
import FooterModern from "@/components/shared/FooterModern";

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
      <NavbarModern />
      <main>
        <section id="hero">
          <HeroSectionModernVintage />
        </section>

        <section id="love-story">
          <LoveStoryModernSection />
        </section>

        <section id="wedding-vintage">
          <CountdownSectionModern />
        </section>

        <section id="wedding-vintage">
          <WeddingInfoModern />
        </section>

        <section id="wedding-vintage">
          <WeddingInvitationCardModern />
        </section>

        <section id="gallery-vintage">
          <GallerySectionModern />
        </section>

        <section id="playlist-vintage">
          <PlaylistSectionModern />
        </section>

        <section id="calendar-timeline">
          <CalendarTimelineModern />
        </section>

        <section id="guestbook">
          <GuestbookModern />
        </section>

        <section id="rsvp-vintage">
          <RSVPFormModern />
        </section>

        <section id="gift-vintage">
          <GiftSectionModern />
        </section>
      </main>

      <BackToTop />
      <FooterModern />
    </div>
  );
}

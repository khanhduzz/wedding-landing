import YouthBackToTop from "@/components/shared/YouthBackToTop";
import YouthCalendarTimeline from "../CalendarTimeline/YouthCalendarTimeline";
import YouthCountdown from "../Counting/YouthCountdown";
import YouthGallery from "../GallerySection/YouthGallery";
import YouthGift from "../GiftSection/YouthGift";
import YouthGuestBook from "../Guestbook/YouthGuestBook";
import HeroSectionYouth from "../HeroSection/HeroSectionYouth";
import YouthLoveStory from "../LoveStorySection/YouthLoveStory";
import YouthPlaylist from "../PlaylistSection/YouthPlaylist";
import YouthRSVPForm from "../RSVPForm/YouthRSVPForm";
import YouthWeddingCard from "../WeddingCard/YouthWeddingCard";
import YouthWeddingInfo from "../WeddingInformation/YouthWeddingInfo";

export default function YouthTheme({ dict }: { dict: any }) {
  return (
    <div>
      <main>
        <section id="hero">
          <HeroSectionYouth dict={dict} />
        </section>
        <section id="story">
          <YouthLoveStory dict={dict} />
        </section>

        <section id="countdown">
          <YouthCountdown dict={dict} />
        </section>

        <section id="info">
          <YouthWeddingInfo dict={dict} />
        </section>

        <section id="card">
          <YouthWeddingCard dict={dict} />
        </section>

        <section id="gallery">
          <YouthGallery dict={dict} />
        </section>

        <section id="playlist">
          <YouthPlaylist dict={dict} />
        </section>

        <section id="timeline">
          <YouthCalendarTimeline dict={dict} />
        </section>

        <section id="guestbook">
          <YouthGuestBook dict={dict} />
        </section>

        <section id="rsvp">
          <YouthRSVPForm dict={dict} />
        </section>

        <section id="gift">
          <YouthGift dict={dict} />
        </section>
      </main>
      <YouthBackToTop />
    </div>
  );
}

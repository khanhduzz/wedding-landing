import HeroSectionOrigin from "../HeroSection/HeroSectionOrigin";
import HeroSectionYouth from "../HeroSection/HeroSectionYouth";

export default function YouthTheme({ dict }: { dict: any }) {
  return (
    <div>
      <main>
        <section id="hero">
          <HeroSectionYouth dict={dict} />
        </section>
      </main>
    </div>
  );
}

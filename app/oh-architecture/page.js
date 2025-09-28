import LinkHover from "@/components/oh-architecture/link-hover/link-hover";
import StickyCardsOHArchitecture from "@/components/oh-architecture/sticky-cards/sticky-cards";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="work-links">
            <p>Featured Project</p>
            <p>Myrtel Pool House</p>
            <p>2024</p>
            <LinkHover href="#" text="View Project" />
          </div>
          <h1 className="hero-header">
            The OH Architecture style is defined by strong, solid forms with
            subtle elegance, natural balance and enduring appeal
          </h1>
          <p className="hero-copy">(Scroll Down)</p>
        </div>
      </section>
      <StickyCardsOHArchitecture />
      <section className="outro">
        <h1>End</h1>
      </section>
    </>
  );
}

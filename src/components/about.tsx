import Image from "next/image";
import Navbar from "./Navbar";

// Profile URLs match the sameAs list in app/about/page.tsx
const SOCIAL_LINKS = [
  { label: "Personal blog", href: "https://pieterborremans.com" },
  { label: "Life in Taiwan", href: "https://www.pieter.tw" },
  { label: "indiehacker.blog", href: "https://www.indiehacker.blog" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pieter-borremans/" },
  { label: "YouTube", href: "https://www.youtube.com/@PieterBorremans" },
];

export default function About() {
  return (
    <section className="about">
      <Navbar />

      <div className="about-inner">
        <figure className="about-figure">
          <div className="about-photo">
            <Image
              src="/Pieter_Borremans.jpeg"
              alt="Portrait of Pieter Borremans"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 420px"
              className="about-photo-img"
            />
          </div>
          <figcaption className="about-caption">Host · Echo Room</figcaption>
        </figure>

        <div className="about-text">
          <p className="section-label about-badge">About</p>
          <h1>Pieter Borremans</h1>
          <p className="about-role">
            Writer, digital entrepreneur, and software founder. Born in
            Indonesia, raised in Belgium, based between Taichung and London.
          </p>

          <div className="about-divider" />

          <p className="about-section-label">Biography</p>
          <div className="about-bio">
            <p>
              Pieter Borremans is the founder of{" "}
              <a href="https://www.ryokagroup.com" className="about-inline-link" target="_blank" rel="noopener noreferrer">Ryoka Group</a>,
              a holding company with a portfolio of software, media, and publishing brands. Its day-to-day
              operations, from active development to portfolio management, run through{" "}
              <a href="https://www.onpointvc.com" className="about-inline-link" target="_blank" rel="noopener noreferrer">OnPoint VC</a>,
              its operating engine. He has spent 25 years living and working across countries, a
              restlessness that shaped everything he does now.
            </p>
            <p>
              He started his first business at 22 and sold it almost fifteen
              years later, just before AI, no-code, and vibecoding made it
              possible for anyone without a development background to build
              software from scratch. That shift is what Ryoka was built to
              work inside.
            </p>
            <p>
              Alongside Ryoka, he writes about the psychological and
              emotional side of building alone: the burnout, the loneliness,
              the decision fatigue, and the small wins that keep you going.
              Most indie hacker content covers tactics and revenue. He writes
              about what it actually feels like.
            </p>          </div>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-label">Show</span>
              <span className="about-stat-value">Echo Room</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-label">Based</span>
              <span className="about-stat-value">Taichung · London</span>
            </div>
            <div className="about-stat about-stat-accent">
              <span className="about-stat-label">Launched</span>
              <span className="about-stat-value">October 2026</span>
            </div>
          </div>

          <div className="about-social">
            <span className="about-social-label">Find him elsewhere</span>
            <div className="about-social-row">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="pill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

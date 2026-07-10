import Image from "next/image";

export default function About() {
  return (
    <section className="about">
      <nav className="nav">
        <div className="logo">Echo Room</div>
        <div className="nav-links">
          <a href="/#episodes">Episodes</a>
          <a href="/about" className="nav-active">About</a>
          <a href="/#topics">Topics</a>
          <a href="/#shop">Shop</a>
          <a href="/#listen" className="nav-listen">
            Listen
            <span className="waveform">||||</span>
          </a>
        </div>
      </nav>

      <div className="about-inner">
        <div className="about-photo">
          <Image
            src="/Pieter_Borremans.jpeg"
            alt="Pieter Borremans - Echo Room"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="about-photo-img"
          />
          <div className="about-photo-blend" />
        </div>

        <div className="about-text">
          <div className="about-badge">About</div>
          <h1>Pieter Borremans</h1>
          <p className="about-role">Founder, Ryoka Group — host of Echo Room</p>

          <div className="about-divider" />

          <p className="about-bio">
            [ FILLER BIO TEXT — replace with the real copy. Two or three
            short paragraphs about who Pieter is, what Echo Room is, and
            why he started it. ]
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-label">Show</span>
              <span className="about-stat-value">Echo Room</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-label">Based</span>
              <span className="about-stat-value">[ location ]</span>
            </div>
            <div className="about-stat about-stat-accent">
              <span className="about-stat-label">Launching</span>
              <span className="about-stat-value">September 2026</span>
            </div>
          </div>

          <div className="about-social">
            <span className="about-social-label">Find him elsewhere</span>
            <div className="about-social-row">
              <a href="#" className="about-social-icon" aria-label="LinkedIn">in</a>
              <a href="#" className="about-social-icon" aria-label="X / Twitter">X</a>
              <a href="#" className="about-social-icon" aria-label="Website">W</a>
              <a href="#" className="about-social-icon" aria-label="Indie Hackers">IH</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
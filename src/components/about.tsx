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
          <p className="about-role">
            Writer, digital entrepreneur, and software founder. Born in
            Indonesia, raised in Belgium, based between Taipei and London.
          </p>

          <div className="about-divider" />

          <p className="about-section-label">Biography</p>
          <div className="about-bio">
            <p>
              Pieter Borremans is the founder of Ryoka Group, a company that
              builds, operates, and invests in software products. He has spent
              25 years living and working across countries, a restlessness
              that shaped everything he does now.
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
            </p>
            <p>
              Echo Room is where that same honesty moves from the page to a
              mic — one voice, no script, talking through whatever needs to
              be said.
            </p>
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-label">Show</span>
              <span className="about-stat-value">Echo Room</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-label">Based</span>
              <span className="about-stat-value">Taipei — London</span>
            </div>
            <div className="about-stat about-stat-accent">
              <span className="about-stat-label">Launching</span>
              <span className="about-stat-value">September 2026</span>
            </div>
          </div>

          <div className="about-social">
            <span className="about-social-label">Find him elsewhere</span>
            <div className="about-social-row">
              <a href="https://www.linkedin.com/in/pieter-borremans/" className="about-social-icon" aria-label="LinkedIn">in</a>
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

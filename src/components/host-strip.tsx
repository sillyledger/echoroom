import Image from "next/image";

export default function HostStrip() {
  return (
    <section className="home-section host" aria-labelledby="host-heading">
      <div className="host-card">
        <div className="host-photo">
          <Image
            src="/Pieter_Borremans.jpeg"
            alt="Portrait of Pieter Borremans"
            fill
            sizes="(max-width: 768px) 100vw, 260px"
            className="host-photo-img"
          />
        </div>
        <div className="host-text">
          <p className="section-label">Your host</p>
          <h2 id="host-heading" className="host-name">
            Pieter Borremans
          </h2>
          <p className="host-bio">
            Founder of Ryoka Group. Writes about the psychological and
            emotional side of building alone — the burnout, the loneliness,
            the decision fatigue, and the small wins that keep you going.
            Echo Room is where that honesty moves from the page to a mic.
          </p>
          <a href="/about" className="text-link">
            More about Pieter
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

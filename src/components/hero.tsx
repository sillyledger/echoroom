import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="launch-badge">
            <span className="launch-dot" />
            Launching September 2026
          </div>
          <h1>
            <span className="title-white">Echo</span>
            <span className="title-red">Room</span>
          </h1>
          <p className="tagline">One voice. No script. No exit.</p>
          <p className="description">
            Raw thoughts, uncut conversations, and the kind of honesty
            that doesn&apos;t fit anywhere else. Just a mic and whatever
            needs to be said.
          </p>
          <div className="cta-row">
            <a href="#listen" className="btn-primary">
              Listen now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/episodes" className="btn-secondary">
              Browse episodes
            </a>
          </div>
          <div className="platforms" id="listen">
            <span className="platforms-label">Listen on</span>
            <a href="#" className="pill">Spotify</a>
            <a href="#" className="pill">Apple Podcasts</a>
            <a href="#" className="pill">YouTube</a>
            <a href="#" className="pill">Amazon Music</a>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src="/Pieter_Borremans.jpeg"
            alt="Pieter Borremans - Echo Room"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="photo-img"
          />
          <div className="photo-blend" />
        </div>
      </div>
      <blockquote className="pull-quote">
        <span className="quote-mark">&ldquo;</span>
        <p>
          Just me, talking.<br />No edits.<br />No agenda.<br />
          <span className="quote-red">Unfiltered.</span>&rdquo;
        </p>
      </blockquote>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="logo">Echo Room</div>
        <div className="nav-links">
          <a href="#">Episodes</a>
          <a href="#">About</a>
          <a href="#">Topics</a>
          <a href="#">Shop</a>
          <a href="#" className="nav-listen">
            Listen
            <span className="waveform">||||</span>
          </a>
        </div>
      </nav>

      <div className="hero-inner">
        <div className="hero-text">
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
            <a href="#" className="btn-primary">Listen now →</a>
            <a href="#" className="btn-secondary">Browse episodes</a>
          </div>
          <div className="platforms">
            <span className="platforms-label">Listen on</span>
            <a href="#" className="pill">Spotify</a>
            <a href="#" className="pill">Apple Podcasts</a>
            <a href="#" className="pill">YouTube</a>
            <a href="#" className="pill">Amazon Music</a>
          </div>
        </div>

        <div className="hero-photo">
          <Image
            src="/photo.jpg"
            alt="Echo Room host"
            fill
            priority
            className="photo-img"
          />
          <div className="photo-blend" />
        </div>
      </div>

      <div className="pull-quote">
        <span className="quote-mark">&ldquo;</span>
        <p>Just me, talking.<br />No edits.<br />No agenda.<br />
          <span className="quote-red">Unfiltered.</span>&rdquo;
        </p>
      </div>
    </section>
  );
}

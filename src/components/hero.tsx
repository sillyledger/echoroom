import Image from "next/image";
import Navbar from "./Navbar";
import { getLatestEpisode } from "@/lib/feed";
import { PLATFORM_LINKS, PRIMARY_LISTEN_URL } from "@/lib/links";

export default async function Hero() {
  const latest = await getLatestEpisode();
  const others = PLATFORM_LINKS.filter((p) => p.label !== "Spotify");

  return (
    <section className="hero">
      <Navbar />
      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            <span className="title-white">Echo</span>{" "}
            <span className="title-red">Room</span>
          </h1>
          <p className="tagline">One voice. No script. No exit.</p>
          <p className="description">
            Raw thoughts, uncut conversations, and the kind of honesty
            that doesn&apos;t fit anywhere else. Just a mic and whatever
            needs to be said.
          </p>
          {latest ? (
            <>
              <div className="latest-card">
                <div className="latest-meta">
                  <span className="latest-label">
                    Latest · EP {String(latest.number).padStart(2, "0")}
                  </span>
                  <span className="latest-title">{latest.title}</span>
                </div>
                <a
                  href={latest.href.startsWith("https://open.spotify.com/") ? latest.href : PRIMARY_LISTEN_URL}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play on Spotify
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
                  </svg>
                </a>
              </div>
              <div className="latest-foot" id="listen">
                <span className="also-on">
                  Also on{" "}
                  {others.map((p, i) => (
                    <span key={p.label}>
                      {i > 0 && <span className="also-sep" aria-hidden="true"> · </span>}
                      <a href={p.href} target="_blank" rel="noopener noreferrer">{p.label}</a>
                    </span>
                  ))}
                </span>
                <a href="/episodes" className="text-link">
                  All episodes
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </>
          ) : (
            <div className="cta-row" id="listen">
              <a href={PRIMARY_LISTEN_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
                Listen now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="/episodes" className="btn-secondary">Browse episodes</a>
            </div>
          )}
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

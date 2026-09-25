import { EPISODES } from "@/lib/episodes";

function LockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-label="Not yet released"
      role="img"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export default function SeasonPreview() {
  const preview = EPISODES.slice(0, 3);

  return (
    <section className="home-section season" aria-labelledby="season-heading">
      <div className="season-head">
        <div>
          <p className="section-label">The first season</p>
          <h2 id="season-heading" className="home-h2">
            Eight takes. No script.
          </h2>
        </div>
        <a href="/episodes" className="text-link">
          All {EPISODES.length} episodes
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="season-grid">
        {preview.map((ep, i) => {
          const first = i === 0;
          return (
            <article
              key={ep.number}
              className={`season-card${first ? " season-card-first" : ""}`}
            >
              <div className="season-card-top">
                <span className="season-card-num">EP {ep.number}</span>
                {first ? (
                  <span className="up-first">Up first</span>
                ) : (
                  <span className="season-card-lock">
                    <LockIcon />
                  </span>
                )}
              </div>
              <div>
                <h3 className="season-card-title">{ep.title}</h3>
                <p className="season-card-meta">
                  Sep 2026 · 20–30 min
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

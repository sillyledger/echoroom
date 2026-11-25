import { getEpisodes } from "@/lib/feed";

const pad = (n: number) => String(n).padStart(2, "0");

const ExtIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default async function SeasonPreview() {
  const published = await getEpisodes();
  const shown = published.slice(0, 3);
  if (shown.length === 0) return null;

  return (
    <section className="home-section season" aria-labelledby="season-heading">
      <div className="season-head">
        <div>
          <p className="section-label">Episodes</p>
          <h2 id="season-heading" className="home-h2">Latest from the room.</h2>
        </div>
        <a href="/episodes" className="text-link">
          All episodes
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="season-grid">
        {shown.map((ep, i) => (
          <article key={ep.number} className="season-card season-card-first">
            <div className="season-card-top">
              <span className="season-card-num">EP {pad(ep.number)}</span>
              {i === 0 && <span className="up-first">New</span>}
            </div>
            <div>
              <h3 className="season-card-title">
                {ep.slug ? <a href={`/episodes/${ep.slug}`} className="season-card-title-link">{ep.title}</a> : ep.title}
              </h3>
              <div className="season-card-foot">
                <p className="season-card-meta">
                  {[ep.date, ep.duration].filter(Boolean).join(" · ")}
                </p>
                <a href={ep.href} className="season-card-listen" target="_blank" rel="noopener noreferrer">
                  Listen <ExtIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import Navbar from "./Navbar";
import { getEpisodes, upcomingAfter } from "@/lib/feed";

const pad = (n: number) => String(n).padStart(2, "0");

export default async function Episodes() {
  const published = await getEpisodes();
  const soon = upcomingAfter(published);

  return (
    <section className="episodes">
      <Navbar />
      <div className="episodes-inner">
        <h1>Episodes</h1>
        <p className="episodes-lede">One voice, no script. Every episode, newest first.</p>

        {published.length > 0 && (
          <>
            <div className="episodes-meta">
              <span>Out now · {published.length} {published.length === 1 ? "episode" : "episodes"}</span>
            </div>
            <ol className="episodes-list">
              {published.map((ep, i) => (
                <li key={ep.number} className={`episode-row${i === 0 ? " episode-row-first" : ""}`}>
                  <span className="episode-number">{pad(ep.number)}</span>
                  <span className="episode-title">{ep.title}</span>
                  <span className="episode-date">
                    {[ep.date, ep.duration].filter(Boolean).join(" · ")}
                  </span>
                  <a href={ep.href} className="episode-listen" target="_blank" rel="noopener noreferrer">
                    Listen
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M7 17L17 7" /><path d="M8 7h9v9" />
                    </svg>
                  </a>
                </li>
              ))}
            </ol>
          </>
        )}

        {soon.length > 0 && (
          <>
            <div className="episodes-meta episodes-meta-soon">
              <span>Coming up</span>
            </div>
            <ol className="episodes-list episodes-list-soon">
              {soon.map((p) => (
                <li key={p.number} className="episode-row episode-row-soon">
                  <span className="episode-number">{pad(p.number)}</span>
                  <span className="episode-title">{p.title}</span>
                  <span className="episode-date">Coming up</span>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}

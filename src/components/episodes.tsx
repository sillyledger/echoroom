import Navbar from "./Navbar";
import { EPISODES, RELEASE_LABEL } from "@/lib/episodes";

export default function Episodes() {
  return (
    <section className="episodes">
      <Navbar />

      <div className="episodes-inner">
        <div className="launch-badge">
          <span className="launch-dot" />
          Launching September 2026
        </div>

        <h1>Episodes</h1>
        <p className="episodes-lede">
          One voice, no script. The first episode drops September 2026 —
          here&apos;s what&apos;s coming.
        </p>

        <div className="episodes-meta" aria-hidden="true">
          <span>Season one · {EPISODES.length} episodes</span>
          <span>Release</span>
        </div>

        <ol className="episodes-list">
          {EPISODES.map((ep, i) => {
            const first = i === 0;
            return (
              <li
                className={`episode-row${first ? " episode-row-first" : ""}`}
                key={ep.number}
              >
                <span className="episode-number">{ep.number}</span>
                <span className="episode-title">{ep.title}</span>
                <span className="episode-status">
                  {first ? (
                    <span className="up-first">Up first</span>
                  ) : (
                    <svg
                      className="episode-lock"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      role="img"
                      aria-label="Not yet released"
                    >
                      <rect x="4" y="11" width="16" height="10" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                  )}
                </span>
                <span className="episode-date">{RELEASE_LABEL}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

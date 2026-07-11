import Navbar from "./Navbar";

const PLACEHOLDER_EPISODES = [
  { number: "01" },
  { number: "02" },
  { number: "03" },
];

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

        <div className="episodes-list">
          {PLACEHOLDER_EPISODES.map((ep) => (
            <div className="episode-row" key={ep.number}>
              <div className="episode-row-left">
                <span className="episode-number">{ep.number}</span>
                <span className="episode-title">
                  Episode title to be announced
                </span>
              </div>
              <div className="episode-row-right">
                <svg
                  className="episode-lock"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <span className="episode-date">SEP 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

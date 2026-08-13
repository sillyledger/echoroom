import Navbar from "./Navbar";

const EPISODES = [
  { number: "01", title: "This Is Echo Room" },
  { number: "02", title: "Cities Make Us Lonelier, Not More Connected" },
  { number: "03", title: "Moving Countries Rewires Who You Are" },
  {
    number: "04",
    title: "Quitting a Stable Job Isn't Brave. It's Just a Different Risk.",
  },
  {
    number: "05",
    title:
      "AI Won't Replace You, But It Will Expose What You Weren't Doing Well",
  },
  {
    number: "06",
    title: "Most People Don't Want Advice. They Want Permission.",
  },
  {
    number: "07",
    title: "Hustle Culture Is Mostly Sold By People Who Already Made It",
  },
  {
    number: "08",
    title:
      "Most Startups Don't Fail Because of the Idea; They Fail Because of the Founder",
  },
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
          {EPISODES.map((ep) => (
            <div className="episode-row" key={ep.number}>
              <div className="episode-row-left">
                <span className="episode-number">{ep.number}</span>
                <span className="episode-title">{ep.title}</span>
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

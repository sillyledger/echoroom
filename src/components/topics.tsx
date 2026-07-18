import Navbar from "./Navbar";

export default function Topics() {
  return (
    <section className="topics">
      <Navbar />

      <div className="topics-inner">
        <div className="launch-badge">
          <span className="launch-dot" />
          Full lineup at launch
        </div>

        <h1>Topics</h1>

        <p className="topics-lede">
          There&apos;s no fixed lineup yet — every episode pulls from
          whatever&apos;s actually on my mind that week. Categories will
          show up here once the first few episodes are out.
        </p>

        <div className="cta-row">
          <a href="/episodes" className="btn-primary">
            Browse Episodes →
          </a>
          <a href="/#listen" className="btn-secondary">
            Listen Now
          </a>
        </div>
      </div>
    </section>
  );
}

import Navbar from "./Navbar";

const CATEGORIES = [
  { name: "Apparel", desc: "Tees & hoodies" },
  { name: "Prints", desc: "Photography & posters" },
  { name: "Digital", desc: "Transcripts & bonus audio" },
];

export default function Shop() {
  return (
    <section className="shop">
      <Navbar />

      <div className="shop-inner">
        <div className="launch-badge">
          <span className="launch-dot" />
          Shop opens at launch
        </div>

        <h1>
          <span className="title-white">COMING</span>
          <span className="title-red">SOON</span>
        </h1>

        <p className="shop-lede">
          Merch, prints, and a few physical extensions of the show.
          Nothing&apos;s for sale yet — this page updates the moment it is.
        </p>

        <div className="shop-categories">
          {CATEGORIES.map((cat) => (
            <div className="shop-cat-row" key={cat.name}>
              <div className="shop-cat-left">
                <span className="shop-cat-name">{cat.name}</span>
                <span className="shop-cat-desc">{cat.desc}</span>
              </div>
              <div className="shop-cat-right">
                <svg
                  className="shop-cat-lock"
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
                <span className="shop-cat-status">TBA</span>
              </div>
            </div>
          ))}
        </div>

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

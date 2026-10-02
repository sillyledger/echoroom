import Navbar from "./Navbar";
import { getLatestEpisode } from "@/lib/feed";
import { PRIMARY_LISTEN_URL } from "@/lib/links";

const CATEGORIES = [
  { name: "Apparel", desc: "Tees & hoodies" },
  { name: "Prints", desc: "Photography & posters" },
  { name: "Digital", desc: "Transcripts & bonus audio" },
];

export default async function Shop() {
  const latest = await getLatestEpisode();
  const listenHref = latest?.href?.startsWith("https://open.spotify.com/") ? latest.href : PRIMARY_LISTEN_URL;

  return (
    <section className="shop">
      <Navbar />

      <div className="shop-inner">

        <h1>
          <span className="title-white">COMING</span>
          <span className="title-red">SOON</span>
        </h1>

        <p className="shop-lede">
          Merch, prints, and a few physical extensions of the show.
          Nothing&apos;s for sale yet. This page updates the moment it is.
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
          <a href={listenHref} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            Listen Now
          </a>
        </div>
      </div>
    </section>
  );
}

import Navbar from "./Navbar";
import { getLatestEpisode } from "@/lib/feed";
import { PRIMARY_LISTEN_URL } from "@/lib/links";

export default async function Topics() {
  const latest = await getLatestEpisode();
  const listenHref = latest?.href?.startsWith("https://open.spotify.com/") ? latest.href : PRIMARY_LISTEN_URL;

  return (
    <section className="topics">
      <Navbar />

      <div className="topics-inner">

        <h1>Topics</h1>

        <p className="topics-lede">
          There&apos;s no fixed lineup yet. Every episode pulls from
          whatever&apos;s on my mind that week. Categories will show up
          here once the first few episodes are out.
        </p>

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

import { PLATFORM_LINKS } from "@/lib/links";

const LISTEN_ORDER = ["Apple Podcasts", "Spotify", "YouTube", "Amazon Music"];

const LISTEN_LINKS = LISTEN_ORDER.map((label) =>
  PLATFORM_LINKS.find((p) => p.label === label),
).filter((p): p is (typeof PLATFORM_LINKS)[number] => Boolean(p));

export default function Footer() {
  return (
    <footer className="site-footer" id="listen">
      <div className="site-footer-inner container">
      <nav className="footer-col" aria-label="Listen">
        <span className="label label-accent">Listen</span>
        {LISTEN_LINKS.map((p) => (
          <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer">
            {p.label}
          </a>
        ))}
      </nav>
      <div className="footer-col">
        <span className="label">Keep the words</span>
        <a href="https://studybrew.co" target="_blank" rel="noopener noreferrer">
          Study Brew ↗
        </a>
      </div>
      <div className="footer-side">
        <p className="footer-note">Echo Room is part of Study Brew</p>
        <nav className="footer-legal" aria-label="Legal">
          <span>© {new Date().getFullYear()} Echo Room</span>
          <span aria-hidden="true">·</span>
          <a href="/disclaimer">Disclaimer</a>
          <span aria-hidden="true">·</span>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
      </div>
    </footer>
  );
}

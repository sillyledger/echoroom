import { Fragment } from "react";
import { PLATFORM_LINKS } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="site-footer" id="listen">
      <div className="site-footer-inner container">
        <div className="footer-groups">
          <div className="footer-col">
            <span className="label label-accent">Listen</span>
            <nav className="footer-row" aria-label="Listen">
              {PLATFORM_LINKS.map((p, i) => (
                <Fragment key={p.label}>
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.label}
                  </a>
                </Fragment>
              ))}
            </nav>
          </div>
          <div className="footer-col">
            <span className="label">Keep the words</span>
            <a href="https://studybrew.co" target="_blank" rel="noopener noreferrer">
              Study Brew ↗
            </a>
          </div>
        </div>
        <p className="footer-note">Echo Room is part of Study Brew</p>
        <nav className="footer-legal" aria-label="Legal">
          <span>© {new Date().getFullYear()} Echo Room</span>
          <span aria-hidden="true">·</span>
          <a href="/disclaimer">Disclaimer</a>
          <span aria-hidden="true">·</span>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

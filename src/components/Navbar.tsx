"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Episodes", href: "/episodes" },
  { label: "About", href: "/about" },
];

const STUDY_BREW_URL = "https://studybrew.co";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav container" aria-label="Main">
      <a href="/" className="logo">
        <Logo size={24} />
        Echo Room
      </a>

      <div className="nav-links">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${active ? " nav-active" : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          );
        })}
        <a
          href={STUDY_BREW_URL}
          className="nav-link nav-external"
          target="_blank"
          rel="noopener noreferrer"
        >
          Study Brew ↗
        </a>
        <a href="/contact" className="btn-primary btn-sm">
          Contact
        </a>
        <button
          type="button"
          className="nav-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "nav-active" : undefined}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={STUDY_BREW_URL}
            className="nav-external"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Study Brew ↗
          </a>
        </div>
      )}
    </nav>
  );
}

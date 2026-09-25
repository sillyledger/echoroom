"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Episodes", href: "/episodes" },
  { label: "About", href: "/about" },
  { label: "Topics", href: "/topics" },
  { label: "Shop", href: "/shop" },
];

function Waveform() {
  return (
    <svg
      className="waveform"
      width="18"
      height="14"
      viewBox="0 0 18 14"
      aria-hidden="true"
    >
      <rect x="0" y="5" width="2" height="4" rx="1" />
      <rect x="5" y="2" width="2" height="10" rx="1" />
      <rect x="10" y="0" width="2" height="14" rx="1" />
      <rect x="15" y="4" width="2" height="6" rx="1" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Main">
      <a href="/" className="logo">
        Echo Room
      </a>

      <div className="nav-links">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${active ? " nav-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </a>
          );
        })}
        <a href="/#listen" className="nav-listen">
          Listen
          <Waveform />
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
        </div>
      )}
    </nav>
  );
}

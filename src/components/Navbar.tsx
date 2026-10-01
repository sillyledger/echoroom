"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PLATFORM_LINKS } from "@/lib/links";

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
  const [listenOpen, setListenOpen] = useState(false);
  const listenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listenOpen) return;
    const onClick = (e: MouseEvent) => {
      if (listenRef.current && !listenRef.current.contains(e.target as Node)) setListenOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setListenOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [listenOpen]);

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
        <div className="listen-wrap" ref={listenRef}>
          <button
            type="button"
            className="nav-listen"
            aria-haspopup="true"
            aria-expanded={listenOpen}
            aria-controls="listen-menu"
            onClick={() => { setListenOpen((v) => !v); setOpen(false); }}
          >
            Listen
            <Waveform />
          </button>
          {listenOpen && (
            <div id="listen-menu" className="listen-menu">
              <span className="listen-menu-label">Listen on</span>
              {PLATFORM_LINKS.map((p) => (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" onClick={() => setListenOpen(false)}>
                  {p.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
        <button
          type="button"
          className="nav-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => { setOpen((v) => !v); setListenOpen(false); }}
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

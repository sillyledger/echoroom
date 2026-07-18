"use client";

import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Episodes", href: "/episodes" },
  { label: "About", href: "/about" },
  { label: "Topics", href: "/#topics" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <a href="/" className="logo">
        Echo Room
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "nav-active" : undefined}
          >
            {link.label}
          </a>
        ))}
        <a href="/#listen" className="nav-listen">
          Listen
          <span className="waveform">||||</span>
        </a>
      </div>
    </nav>
  );
}

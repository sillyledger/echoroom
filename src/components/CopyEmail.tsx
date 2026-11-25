"use client";

import { useState } from "react";

type CopyEmailProps = {
  email: string;
  label?: string;
  className?: string;
};

export default function CopyEmail({ email, label = "Copy", className = "contact-copy" }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          /* clipboard unavailable: do nothing */
        }
      }}
      aria-live="polite"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </svg>
      {copied ? "Copied" : label}
    </button>
  );
}

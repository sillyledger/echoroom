"use client";

import { useState } from "react";
import Image from "next/image";

// Nothing loads from Spotify until the visitor presses play.
export default function SpotifyPlayer({
  spotifyId,
  title,
  label,
}: {
  spotifyId: string;
  title: string;
  label: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://open.spotify.com/embed/episode/${spotifyId}?theme=0`}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`${title} on Spotify`}
        style={{ borderRadius: 12 }}
      />
    );
  }

  return (
    <button
      type="button"
      className="player-card"
      onClick={() => setLoaded(true)}
      aria-label={`Play ${title} on Spotify`}
    >
      <span className="player-photo">
        <Image
          src="/Pieter_Borremans.jpeg"
          alt=""
          fill
          sizes="96px"
          className="player-photo-img"
        />
      </span>
      <span className="player-meta">
        <span className="player-label">{label}</span>
        <span className="player-title">{title}</span>
        <span className="player-note">Plays via Spotify. Loads when you press play.</span>
      </span>
      <span className="player-play" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      </span>
    </button>
  );
}

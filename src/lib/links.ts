export const PLATFORM_LINKS = [
  { label: "Spotify", href: "https://open.spotify.com/show/1aWWAKlxNDWMHXFPhwLjNO" },
  { label: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/echo-room/id6818167921" },
  { label: "YouTube", href: "https://www.youtube.com/@echoroomshow" },
  { label: "Amazon Music", href: "https://music.amazon.com/podcasts/1f457497-786c-405b-ab03-28f8676bb388/echo-room" },
] as const;

export const PRIMARY_LISTEN_URL = PLATFORM_LINKS[0].href;

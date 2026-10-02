import { PLANNED_EPISODES, type PlannedEpisode } from "./episodes";
import { PRIMARY_LISTEN_URL } from "./links";
import { getSpotifyEpisodeLinks, normaliseTitle } from "./spotify";
import { getEpisodeNotes, spotifyIdFromUrl, type EpisodeNote } from "./notes";

const FEED_URL = "https://anchor.fm/s/117fa1d0c/podcast/rss";

export type Episode = {
  number: number;
  title: string;
  date: string;      // e.g. "Oct 1, 2026"
  duration: string;  // e.g. "24 min" ("" if unknown)
  href: string;
  slug?: string;     // set when the episode has notes in Ryoka OS
  season?: string;
};

function decode(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .trim();
}

function tag(xml: string, name: string): string | null {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : null;
}

function cleanTitle(t: string): string {
  return t.replace(/^EP\s*\d+\s*[|:\-–—]\s*/i, "").trim();
}

function formatDate(pub: string | null): string {
  if (!pub) return "";
  const d = new Date(pub);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

function formatDuration(raw: string | null): string {
  if (!raw) return "";
  const parts = raw.split(":").map(Number);
  if (parts.some((n) => Number.isNaN(n))) return "";
  const secs = parts.length === 1 ? parts[0] : parts.reduce((acc, n) => acc * 60 + n, 0);
  if (!secs) return "";
  return `${Math.max(1, Math.round(secs / 60))} min`;
}

// All published episodes, newest first. Refreshed at most once an hour.
// Returns [] on any failure so pages fall back gracefully.
export async function getEpisodes(): Promise<Episode[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    const spotify = await getSpotifyEpisodeLinks();
    const episodes: Episode[] = items.map((item, i) => {
      const rawTitle = tag(item, "title") ?? "";
      const epTag = tag(item, "itunes:episode");
      const number = epTag && !Number.isNaN(Number(epTag)) ? Number(epTag) : items.length - i;
      return {
        number,
        title: cleanTitle(rawTitle),
        date: formatDate(tag(item, "pubDate")),
        duration: formatDuration(tag(item, "itunes:duration")),
        href: spotify.get(normaliseTitle(rawTitle)) || tag(item, "link") || PRIMARY_LISTEN_URL,
      };
    }).filter((e) => e.title);

    const notes = await getEpisodeNotes();
    for (const ep of episodes) {
      const note = matchNote(ep, notes);
      if (note) {
        ep.slug = note.slug;
        ep.season = note.season;
      }
    }
    return episodes;
  } catch {
    return [];
  }
}

// A note belongs to an episode by Spotify episode ID, or failing that by title.
function matchNote(ep: Episode, notes: EpisodeNote[]): EpisodeNote | undefined {
  const id = spotifyIdFromUrl(ep.href);
  return (
    (id ? notes.find((n) => n.spotifyId === id) : undefined) ??
    notes.find((n) => normaliseTitle(n.title) === normaliseTitle(ep.title))
  );
}

export async function getLatestEpisode(): Promise<Episode | null> {
  const eps = await getEpisodes();
  return eps[0] ?? null;
}

// The note for a slug, its matching feed episode (if any), and the next episode after it.
export async function getEpisodeBySlug(slug: string): Promise<{
  episode: Episode | null;
  note: EpisodeNote;
  newer: Episode | null;
} | null> {
  const notes = await getEpisodeNotes();
  const note = notes.find((n) => n.slug === slug);
  if (!note) return null;
  const episodes = await getEpisodes();
  const episode = episodes.find((e) => e.slug === slug) ?? null;
  const newer = episode ? episodes.find((e) => e.number === episode.number + 1) ?? null : null;
  return { episode, note, newer };
}

// Planned episodes not yet in the feed (by number), in order.
export function upcomingAfter(published: Episode[]): PlannedEpisode[] {
  const maxPublished = published.reduce((m, e) => Math.max(m, e.number), 0);
  return PLANNED_EPISODES.filter((p) => p.number > maxPublished);
}

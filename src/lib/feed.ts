const FEED_URL = "https://anchor.fm/s/117fa1d0c/podcast/rss";

export type LatestEpisode = {
  number: number;
  title: string;
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

// Newest episode from the feed, refreshed at most once an hour.
// Returns null on any failure so the hero can fall back gracefully.
export async function getLatestEpisode(): Promise<LatestEpisode | null> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g);
    if (!items || items.length === 0) return null;
    const first = items[0];
    // Feed titles carry their own "EP 01 | " prefix; the card shows the number separately.
    const title = tag(first, "title")?.replace(/^EP\s*\d+\s*[|:\-–—]\s*/i, "");
    if (!title) return null;
    const epTag = tag(first, "itunes:episode");
    const number = epTag && !Number.isNaN(Number(epTag)) ? Number(epTag) : items.length;
    return { number, title };
  } catch {
    return null;
  }
}

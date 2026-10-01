const SHOW_ID = "1aWWAKlxNDWMHXFPhwLjNO";

// Same normalisation on both sides so feed titles and Spotify names match
// even with "EP 01 |" prefixes, case or punctuation differences.
export function normaliseTitle(t: string): string {
  return t
    .replace(/^EP\s*\d+\s*[|:\-–—]\s*/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function getToken(): Promise<string | null> {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!id || !secret) return null;
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + Buffer.from(`${id}:${secret}`).toString("base64"),
      },
      body: "grant_type=client_credentials",
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.access_token === "string" ? data.access_token : null;
  } catch {
    return null;
  }
}

// Map of normalised episode name -> open.spotify.com episode URL.
// Empty map on any failure (missing env vars, API error), so callers fall back.
export async function getSpotifyEpisodeLinks(): Promise<Map<string, string>> {
  const links = new Map<string, string>();
  const token = await getToken();
  if (!token) return links;
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/shows/${SHOW_ID}/episodes?limit=50&market=US`,
      { headers: { Authorization: `Bearer ${token}` }, next: { revalidate: 3600 } }
    );
    if (!res.ok) return links;
    const data = await res.json();
    for (const ep of data.items ?? []) {
      if (ep?.name && ep?.external_urls?.spotify) {
        links.set(normaliseTitle(ep.name), ep.external_urls.spotify);
      }
    }
  } catch {
    // fall through with whatever we have
  }
  return links;
}

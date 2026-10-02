// Episode notes written in Ryoka OS (Supabase "posts" table).
// Returns [] when SUPABASE_URL / SUPABASE_ANON_KEY are missing or on any error,
// so the site behaves exactly as it does without notes.

export type EpisodeNote = {
  slug: string;
  title: string;
  content: string;
  season: string;
  spotifyId: string | null;
  publishedAt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
};

export function spotifyIdFromUrl(url: string | null | undefined): string | null {
  const m = url?.match(/open\.spotify\.com\/episode\/([A-Za-z0-9]+)/);
  return m ? m[1] : null;
}

// Content is our own; this is only a safety net before it is rendered as HTML.
function sanitise(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "")
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
}

// SEO column names differ between setups, so look them up defensively.
function pick(row: Record<string, unknown>, exact: string[], pattern: RegExp): string | null {
  const key = exact.find((k) => k in row) ?? Object.keys(row).find((k) => pattern.test(k));
  const v = key ? row[key] : null;
  return typeof v === "string" && v.trim() ? v.trim() : null;
}

export async function getEpisodeNotes(): Promise<EpisodeNote[]> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return [];
  try {
    const res = await fetch(
      `${url}/rest/v1/posts?select=*&target_site=eq.echoroom.xyz&status=eq.published&order=published_at.desc`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 300 } }
    );
    if (!res.ok) return [];
    const rows: unknown = await res.json();
    if (!Array.isArray(rows)) return [];
    return rows
      .filter((r): r is Record<string, unknown> => !!r && typeof r === "object")
      .filter((r) => typeof r.slug === "string" && r.slug && typeof r.title === "string")
      .map((r) => ({
        slug: r.slug as string,
        title: r.title as string,
        content: sanitise(typeof r.content === "string" ? r.content : ""),
        season: (typeof r.category === "string" ? r.category : "").trim(),
        spotifyId: spotifyIdFromUrl(typeof r.spotify_url === "string" ? r.spotify_url : null),
        publishedAt: typeof r.published_at === "string" ? r.published_at : null,
        seoTitle: pick(r, ["seo_title", "meta_title"], /seo.*title|meta.*title/i),
        seoDescription: pick(r, ["seo_description", "meta_description"], /seo.*desc|meta.*desc/i),
      }));
  } catch {
    return [];
  }
}

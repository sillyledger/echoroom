import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import { getEpisodeBySlug, type Episode } from "@/lib/feed";
import { getEpisodeNotes, spotifyIdFromUrl, type EpisodeNote } from "@/lib/notes";
import { PLATFORM_LINKS, PRIMARY_LISTEN_URL } from "@/lib/links";
import { OG_IMAGE } from "@/lib/og";

export const revalidate = 300;
export const dynamicParams = true;

const SITE = "https://www.echoroom.xyz";

type Props = { params: Promise<{ slug: string }> };

const pad = (n: number) => String(n).padStart(2, "0");

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

// Plain-text summary of the notes, cut on a word boundary.
// Each list item, paragraph or heading becomes its own sentence.
function summarise(html: string, max = 155): string {
  const text = html
    .replace(/<\/(li|p|h[1-6]|div|blockquote)>|<br\s*\/?>/gi, "\u0001")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .split("\u0001")
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .map((s) => (/[.!?:;…]$/.test(s) ? s : `${s}.`))
    .join(" ");
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:]+$/, "")}…`;
}

function display(episode: Episode | null, note: EpisodeNote) {
  const title = episode?.title ?? note.title;
  const date = episode?.date || formatDate(note.publishedAt);
  const spotifyId = note.spotifyId ?? spotifyIdFromUrl(episode?.href);
  return { title, date, spotifyId };
}

function description(note: EpisodeNote): string {
  return note.seoDescription ?? summarise(note.content);
}

export async function generateStaticParams() {
  const notes = await getEpisodeNotes();
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getEpisodeBySlug(slug);
  if (!data) return {};
  const { title } = display(data.episode, data.note);
  const metaTitle = `${data.note.seoTitle ?? title} | Echo Room`;
  const desc = description(data.note);
  return {
    title: metaTitle,
    description: desc,
    alternates: { canonical: `/episodes/${slug}` },
    openGraph: {
      title: metaTitle,
      description: desc,
      url: `${SITE}/episodes/${slug}`,
      type: "article",
      siteName: "Echo Room",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: desc,
      images: [OG_IMAGE],
    },
  };
}

const ExtIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
  </svg>
);

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const data = await getEpisodeBySlug(slug);
  if (!data) notFound();
  const { episode, note, newer } = data;
  const { title, date, spotifyId } = display(episode, note);
  const number = episode?.number;
  const duration = episode?.duration ?? "";
  const others = PLATFORM_LINKS.filter((p) => p.label !== "Spotify");

  const minutes = duration.match(/(\d+)\s*min/)?.[1];
  const published = episode?.date ? new Date(`${episode.date} UTC`) : note.publishedAt ? new Date(note.publishedAt) : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: title,
    url: `${SITE}/episodes/${slug}`,
    ...(published && !Number.isNaN(published.getTime()) && { datePublished: published.toISOString().slice(0, 10) }),
    ...(number !== undefined && { episodeNumber: number }),
    ...(minutes && { timeRequired: `PT${minutes}M` }),
    description: description(note),
    ...(spotifyId && {
      associatedMedia: { "@type": "MediaObject", contentUrl: `https://open.spotify.com/episode/${spotifyId}` },
    }),
    partOfSeries: {
      "@type": "PodcastSeries",
      "@id": `${SITE}/#podcast`,
      name: "Echo Room",
      url: SITE,
    },
  };

  const meta = [
    number !== undefined ? `EP ${pad(number)}` : "",
    date,
    duration,
  ].filter(Boolean);

  return (
    <section className="episode-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <div className="episode-inner">
        <a href="/episodes" className="episode-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5" /><path d="M11 6l-6 6 6 6" />
          </svg>
          All episodes
        </a>

        <p className="episode-meta">
          {[note.season, ...meta].filter(Boolean).map((item, i) => (
            <span key={item}>
              {i > 0 && " · "}
              <span className={`episode-meta-item${i === 0 && note.season ? " episode-season" : ""}`}>{item}</span>
            </span>
          ))}
        </p>

        <h1>{title}</h1>

        {spotifyId ? (
          <SpotifyPlayer
            spotifyId={spotifyId}
            title={title}
            label={number !== undefined ? `Echo Room · EP ${pad(number)}` : "Echo Room"}
          />
        ) : (
          <a href={PRIMARY_LISTEN_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Listen on Spotify
            <ExtIcon />
          </a>
        )}

        <div className="episode-also">
          <span className="episode-also-label">Also on</span>
          {others.map((p) => (
            <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer">
              {p.label}
              <ExtIcon />
            </a>
          ))}
        </div>

        <p className="episode-notes-label">In this episode</p>
        <div className="episode-notes" dangerouslySetInnerHTML={{ __html: note.content }} />

        <div className="episode-closing">
          {newer ? (
            <a
              className="episode-closing-card"
              href={newer.slug ? `/episodes/${newer.slug}` : newer.href}
              {...(newer.slug ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <span className="episode-closing-label">Up next · EP {pad(newer.number)}</span>
              <span className="episode-closing-title">{newer.title}</span>
            </a>
          ) : (
            <div className="episode-closing-card">
              <span className="episode-closing-label">Latest episode</span>
              <span className="episode-closing-text">New ones land on Spotify first.</span>
              <a href={PRIMARY_LISTEN_URL} className="episode-closing-link" target="_blank" rel="noopener noreferrer">
                Follow the show
                <ExtIcon />
              </a>
            </div>
          )}
          <div className="episode-closing-card">
            <span className="episode-closing-text episode-closing-strong">Think I got something wrong here?</span>
            <a href="/contact" className="episode-closing-link">
              Talk back
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

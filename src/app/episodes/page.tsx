import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";
import Episodes from "@/components/episodes";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "All episodes | Echo Room, a solo monologue podcast",
  description:
    "Every Echo Room episode, newest first. Solo monologues by Pieter Borremans on building alone, moving countries, work and life. Listen on Spotify and Apple.",
  alternates: {
    canonical: "https://www.echoroom.xyz/episodes",
  },
  openGraph: {
    title: "All episodes | Echo Room, a solo monologue podcast",
    description:
      "Every Echo Room episode, newest first. Solo monologues by Pieter Borremans on building alone, moving countries, work and life. Listen on Spotify and Apple.",
    url: "https://www.echoroom.xyz/episodes",
    siteName: "Echo Room",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function EpisodesPage() {
  return (
    <main>
      <Episodes />
    </main>
  );
}

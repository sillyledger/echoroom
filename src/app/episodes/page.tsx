import type { Metadata } from "next";
import Episodes from "@/components/episodes";

export const metadata: Metadata = {
  title: "Episodes | Echo Room",
  description:
    "Echo Room episodes, launching September 2026. One voice, no script, no exit.",
  alternates: {
    canonical: "https://echoroom.xyz/episodes",
  },
  openGraph: {
    title: "Episodes | Echo Room",
    description:
      "Echo Room episodes, launching September 2026. One voice, no script, no exit.",
    url: "https://echoroom.xyz/episodes",
    siteName: "Echo Room",
    type: "website",
  },
};

export default function EpisodesPage() {
  return (
    <main>
      <Episodes />
    </main>
  );
}

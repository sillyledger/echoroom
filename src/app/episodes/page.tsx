import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";
import Episodes from "@/components/episodes";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "All episodes | Echo Room, a B2 English podcast",
  description:
    "Every Echo Room episode, newest first. A B2 English podcast about ordinary life, spoken clearly at a natural pace by a non-native speaker.",
  alternates: {
    canonical: "https://www.echoroom.xyz/episodes",
  },
  openGraph: {
    title: "All episodes | Echo Room, a B2 English podcast",
    description:
      "Every Echo Room episode, newest first. A B2 English podcast about ordinary life, spoken clearly at a natural pace by a non-native speaker.",
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

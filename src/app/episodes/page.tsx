import type { Metadata } from "next";
import Episodes from "@/components/episodes";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Episodes | Echo Room",
  description:
    "Every Echo Room episode, newest first. One voice, no script.",
  alternates: {
    canonical: "https://www.echoroom.xyz/episodes",
  },
  openGraph: {
    title: "Episodes | Echo Room",
    description:
      "Every Echo Room episode, newest first. One voice, no script.",
    url: "https://www.echoroom.xyz/episodes",
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

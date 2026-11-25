import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";
import Topics from "@/components/topics";

export const revalidate = 3600;

const TITLE = "Topics | Echo Room, a B2 English podcast";
const DESCRIPTION =
  "Every Echo Room topic comes from ordinary life: work, habits, cities, friendship, decisions, focus and moving. One topic per episode, in clear B2 English.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.echoroom.xyz/topics",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.echoroom.xyz/topics",
    siteName: "Echo Room",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function TopicsPage() {
  return (
    <main>
      <Topics />
    </main>
  );
}

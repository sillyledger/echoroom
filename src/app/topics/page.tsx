import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";
import Topics from "@/components/topics";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Topics | Echo Room, a solo monologue podcast",
  description:
    "What Echo Room talks about. No fixed lineup: every episode pulls from whatever is on Pieter's mind that week, from building alone to moving countries.",
  alternates: {
    canonical: "https://www.echoroom.xyz/topics",
  },
  openGraph: {
    title: "Topics | Echo Room, a solo monologue podcast",
    description:
      "What Echo Room talks about. No fixed lineup: every episode pulls from whatever is on Pieter's mind that week, from building alone to moving countries.",
    url: "https://www.echoroom.xyz/topics",
    siteName: "Echo Room",
    type: "website",
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

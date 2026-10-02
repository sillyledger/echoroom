import type { Metadata } from "next";
import Hero from "@/components/hero";
import SeasonPreview from "@/components/season-preview";
import HostStrip from "@/components/host-strip";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Echo Room | A solo monologue podcast by Pieter Borremans",
  description: "Echo Room is a solo monologue podcast by Pieter Borremans. One topic per episode on building alone, moving countries, work and life. No guests, no script.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Echo Room | A solo monologue podcast by Pieter Borremans",
    description: "Echo Room is a solo monologue podcast by Pieter Borremans. One topic per episode on building alone, moving countries, work and life. No guests, no script.",
    url: "/",
    siteName: "Echo Room",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo Room | A solo monologue podcast by Pieter Borremans",
    description: "Echo Room is a solo monologue podcast by Pieter Borremans. One topic per episode on building alone, moving countries, work and life. No guests, no script.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <SeasonPreview />
      <HostStrip />
    </main>
  );
}

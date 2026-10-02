import type { Metadata } from "next";
import Hero from "@/components/hero";
import SeasonPreview from "@/components/season-preview";
import HostStrip from "@/components/host-strip";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Echo Room",
  description: "A solo monologue podcast by Pieter Borremans. One voice. No script. No exit.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Echo Room",
    description: "A solo monologue podcast by Pieter Borremans. One voice. No script. No exit.",
    url: "/",
    siteName: "Echo Room",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo Room",
    description: "A solo monologue podcast by Pieter Borremans. One voice. No script. No exit.",
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

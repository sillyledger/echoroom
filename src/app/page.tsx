import type { Metadata } from "next";
import Hero from "@/components/hero";
import SeasonPreview from "@/components/season-preview";
import HostStrip from "@/components/host-strip";

export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
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

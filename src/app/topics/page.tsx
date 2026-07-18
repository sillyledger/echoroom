import type { Metadata } from "next";
import Topics from "@/components/topics";

export const metadata: Metadata = {
  title: "Topics | Echo Room",
  description:
    "What Echo Room covers — full topic lineup coming at launch.",
  alternates: {
    canonical: "https://echoroom.xyz/topics",
  },
  openGraph: {
    title: "Topics | Echo Room",
    description:
      "What Echo Room covers — full topic lineup coming at launch.",
    url: "https://echoroom.xyz/topics",
    siteName: "Echo Room",
    type: "website",
  },
};

export default function TopicsPage() {
  return (
    <main>
      <Topics />
    </main>
  );
}

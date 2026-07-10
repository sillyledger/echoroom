import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "About Pieter Borremans | Echo Room",
  description:
    "Pieter Borremans is the founder of Ryoka Group and host of Echo Room, a monologue podcast launching September 2026.",
  openGraph: {
    title: "About Pieter Borremans | Echo Room",
    description:
      "Pieter Borremans is the founder of Ryoka Group and host of Echo Room, a monologue podcast launching September 2026.",
    url: "https://echoroom.xyz/about",
    siteName: "Echo Room",
    images: ["/Pieter_Borremans.jpeg"],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pieter Borremans | Echo Room",
    description:
      "Pieter Borremans is the founder of Ryoka Group and host of Echo Room, a monologue podcast launching September 2026.",
    images: ["/Pieter_Borremans.jpeg"],
  },
  alternates: {
    canonical: "https://echoroom.xyz/about",
  },
};

// NOTE: fill in real profile URLs in "sameAs" and adjust bio when ready.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pieter Borremans",
  url: "https://echoroom.xyz/about",
  image: "https://echoroom.xyz/Pieter_Borremans.jpeg",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Ryoka Group",
    url: "https://ryokagroup.com",
  },
  sameAs: [
    "https://ryokagroup.com",
    "https://echoroom.xyz",
    // TODO: add LinkedIn / X / Indie Hackers profile links
  ],
  description:
    "Founder of Ryoka Group and host of Echo Room, a monologue podcast.",
};

const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Echo Room",
  url: "https://echoroom.xyz",
  author: {
    "@type": "Person",
    name: "Pieter Borremans",
  },
  description:
    "One voice. No script. No exit. Raw thoughts, uncut conversations, and the kind of honesty that doesn't fit anywhere else.",
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSchema) }}
      />
      <About />
    </main>
  );
}
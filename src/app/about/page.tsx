import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "Pieter Borremans — Host of Echo Room",
  description:
    "Pieter Borremans is the founder of Ryoka Group and host of Echo Room, a monologue podcast launching September 2026.",
  alternates: {
    canonical: "https://echoroom.xyz/about",
  },
  openGraph: {
    title: "Pieter Borremans — Host of Echo Room",
    description:
      "Founder of Ryoka Group and host of Echo Room, a monologue podcast launching September 2026.",
    url: "https://echoroom.xyz/about",
    siteName: "Echo Room",
    type: "profile",
    images: [
      {
        url: "https://echoroom.xyz/Pieter_Borremans.jpeg",
        width: 1200,
        height: 1200,
        alt: "Pieter Borremans, host of Echo Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pieter Borremans — Host of Echo Room",
    description:
      "Founder of Ryoka Group and host of Echo Room, a monologue podcast launching September 2026.",
    images: ["https://echoroom.xyz/Pieter_Borremans.jpeg"],
  },
};

// Canonical entity graph — same @id as ryokagroup.com/founder so Google
// treats both pages as describing the same Person, not two separate ones.
// Keep sameAs, jobTitle, and description in sync with ryokagroup.com,
// pieterborremans.com, and indiehacker.blog.
// TODO: once this is live, add "https://echoroom.xyz" to the sameAs list
// on ryokagroup.com/founder so the link resolves both directions.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ryokagroup.com/founder#pieter",
  name: "Pieter Borremans",
  givenName: "Pieter",
  familyName: "Borremans",
  jobTitle: "Founder",
  description:
    "Pieter Borremans is the founder of Ryoka Group and host of Echo Room, a monologue podcast. A writer, digital entrepreneur, and software founder who builds, operates, and invests in software products.",
  image: "https://echoroom.xyz/Pieter_Borremans.jpeg",
  url: "https://echoroom.xyz/about",
  worksFor: {
    "@type": "Organization",
    "@id": "https://ryokagroup.com/#organization",
    name: "Ryoka Group",
  },
  homeLocation: [
    { "@type": "Place", name: "Taipei, Taiwan" },
    { "@type": "Place", name: "London, United Kingdom" },
  ],
  sameAs: [
    "https://ryokagroup.com/founder",
    "https://pieterborremans.com",
    "https://www.indiehacker.blog",
    "https://ryoka.xyz",
    "https://www.linkedin.com/in/pieter-borremans/",
    "https://medium.com/@borremanspieter",
    "https://www.youtube.com/@PieterBorremans",
    "https://github.com/sillyledger",
  ],
};

const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "@id": "https://echoroom.xyz/#podcast",
  name: "Echo Room",
  url: "https://echoroom.xyz",
  description:
    "One voice. No script. No exit. Raw thoughts, uncut conversations, and the kind of honesty that doesn't fit anywhere else.",
  author: {
    "@type": "Person",
    "@id": "https://ryokagroup.com/founder#pieter",
    name: "Pieter Borremans",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://ryokagroup.com/#organization",
    name: "Ryoka Group",
  },
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSchema) }}
      />
      <About />
    </main>
  );
}
import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";
import About from "@/components/about";

const TITLE = "Pieter Borremans | The Voice of Echo Room, a B2 English Podcast";
const DESCRIPTION =
  "Pieter Borremans is the voice of Echo Room, a B2 English podcast by Study Brew. Born in Indonesia and raised in Belgium, he learned English as a second language.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.echoroom.xyz/about",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.echoroom.xyz/about",
    siteName: "Echo Room",
    type: "profile",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Canonical entity graph — same @id as ryokagroup.com/founder so Google
// treats both pages as describing the same Person, not two separate ones.
// Keep sameAs, jobTitle, and description in sync with ryokagroup.com,
// pieterborremans.com, and indiehacker.blog.
// TODO: once this is live, add "https://www.echoroom.xyz" to the sameAs list
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
    "Pieter Borremans is the founder of Ryoka Group and OnPoint VC and the voice of Echo Room, a B2 English podcast by Study Brew. Born in Indonesia and raised in Belgium, he has lived in Shenzhen, London and the US.",
  image: "https://www.echoroom.xyz/Pieter_Borremans.jpeg",
  url: "https://www.echoroom.xyz/about",
  worksFor: {
    "@type": "Organization",
    "@id": "https://ryokagroup.com/#organization",
    name: "Ryoka Group",
  },
  sameAs: [
    "https://ryokagroup.com/founder",
    "https://pieterborremans.com",
    "https://www.pieter.tw",
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
  "@id": "https://www.echoroom.xyz/#podcast",
  name: "Echo Room",
  url: "https://www.echoroom.xyz",
  description:
    "Echo Room is a B2 English podcast about ordinary life, spoken clearly at a natural pace by a non-native speaker. One topic per episode, five to ten minutes. Part of Study Brew.",
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
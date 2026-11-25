import type { Metadata } from "next";
import Contact from "@/components/contact";

const TITLE = "Contact | Echo Room, a B2 English Podcast";
const DESCRIPTION =
  "Send Echo Room a topic from ordinary life, a part that was hard to follow, or where you listen from. Email p@ryoka.xyz.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.echoroom.xyz/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.echoroom.xyz/contact",
    siteName: "Echo Room",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}

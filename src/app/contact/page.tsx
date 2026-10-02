import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Pieter Borremans | Echo Room podcast",
  description: "Send Pieter Borremans a topic, a question, or a take you think he got wrong. The best ones become Echo Room episodes. Email p@ryoka.xyz.",
  alternates: { canonical: "https://www.echoroom.xyz/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}

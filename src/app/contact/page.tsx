import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Echo Room",
  description: "Send Pieter a topic, a question, or a take you think he got wrong. The best ones become Echo Room episodes.",
  alternates: { canonical: "https://www.echoroom.xyz/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}

import type { Metadata } from "next";
import Shop from "@/components/shop";

export const metadata: Metadata = {
  title: "Shop | Echo Room",
  description:
    "Echo Room merch, prints, and digital extras — coming soon.",
  alternates: {
    canonical: "https://echoroom.xyz/shop",
  },
  openGraph: {
    title: "Shop | Echo Room",
    description:
      "Echo Room merch, prints, and digital extras — coming soon.",
    url: "https://echoroom.xyz/shop",
    siteName: "Echo Room",
    type: "website",
  },
};

export default function ShopPage() {
  return (
    <main>
      <Shop />
    </main>
  );
}

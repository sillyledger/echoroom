import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";
import Shop from "@/components/shop";

export const metadata: Metadata = {
  title: "Shop | Echo Room",
  description:
    "Echo Room merch, prints, and digital extras. Coming soon.",
  alternates: {
    canonical: "https://www.echoroom.xyz/shop",
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Shop | Echo Room",
    description:
      "Echo Room merch, prints, and digital extras. Coming soon.",
    url: "https://www.echoroom.xyz/shop",
    siteName: "Echo Room",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function ShopPage() {
  return (
    <main>
      <Shop />
    </main>
  );
}

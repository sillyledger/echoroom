import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import "./hero.css";
import "./home.css";
import "./about.css";
import "./episodes.css";
import "./shop.css";
import "./topics.css";
import "./legal.css";
import "./contact.css";
import "./episode.css";
import "./landing.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const DEFAULT_TITLE = "Echo Room | B2 English Podcast at a Natural Pace";
const DEFAULT_DESCRIPTION =
  "A B2 English podcast about ordinary life, spoken clearly at a natural pace by a non-native speaker. Part of Study Brew.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.echoroom.xyz"),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: "Echo Room",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#161618",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

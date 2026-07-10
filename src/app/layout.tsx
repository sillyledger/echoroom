import type { Metadata } from "next";
import "./globals.css";
import "./hero.css";
import "./about.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://echoroom.xyz"),
  title: "Echo Room",
  description: "One voice. No script. No exit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
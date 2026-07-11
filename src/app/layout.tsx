import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./hero.css";
import "./about.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
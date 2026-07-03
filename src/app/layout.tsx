import type { Metadata } from "next";
import "./globals.css";
import "./hero.css";

export const metadata: Metadata = {
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

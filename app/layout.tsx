import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewsAI - AI Tools for Modern Newsrooms",
  description:
    "Revolutionizing journalism with advanced AI tools designed specifically for newsrooms.",
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

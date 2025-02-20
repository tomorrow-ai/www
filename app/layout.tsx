import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const abcFont = localFont({
  src: "./fonts/ABCDiatypeVariable-Trial.ttf",
});

export const metadata: Metadata = {
  title: "Tomorrow.ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={abcFont.className}>
      <body>{children}</body>
    </html>
  );
}

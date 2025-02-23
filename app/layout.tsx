import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const primaryFont = localFont({
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
    <html lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}

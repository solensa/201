import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "201 Studio - Award-Winning Mobile Apps",
  description: "Download our collection of award-winning mobile apps. Create secure passwords with Passimal, master vocabulary with WordReach, and learn grammar with WordTree.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

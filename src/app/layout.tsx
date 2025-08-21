import type { Metadata } from "next";
// import { Open_Sans } from "next/font/google";
import "./globals.css";

// const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "201 Studio - Creating Apps That Spark Joy",
  description: "Download our award-winning mobile apps: WordReach, Passimal, and WordTree. Join millions of users worldwide!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

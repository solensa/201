import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "201 Studio",
  description: "Let your mind loose.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

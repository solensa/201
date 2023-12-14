import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "201 Studio",
  description: "Let your mind loose.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>{children}</body>
    </html>
  );
}

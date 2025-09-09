import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordReach – Build bridges with words",
  description:
    "Build bridges with words on an 8×8 grid. Play the Daily Challenge, climb the global leaderboard. Download for iOS and Android.",
  openGraph: {
    title: "WordReach – Build bridges with words",
    description:
      "Build bridges with words on an 8×8 grid. Play the Daily Challenge, climb the global leaderboard.",
    type: "website",
    url: "https://201.studio/wordreach",
  },
  alternates: { canonical: "/wordreach" },
};

export default function WordReachLayout({ children }: { children: React.ReactNode }) {
  return children;
}

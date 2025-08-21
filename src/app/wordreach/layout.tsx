import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordReach - Build bridges with words",
  description: "Build bridges with words on an 8×8 grid. Play the daily challenge and compete on the global leaderboard. Download WordReach for iOS and Android.",
};

export default function WordReachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
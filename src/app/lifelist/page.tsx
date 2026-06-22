"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Outfit } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["900"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

const IOS_STORE_URL = "https://apps.apple.com/app/lifelist/idXXXXXXXXX"; // TODO: Update with actual App Store URL
const ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=com.lifelist.app"; // TODO: Update with actual Play Store URL

// Bold Editorial brand palette (Figma: Lifelist / Foundations).
// Diagonal sunset stripes — hard-edged bands matching the app splash header
// (Figma node 1450:633), not a soft gradient.
const SUNSET_STRIPES =
  "linear-gradient(125deg, #f5c800 0%, #f5c800 20%, #f7a046 20%, #f7a046 40%, #f05a28 40%, #f05a28 60%, #e61e2a 60%, #e61e2a 80%, #1c1d6e 80%, #1c1d6e 100%)";
const BRAND_PURPLE = "#822B8C";

function detectDevice() {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent || navigator.vendor : "";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "desktop";
}

export default function LifelistLanding() {
  const isLocal = useMemo(() => {
    if (typeof window === "undefined") return true;
    return ["localhost", "127.0.0.1"].includes(window.location.hostname);
  }, []);

  useEffect(() => {
    const device = detectDevice();
    if (!isLocal) {
      if (device === "ios") window.location.href = IOS_STORE_URL;
      if (device === "android") window.location.href = ANDROID_STORE_URL;
    }
  }, [isLocal]);

  return (
    <main className={`${outfit.className} min-h-screen bg-white text-[#111111]`}>
      {/* Diagonal sunset stripes (Figma node 1450:633) */}
      <div className="h-48 w-full sm:h-64" style={{ background: SUNSET_STRIPES }} />

      <div className="mx-auto w-full max-w-5xl px-6 pb-20 sm:px-8">
        {/* Hero */}
        <section className="-mt-6 flex flex-col items-center text-center">
          {/* Red accent dash (matches app splash) */}
          <div className="mb-6 h-[5px] w-14 rounded-full" style={{ backgroundColor: "#e61e2a" }} />

          <h1
            className={`${fraunces.className} m-0 text-6xl font-black leading-[0.92] tracking-tight text-[#111111] sm:text-7xl md:text-8xl`}
          >
            LIFELIST
          </h1>

          <p className="mt-6 max-w-md text-lg text-[#555555] sm:text-xl">
            Discover and track the experiences that matter most.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#555555]">
            Browse curated lists of things to do, save the ones that spark something, tick off each
            experience as you live it, and earn medals as your lists fill up. Life is short — make it
            epic.
          </p>

          {/* Store badges */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={IOS_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[160px] transition-transform hover:scale-105 sm:w-[184px]"
            >
              <Image
                src="/apple-store-dark.svg"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="h-auto w-full"
              />
            </a>
            <a
              href={ANDROID_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[160px] transition-transform hover:scale-105 sm:w-[184px]"
            >
              <Image
                src="/google-play-dark.svg"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="h-auto w-full"
              />
            </a>
          </div>

          <p className="mt-5 text-sm uppercase tracking-wide text-[#bbbbbb]">
            Life is short. Make it <span className="font-semibold text-[#555555]">epic</span>.
          </p>
        </section>

        {/* App screenshot */}
        <section className="mt-16 flex justify-center">
          <div className="w-[260px] overflow-hidden rounded-[28px] shadow-2xl sm:w-[300px]">
            <Image
              src="/lifelist-screen.png"
              alt="Lifelist — Browse screen"
              width={410}
              height={891}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center gap-6 border-t border-black/10 pt-10">
          <Link href="/">
            <Image src="/201-logo.svg" alt="201 Studio" width={180} height={50} className="opacity-70" />
          </Link>
          <div className="flex items-center gap-4 text-sm text-[#555555]">
            <Link href="/lifelist/privacy" className="hover:text-[#111111]">
              Privacy Policy
            </Link>
            <span style={{ color: BRAND_PURPLE }}>•</span>
            <Link href="/support" className="hover:text-[#111111]">
              Support
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

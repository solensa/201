"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const IOS_STORE_URL = "https://apps.apple.com/app/snakshot/idXXXXXXXXX"; // TODO: Update with actual App Store URL
const ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=com.studio201.snakshot"; // TODO: Update with actual Play Store URL

function detectDevice() {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent || navigator.vendor : "";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "desktop";
}

export default function SnakShotLanding() {
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
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: "#101e22" }}>
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-between px-5 py-10 sm:px-6 sm:py-16">
        {/* Hero Card */}
        <section
          className="relative mx-auto w-full max-w-2xl rounded-[2.5rem] p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(33, 222, 107, 0.15) 0%, rgba(33, 222, 107, 0.05) 100%)",
            boxShadow: "0 0 0 3px rgba(33, 222, 107, 0.4), 0 20px 60px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h1
              className="mb-2 text-5xl font-bold italic sm:text-6xl md:text-7xl"
              style={{ fontFamily: "Kanit, sans-serif", color: "#ffffff" }}
            >
              SnakShot
            </h1>
            <p className="mb-8 text-lg text-white/80 sm:text-xl">Your visual food tracker</p>

            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/snakshot-logo.svg"
                alt="SnakShot Logo"
                width={180}
                height={180}
                className="h-auto w-[140px] sm:w-[180px]"
              />
            </div>

            {/* Tagline */}
            <p className="mb-8 text-lg text-white sm:text-xl">Track your meals effortlessly</p>

            {/* Store Badges */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={IOS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[160px] transition-transform hover:scale-105 sm:w-[180px]"
              >
                <Image
                  src="/apple-store-dark.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="h-auto w-full"
                />
              </a>
              <a
                href={ANDROID_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[160px] transition-transform hover:scale-105 sm:w-[180px]"
              >
                <Image
                  src="/google-play-dark.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="h-auto w-full"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Phone Mockups */}
        <div className="relative mt-12 flex w-full max-w-4xl items-center justify-center gap-4 sm:mt-16 sm:gap-8">
          {/* Left Phone */}
          <div className="relative z-10 w-[45%] max-w-[280px] sm:max-w-[320px]" style={{ transform: "rotate(-12deg)" }}>
            <Image
              src="/snakshot-phone1.png"
              alt="SnakShot App Screen 1"
              width={640}
              height={1280}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>

          {/* Right Phone */}
          <div className="relative z-0 w-[45%] max-w-[280px] sm:max-w-[320px]" style={{ transform: "rotate(12deg)" }}>
            <Image
              src="/snakshot-phone2.png"
              alt="SnakShot App Screen 2"
              width={640}
              height={1280}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center gap-4 sm:mt-16">
          <Link href="/">
            <Image src="/201-logo.svg" alt="201 Studio" width={140} height={38} className="opacity-90" />
          </Link>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <Link href="/snakshot/privacy" className="hover:text-white/90">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/support" className="hover:text-white/90">
              Support
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

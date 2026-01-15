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
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#101e22" }}>
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        {[...Array(60)].map((_, i) => {
          const randomRepeats = [2, 3, 4, 3, 2, 4, 2, 3, 3][i % 9];
          const wordHeight = 350; // Approximate height of one "SnakShot" word
          const randomHeight = randomRepeats * wordHeight;
          const randomTopOffset = [-100, -50, 0, -75, -25, -120, -40, -90, -60][i % 9];
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${i * 50}px`,
                top: `${randomTopOffset}px`,
                height: `${randomHeight}px`,
                overflow: "hidden",
              }}
            >
              <p
                className="whitespace-nowrap text-[60px] font-bold italic leading-none text-white"
                style={{
                  fontFamily: "Kanit, sans-serif",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {Array(randomRepeats).fill("SnakShot").join(" ")}
              </p>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-5 py-8">
        {/* Hero Card */}
        <section
          className="relative mx-auto mt-8 w-full max-w-[634px] rounded-[50px] border-[16px] border-solid md:aspect-square md:mt-12"
          style={{
            borderColor: "#21de6b",
            background:
              "radial-gradient(circle at center, rgba(23, 52, 61, 1) 0%, rgba(16, 30, 34, 1) 100%)",
          }}
        >
          <div className="flex flex-col items-center justify-center p-6 text-center md:absolute md:inset-0 md:p-12">
            {/* Title */}
            <h1
              className="m-0 mb-2 text-4xl font-bold italic sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "Kanit, sans-serif", color: "#ffffff", marginTop: 0 }}
            >
              SnakShot
            </h1>
            <p className="mb-4 text-base text-white/90 sm:mb-6 sm:text-lg md:text-xl">
              Your visual food tracker
            </p>

            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <Image
                src="/snakshot-logo.svg"
                alt="SnakShot Logo"
                width={338}
                height={338}
                className="h-auto w-[140px] sm:w-[161px] md:w-[207px]"
              />
            </div>

            {/* Tagline */}
            <p className="mb-4 text-lg text-white sm:mb-6 sm:text-xl md:text-2xl">
              Track your meals effortlessly
            </p>

            {/* Store Badges */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={IOS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[145px] transition-transform hover:scale-105 sm:w-[161px] md:w-[184px]"
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
                className="w-[145px] transition-transform hover:scale-105 sm:w-[161px] md:w-[184px]"
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
          </div>
        </section>

        {/* Phone Mockups */}
        <div className="relative mt-12 flex w-full max-w-5xl items-center justify-center md:mt-20">
          {/* Left Phone (Teal) - in front */}
          <div
            className="relative z-20 w-[55%] max-w-[470px] md:w-[60%]"
            style={{ transform: "rotate(-15deg) translateX(40px) scale(0.85)", transformOrigin: "center" }}
          >
            <Image
              src="/snakshot-phone2.png"
              alt="SnakShot App Screen 2"
              width={640}
              height={1280}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>

          {/* Right Phone (Purple) - behind */}
          <div
            className="relative z-10 w-[38%] max-w-[330px] md:w-[42%]"
            style={{ transform: "rotate(20deg) translateX(-120px) scale(0.85)", transformOrigin: "center" }}
          >
            <Image
              src="/snakshot-phone1.png"
              alt="SnakShot App Screen 1"
              width={640}
              height={1280}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center gap-6">
          <Link href="/">
            <Image
              src="/201-logo.svg"
              alt="201 Studio"
              width={200}
              height={55}
              className="opacity-80"
            />
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/60">
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

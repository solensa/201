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
      {/* Background Pattern - Mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10 md:hidden">
        {[...Array(100)].map((_, i) => {
          const randomRepeats = [2, 3, 4, 5, 3, 6, 4, 2, 5, 3, 4, 6][i % 12];
          const wordHeight = 350; // Approximate height of one "SnakShot" word
          const randomHeight = randomRepeats * wordHeight;
          const randomTopOffset = [-100, -50, 0, -75, -25, -120, -40, -90, -60, -30, -110, -80][i % 12];
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${i * 35}px`,
                top: `${randomTopOffset}px`,
                height: `${randomHeight}px`,
                overflow: "hidden",
              }}
            >
              <p
                className="whitespace-nowrap text-[40px] font-bold italic leading-none text-white"
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
        {/* Additional background text - Left side of phone area */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          const repeats = [7, 8, 9, 8, 10, 9, 7, 8, 9][i];
          return (
            <div
              key={`left-phone-${i}`}
              className="absolute"
              style={{
                left: `${i * 40}px`,
                top: "1000px",
                height: "3000px",
                overflow: "hidden",
                opacity: "0.2",
              }}
            >
              <p
                className="whitespace-nowrap text-[40px] font-bold italic leading-none text-white"
                style={{
                  fontFamily: "Kanit, sans-serif",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {Array(repeats).fill("SnakShot").join(" ")}
              </p>
            </div>
          );
        })}
      </div>

      {/* Background Pattern - Desktop */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden opacity-10 md:block">
        {[...Array(100)].map((_, i) => {
          const randomRepeats = [2, 3, 4, 5, 3, 6, 4, 2, 5, 3, 4, 6][i % 12];
          const wordHeight = 350; // Approximate height of one "SnakShot" word
          const randomHeight = randomRepeats * wordHeight;
          const randomTopOffset = [-100, -50, 0, -75, -25, -120, -40, -90, -60, -30, -110, -80][i % 12];
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
          className="relative mx-auto mt-8 w-full max-w-[634px] rounded-[50px] p-[8px] md:aspect-square md:mt-12"
          style={{
            background: "linear-gradient(180deg, #21de6b 0%, #1fb75f 25%, #1d9453 50%, #1a7a49 75%, #176140 100%)",
          }}
        >
          <div
            className="flex h-full w-full flex-col items-center justify-center rounded-[42px] p-6 text-center md:p-12"
            style={{
              background:
                "radial-gradient(circle at center, rgba(23, 52, 61, 1) 0%, rgba(16, 30, 34, 1) 100%)",
            }}
          >
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

        {/* Phone Mockups - Mobile */}
        <div className="relative mt-12 flex w-full max-w-5xl items-center justify-center md:hidden">
          {/* Left Phone (Teal) - in front */}
          <div
            className="relative z-20 w-[55%] max-w-[470px]"
            style={{ transform: "rotate(-15deg) translateX(25px) scale(1.30)", transformOrigin: "center" }}
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
            className="relative z-10 w-[38%] max-w-[330px]"
            style={{ transform: "rotate(20deg) translateX(-50px) scale(1.30)", transformOrigin: "center" }}
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

        {/* Phone Mockups - Desktop */}
        <div className="relative mt-20 hidden w-full max-w-5xl items-center justify-center md:flex">
          {/* Left Phone (Teal) - in front */}
          <div
            className="relative z-20 w-[60%] max-w-[470px]"
            style={{ transform: "rotate(-15deg) translateX(80px) scale(1.0)", transformOrigin: "center" }}
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
            className="relative z-10 w-[42%] max-w-[330px]"
            style={{ transform: "rotate(20deg) translateX(-160px) scale(1.0)", transformOrigin: "center" }}
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

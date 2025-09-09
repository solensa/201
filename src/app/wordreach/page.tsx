"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const IOS_STORE_URL = "https://apps.apple.com/gb/app/wordreach/id6749278685";
const ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=com.studio201.wordreach";

function detectDevice() {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent || navigator.vendor : "";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "desktop";
}

export default function WordReachLanding() {
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
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 flex items-center justify-center text-white px-4 py-8">
      <div className="w-full max-w-3xl text-center">
        <div className="mx-auto mb-6 flex justify-center">
          <Image
            src="/wordreach-screen.svg"
            alt="WordReach gameplay preview"
            width={280}
            height={280}
            priority
            className="rounded-2xl shadow-2xl ring-1 ring-black/10"
          />
        </div>

        <h1 className="text-5xl font-extrabold drop-shadow-sm tracking-tight">WordReach</h1>
        <p className="mt-3 text-lg/7 opacity-90 max-w-2xl mx-auto">
          Build bridges with words on an 8×8 grid. Take on the Daily Challenge, climb the global
          leaderboard, and discover satisfyingly clever paths.
        </p>

        <ul className="mt-6 grid gap-2 text-base/7 max-w-md mx-auto text-white/95">
          <li>• Fresh Daily Challenge</li>
          <li>• Simple to learn, hard to master</li>
          <li>• Clean, relaxing design and subtle sound</li>
          <li>• Global leaderboards and shareable scores</li>
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={IOS_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="store-button inline-flex items-center justify-center rounded-xl border border-white/30 bg-black/70 backdrop-blur px-6 py-4 transition hover:-translate-y-0.5 hover:bg-black/80 hover:border-white/50 w-full sm:w-56"
          >
            <div className="flex flex-col">
              <span className="text-sm opacity-80">Download on the</span>
              <span className="text-xl font-semibold">App Store</span>
            </div>
          </a>
          <a
            href={ANDROID_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="store-button inline-flex items-center justify-center rounded-xl border border-white/30 bg-black/70 backdrop-blur px-6 py-4 transition hover:-translate-y-0.5 hover:bg-black/80 hover:border-white/50 w-full sm:w-56"
          >
            <div className="flex flex-col">
              <span className="text-sm opacity-80">Get it on</span>
              <span className="text-xl font-semibold">Google Play</span>
            </div>
          </a>
        </div>

        <p className="mt-3 text-white/80 text-sm">
          On mobile you may be redirected to your app store automatically.
        </p>

        <footer className="mt-6 opacity-80 text-sm">
          <p>
            A 201 Studio game •{" "}
            <Link href="/legal" className="underline underline-offset-4">
              Privacy & Terms
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}

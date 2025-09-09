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
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 ">
        <Image
          src="/wr-background.png"
          alt="WordReach background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6">
        {/* White rounded card with title, copy and store badges */}
        <section className="mx-auto mt-6 sm:mt-10 rounded-3xl bg-white/90 text-black backdrop-blur shadow-2xl ring-1 ring-black/10 p-6 sm:p-8 max-w-3xl">
          <div className="flex justify-center">
            <Image src="/wr-title.svg" alt="WordReach" width={420} height={140} priority />
          </div>
          <p className="mt-3 sm:mt-4 text-center text-lg sm:text-xl leading-relaxed text-black/80">
            Step into the exciting world of WordReach – the online word‑building challenge!
          </p>

          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 place-items-center">
            <a
              href={IOS_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[220px] sm:w-[240px]"
            >
              <Image
                src="/apple-store.svg"
                alt="Download on the App Store"
                width={240}
                height={72}
                className="w-full h-auto"
              />
            </a>
            <a
              href={ANDROID_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[220px] sm:w-[240px]"
            >
              <Image
                src="/google-store.svg"
                alt="Get it on Google Play"
                width={240}
                height={72}
                className="w-full h-auto"
              />
            </a>
          </div>
        </section>

        {/* Device previews */}
        <section className="relative h-[500px] sm:h-[600px]">
          <div className="absolute left-1/2 -translate-x-[55%] sm:-translate-x-[55%] lg:-translate-x-[55%] rotate-[-12deg] w-[350px] sm:w-[450px] lg:w-[550px] mt-[-0px] z-10">
            <Image
              src="/wr-preview1.png"
              alt="WordReach preview"
              width={680}
              height={1720}
              className="w-full h-auto max-w-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-[30%] sm:-translate-x-[30%] lg:-translate-x-[30%] rotate-[12deg] w-[300px] lg:w-[450px] mt-[-15px]">
            <Image
              src="/wr-preview2.png"
              alt="WordReach preview"
              width={340}
              height={660}
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </section>

        {/* Footer logo and legal */}
        <div className="mt-12 sm:mt-16 mb-10 flex flex-col items-center gap-3">
          <Image
            src="/201-logo.svg"
            alt="201 Studio"
            width={160}
            height={44}
            className="opacity-90"
          />
          <p className="text-white/70 text-sm">A 201 Studio game </p>
          <p className="text-white/50 text-xs">
            On mobile you may be redirected to your app store automatically.
          </p>
        </div>
      </div>
    </main>
  );
}

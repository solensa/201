"use client";

import { useEffect } from "react";

// Store URLs
const IOS_STORE_URL = "https://apps.apple.com/gb/app/wordreach/id6749278685";
const ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=com.studio201.wordreach";

// Device detection function
function detectDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }
  
  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  
  return 'desktop';
}

export default function WordReachLanding() {
  useEffect(() => {
    const device = detectDevice();
    
    // Redirect mobile users automatically
    if (device === 'ios') {
      window.location.href = IOS_STORE_URL;
    } else if (device === 'android') {
      window.location.href = ANDROID_STORE_URL;
    }
  }, []);

  return (
    <div className="wordreach-landing">
      <div className="wordreach-container">
        <header className="wordreach-header">
          <h1 className="wordreach-title">WordReach</h1>
          <p className="wordreach-tagline">
            Build bridges with words on an 8×8 grid. Play the daily challenge and compete on the global leaderboard.
          </p>
        </header>

        <div className="store-buttons">
          <a 
            href={IOS_STORE_URL}
            className="store-button ios-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button-content">
              <span className="button-text">Download on the</span>
              <span className="button-store">App Store</span>
            </div>
          </a>

          <a 
            href={ANDROID_STORE_URL}
            className="store-button android-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button-content">
              <span className="button-text">Get it on</span>
              <span className="button-store">Google Play</span>
            </div>
          </a>
        </div>

        <footer className="wordreach-footer">
          <p>A 201 Studio Game</p>
        </footer>
      </div>
    </div>
  );
}
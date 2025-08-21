"use client";

import Link from "next/link";
import Image from "next/image";

export default function WordReach() {
  return (
    <div className="wordreach-page">
      {/* Header */}
      <div className="wordreach-header">
        <div className="container mx-auto px-6">
          <Link href="/" className="back-link">
            ← Back to 201 Studio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="wordreach-hero">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="wordreach-hero-content lg:w-1/2">
              <h1 className="wordreach-title">WordReach</h1>
              <p className="wordreach-subtitle">
                Step into the exciting world of WordReach - the online word-building challenge!
              </p>
              <p className="wordreach-description">
                Challenge your vocabulary, compete with friends, and discover new words in this 
                engaging word puzzle game. Build words, earn points, and reach the top of the leaderboard!
              </p>
              
              {/* Download Buttons */}
              <div className="download-buttons">
                <Link href="#" className="download-button app-store">
                  <img src="/app-store-badge.svg" alt="Download on the App Store" width={135} height={40} />
                </Link>
                <Link href="#" className="download-button google-play">
                  <img src="/google-play-badge.svg" alt="Get it on Google Play" width={153} height={45} />
                </Link>
              </div>
            </div>
            
            {/* App Screenshot */}
            <div className="wordreach-hero-image lg:w-1/2">
              <div className="app-mockup">
                <img 
                  src="/wordreach-screen.svg" 
                  alt="WordReach App Screenshot" 
                  className="app-screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="wordreach-features">
        <div className="container mx-auto px-6 py-16">
          <h2 className="features-title">Game Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Word Building</h3>
              <p>Create words from letter tiles and watch your vocabulary grow with every challenge.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Leaderboards</h3>
              <p>Compete with players worldwide and climb to the top of the global rankings.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Timed Challenges</h3>
              <p>Race against the clock in exciting timed word-building challenges.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Daily Puzzles</h3>
              <p>New puzzles every day to keep your mind sharp and engaged.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="wordreach-cta">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="cta-title">Ready to Challenge Your Mind?</h2>
          <p className="cta-description">
            Download WordReach today and start your word-building adventure!
          </p>
          
          {/* Download Buttons */}
          <div className="download-buttons">
            <Link href="#" className="download-button app-store">
              <img src="/app-store-badge.svg" alt="Download on the App Store" width={135} height={40} />
            </Link>
            <Link href="#" className="download-button google-play">
              <img src="/google-play-badge.svg" alt="Get it on Google Play" width={153} height={45} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="wordreach-footer">
        <div className="container mx-auto px-6 py-8">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/legal">Privacy Policy</Link>
              <Link href="mailto:contact@201.studio">Contact</Link>
            </div>
            <div className="footer-social">
              <Link href="https://instagram.com/2O1Studio">
                <img src="/instagram.svg" alt="Instagram" className="social-icon" />
              </Link>
              <Link href="https://www.facebook.com/2O1Studio">
                <img src="/facebook-f.svg" alt="Facebook" className="social-icon" />
              </Link>
              <Link href="https://www.linkedin.com/company/201studio">
                <img src="/linkedin-in.svg" alt="LinkedIn" className="social-icon" />
              </Link>
              <Link href="http://twitter.com/2O1Studio">
                <img src="/x-twitter.svg" alt="Twitter" className="social-icon" />
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 201 Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
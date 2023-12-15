"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, [videoRef]);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageRef2 = useRef<HTMLImageElement | null>(null);
  const imageRef3 = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (imageRef.current) {
          const windowHeight = imageRef.current.offsetTop - 0.55 * window.innerHeight;
          if (window.scrollY > windowHeight) {
            const rotation = (window.scrollY - windowHeight) / 2 - 90;
            if (rotation > 0) {
              imageRef.current.style.transform = `perspective(200px) rotateX(${0}deg)`;
              imageRef.current.style.opacity = `${1}`;
            } else {
              imageRef.current.style.transform = `perspective(200px) rotateX(${-rotation}deg) scale(${
                1 + rotation / 90
              })`;
              imageRef.current.style.opacity = `${1 + rotation / 90}`;
            }
          } else {
            imageRef.current.style.transform = `perspective(200px) rotateX(${-90}deg) `;
            imageRef.current.style.opacity = `${0}`;
          }
        }
        if (imageRef2.current) {
          const windowHeight = imageRef2.current.offsetTop - 0.55 * window.innerHeight;
          if (window.scrollY > windowHeight) {
            const rotation = (window.scrollY - windowHeight) / 2 - 90;
            if (rotation > 0) {
              imageRef2.current.style.transform = `perspective(200px) rotateX(${0}deg)`;
              imageRef2.current.style.opacity = `${1}`;
            } else {
              imageRef2.current.style.transform = `perspective(200px) rotateX(${-rotation}deg) scale(${
                1 + rotation / 90
              })`;
              imageRef2.current.style.opacity = `${1 + rotation / 90}`;
            }
          } else {
            imageRef2.current.style.transform = `perspective(200px) rotateX(${-90}deg) `;
            imageRef2.current.style.opacity = `${0}`;
          }
        }
        if (imageRef3.current) {
          const windowHeight = imageRef3.current.offsetTop - 0.55 * window.innerHeight;
          if (window.scrollY > windowHeight) {
            const rotation = (window.scrollY - windowHeight) / 2 - 90;
            if (rotation > 0) {
              imageRef3.current.style.transform = `perspective(200px) rotateX(${0}deg)`;
              imageRef3.current.style.opacity = `${1}`;
            } else {
              imageRef3.current.style.transform = `perspective(200px) rotateX(${-rotation}deg) scale(${
                1 + rotation / 90
              })`;
              imageRef3.current.style.opacity = `${1 + rotation / 90}`;
            }
          } else {
            imageRef3.current.style.transform = `perspective(200px) rotateX(${-90}deg) `;
            imageRef3.current.style.opacity = `${0}`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <>
      <div className="parallax">
        <div className="parallax1">
          <div className="s201-container">
            <h1 className="s201-title s201-title-201 ">2OI</h1>
            <h1 className="s201-title">STUDIO</h1>
            <video ref={videoRef} className="section-img" src="/5.mp4" autoPlay loop muted />
          </div>

          <img className="mountain-img" src={"/mountainsbg.png"} alt="colomountains background" />
          <div className="products-container">
            <h2 className="products-title">LET YOUR MIND LOOSE</h2>
            <div className="product-col">
              <img
                ref={imageRef}
                className="wordreach-tile"
                src={"/passimal-screen.svg"}
                alt="product screen1"
              />
              <div className="product-text">
                <span className="product-title product-title-side">Passimal</span>
                <span className="product-desc">
                  A fun and informative way of understanding how to improve your password.
                </span>
              </div>
            </div>
            <div className="product-col">
              <img
                ref={imageRef2}
                className="wordreach-tile2"
                src={"/wordreach-screen.svg"}
                alt="product screen2"
              />
              <div className="product-text">
                <span className="product-title">WordReach</span>
                <span className="product-desc">
                  Step into the exciting world of WordReach - the online word-building challenge!
                </span>
              </div>
            </div>

            <div className="product-col">
              <img
                ref={imageRef3}
                className="wordreach-tile3"
                src={"/wordtree-screen.svg"}
                alt="product screen3"
              />
              <div className="product-text">
                <span className="product-title">WordTree</span>
                <span className="product-desc">
                  A quick reference to the different types of English word.
                </span>
              </div>
            </div>
          </div>
          <div className="profiles-container">
            <h2 className="products-title">MEET THE CREW</h2>
            <div className="profile-col">
              <img className="profile-tile" src={"/rob-portrait.png"} alt="product screen1" />
              <div className="profile-text">
                <span className="product-title">Rob</span>
                <span className="profile-desc">
                  &quot;I&#39;m Rob, designer, developer and idea-maker. Catch me gaming and sailing
                  at weekends! (not at the same time)&quot;
                </span>
              </div>
            </div>
            <div className="profile-col">
              <img className="profile-tile" src={"/ben-portrait.jpeg"} alt="product screen2" />
              <div className="profile-text">
                <span className="product-title">Ben</span>
                <span className="profile-desc">
                  &quot;I&#39;m Ben, I&#39;m responsible for all the bugs you find. You&#39;ll
                  usually find me ignoring messages in a dark room&quot;
                </span>
              </div>
            </div>
            <div className="profile-col">
              <img className="profile-tile" src={"/tony-portrait.png"} alt="product screen3" />
              <div className="profile-text">
                <span className="product-title">Tony</span>
                <span className="profile-desc">
                  &quot;I&#39;m Tony, a product guy from South London. Besides product, you&#39;ll
                  also find me restoring classic cars!&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link href="https://instagram.com/2O1Studio" passHref={true}>
          <img className="social-icon" src={"/instagram.svg"} alt="product screen1" />
        </Link>
        <Link href="https://www.facebook.com/2O1Studio" passHref={true}>
          <img className="social-icon" src={"/facebook-f.svg"} alt="product screen1" />
        </Link>
        <Link href="https://www.linkedin.com/company/201studio" passHref={true}>
          <img className="social-icon" src={"/linkedin-in.svg"} alt="product screen1" />
        </Link>
        <Link href="http://twitter.com/2O1Studio" passHref={true}>
          <img className="social-icon" src={"/x-twitter.svg"} alt="product screen1" />
        </Link>
      </div>
    </>
  );
}

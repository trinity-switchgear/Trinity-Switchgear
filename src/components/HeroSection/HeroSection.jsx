"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const heroSlides = [
  {
    image: "/images/banner1.png",
    title: "100+ Years of Satisfying customers, every single time.",
    overlayImage: "/images/banneroverlay.png",
    // subtitle: "Trusted electrical supplier since 1917",
  },
  {
    image: "/images/banner2.png",
    title: "Bringing you technology that is constantly evolving.",
    overlayImage: "/images/banneroverlay.png",
    // subtitle: "3–4 hour site delivery across Mumbai",
  },
  {
    image: "/images/banner3.png",
    title: "Best Switchgear & Electrical Products Supplier.",
    overlayImage: "/images/banneroverlay.png",
    // subtitle: "Schneider, L&T, Polycab & more",
  },
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 400);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.carouselSection} containerheroimg`}>
      <button
        className={`${styles.carouselBtn} ${styles.left}`}
        onClick={() =>
          setSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
        }
      >
        ‹
      </button>

      {heroSlides.map(
        (item, index) =>
          index === slide && (
            <div
              className={`${styles.carouselSlide} ${
                fade ? styles.fadeIn : styles.fadeOut
              }`}
              key={index}
            >
              <img src={item.image} alt={item.title} />

              <div className={styles.carouselOverlay}>
                <div className={styles.overlayWrapper}>
                  <img
                    src={item.overlayImage}
                    alt="Overlay Graphic"
                    className={styles.overlayImage}
                  />

                  <div className={styles.overlayText}>
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          )
      )}

      <button
        className={`${styles.carouselBtn} ${styles.right}`}
        onClick={() =>
          setSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
        }
      >
        ›
      </button>
    </section>
  );
}

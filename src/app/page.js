"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./page.module.css"; // ✅ keep this

const featured = [
  {
    slug: "schneider-mcb-16a",
    title: "Schneider MCB 16A",
    short: "Reliable single pole MCB",
    brand: "Schneider",
    price: "₹350",
    image: "/images/product-placeholder.jpg",
  },
  {
    slug: "havells-rccb-2p-63a",
    title: "Havells RCCB 63A",
    short: "Earth leakage protection",
    brand: "Havells",
    price: "₹1800",
    image: "/images/product-placeholder.jpg",
  },
  {
    slug: "polycab-3c-2.5",
    title: "Polycab 3C 2.5mm",
    short: "3-core copper conductor",
    brand: "Polycab",
    price: "₹40/m",
    image: "/images/product-placeholder.jpg",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <section className={`container ${styles.heroSection}`}>
        <br />
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <h1>Trinity Electric Syndicate</h1>

            <p className="lead">
              Serving Mumbai’s electrical needs for <strong>100+ years</strong>.
              Leading supplier of switchgear, cables, panels and
              contractor-grade electricals. Quick site deliveries across Mumbai.
            </p>

            <div className={styles.heroButtons}>
              <a
                className={styles.whatsappBtn}
                href="https://wa.me/918652859663?text=Quick%20Order"
              >
                Quick Order (WhatsApp)
              </a>
            </div>

            <div className={styles.heroBadges}>
              <div className="card small">Pan India delivery</div>git 
              <div className="card small">
                Trusted by <b>200+ contractors</b>
              </div>
              <div className="card small">100% Genuine Products</div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img
              src="/images/shop.avif"
              alt="shop"
              className={styles.heroImage}
            />

            <div className={styles.legacyCard}>
              <div className={styles.legacyLeft}>
                <img src="/images/legacy.png" className={styles.legacyThumb} />

                <div>
                  <div className={styles.legacyTitle}>100+ Years</div>
                  <div className="small">Family-owned since 1917</div>
                </div>
              </div>

              <div className={styles.addressBox}>
                <div className={styles.addrLine}>
                  154, Shamaldas Gandhi Marg
                </div>
                <div className="small">Mumbai 400002</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* BRANDS WE SELL */}
      <br />
      <br />
      <section className="container">
        <a className={styles.brandstitle}>Brands We Sell</a>
        <a className={styles.brandssubtitle}>
          {" "}
          - Top Brands, Best Prices — Only at Trinity!
        </a>
        <div className={styles.brandsGrid}>
          <div className={styles.brandCard}>Schneider</div>
          <div className={styles.brandCard}>L&T</div>
          <div className={styles.brandCard}>Legrand</div>
          <div className={styles.brandCard}>Polycab</div>
          <div className={styles.brandCard}>Trays</div>
          <div className={styles.brandCard}>APAR</div>
          <div className={styles.brandCard}>Finolex</div>
          <div className={styles.brandCard}>BLP</div>
          <div className={styles.brandCard}>Siemens</div>
          <div className={styles.brandCard}>Wika</div>
          <div className={styles.brandCard}>Indfos</div>
          <div className={styles.brandCard}>Switzer</div>
          <div className={styles.brandCard}>EAPL</div>
          <div className={styles.brandCard}>Danfoss</div>
        </div>
      </section>

      {/* BUILT ON TRUST / ABOUT US */}
      <section className={`container ${styles.aboutSection}`}>
        <h2>Built on Trust</h2>
        <p>
          Founded in <b>1917</b> , the Trinity Group of Companies is a pioneer
          in the space of electrical contracting. For over a century, we have
          provided state-of-the-art products, comprehensive services, and expert
          consulting to our clients. In this time, the Group has grown from
          strength to strength. We now offer our clientele a wide array of
          high-quality electrical cables, reliable switchgears, and advanced
          home automation solutions. Proudly family-owned, the Trinity Group is
          united in its mission to ensure the highest level of customer
          satisfaction through a combination of superior service, deep
          knowledge, and sound expertise.
        </p>
        <p>
          Over the decades, the Group has earned a reputation for trust,
          honesty, and customer satisfaction. From the very first, to a hundred
          years later, Trinity has always stood for the highest quality
          electrical solutions. Our customers remain our most cherished asset.
          We fully intend to delight them — and even more customers — for
          several centuries to come.
        </p>
      </section>

      {/* TRUST SECTION */}
      <section className={`container ${styles.trustSection}`}>
        <h2 className={styles.mid}>Why Contractors Trust Us</h2>

        <div className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <h4>✔ 100+ Years Legacy</h4>
            <p>
              Serving Mumbai since the 1917s — unmatched experience in
              electrical supply.
            </p>
          </div>

          <div className={styles.trustCard}>
            <h4>✔ Fast Site Delivery</h4>
            <p>
              2–3 hour delivery anywhere in Mumbai for urgent contractor needs.
            </p>
          </div>

          <div className={styles.trustCard}>
            <h4>✔ Genuine Products Only</h4>
            <p>We supply only original branded electricals — no duplicates.</p>
          </div>

          <div className={styles.trustCard}>
            <h4>✔ 2000+ Contractor Clients</h4>
            <p>
              Trusted by leading builders, electricians and panel contractors.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section id="our-products" className="container">
        <h2 className={styles.mid}>Products We Sell</h2>

        <div className={styles.categoryGrid}>
          <a className={styles.categoryCard} href="/switchgear">
            Switchgear (MCB, RCCB, MCCB)
          </a>
          <a className={styles.categoryCard} href="/cables-wires">
            Cables & Wires
          </a>
          <a className={styles.categoryCard} href="/pipes">
            PVC Conduit Pipes
          </a>
          <a className={styles.categoryCard} href="/smart-devices">
            Smart Devices
          </a>
          <a className={styles.categoryCard} href="/accessories">
            Other Accessories
          </a>
        </div>
      </section>

      <section className="container">
        <h1 className={styles.mid}>Contact Us</h1>

        <div className={styles.contactGrid}>
          <div>
            <div className="card">
              <h3>Visit Us</h3>
              <div>154, Shamaldas Gandhi Marg, Mumbai 400002</div>
              <div style={{ marginTop: 8 }}>
                <strong>Phone:</strong> +91 8652859663 / +91 2240181818 / +91 2222014201
              </div>
              <div>
                <strong>Email:</strong> sales@trinityswitchgear.com
              </div>
              <div style={{ marginTop: 8 }} className="small">
                Hours: Mon–Sat 9:30 AM – 7:00 PM
              </div>
            </div>

            <div style={{ marginTop: 12 }} className="card">
              <h3>Send BOQ (Bill of Quantities)</h3>
              <p>
                Send your BOQ file via WhatsApp or email for a quick quote. We
                respond quickly to contractor BOQs.
              </p>
              <a
                className="btn btn-primary"
                href="https://wa.me/918652859663?text=Sending%20BOQ"
              >
                Send BOQ (WhatsApp)
              </a>
            </div>
          </div>
          <div className={styles.mapCenter}>
            <h2 className={styles.mapCenterH2}>Find Us</h2>

            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.657165192962!2d72.82669617497395!3d18.946563182231532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf32e293b931%3A0x408b439948bd91bc!2sTRINITY%20ELECTRIC%20SYNDICATE!5e0!3m2!1sen!2sin!4v1765509508112!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

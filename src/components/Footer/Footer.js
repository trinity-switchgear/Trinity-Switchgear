"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaClock, FaUsers } from "react-icons/fa"; // icons
import styles from "./Footer.module.css";

export default function Footer() {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let y = 0;
    let c = 0;
    const interval = setInterval(() => {
      if (y < 100) setYears(++y);
      if (c < 200) setClients(++c);
      if (y >= 100 && c >= 200) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={`container ${styles.footer}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <h3>Trinity Electric Syndicate</h3>
            <p>
              154, Shamaldas Gandhi Marg,<br />
              Kalbadevi, Mumbai 400002
            </p>
            <p>GST: 27AAAFT0659G1Z8</p>

            {/* Counters in Cards */}
            <div className={styles.counterGrid}>
              <div className={styles.counterCard}>
                <FaClock className={styles.counterIcon} />
                <div>
                  <div className={styles.counterNumber}>{years}+</div>
                  <div className={styles.counterLabel}>Years Legacy</div>
                </div>
              </div>

              <div className={styles.counterCard}>
                <FaUsers className={styles.counterIcon} />
                <div>
                  <div className={styles.counterNumber}>{clients}+</div>
                  <div className={styles.counterLabel}>Trusted Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#our-products">Products</Link></li>
              {/* <li><Link href="/contractors">For Contractors</Link></li> */}
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact / Support */}
          <div>
            <h4 className={styles.heading}>Support</h4>
            <ul className={styles.links}>
              <li><a href="tel:+918652859663">Call Us</a></li>
              <li><a href="mailto:sales@trinityswitchgear.com">Email</a></li>
              <li><a href="https://wa.me/918652859663">WhatsApp</a></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className={styles.bottomLine}>
          © {new Date().getFullYear()} Trinity Electric Syndicate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

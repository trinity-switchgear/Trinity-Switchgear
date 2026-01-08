"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.containers  }>
        <div className={styles.brand}>
          <Link
            href="/"
            className={styles.logoLink}
            onClick={() => setOpen(false)}
          >
            <img src="/logos/logo.png" alt="Trinity" className={styles.logo} />
          </Link>

          <div className={styles.titleWrap}>
            <div className={styles.title}>Trinity Electric Syndicate</div>
            <div className={styles.subtitle}>
              Kalbadevi · Mumbai · Since 1917
            </div>
          </div>
        </div>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <Link href="/" className={styles.navLink} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink} onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/products" className={styles.navLink} onClick={() => setOpen(false)}>
            Products
          </Link>
          {/* <Link
            href="/contractors"
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            For Bulk Orders
          </Link> */}
          <Link
            href="/contact"
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            
            Contact
          </Link>

          <a
            className={styles.cta}
            href="https://wa.me/918652859663?text=Hello%20Trinity"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            Quick Order
          </a>
        </nav>

        <button
          className={styles.mobileBtn}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={styles.ham}></span>
        </button>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [adminName, setAdminName] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  function syncAuth() {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("adminName");

    if (token) {
      setIsAuth(true);
      setAdminName(name || "Admin");
    } else {
      setIsAuth(false);
      setAdminName("");
    }
  }

  useEffect(() => syncAuth(), []);
  useEffect(() => syncAuth(), [pathname]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("adminName");
    setIsAuth(false);
    setAdminName("");
    router.push("/login");
  }

  const isAdminPage = isAuth && pathname.startsWith("/broadcast");

  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.containers}>
        <div className={styles.brand}>
          {isAdminPage ? (
            <div className={styles.logoLocked}>
              <img
                src="/logos/logo.png"
                alt="Trinity"
                className={styles.logo}
              />
            </div>
          ) : (
            <Link
              href="/"
              className={styles.logoLink}
              onClick={() => setOpen(false)}
            >
              <img
                src="/logos/logo.png"
                alt="Trinity"
                className={styles.logo}
              />
            </Link>
          )}

          <div className={styles.titleWrap}>
            <div className={styles.title}>Trinity Electric Syndicate</div>
            <div className={styles.subtitle}>Mumbai · Since 1917</div>
          </div>
        </div>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          {!isAdminPage && (
            <>
              <Link
                href="/"
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#our-products"
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </>
          )}

          {!isAuth && !isAdminPage && (
            <Link href="/login" className={styles.cta}>
              Admin Login
            </Link>
          )}
        </nav>

        {isAuth && (
          <div className={styles.adminWrap}>
            <span className={styles.adminName}>👤 {adminName}</span>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}

        {!isAdminPage && (
          <button
            className={styles.mobileBtn}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={styles.ham}></span>
          </button>
        )}
      </div>
    </header>
  );
}

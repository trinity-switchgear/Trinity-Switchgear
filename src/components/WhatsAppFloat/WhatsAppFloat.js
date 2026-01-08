"use client";

import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  const number = "918652859663"; // replace with actual number
  const text = encodeURIComponent("Hello Trinity, I want to place an order");

  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className={styles.whatsappFloat}
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className={styles.whatsappIcon}
      >
        <path d="M16.027 3C9.384 3 4 8.384 4 15.027c0 2.639.77 5.082 2.083 7.152L4 29l6.987-2.053a12.934 12.934 0 0 0 5.04 1.027h.001c6.643 0 12.027-5.384 12.027-12.027S22.67 3 16.027 3zm7.19 17.25c-.3.842-1.75 1.61-2.448 1.71-.63.09-1.43.13-2.31-.143-.53-.168-1.21-.39-2.083-.763-3.665-1.59-6.04-5.29-6.22-5.54-.18-.25-1.49-1.98-1.49-3.78 0-1.8.94-2.678 1.27-3.037.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.084.82.626.3.71 1.02 2.46 1.11 2.643.09.18.15.39.03.64-.12.25-.18.4-.35.62-.18.22-.37.48-.53.64-.18.18-.37.37-.16.73.21.36.94 1.55 2.02 2.52 1.39 1.24 2.56 1.63 2.92 1.82.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71z"/>
      </svg>

      <span className={styles.whatsappText}>WhatsApp</span>
    </a>
  );
}
  
"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/page.module.css";

export default function FAQSection() {
  const faqRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      faqRefs.current.forEach((el) => {
        if (el && !el.contains(e.target)) {
          el.removeAttribute("open");
        }
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleToggle = (index) => {
    faqRefs.current.forEach((el, i) => {
      if (el && i !== index) el.removeAttribute("open");
    });
  };

  const faqs = [
    {
      q: "Do you supply electrical products all over India?",
      a: "Yes. Trinity Electric Syndicate supplies switchgear, MCB, MCCB, RCBO, cables, wires, pipes, relays and accessories across all major cities and states in India.",
    },
    {
      q: "Do you export electrical and switchgear products?",
      a: "Yes. We are a global exporter of electrical and switchgear products and regularly ship to multiple countries worldwide.",
    },
    {
      q: "What products does Trinity Electric Syndicate deal in?",
      a: "We deal in switchgear, MCB, MCCB, RCBO, relays, timers, starters, cables, wires, PVC conduits, smart devices and all electrical accessories.",
    },
    {
      q: "Do you provide bulk and contractor pricing?",
      a: "Yes. We offer special pricing for contractors, builders, panel manufacturers and bulk buyers.",
    },
    {
      q: "How can I place an order or send a BOQ?",
      a: "You can send your BOQ via WhatsApp or email, and our team will respond quickly with a competitive quote.",
    },
    {
      q: "Are all your products genuine and branded?",
      a: "Absolutely. We supply only 100% genuine branded electrical products from trusted manufacturers like Schneider, L&T, Legrand, Polycab, Siemens and more.",
    },
  ];

  return (
    <section className="container">
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

      <div className={styles.faqGrid}>
        {faqs.map((item, index) => (
          <details
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className={styles.faqItem}
            onToggle={() => handleToggle(index)}
          >
            <summary className={styles.faqSummary}>
              {item.q}
              <span className={styles.icon}></span>
            </summary>
            <div className={styles.faqAnswer}>{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

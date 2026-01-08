import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.container}>
      {/* HERO */}
      <div className={styles.aboutHero}>
        <h1>About Trinity Electric Syndicate</h1>
        <p className={styles.lead}>
          A century-old electrical distribution house delivering trusted
          switchgears, cables, and electrical solutions to Mumbai’s builders,
          contractors, and industries.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.aboutGrid}>
        {/* LEFT CONTENT */}
        <div className={styles.aboutContent}>
          <h3>Our Legacy</h3>
          <p>
            Established in the early <strong>1917s</strong> in Kalbadevi, Mumbai,
            Trinity Electric Syndicate began as a small electrical supply store.
            Over the decades, we have grown into a reliable and well-known name
            in the electrical trading industry, supporting projects of all
            scales across the city.
          </p>

          <h3>Experience That Matters</h3>
          <p>
            With over <strong>100 years of experience</strong>, we understand
            the evolving needs of modern electrical infrastructure. From
            residential buildings to large commercial and industrial projects,
            we provide products that meet safety standards and performance
            expectations.
          </p>

          <h3>Our Mission</h3>
          <p>
            To deliver <strong>genuine, certified electrical products</strong>
            with reliable service, competitive pricing, and timely deliveries,
            ensuring smooth execution of every project.
          </p>

          <h3>Our Vision</h3>
          <p>
            To continue being Mumbai’s most trusted electrical supplier by
            embracing new technologies, expanding our product portfolio, and
            maintaining long-term relationships with our customers.
          </p>

          <h3>What We Supply</h3>
          <ul>
            <li>Switchgears – MCB, RCCB, MCCB, ACB</li>
            <li>Cables & Wires – Polycab, KEI, RR Kabel</li>
            <li>LT Panels & Distribution Boards</li>
            <li>Electrical Accessories & Industrial Tools</li>
            <li>BOQ Preparation & Contractor Support</li>
          </ul>

          <h3>Who We Serve</h3>
          <p>
            We cater to electrical contractors, builders, project managers,
            factories, and maintenance teams who require dependable electrical
            products with quick availability.
          </p>

          <h3>Why Choose Trinity</h3>
          <ul className={styles.ticks}>
            <li>Over 100 years of proven industry credibility</li>
            <li>Authorized dealer of reputed electrical brands</li>
            <li>Only genuine and ISI-certified products</li>
            <li>Fast dispatch from ready local stock</li>
            <li>Dedicated WhatsApp & phone-based support</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <aside className={styles.aboutCard}>
          <img src="/images/shop.avif" alt="Trinity Electric Syndicate Legacy" />

          <div className={styles.cardTitle}>Trusted Electrical Partner</div>
          <p>
            Located in Kalbadevi — Mumbai’s largest electrical market — we offer
            unmatched access to quality products, quick procurement, and
            technical guidance for every requirement.
          </p>

          <div className={styles.stats}>
            <div>
              <strong>100+</strong>
              <span>Years Legacy</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>Contractors</span>
            </div>
            <div>
              <strong>1000+</strong>
              <span>Products</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

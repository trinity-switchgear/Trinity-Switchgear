import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <section className={styles.containerheroimg}>
        <img
          src="/images/about.png"
          alt="Trinity Electric Syndicate"
          className={styles.heroImage}
        />
        <div className={styles.carouselOverlay}>
          <div className={styles.overlayWrapper}>
            <img
              src="/images/banneroverlay.png"
              alt="Overlay Graphic"
              className={styles.overlayImage}
            />

            <div className={styles.overlayText}>
              <h2>100+ Years of Electrical Excellence</h2>
              <p>Trusted electrical supplier since 1917</p>
            </div>
          </div>
        </div>
      </section>
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
      <section className={`container ${styles.statsSection}`}>
        <div className={styles.statsContainer}>
          {/* ITEM 1 */}
          <div className={styles.statItem}>
            <img src="/images/100-years.png" alt="100 Years" />
            <p>
              A CENTURY <br /> OF TRUST
            </p>
          </div>

          {/* ITEM 2 */}
          <div className={styles.statItem}>
            <img src="/images/india-map.png" alt="Pan India Clients" />
            <p>
              PAN INDIA <br /> CLIENTS
            </p>
          </div>

          {/* ITEM 3 */}
          <div className={styles.statItem}>
            <img src="/images/award.png" alt="Awards Won" />
            <p>
              OVER 25 <br /> AWARDS WON
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

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
      <section className={`container ${styles.leadershipSection}`}>
        <h2 className={styles.heading}>Leadership</h2>

        <div className={styles.leadersGrid}>
          {/* Leader 1 */}
          <div className={styles.leaderCard}>
            <img src="/images/deepak.png" alt="Deepak Khambhati" />
            <h3>Deepak Khambhati</h3>
            <p>Partner</p>
          </div>

          {/* Leader 2 */}
          <div className={styles.leaderCard}>
            <img src="/images/anuj.png" alt="Anuj Khambhati" />
            <h3>Anuj Khambhati</h3>
            <p>Partner</p>
          </div>

          {/* Leader 3 */}
          <div className={styles.leaderCard}>
            <img src="/images/aditya.png" alt="Aditya Khambhati" />
            <h3>Aditya Khambhati</h3>
            <p>Partner</p>
          </div>
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
                <strong>Phone:</strong> +91 8652859663
              </div>
              <div>
                <strong>Email:</strong> sales@trinityswitchgear.com
              </div>
              <div style={{ marginTop: 8 }} className="small">
                Hours: Mon–Sat 9:30 AM – 7:00 PM
              </div>
            </div>

            <div style={{ marginTop: 12 }} className="card">
              <h3>Send BOQ</h3>
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

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className="container">
      <br /><br />
      <h1 className={styles.mid}>Contact Us</h1>

      <div className={styles.contactGrid}>
        <div>
          <div className="card">
            <h3>Visit Us</h3>
            <div>154, Shamaldas Gandhi Marg, Kalbadevi, Mumbai 400002</div>
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
  );
}

import styles from "../page.module.css"; // ✅ keep this

export const metadata = {
  title: "Privacy Policy | Trinity Electric Syndicate",
  description:
    "Read the privacy policy of Trinity Electric Syndicate. Learn how we collect, use and protect your information when you visit our website.",
};

export default function Contact() {
  return (
    <section className="container">
      <br />
      <h1 className={styles.mid}>Privacy Policy</h1>
      <h5>
        At <strong>Trinity Electric Syndicate</strong>, we are committed to
        protecting your privacy and ensuring that your personal information is
        handled in a safe and responsible manner. We collect personal
        information such as your name, email address, phone number, billing and
        delivery address, and order-related details strictly for the purpose of
        processing orders, responding to inquiries, providing customer support,
        and improving our products and services.
      </h5>

      <h5>
        We do not sell, rent, trade, or disclose your personal information to
        third parties except where required to fulfill your order (such as
        logistics and delivery partners) or when mandated by law. All data is
        stored securely and accessed only by authorized personnel for legitimate
        business purposes.
      </h5>

      <h5>
        Our website may use cookies, analytics tools, and similar technologies
        to understand user behavior, improve website functionality, and enhance
        your browsing experience. These tools help us analyze traffic and
        optimize our services but do not personally identify users.
      </h5>

      <h5>
        By accessing or using our website, you acknowledge and consent to the
        collection and use of your information in accordance with this Privacy
        Policy. Trinity Electric Syndicate reserves the right to update or
        modify this policy at any time without prior notice. Continued use of
        the website after changes indicates acceptance of the updated policy.
      </h5>

      <h5>
        If you have any questions, concerns, or requests regarding your personal
        data or this Privacy Policy, you may contact us at{" "}
        <strong>trinity.electric.switchgear@gmail.com</strong>.
      </h5>

      <br />
      <h1 className={styles.mid}>Terms & Conditions</h1>
      <h5>
        Welcome to <strong>Trinity Electric Syndicate</strong>. By accessing or
        using our website, you agree to comply with the following terms and
        conditions:
      </h5>
      <ul>
        <li>
          All orders are subject to product availability and confirmation of the
          order price.
        </li>
        <li>
          We reserve the right to refuse or cancel any order for reasons
          including but not limited to product unavailability or pricing errors.
        </li>
        <li>
          <strong>No returns or cancellations</strong> are accepted once an
          order is dispatched. Please verify your order details before
          confirming the purchase.
        </li>
        <li>
          Delivery timelines are estimated and may vary depending on logistics
          and external factors.
        </li>
        <li>
          All users must provide accurate information when placing orders or
          contacting us.
        </li>
        <li>
          Unauthorized use of our website for illegal activities is strictly
          prohibited.
        </li>
        <li>
          We may update these terms at any time without prior notice. Continued
          use of the site implies acceptance of updated terms.
        </li>
      </ul>
      <br />
      <h1 className={styles.mid}>Contact Us</h1>

      <div className={styles.contactGrid}>
        <div>
          <div className="card">
            <h3>Visit Us</h3>
            <div>154, Shamaldas Gandhi Marg, Mumbai 400002</div>
            <div style={{ marginTop: 8 }}>
              <strong>Phone:</strong> +91 8652859663 / +91 2240181818 / +91
              2222014201
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
  );
}

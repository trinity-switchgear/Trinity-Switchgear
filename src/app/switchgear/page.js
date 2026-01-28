import styles from "./product.module.css";
import Script from "next/script";

export const metadata = {
  title:
    "Switchgear Supplier & Exporter from India | Trinity Electric Syndicate",
  description:
    "Trinity Electric Syndicate is a leading switchgear supplier across India and a trusted exporter worldwide. We deal in MCB, MCCB, RCBO, relays, timers & starters.",
};

const items = [
  {
    title: "MCB (Miniature Circuit Breaker)",
    sku: "TRI-MCB",
    brand: "Schneider, L&T....12+",
    image: "/images/switchgear/MCB.png",
  },
  {
    title: "RCCB (Residual Current Circuit Breaker)",
    sku: "TRI-RCCB",
    brand: "Schneider, L&T....12+",
    image: "/images/switchgear/RCCB.png",
  },
  {
    title: "RCBO (Residual Current Breaker with Overcurrent)",
    sku: "TRI-RCBO",
    brand: "Schneider, L&T....12+",
    image: "/images/switchgear/RCBO.png",
  },
  {
    title: "MCCB (Moulded Case Circuit Breaker)",
    sku: "TRI-MCCB",
    brand: "Schneider, L&T....12+",
    image: "/images/switchgear/MCCB.png",
  },
  {
    title: "Isolator (Switch Disconnector)",
    sku: "TRI-ISO",
    brand: "Schneider, L&T....8+",
    image: "/images/switchgear/isolator.jpg",
  },
  {
    title: "Changeover Switch (Manual Changeover)",
    sku: "TRI-CO",
    brand: "Schneider, L&T....10+",
    image: "/images/switchgear/changeover.jpg",
  },
  {
    title: "AC Contactor (Alternating Current Contactor)",
    sku: "TRI-CON",
    brand: "Schneider, L&T....12+",
    image: "/images/switchgear/contactor.jpg",
  },
  {
    title: "Thermal Overload Relay (Motor Protection Relay)",
    sku: "TRI-OLR",
    brand: "Schneider, L&T....8+",
    image: "/images/switchgear/overload.jpg",
  },
  {
    title: "Protection Relay (Electrical Protection Relay)",
    sku: "TRI-PR",
    brand: "Schneider, L&T....10+",
    image: "/images/switchgear/protection-relay.jpg",
  },
  {
    title: "Surge Protection Device (SPD)",
    sku: "TRI-SPD",
    brand: "Schneider, L&T....11+",
    image: "/images/switchgear/spd.jpg",
  },
  {
    title: "Motor Protection Circuit Breaker (MPCB)",
    sku: "TRI-MPCB",
    brand: "Schneider, L&T....12+",
    image: "/images/switchgear/mpcb.jpg",
  },
  {
    title: "Pressure Switch (Air and Water)",
    sku: "TRI-PS",
    brand: "Schneider, L&T....12+",
    image: "/images/switchgear/pressure-switch.jpg",
  },
];

export default function Switchgear() {
  return (
    <>
      <Script
        id="product-schema-switchgear"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Industrial Switchgear & Electrical Protection Devices",
            description:
              "High-quality switchgear products including MCB, MCCB, RCBO, relays, timers and starters supplied across India and exported worldwide by Trinity Electric Syndicate.",
            brand: {
              "@type": "Brand",
              name: "Trinity Electric Syndicate",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Trinity Electric Syndicate",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.trinityswitchgear.com/switchgear",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              areaServed: "Worldwide",
              seller: {
                "@type": "Organization",
                name: "Trinity Electric Syndicate",
              },
            },
          }),
        }}
      />

      <section className={styles.container}>
        <h1 className={styles.heading}>Switchgears</h1>

        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.sku} className={styles.card}>
              <img
                src={it.image}
                alt={it.title}
                className={styles.productImage}
              />
              <h3>{it.title}</h3>
              <div className={styles.small}>SKU: {it.sku}</div>
              <div className={styles.small}>Brand: {it.brand}</div>

              <div className={styles.actions}>
                <a
                  className={styles.btnprimary}
                  href={`https://wa.me/918652859663?text=Quote%20for%20${encodeURIComponent(
                    it.title,
                  )}`}
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import styles from "./switchgear.module.css";

const items = [
  {
    title: "MCB (Miniature Circuit Breaker)",
    sku: "TRI-MCB",
    brand: "Schneider / Havells",
    image: "/images/switchgear/MCB.png",
  },
  {
    title: "RCCB (Residual Current Circuit Breaker)",
    sku: "TRI-RCCB",
    brand: "Havells / Schneider",
    image: "/images/switchgear/RCCB.png",
  },
  {
    title: "RCBO (Residual Current Breaker with Overcurrent)",
    sku: "TRI-RCBO",
    brand: "Havells / Schneider",
    image: "/images/switchgear/RCBO.png",
  },
  {
    title: "MCCB (Moulded Case Circuit Breaker)",
    sku: "TRI-MCCB",
    brand: "L&T / Schneider",
    image: "/images/switchgear/MCCB.png",
  },
  {
    title: "Isolator (Switch Disconnector)",
    sku: "TRI-ISO",
    brand: "Havells",
    image: "/images/switchgear/isolator.jpg",
  },
  {
    title: "Changeover Switch (Manual Changeover)",
    sku: "TRI-CO",
    brand: "HPL / Havells",
    image: "/images/switchgear/changeover.jpg",
  },
  {
    title: "AC Contactor (Alternating Current Contactor)",
    sku: "TRI-CON",
    brand: "Schneider",
    image: "/images/switchgear/contactor.jpg",
  },
  {
    title: "Thermal Overload Relay (Motor Protection Relay)",
    sku: "TRI-OLR",
    brand: "Schneider",
    image: "/images/switchgear/overload.jpg",
  },
  {
    title: "Protection Relay (Electrical Protection Relay)",
    sku: "TRI-PR",
    brand: "Schneider / L&T",
    image: "/images/switchgear/protection-relay.jpg",
  },
  {
    title: "Surge Protection Device (SPD)",
    sku: "TRI-SPD",
    brand: "OBO / Schneider",
    image: "/images/switchgear/spd.jpg",
  },
  {
    title: "Motor Protection Circuit Breaker (MPCB)",
    sku: "TRI-MPCB",
    brand: "Schneider",
    image: "/images/switchgear/mpcb.jpg",
  },
  {
    title: "Pressure Switch (Air and Water)",
    sku: "TRI-PS",
    brand: "Schneider / Danfoss / Honeywell",
    image: "/images/switchgear/pressure-switch.jpg",
  },
];

export default function Switchgear() {
  return (
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
                  it.title
                )}`}
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "../switchgear/product.module.css";

const items = [
  {
    title: "Digital Time Switch / Timer",
    sku: "TRI-TIMER-DIG",
    brand: "Hager / Schneider / L&T",
    image: "/images/smart-devices/timer.png",
  },
  {
    title: "Automatic Star Delta Starter",
    sku: "TRI-STAR-DELTA",
    brand: "L&T / Schneider",
    image: "/images/smart-devices/star-delta.jpg",
  },
  {
    title: "Direct On Line (DOL) Starter",
    sku: "TRI-DOL",
    brand: "L&T / Schneider",
    image: "/images/smart-devices/dol-starter.jpg",
  },
  {
    title: "Automatic Changeover with Timer",
    sku: "TRI-ACO-TIMER",
    brand: "L&T / Schneider",
    image: "/images/smart-devices/changeover-timer.jpg",
  },
  {
    title: "Phase Preventer / Phase Failure Relay",
    sku: "TRI-PHASE-PR",
    brand: "Selec / L&T / Schneider",
    image: "/images/smart-devices/phase-preventer.jpg",
  },
  {
    title: "Digital Voltage & Current Monitor",
    sku: "TRI-VAM",
    brand: "Selec / Rishabh",
    image: "/images/smart-devices/voltage-current.jpg",
  },
  {
    title: "Programmable Logic Controller (PLC)",
    sku: "TRI-PLC",
    brand: "Schneider / Siemens",
    image: "/images/smart-devices/plc.jpg",
  },  {
    title: "Smart Motor Starter",
    sku: "TRI-SMART-MOTOR",
    brand: "Schneider / Siemens",
    image: "/images/smart-devices/smart-motor-starter.jpeg",
  },
];

export default function SmartDevices() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Smart Devices</h1>

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

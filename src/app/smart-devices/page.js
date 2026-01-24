import styles from "../switchgear/product.module.css";

export const metadata = {
  title:
    "Smart Electrical Devices (IoT) Supplier & Exporter from India | Trinity Electric",
  description:
    "Trinity Electric Syndicate supplies smart electrical devices (IoT) and automation products across India and exports globally for modern homes and industries.",
};

const items = [
  {
    title: "OHM-IoT enabled smart meters",
    sku: "TRI-SMART-MOTOR",
    brand: "Suslab",
    image: "/images/smart-devices/ohm.jpg",
  },
  {
    title: "Phase Preventer / Phase Failure Relay",
    sku: "TRI-PHASE-PR",
    brand: "L&T, Schneider....12+",
    image: "/images/smart-devices/phase-preventer.jpg",
  },
  {
    title: "Programmable Logic Controller (PLC)",
    sku: "TRI-PLC",
    brand: "L&T, Schneider....12+",
    image: "/images/smart-devices/plc.jpg",
  },
  {
    title: "Digital Voltage & Current Monitor",
    sku: "TRI-VAM",
    brand: "Siemens, Schneider....12+",
    image: "/images/smart-devices/voltage-current.jpg",
  },
  {
    title: "Automatic Star Delta Starter",
    sku: "TRI-STAR-DELTA",
    brand: "L&T, Schneider....12+",
    image: "/images/smart-devices/star-delta.jpg",
  },
  {
    title: "Digital Time Switch / Timer",
    sku: "TRI-TIMER-DIG",
    brand: "L&T, Schneider....12+",
    image: "/images/smart-devices/timer.png",
  },
  {
    title: "Direct On Line (DOL) Starter",
    sku: "TRI-DOL",
    brand: "L&T, Siemens....12+",
    image: "/images/smart-devices/dol-starter.jpg",
  },
  {
    title: "Automatic Changeover",
    sku: "TRI-ACO-TIMER",
    brand: "L&T, Schneider....12+",
    image: "/images/smart-devices/changeover-timer.jpg",
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
  );
}

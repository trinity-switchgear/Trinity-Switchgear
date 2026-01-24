import styles from "../switchgear/product.module.css";

export const metadata = {
  title:
    "Electrical Accessories Supplier & Exporter from India | Trinity Electric",
  description:
    "Trinity Electric Syndicate supplies high-quality electrical accessories across India and exports globally. We offer industrial and commercial electrical components for all applications.",
};

const items = [
  {
    title: "LED Indicator Lamp",
    sku: "TRI-LED-IND",
    brand: "Schneider / L&T / Havells",
    image: "/images/accessories/led-indicator.jpg",
  },
  {
    title: "Push Button Switch",
    sku: "TRI-PB-SW",
    brand: "Schneider / L&T",
    image: "/images/accessories/push-button.jpg",
  },
  {
    title: "Selector Switch",
    sku: "TRI-SEL-SW",
    brand: "Schneider / L&T",
    image: "/images/accessories/selector-switch.jpg",
  },
  {
    title: "Cable Glands & Lugs",
    sku: "TRI-GLAND-LUG",
    brand: "Dowells / Comet",
    image: "/images/accessories/cable-gland.jpg",
  },
  {
    title: "Industrial Plug & Socket",
    sku: "TRI-PLUG-SOCK",
    brand: "Legrand / Schneider",
    image: "/images/accessories/plug-socket.jpg",
  },
  {
    title: "MCB Distribution Box",
    sku: "TRI-DB-MCB",
    brand: "Havells / Schneider",
    image: "/images/accessories/mcb-db.jpg",
  },
  {
    title: "Current Transformer (CT)",
    sku: "TRI-CT",
    brand: "Rittal / Local Make",
    image: "/images/accessories/ct.jpg",
  },
  {
    title: "Electric Tap",
    sku: "TRI-ELEC-TAP",
    brand: "Jaquar / Hindware / Local OEM",
    image: "/images/accessories/tape.jpg",
  },
];

export default function CablesWires() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Other Accessories</h1>

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

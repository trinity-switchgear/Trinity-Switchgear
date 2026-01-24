import styles from "../switchgear/product.module.css";

export const metadata = {
  title:
    "Electrical Pipes & Conduits Supplier & Exporter from India | Trinity Electric",
  description:
    "Trinity Electric Syndicate supplies electrical pipes and conduits across India and exports globally for safe and reliable wiring installations.",
};

const items = [
  {
    title: "Light Mechanical Strength (LMS) - PVC Pipes",
    sku: "TRI-CONTROL-LMS",
    brand: "Precision / BLP",
    image: "/images/pipes/lms.png",
  },
  {
    title: "  Medium Mechanical Strength (MMS) - PVC Pipes",
    sku: "TRI-CONTROL-MMS",
    brand: "Precision / BLP",
    image: "/images/pipes/mms.jpeg",
  },
  {
    title: "Heavy Mechanical Strength (HMS) - PVC Pipes",
    sku: "TRI-CONTROL-HMS",
    brand: "Precision / BLP",
    image: "/images/pipes/hms.jpeg",
  },
];

export default function CablesWires() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Cables, Wires & Pipes</h1>

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

import styles from "../switchgear/product.module.css";

const items = [
  {
    title: "PVC Insulated Copper Wire",
    sku: "TRI-CU-PVC",
    brand: "Polycab / Havells / Finolex",
    image: "/images/cables/copper-wire.jpg",
  },
  {
    title: "FR / FRLS House Wiring",
    sku: "TRI-FR-FRLS",
    brand: "Polycab / Havells / Anchor",
    image: "/images/cables/fr-frls.jpeg",
  },
  {
    title: "XLPE Armoured Power Cable",
    sku: "TRI-XLPE-ARM",
    brand: "Polycab / KEI / Finolex",
    image: "/images/cables/xlpe-armoured.jpeg",
  },
  {
    title: "Aluminium Armoured Cable",
    sku: "TRI-AL-ARM",
    brand: "KEI / Universal / Polycab",
    image: "/images/cables/aluminium-armoured1.png",
  },
  {
    title: "Flexible Copper Cable",
    sku: "TRI-FLEX-CU",
    brand: "Polycab / Havells",
    image: "/images/cables/flexible-cable.png",
  },
  {
    title: "Coaxial Cable",
    sku: "TRI-COAX",
    brand: "Finolex / D-Link",
    image: "/images/cables/coaxial.jpeg",
  },
  {
    title: "Earthing Wire & Strip",
    sku: "TRI-EARTH",
    brand: "Tata / Jindal",
    image: "/images/cables/earthing.jpeg",
  },
  {
    title: "PVC Pipes (LMS/MMS/HMS)",
    sku: "TRI-CONTROL",
    brand: "Precision / BLP",
    image: "/images/cables/pipe.jpeg",
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

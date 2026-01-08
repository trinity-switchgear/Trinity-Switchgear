import styles from "./ProductCard.module.css";
import Link from "next/link";

export default function ProductCard({ product }) {
  // product: {title, slug, short, brand, price}
  return (
    <article className={styles.card}>
      <Link
        href={`/products/${product?.slug || ""}`}
        className={styles.link}
        onClick={() => setOpen && setOpen(false)} // optional if used inside a menu
      >
        <div className={styles.imgWrap}>
          <img
            src={product?.image || "/images/product-placeholder.jpg"}
            alt={product?.title || "product"}
          />
        </div>

        <div className={styles.body}>
          <h4 className={styles.title}>{product?.title || "Product"}</h4>

          <div className={styles.meta}>
            <span className={styles.brand}>{product?.brand}</span>
            <span className={styles.price}>{product?.price}</span>
          </div>

          <p className={styles.short}>{product?.short}</p>
        </div>
      </Link>
    </article>
  );
}

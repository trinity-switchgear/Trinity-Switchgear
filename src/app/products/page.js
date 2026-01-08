export default function Products(){
  return (
    <section className="container">
      <h1>Products</h1>
      <p className="lead">We stock a wide range of branded switchgear, cables and accessories suitable for residential and commercial projects.</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16,marginTop:18}}>
        <a className="card" href="/products/switchgear">Switchgear</a>
        <a className="card" href="/products">Cables & Wires</a>
        <a className="card" href="/products">Accessories</a>
        <a className="card" href="/products">Smart Devices</a>
      </div>
    </section>
  );
}

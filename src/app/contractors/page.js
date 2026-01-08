export default function Contractors(){
  return (
    <section className="container">
      <h1>Contractor Solutions</h1>
      <p className="lead">We specialize in supplying construction sites — fast deliveries, BOQ support, credit terms for registered contractors and loyalty pricing.</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16,marginTop:16}}>
        <div className="card">
          <h3>BOQ Support</h3>
          <p>Send us your BOQ (Excel/PDF) and we will return a quote fast. Use the WhatsApp button or email your BOQ.</p>
        </div>
        <div className="card">
          <h3>Priority Delivery</h3>
          <p>Registered contractors receive priority slotting and same-day dispatch across Mumbai.</p>
        </div>
        <div className="card">
          <h3>Contractor Loyalty</h3>
          <p>Dedicated account manager, special rates and annual rewards for repeat contractors.</p>
        </div>
      </div>

      <div style={{marginTop:16}}>
        <a className="btn btn-primary" href="https://wa.me/918652859663?text=Register%20as%20Contractor">Register on WhatsApp</a>
      </div>
    </section>
  );
}

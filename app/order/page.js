export default function OrderPage() {
  const amazonLink = "https://example.com";     // replace
  const flipkartLink = "https://example.com";  // replace
  const whatsappLink = "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20order%20Tech%20Law%20%26%20Trust"; // replace number

  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">Order the Book</h1>
        <p className="small">
          Choose a store link or order directly on WhatsApp. (You can also add Razorpay later.)
        </p>

        <div className="btnRow" style={{ marginTop: 14 }}>
          <a className="btn btnPrimary" href={amazonLink} target="_blank">Buy on Amazon</a>
          <a className="btn" href={flipkartLink} target="_blank">Buy on Flipkart</a>
          <a className="btn" href={whatsappLink} target="_blank">Order on WhatsApp</a>
        </div>

        <div style={{ marginTop: 18 }} className="card">
          <h2 className="h2">Bulk orders / Institutions</h2>
          <p className="small">For bulk orders, use the contact form with quantity + address.</p>
        </div>
      </div>
    </main>
  );
}
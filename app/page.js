import CTAButtons from "../components/CTAButtons";

export default function HomePage() {
  return (
    <main className="container">
      <div className="grid2">
        <div className="card">
          <h1 className="h1">Tech. Law. Trust.</h1>
          <p className="small">
            A modern guide to how India can build credible governance for deep tech,
            data, and innovation — and turn policy intent into execution certainty.
          </p>

          <div className="kpi">
            <span>Deep Tech</span>
            <span>Semiconductors</span>
            <span>AI</span>
            <span>Data Governance</span>
            <span>IP Sovereignty</span>
          </div>

          <div style={{ marginTop: 16 }}>
            <CTAButtons />
          </div>
        </div>

        <div className="card">
          <h2 className="h2">About the Book</h2>
          <p className="small">
            This website helps readers understand the book, explore key chapters,
            and order easily.
          </p>
          <div style={{ marginTop: 12 }} className="btnRow">
            <a className="btn" href="/book">Book Details</a>
            <a className="btn" href="/order">Buy Links</a>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }} className="card">
        <h2 className="h2">What you’ll find here</h2>
        <ul className="small">
          <li>Chapter snapshots in a clean, dynamic explorer</li>
          <li>Order options (India + international + WhatsApp)</li>
          <li>Contact for events, talks, or bulk orders</li>
        </ul>
      </div>
    </main>
  );
}
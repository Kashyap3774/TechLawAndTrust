import CTAButtons from "../../components/CTAButtons";

export default function BookPage() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">About the Book</h1>
        <p className="small">
          Tech Law & Trust connects technology strategy with legal design — focusing on
          the institutions, rules, incentives, and guardrails that make advanced-tech execution real.
        </p>
        <div style={{ marginTop: 16 }}>
          <CTAButtons />
        </div>
      </div>

      <div style={{ marginTop: 18 }} className="grid2">
        <div className="card">
          <h2 className="h2">Who it’s for</h2>
          <ul className="small">
            <li>Policy professionals, lawyers, researchers</li>
            <li>Tech founders and product leaders</li>
            <li>Students exploring technology law and governance</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="h2">What you’ll learn</h2>
          <ul className="small">
            <li>How to design legal scaffolding for deep tech</li>
            <li>Trust frameworks for data and digital systems</li>
            <li>Innovation and IP sovereignty strategy</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
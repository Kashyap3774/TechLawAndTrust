import Link from "next/link";
import { chapters } from "../../data/chapters";

export default function ChaptersPage() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">Chapters</h1>
        <p className="small">Click any chapter to open its dynamic page.</p>
      </div>

      <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
        {chapters.map((c) => (
          <Link key={c.slug} href={`/chapters/${c.slug}`} className="card">
            <h2 className="h2">{c.title}</h2>
            <p className="small">{c.summary}</p>
            <div className="kpi">
              {c.bullets.map((b) => <span key={b}>{b}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
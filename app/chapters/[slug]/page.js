import { chapters } from "../../../data/chapters";
import Link from "next/link";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export default function ChapterDetail({ params }) {
  const chapter = chapters.find((c) => c.slug === params.slug);

  if (!chapter) {
    return (
      <main className="container">
        <div className="card">
          <h1 className="h1">Chapter not found</h1>
          <Link className="btn" href="/chapters">Back to chapters</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">{chapter.title}</h1>
        <p className="small">{chapter.summary}</p>

        <div className="kpi" style={{ marginTop: 12 }}>
          {chapter.bullets.map((b) => <span key={b}>{b}</span>)}
        </div>

        <div className="btnRow" style={{ marginTop: 16 }}>
          <Link className="btn" href="/chapters">Back</Link>
          <Link className="btn btnPrimary" href="/order">Order the Book</Link>
        </div>
      </div>
    </main>
  );
}
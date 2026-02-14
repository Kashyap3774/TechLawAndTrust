import Link from "next/link";

export default function CTAButtons() {
  return (
    <div className="btnRow">
      <Link className="btn btnPrimary" href="/order">Order the Book</Link>
      <Link className="btn" href="/chapters">Explore Chapters</Link>
      <Link className="btn" href="/contact">Invite / Contact</Link>
    </div>
  );
}
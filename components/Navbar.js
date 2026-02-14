import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navInner">
        <Link href="/" className="brand">
          <span className="dot" />
          <span>Tech Law & Trust</span>
        </Link>

        <div className="links">
          <Link className="link" href="/book">Book</Link>
          <Link className="link" href="/chapters">Chapters</Link>
          <Link className="link" href="/order">Order</Link>
          <Link className="link" href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
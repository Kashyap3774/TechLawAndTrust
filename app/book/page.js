// app/book/page.js
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Tech, Law & Trust | Book",
  description:
    "Tech, Law & Trust: India’s Path to IP Sovereignty — a policy-first guide to deep tech, governance, and IP sovereignty.",
};

export default function BookPage() {
  return (
    <main className="parchment">
      <header className="topNav">
        <nav className="navInner">
          <div className="navLeft">
            <Link href="/" className="navLink">Home</Link>
            <Link href="/chapters" className="navLink">Chapters</Link>
          </div>

          <div className="brand">
            <span className="brandMark">TECH LAW & TRUST</span>
          </div>

          <div className="navRight">
            <Link href="/book" className="navLink active">Book</Link>
            <Link href="/contact" className="navLink">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <p className="kicker">A policy-first book on sovereignty, trust, and technology.</p>

          <h1 className="heroTitle">
            Tech, Law &amp; Trust <br />
            <span className="heroSubtitle">India’s Path to IP Sovereignty</span>
          </h1>

          <p className="heroDesc">
            A grounded, practitioner-led blueprint for building trust infrastructure—covering deep tech
            governance, semiconductors, AI, data governance, and the legal scaffolding India needs to
            convert ambition into execution certainty.
          </p>

          <p className="heroMeta">
            <span className="metaLabel">Author</span>{" "}
            <strong className="metaValue">Ashutosh D. Kashyap</strong>
          </p>

          <div className="heroCTAs">
            <Link className="btnPrimary" href="/order">Order Now</Link>
            <Link className="btnGhost" href="/chapters">Explore Chapters</Link>
          </div>

          <div className="bookShowcase">
            <div className="bookStack">
              {/* back "shadow" card */}
              <div className="bookCard back" aria-hidden="true" />
              {/* front cover */}
              <div className="bookCard front">
                <Image
                  src="/cover.jpg"
                  alt="Tech, Law & Trust book cover"
                  width={820}
                  height={1080}
                  priority
                  className="coverImg"
                />
              </div>
            </div>

            <div className="orderSealWrap">
              <Link href="/order" className="orderSeal" aria-label="Order Now">
                ORDER <br /> NOW
              </Link>
            </div>
          </div>

          <div className="microNote">
            Want bulk orders, signed copies, or institutional purchases?{" "}
            <Link href="/contact" className="inlineLink">Contact here</Link>.
          </div>
        </div>
      </section>
    </main>
  );
}
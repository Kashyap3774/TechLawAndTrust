export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div>© {year} Tech Law & Trust • All rights reserved.</div>
        <div className="small">Built on Cloudflare Pages + GitHub.</div>
      </div>
    </div>
  );
}
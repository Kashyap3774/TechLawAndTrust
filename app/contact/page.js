export default function ContactPage() {
  const formAction = "https://formspree.io/f/REPLACE_THIS"; // replace

  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">Contact</h1>
        <p className="small">
          Send a message for speaking invites, media, collaborations, or bulk orders.
        </p>

        <form action={formAction} method="POST" className="card" style={{ marginTop: 16 }}>
          <label className="small">Your Name</label>
          <input name="name" required style={inputStyle} />

          <label className="small" style={{ marginTop: 12 }}>Email</label>
          <input name="email" type="email" required style={inputStyle} />

          <label className="small" style={{ marginTop: 12 }}>Message</label>
          <textarea name="message" required rows="6" style={inputStyle} />

          <button className="btn btnPrimary" style={{ marginTop: 14 }} type="submit">
            Send Message
          </button>
        </form>

        <p className="small" style={{ marginTop: 12 }}>
          Tip: Later we can make this route messages to your professional email too.
        </p>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.92)",
  outline: "none"
};
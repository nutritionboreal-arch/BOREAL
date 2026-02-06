import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <header
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0 12px",
        }}
      >
        {/* Logo / Brand center */}
        <div
          style={{
            fontWeight: 950,
            letterSpacing: 3,
            fontSize: 28,
            color: "var(--silver)",
          }}
        >
          BOREAL.
        </div>

        {/* Nav right */}
        <nav
          style={{
            position: "absolute",
            right: 0,
            display: "flex",
            gap: 14,
          }}
        >
          <a href="#why">Why</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
      </header>

      <section className="hero">
        <h1 className="h1">No Bloat. Just Pure Canadian Whey.</h1>
        <p style={{ marginTop: 10, fontSize: 14, opacity: 0.7 }}>
          Made with Canadian dairy • No fillers • Transparent formulas
        </p>
        <p className="p">
          Boreal. is building clean Canadian supplements — starting with
          easy-to-digest, low-lactose whey made from Canadian milk.
        </p>

        <div className="actions">
          <a className="btn btnPrimary" href="#waitlist">
            Get early access
          </a>
          <a className="btn btnGhost" href="#why">
            Why Boreal.?
          </a>
        </div>
      </section>

      <section id="why" className="section">
        <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>
          Why Boreal.
        </div>
        <div className="grid">
          <div className="card">
            <div className="cardTitle">Canadian-first</div>
            <div className="cardDesc">
              Sourcing and manufacturing built for Canada.
            </div>
          </div>
          <div className="card">
            <div className="cardTitle">Easy digestion</div>
            <div className="cardDesc">
              Low-lactose focus — no stomach punishment.
            </div>
          </div>
          <div className="card">
            <div className="cardTitle">No BS formulas</div>
            <div className="cardDesc">
              No proprietary blends. Simple, transparent labels.
            </div>
          </div>
          <div className="card">
            <div className="cardTitle">Built in public</div>
            <div className="cardDesc">
              Community feedback shapes every decision.
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="section" style={{ paddingBottom: 64 }}>
        <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>
          Join the waitlist
        </div>
        <p className="p" style={{ fontSize: 16 }}>
          Get updates + early access. (No spam.)
        </p>

        {/* Remplace l'URL Formspree par la tienne */}
        <form
          action="https://formspree.io/f/xnjbaozz"
          method="POST"
          className="formRow"
        >
          <input
            className="input"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <button className="btn btnPrimary" type="submit">
            Join
          </button>
        </form>

        <div className="small">
          By joining, you agree to receive emails from Boreal. Unsubscribe
          anytime.
        </div>
      </section>

      <footer
        className="footer"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        © {new Date().getFullYear()} Boreal — Canada
      </footer>
    </main>
  );
}

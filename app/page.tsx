// app/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const products = useMemo(
    () => [
      {
        name: "Whey Isolate",
        desc: "Low-lactose focus, clean taste, no fillers.",
        badge: "Coming soon",
      },
      {
        name: "Creatine Monohydrate",
        desc: "Pure performance, simple formula, no fluff.",
        badge: "Coming soon",
      },
      {
        name: "Omega-3",
        desc: "High-quality EPA/DHA, transparency-first.",
        badge: "Coming soon",
      },
      {
        name: "Vitamins",
        desc: "Essentials, minimal ingredients, easy daily use.",
        badge: "Coming soon",
      },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xnjbaozz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Formspree submit failed");
      router.push("/thanks");
    } catch (error) {
      setErr("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  }

  return (
    <main className="container">
      {/* Top header */}
      <header
        className={`premiumHeader ${scrolled ? "premiumHeaderScrolled" : ""}`}
      >
        <div className="premiumLogo">BOREAL.</div>

        {!isMobile && (
          <nav className="premiumNav">
            <a href="#why">Why</a>
            <a href="#products">Products</a>
            <a href="#waitlist">Waitlist</a>
          </nav>
        )}

        {isMobile && (
          <button
            className="premiumMenuBtn"
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? "✕" : "Menu"}
          </button>
        )}
      </header>

      {/* Mobile dropdown */}
      {isMobile && mobileMenuOpen && (
        <div className="premiumMobileMenu">
          <button className="premiumMenuLink" onClick={() => scrollToId("why")}>
            Why
          </button>
          <button
            className="premiumMenuLink"
            onClick={() => scrollToId("products")}
          >
            Products
          </button>
          <button
            className="premiumMenuLink"
            onClick={() => scrollToId("waitlist")}
          >
            Waitlist
          </button>
        </div>
      )}

      {/* Hero */}
      <section className="hero premiumHero">
        <div className="premiumKicker">CLEAN SUPPLEMENTS • CANADA</div>

        <h1 className="h1">No Bloat. Just Pure Canadian Whey.</h1>

        <p style={{ marginTop: 10, fontSize: 14, opacity: 0.7 }}>
          Made with Canadian dairy • No fillers • Transparent formulas
        </p>

        <p className="p">
          Boreal. is building clean Canadian supplements — starting with
          easy-to-digest, low-lactose whey made from Canadian milk.
        </p>

        <div className="actions">
          <button
            className="btn btnPrimary premiumBtnGlow"
            type="button"
            onClick={() => scrollToId("waitlist")}
          >
            Get early access →
          </button>

          <button
            className="btn btnGhost"
            type="button"
            onClick={() => scrollToId("why")}
          >
            Why Boreal.?
          </button>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="section">
        <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>
          Why Boreal.
        </div>

        <div className="grid">
          <div className="card premiumCard">
            <div className="cardTitle">Canadian-first</div>
            <div className="cardDesc">
              Sourcing and manufacturing built for Canada.
            </div>
          </div>

          <div className="card premiumCard">
            <div className="cardTitle">Easy digestion</div>
            <div className="cardDesc">
              Low-lactose focus — no stomach punishment.
            </div>
          </div>

          <div className="card premiumCard">
            <div className="cardTitle">No BS formulas</div>
            <div className="cardDesc">
              No proprietary blends. Simple, transparent labels.
            </div>
          </div>

          <div className="card premiumCard">
            <div className="cardTitle">Built in public</div>
            <div className="cardDesc">
              Community feedback shapes every decision.
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section">
        <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>
          Products coming soon
        </div>

        <p className="p" style={{ fontSize: 16 }}>
          A clean lineup built for performance — simple formulas, transparent
          labels.
        </p>

        <div className="grid">
          {products.map((p) => (
            <div key={p.name} className="card premiumCard premiumProductCard">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <div className="cardTitle">{p.name}</div>
                <span className="premiumBadge">{p.badge}</span>
              </div>

              <div className="cardDesc">{p.desc}</div>

              {p.name === "Whey Isolate" && (
                <div style={{ marginTop: 14 }}>
                  <a href="/whey-isolate-canada" className="premiumInlineLink">
                    Learn more about whey isolate in Canada →
                  </a>
                </div>
              )}

              <div style={{ marginTop: 12, fontSize: 12, opacity: 0.6 }}>
                Specs may evolve before launch.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="section" style={{ paddingBottom: 64 }}>
        <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>
          Join the waitlist
        </div>

        <p className="p" style={{ fontSize: 16 }}>
          Get updates + early access. (No spam.)
        </p>

        <form className="formRow" onSubmit={handleSubmit}>
          <input
            className="input premiumInput"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="btn btnPrimary premiumBtnGlow"
            type="submit"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join"}
          </button>
        </form>

        {err && (
          <div style={{ marginTop: 10, fontSize: 13, color: "var(--red)" }}>
            {err}
          </div>
        )}

        <div className="small">
          By joining, you agree to receive emails from Boreal. Unsubscribe
          anytime.
        </div>
      </section>

      {/* Footer */}
      <footer className="footer premiumFooter">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <span>© {new Date().getFullYear()} Boreal — Canada</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <a className="premiumFooterLink" href="/privacy">
            Privacy
          </a>
          <span style={{ opacity: 0.5 }}>•</span>
          <a className="premiumFooterLink" href="/terms">
            Terms
          </a>
        </div>
      </footer>
    </main>
  );
}

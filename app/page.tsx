// app/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
  }

  return (
    <main className="container">
      {/* Premium header */}
      <header className={`premiumHeader ${scrolled ? "isScrolled" : ""}`}>
        {/* Center logo */}
        <div className="premiumLogo">BOREAL.</div>

        {/* Desktop nav (hidden on mobile) */}
        <nav className="premiumNav">
          <button type="button" onClick={() => scrollToId("why")}>
            Why
          </button>
          <button type="button" onClick={() => scrollToId("products")}>
            Products
          </button>
          <button type="button" onClick={() => scrollToId("waitlist")}>
            Waitlist
          </button>
        </nav>

        {/* little underline that appears when scrolled */}
        <div className="premiumHeaderLine" aria-hidden="true" />
      </header>

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
                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <a href="/whey-isolate-canada" className="premiumInlineLink">
                    Whey Isolate Canada guide →
                  </a>

                  <a href="/clean-protein-canada" className="premiumInlineLink">
                    Clean Protein Canada →
                  </a>

                  <a
                    href="/low-lactose-whey-canada"
                    className="premiumInlineLink"
                  >
                    Low Lactose Whey Canada →
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

      {/* Premium header CSS overrides */}
      <style jsx>{`
        .premiumHeader {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          background: rgba(0, 0, 0, 0);
          backdrop-filter: blur(0px);
          transition:
            background 220ms ease,
            backdrop-filter 220ms ease;
        }

        .premiumHeader.isScrolled {
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(10px);
        }

        /* Centered logo (always) */
        .premiumLogo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-weight: 900;
          font-size: 24px; /* Impact fort */
          letter-spacing: 0.24em; /* Respire. Luxe. */
          line-height: 1;
          color: #fff;
          user-select: none;
        }

        .premiumHeader.isScrolled .premiumLogo {
          transform: translateX(-50%);
        }

        .premiumHeader.isScrolled .premiumLogo {
          opacity: 1;
          transform: translateX(-50%) scale(0.94); /* petit effet premium au scroll */
          letter-spacing: 0.22em;
        }

        /* Right-side nav (desktop only) */
        .premiumNav {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 18px;
          opacity: 0.85;
          transition: opacity 180ms ease;
        }

        .premiumHeader.isScrolled .premiumNav {
          opacity: 1;
        }

        .premiumNav button {
          background: transparent;
          border: none;
          color: inherit;
          font: inherit;
          padding: 8px 6px;
          cursor: pointer;
          letter-spacing: 0.02em;
          opacity: 0.85;
          transition:
            opacity 160ms ease,
            transform 160ms ease;
        }

        .premiumNav button:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        /* Underline line */
        .premiumHeaderLine {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1px;
          width: 100%;
          opacity: 0;
          background: rgba(255, 255, 255, 0.08);
          transition: opacity 200ms ease;
        }

        .premiumHeader.isScrolled .premiumHeaderLine {
          opacity: 1;
        }

        /* Hide nav on mobile */
        @media (max-width: 768px) {
          .premiumNav {
            display: none;
          }

          .premiumHeader {
            height: 64px;
          }

          .premiumLogo {
            font-size: 22px;
            letter-spacing: 0.26em;
          }
        }
        /* Better look on very wide screens */
        @media (min-width: 1100px) {
          .premiumHeader {
            padding: 0 18px;
          }
          .premiumNav {
            gap: 22px;
          }
        }
      `}</style>
    </main>
  );
}

// app/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Popover state
  const [guidesOpen, setGuidesOpen] = useState(false);
  const guidesWrapRef = useRef<HTMLDivElement | null>(null);

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close popover on outside click + ESC
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!guidesOpen) return;
      const el = guidesWrapRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setGuidesOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (!guidesOpen) return;
      if (e.key === "Escape") setGuidesOpen(false);
    }

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [guidesOpen]);

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
    } catch {
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
        <div className="premiumHeaderInner">
          {/* Center logo */}
          <div className="premiumLogo" role="img" aria-label="BOREAL">
            BOREAL.
          </div>

          {/* Desktop nav (right) */}
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

          {/* Short underline */}
          <div className="premiumHeaderLine" aria-hidden="true" />
        </div>
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
              {/* Title + badge directly under title */}
              <div className="productTitleRow">
                <div className="cardTitle" style={{ marginBottom: 0 }}>
                  {p.name}
                </div>
              </div>

              <div className="productBadgeUnderTitle">
                <span className="premiumBadge">{p.badge}</span>
              </div>

              <div className="cardDesc" style={{ marginTop: 10 }}>
                {p.desc}
              </div>

              {p.name === "Whey Isolate" && (
                <div
                  className="premiumGuidesWrap premiumGuidesCentered"
                  ref={guidesWrapRef}
                >
                  <button
                    type="button"
                    className="premiumGuidesPill"
                    onClick={() => setGuidesOpen((v) => !v)}
                    aria-haspopup="dialog"
                    aria-expanded={guidesOpen}
                  >
                    Protein guides <span className="premiumCaret">▾</span>
                  </button>

                  <div
                    className={`premiumPopover ${guidesOpen ? "open" : ""}`}
                    role="dialog"
                    aria-label="Protein guides"
                  >
                    <a
                      href="/best-whey-isolate-canada"
                      className="premiumPopoverLink"
                    >
                      Best Whey Isolate in Canada (2026 Guide)
                    </a>
                    <a
                      href="/whey-isolate-canada"
                      className="premiumPopoverLink"
                    >
                      Whey Isolate Canada guide
                    </a>
                    <a
                      href="/clean-protein-canada"
                      className="premiumPopoverLink"
                    >
                      Clean Protein Canada
                    </a>
                    <a
                      href="/low-lactose-whey-canada"
                      className="premiumPopoverLink"
                    >
                      Low Lactose Whey Canada
                    </a>

                    <div className="premiumPopoverHint">Press ESC to close</div>
                  </div>
                </div>
              )}

              {/* Specs stays at the bottom (subtle) */}
              <div className="productSpecsInline">
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

// app/whey-isolate-canada/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Whey Isolate Canada — Clean Canadian Dairy Protein",
  description:
    "Looking for the best whey isolate in Canada? Boreal builds clean, low-lactose protein made from Canadian dairy. No fillers. Transparent formulas.",
  alternates: {
    canonical: "/whey-isolate-canada",
  },
};

const FAQ = [
  {
    q: "What is whey isolate?",
    a: "Whey isolate is a highly filtered whey protein that removes most lactose and fat. It typically provides a higher protein percentage per serving and is often easier to digest than whey concentrate.",
  },
  {
    q: "Is whey isolate better than whey concentrate?",
    a: "It depends on your goal. Whey isolate is usually lower in lactose and fat, which can help digestion and keep macros lean. Whey concentrate can be cheaper and still effective for most people.",
  },
  {
    q: "Is whey isolate good for lactose intolerance?",
    a: "Whey isolate is generally lower in lactose, so many people tolerate it better. If you’re highly sensitive, look for very low-lactose formulas and start with a small serving to assess tolerance.",
  },
  {
    q: "How do I choose the best whey isolate in Canada?",
    a: "Prioritize transparent labeling, minimal ingredients, third-party testing when available, and clear sourcing/manufacturing details. If digestion is a concern, favor low-lactose options and simple formulas.",
  },
];

export default function WheyIsolateCanada() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="container legalPage">
      {/* FAQ Schema (for rich results) */}
      <Script
        id="faq-jsonld-whey-isolate-canada"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="legalTitle">
        Whey Isolate Canada — Clean Canadian Dairy Protein
      </h1>

      {/* Featured snippet target: short direct answer */}
      <p className="legalUpdated">
        <strong>Whey isolate</strong> is a highly filtered whey protein that
        removes most lactose and fat. In Canada, choosing a{" "}
        <strong>clean, low-lactose whey isolate</strong> can improve digestion
        and keep macros lean—especially if you want simple ingredients and
        transparent labels.
      </p>

      {/* Quick “snippet-friendly” bullets */}
      <section className="legalSection">
        <h2>Best Whey Isolate in Canada: Quick Checklist</h2>
        <ul style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 15 }}>
          <li>
            <strong>Low lactose:</strong> easier digestion for many people.
          </li>
          <li>
            <strong>Minimal ingredients:</strong> avoid unnecessary fillers.
          </li>
          <li>
            <strong>Transparent label:</strong> clear protein per serving + full
            ingredient list.
          </li>
          <li>
            <strong>Trusted sourcing:</strong> Canadian dairy + clear production
            info when possible.
          </li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>Why Whey Isolate in Canada Matters</h2>
        <p>
          When searching for whey isolate in Canada, quality and sourcing matter
          a lot. Canadian dairy is known for strict standards, strong
          traceability, and consistent production systems.
        </p>
        <p>
          Choosing a Canadian whey isolate can support local dairy and make it
          easier to understand what you’re putting in your body.
        </p>
      </section>

      <section className="legalSection">
        <h2>What Is Whey Isolate?</h2>
        <p>
          Whey isolate is a filtered form of whey protein that removes most of
          the lactose and fat. The result is a cleaner protein source with high
          protein concentration and improved digestibility.
        </p>
      </section>

      <section className="legalSection">
        <h2>Whey Isolate vs Whey Concentrate</h2>
        <p>
          If your priority is digestion and lean macros, whey isolate is often
          the better choice. If budget is your priority, concentrate can still
          work well.
        </p>

        {/* Simple table: good for snippet/table results */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 14,
            overflow: "hidden",
            marginTop: 12,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "rgba(255,255,255,0.03)",
              padding: 12,
              fontWeight: 800,
            }}
          >
            <div>Whey Isolate</div>
            <div>Whey Concentrate</div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
            }}
          >
            <div style={{ padding: 12, color: "var(--muted)" }}>
              Typically lower lactose and fat
              <br />
              Higher protein percentage
              <br />
              Often easier to digest
            </div>
            <div style={{ padding: 12, color: "var(--muted)" }}>
              Usually cheaper
              <br />
              More lactose and fat
              <br />
              Still effective for muscle building
            </div>
          </div>
        </div>
      </section>

      <section className="legalSection">
        <h2>Clean Protein in Canada: No Fillers</h2>
        <p>
          Many protein powders include unnecessary additives or “fluff.” Clean
          protein should mean transparent formulas, minimal ingredients, and
          honest labeling.
        </p>
        <p>
          Boreal focuses on simple formulations—no bloating, no fluff, just
          performance-driven protein.
        </p>
      </section>

      <section className="legalSection">
        <h2>Low-Lactose & Easy Digestion</h2>
        <p>
          One advantage of whey isolate is reduced lactose. That can help many
          people avoid discomfort compared to regular whey.
        </p>
      </section>

      <section className="legalSection">
        <h2>FAQ</h2>
        {FAQ.map((item) => (
          <div key={item.q} style={{ marginBottom: 14 }}>
            <h3 style={{ fontSize: 15, fontWeight: 900, marginBottom: 6 }}>
              {item.q}
            </h3>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
              {item.a}
            </p>
          </div>
        ))}
      </section>

      <section className="legalSection">
        <h2>Want a Clean Whey Isolate in Canada?</h2>
        <p>
          Boreal is launching clean Canadian whey isolate soon. Join the
          waitlist to get early access and product updates.
        </p>
        <p>
          <a className="premiumInlineLink" href="/#waitlist">
            Join the Boreal waitlist →
          </a>
        </p>
      </section>
    </main>
  );
}

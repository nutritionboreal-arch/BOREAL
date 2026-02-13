import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Protein Canada — What “Clean” Really Means",
  description:
    "Clean protein in Canada should mean transparent labels, minimal ingredients, and no hidden blends. Learn what to look for — and explore whey isolate made with Canadian dairy values.",
  alternates: { canonical: "/clean-protein-canada" },
};

export default function CleanProteinCanada() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does clean protein mean in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clean protein generally means minimal ingredients, transparent labels, and no proprietary blends or unnecessary fillers.",
        },
      },
      {
        "@type": "Question",
        name: "Is whey isolate a clean protein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whey isolate is often considered a cleaner option because it typically contains less lactose and fat than whey concentrate, depending on the brand and formula.",
        },
      },
      {
        "@type": "Question",
        name: "How do I choose a clean protein powder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look for clear sourcing (ideally Canadian dairy), a short ingredient list, transparent labeling, and manufacturing/testing standards you can verify.",
        },
      },
    ],
  };

  return (
    <main className="container legalPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="legalTitle">Clean Protein Canada</h1>
      <p className="legalUpdated">
        What “clean” really means — and how to choose a protein you trust.
      </p>

      <section className="legalSection">
        <h2>Why People Search “Clean Protein” in Canada</h2>
        <p>
          “Clean protein Canada” usually means the same thing: people want a
          protein powder that feels honest — no weird blends, no inflated
          claims, and no long list of additives. In a market full of marketing
          noise, “clean” is a signal for simplicity and transparency.
        </p>
        <p>
          For BOREAL., clean is not a buzzword. It’s a standard: simple
          formulas, clear labels, and Canada-first sourcing principles.
        </p>
      </section>

      <section className="legalSection">
        <h2>What Clean Protein Should Mean</h2>
        <p>Here’s a practical definition you can use when shopping:</p>
        <p>
          <strong>1) Transparent label</strong> — you know what you’re taking.
          <br />
          <strong>2) Minimal ingredients</strong> — fewer unnecessary fillers.
          <br />
          <strong>3) No proprietary blends</strong> — no hiding behind “mixes”.
          <br />
          <strong>4) Clear sourcing</strong> — where the protein comes from
          matters.
        </p>
        <p>
          In other words: clean protein is not magic. It’s just a higher bar for
          ingredients and honesty.
        </p>
      </section>

      <section className="legalSection">
        <h2>Canadian Dairy & “Made in Canada” Signals</h2>
        <p>
          Many people look for phrases like “Canadian dairy” or “made in Canada”
          because it suggests higher quality standards and better traceability.
          The strongest signal is not a slogan — it’s clarity: do they explain
          sourcing and what’s inside the tub?
        </p>
        <p>
          BOREAL. is being built with Canadian-first values. If you’re curious
          about whey isolate specifically, this is the main page to read:
        </p>

        <p style={{ marginTop: 12 }}>
          <a href="/whey-isolate-canada" className="premiumInlineLink">
            Whey Isolate Canada — guide →
          </a>
        </p>
      </section>

      <section className="legalSection">
        <h2>Is Whey Isolate Considered a “Clean Protein”?</h2>
        <p>
          Often, yes. Whey isolate is typically processed to reduce lactose and
          fat compared to whey concentrate. That can make it a cleaner-feeling
          option for people who care about digestion and lean macros.
        </p>
        <p>
          The key is still the formula: even isolate can be loaded with extras.
          Clean = isolate + minimal ingredients + honest labeling.
        </p>
      </section>

      <section className="legalSection">
        <h2>How to Choose Clean Protein in Canada</h2>
        <p>
          Use this quick checklist:
          <br />
          ✅ Short ingredient list
          <br />
          ✅ Clear sourcing (Canadian dairy if possible)
          <br />
          ✅ No proprietary blends
          <br />✅ Avoid “filler-first” formulas
        </p>
        <p>
          If your goal is a clean protein that supports training without a heavy
          feeling, whey isolate is usually where people land.
        </p>

        <p style={{ marginTop: 12 }}>
          <a href="/#waitlist" className="premiumInlineLink">
            Join the BOREAL. waitlist →
          </a>
        </p>
      </section>

      <section className="legalSection">
        <h2>FAQ</h2>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          What does clean protein mean in Canada?
        </h3>
        <p>
          Minimal ingredients, transparent labels, and no proprietary blends or
          unnecessary fillers.
        </p>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          Is whey isolate a clean protein?
        </h3>
        <p>
          Often yes, because it typically contains less lactose and fat than
          whey concentrate — depending on the formula.
        </p>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          What’s the best next page to read?
        </h3>
        <p>
          If you’re specifically comparing options:{" "}
          <a href="/whey-isolate-canada" className="premiumInlineLink">
            Whey Isolate Canada →
          </a>
        </p>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whey Isolate Canada — Clean Canadian Dairy Protein",
  description:
    "Looking for whey isolate in Canada? BOREAL. is building clean, low-lactose protein made from Canadian dairy. No fillers. Transparent formulas. Join the waitlist.",
  alternates: {
    canonical: "/whey-isolate-canada",
  },
};

export default function WheyIsolateCanada() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "BOREAL.",
        url: "https://borealnutrition.com",
        logo: "https://borealnutrition.com/og.jpg",
      },
      {
        "@type": "WebSite",
        name: "BOREAL.",
        url: "https://borealnutrition.com",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is whey isolate lactose free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Whey isolate typically contains significantly less lactose than whey concentrate. It may be easier to digest for many people, but it is not always completely lactose free.",
            },
          },
          {
            "@type": "Question",
            name: "What should I look for in whey isolate in Canada?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Look for transparent labels, minimal additives, clear sourcing (ideally Canadian dairy), and manufacturing/testing standards you can verify.",
            },
          },
          {
            "@type": "Question",
            name: "What does “clean protein” mean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Clean protein generally means simple ingredients, no proprietary blends, and transparent labeling — with fewer unnecessary fillers and additives.",
            },
          },
          {
            "@type": "Question",
            name: "Does whey isolate help with muscle recovery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Protein is commonly used to support muscle repair and recovery after training. The best choice depends on your total diet, training, and tolerance to ingredients like lactose.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="container legalPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="legalTitle">
        Whey Isolate Canada — Clean Canadian Dairy Protein
      </h1>

      <p className="legalUpdated">
        Clean, performance-focused protein — built with Canadian dairy values.
      </p>

      <section className="legalSection">
        <h2>Why Whey Isolate in Canada Matters</h2>
        <p>
          If you’re looking for <strong>whey isolate in Canada</strong>,
          sourcing and formula quality matter. Canadian dairy is known for
          strict standards and consistent quality, which helps create better
          traceability from milk to finished protein.
        </p>
        <p>
          Choosing a Canada-first approach also supports local supply chains and
          sets a higher bar for transparency — the exact foundation BOREAL. is
          built on.
        </p>
      </section>

      <section className="legalSection">
        <h2>What Is Whey Isolate?</h2>
        <p>
          Whey isolate is a filtered form of whey protein designed to reduce
          lactose and fat while keeping a high protein concentration. The result
          is often a “cleaner” protein powder that many people find easier on
          digestion compared to regular whey concentrate.
        </p>
        <p>
          If your goal is a lean, simple protein to support training, whey
          isolate is a popular option — especially when you care about
          ingredient quality and label clarity.
        </p>
      </section>

      <section className="legalSection">
        <h2>Clean Protein in Canada: No Fillers, No Hidden Blends</h2>
        <p>
          “Clean protein” should mean simple. Many powders rely on long
          ingredient lists, sweeteners, gums, and proprietary blends that make
          it harder to know what you’re actually taking.
        </p>
        <p>
          BOREAL. is building a cleaner approach: transparent formulas, minimal
          ingredients, and a premium standard you can trust.
        </p>
      </section>

      <section className="legalSection">
        <h2>Low-Lactose Focus & Easier Digestion</h2>
        <p>
          One reason people search for{" "}
          <strong>low lactose whey in Canada</strong> is comfort. Whey isolate
          typically contains less lactose than whey concentrate, which can
          reduce digestive issues for many individuals.
        </p>
        <p>
          Everyone’s tolerance is different, but a low-lactose focus is a smart
          baseline when you want protein that fits daily training — without
          feeling heavy.
        </p>
      </section>

      <section className="legalSection">
        <h2>“Home made” / Made in Canada: What to Look For</h2>
        <p>
          People often search terms like “home made” or “made in Canada” because
          they want something more trustworthy than mass-produced, low-quality
          blends. The best signal is clarity:
        </p>
        <p>
          Look for clear sourcing (e.g., Canadian dairy), straightforward
          ingredients, and quality processes you can verify. BOREAL. is building
          exactly that — a Canada-first standard you’ll be proud to use.
        </p>
      </section>

      <section className="legalSection">
        <h2>Looking for the Best Whey Isolate in Canada?</h2>
        <p>
          The “best” whey isolate is the one that matches your goals and your
          digestion: clean ingredients, transparent labeling, and reliable
          standards. If you want a premium, clean direction — you’re in the
          right place.
        </p>
        <p style={{ marginTop: 12 }}>
          <a
            href="/#waitlist"
            className="premiumInlineLink"
            style={{ display: "inline-block" }}
          >
            Join the waitlist for early access →
          </a>
        </p>
        <p style={{ marginTop: 10, fontSize: 13, opacity: 0.7 }}>
          Or go back to the homepage:{" "}
          <a href="/" className="premiumInlineLink">
            BOREAL. →
          </a>
        </p>
      </section>

      <section className="legalSection">
        <h2>Frequently Asked Questions</h2>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          Is whey isolate lactose free?
        </h3>
        <p>
          Whey isolate generally contains much less lactose than whey
          concentrate, and many people find it easier to digest. However, it’s
          not always completely lactose free.
        </p>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          What should I look for in whey isolate in Canada?
        </h3>
        <p>
          Prioritize transparent labels, minimal additives, clear sourcing
          (ideally Canadian dairy), and quality processes/testing you can
          verify.
        </p>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          What does “clean protein” mean?
        </h3>
        <p>
          Usually: fewer unnecessary fillers, no proprietary blends, and a label
          that clearly explains what’s inside.
        </p>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          Does whey isolate help with muscle recovery?
        </h3>
        <p>
          Protein is commonly used to support muscle repair and recovery after
          training. The best choice depends on your total diet, training, and
          ingredient tolerance.
        </p>
      </section>
    </main>
  );
}

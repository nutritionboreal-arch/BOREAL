import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low Lactose Whey Canada — Easier Digestion Guide",
  description:
    "Looking for low lactose whey in Canada? Learn the difference between whey isolate vs concentrate, what “low lactose” means, and how to choose a cleaner protein for digestion.",
  alternates: { canonical: "/low-lactose-whey-canada" },
};

export default function LowLactoseWheyCanada() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is whey isolate low lactose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whey isolate typically contains less lactose than whey concentrate due to additional filtering, but it may not be completely lactose free.",
        },
      },
      {
        "@type": "Question",
        name: "Why does whey cause bloating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bloating can be caused by lactose sensitivity, certain additives, or individual tolerance. A simpler, low-lactose formula may help.",
        },
      },
      {
        "@type": "Question",
        name: "What is better: whey isolate or whey concentrate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whey isolate is often chosen for lower lactose and fat, while concentrate can be cheaper and may suit people who digest lactose well.",
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

      <h1 className="legalTitle">Low Lactose Whey Canada</h1>
      <p className="legalUpdated">
        A practical guide for easier digestion — isolate vs concentrate, and
        what to look for.
      </p>

      <section className="legalSection">
        <h2>Why People Look for Low Lactose Whey in Canada</h2>
        <p>
          Many people search <strong>low lactose whey Canada</strong> because
          regular protein powders can feel heavy — bloating, discomfort, or just
          not “sitting right.” One common reason is lactose sensitivity, but it
          can also come from additives and overly complex formulas.
        </p>
        <p>
          The solution is usually simple: a cleaner label + a low-lactose
          approach.
        </p>
      </section>

      <section className="legalSection">
        <h2>Is Whey Isolate Low Lactose?</h2>
        <p>
          In most cases, yes — whey isolate is typically processed with more
          filtration than whey concentrate. That often reduces lactose and fat,
          resulting in a “cleaner” protein profile.
        </p>
        <p>
          It’s not always 100% lactose free, but it’s commonly easier to digest
          than concentrate for many people.
        </p>
      </section>

      <section className="legalSection">
        <h2>Whey Isolate vs Whey Concentrate</h2>
        <p>
          <strong>Whey concentrate</strong> often contains more lactose and fat,
          and can be a good fit if you digest lactose well and want a cheaper
          option.
        </p>
        <p>
          <strong>Whey isolate</strong> is usually chosen for a lower-lactose,
          leaner, more “clean” feel — especially for people who want protein
          daily without digestive stress.
        </p>
        <p>If you want the Canada-focused isolate guide, start here:</p>

        <p style={{ marginTop: 12 }}>
          <a href="/whey-isolate-canada" className="premiumInlineLink">
            Whey Isolate Canada — complete guide →
          </a>
        </p>
      </section>

      <section className="legalSection">
        <h2>Other Common Causes of “Protein Bloating”</h2>
        <p>
          Lactose is one part of the story. Some powders also include
          sweeteners, gums, and fillers that don’t work for everyone. If your
          stomach reacts, a cleaner ingredient list can make a real difference.
        </p>
        <p>
          BOREAL. is built around simple formulas and a low-lactose mindset —
          with Canadian dairy values.
        </p>
      </section>

      <section className="legalSection">
        <h2>How to Choose a Low Lactose Whey in Canada</h2>
        <p>
          Use this checklist:
          <br />
          ✅ Look for whey isolate (often lower lactose)
          <br />
          ✅ Prefer minimal ingredients
          <br />
          ✅ Avoid “filler-heavy” blends
          <br />✅ Choose transparent labels and clear sourcing
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
          Is whey isolate low lactose?
        </h3>
        <p>
          Typically yes — due to additional filtration — but it may not be 100%
          lactose free.
        </p>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          Why does whey cause bloating?
        </h3>
        <p>
          Lactose sensitivity, additives, and individual tolerance can all play
          a role. Cleaner formulas can help.
        </p>

        <h3 style={{ marginTop: 14, marginBottom: 6 }}>
          What should I read next?
        </h3>
        <p>
          For the main Canada-first page:{" "}
          <a href="/whey-isolate-canada" className="premiumInlineLink">
            Whey Isolate Canada →
          </a>
        </p>
      </section>
    </main>
  );
}

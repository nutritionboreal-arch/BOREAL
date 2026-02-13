export default function TermsPage() {
  return (
    <main className="container legalPage">
      <h1 className="legalTitle">Terms of Service</h1>
      <p className="legalUpdated">Last updated: {new Date().getFullYear()}</p>

      <section className="legalSection">
        <h2>1. Overview</h2>
        <p>
          These Terms of Service govern your use of the Boreal website. By
          accessing this site, you agree to comply with these terms.
        </p>
      </section>

      <section className="legalSection">
        <h2>2. Waitlist Registration</h2>
        <p>
          By joining the waitlist, you agree to receive email communications
          related to Boreal products and updates. You may unsubscribe at any
          time.
        </p>
      </section>

      <section className="legalSection">
        <h2>3. No Medical Claims</h2>
        <p>
          The information on this website is for informational purposes only.
          Boreal products are not intended to diagnose, treat, cure, or prevent
          any disease.
        </p>
      </section>

      <section className="legalSection">
        <h2>4. Intellectual Property</h2>
        <p>
          All content, branding, and materials on this site are the property of
          Boreal and may not be copied or reused without permission.
        </p>
      </section>

      <section className="legalSection">
        <h2>5. Limitation of Liability</h2>
        <p>
          Boreal shall not be held liable for any damages arising from the use
          of this website.
        </p>
      </section>

      <section className="legalSection">
        <h2>6. Changes</h2>
        <p>
          We may update these Terms at any time. Continued use of the site
          constitutes acceptance of any changes.
        </p>
      </section>
    </main>
  );
}

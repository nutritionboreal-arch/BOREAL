export default function PrivacyPage() {
  return (
    <main className="container legalPage">
      <h1 className="legalTitle">Privacy Policy</h1>
      <p className="legalUpdated">Last updated: {new Date().getFullYear()}</p>

      <section className="legalSection">
        <h2>1. Information We Collect</h2>
        <p>
          When you join the Boreal waitlist, we collect your email address. We
          may also collect basic technical information such as browser type and
          anonymized analytics data.
        </p>
      </section>

      <section className="legalSection">
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your email to send updates about Boreal products, launch
          announcements, and related brand news. We do not sell or rent your
          personal information.
        </p>
      </section>

      <section className="legalSection">
        <h2>3. Third-Party Services</h2>
        <p>
          We use trusted third-party services (such as Formspree) to securely
          process waitlist submissions. These providers may process your data
          according to their own privacy policies.
        </p>
      </section>

      <section className="legalSection">
        <h2>4. Data Protection</h2>
        <p>
          We take reasonable technical and organizational measures to protect
          your information. However, no method of transmission over the internet
          is 100% secure.
        </p>
      </section>

      <section className="legalSection">
        <h2>5. Your Rights</h2>
        <p>
          You may unsubscribe from our emails at any time by using the
          unsubscribe link included in our messages.
        </p>
      </section>

      <section className="legalSection">
        <h2>6. Contact</h2>
        <p>
          If you have questions regarding this Privacy Policy, please contact us
          at: <strong>contact@borealnutrition.com</strong>
        </p>
      </section>
    </main>
  );
}

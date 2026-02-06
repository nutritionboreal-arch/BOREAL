export default function Thanks() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <h1 style={{ fontSize: 36, marginBottom: 10 }}>
          You’re on the list 💪
        </h1>

        <p style={{ fontSize: 18, opacity: 0.8 }}>
          Thanks for joining Boreal’s early access. We’ll keep you updated on
          our first release.
        </p>

        <p style={{ marginTop: 20, fontSize: 14, opacity: 0.6 }}>
          In the meantime, follow us on Instagram & TikTok.
        </p>

        <div style={{ marginTop: 16 }}>
          <a
            href="https://www.instagram.com/borealnutritition/"
            style={{
              marginRight: 12,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@boreal.on"
            style={{
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            TikTok
          </a>
        </div>
      </div>
    </main>
  );
}

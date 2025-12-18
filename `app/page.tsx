// app/page.tsx
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        maxWidth: 960,
        margin: "0 auto",
        padding: "2rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <header>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          ISD Table Tennis
        </h1>
        <p style={{ fontSize: "1rem", color: "#4b5563" }}>
          Kids Academy • Lessons • Adults Trainings • Tournaments • Table Bookings
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        <a
          href="#kids-academy"
          style={{
            padding: "1.25rem",
            borderRadius: "0.75rem",
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
            color: "#111827",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>
            Kids Academy – Term 2
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>U8 / U12 / U16 registration</p>
        </a>

        <a
          href="#lessons"
          style={{
            padding: "1.25rem",
            borderRadius: "0.75rem",
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
            color: "#111827",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>
            Book Lessons
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>
            Private, semi‑private, groups, Play with the Pro
          </p>
        </a>

        <a
          href="#adults"
          style={{
            padding: "1.25rem",
            borderRadius: "0.75rem",
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
            color: "#111827",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>
            Adults & Bookings
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>
            Group trainings, tournaments, table bookings
          </p>
        </a>
      </section>

      <section
        style={{
          marginTop: "1rem",
          padding: "1rem 1.25rem",
          borderRadius: "0.75rem",
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Next steps
        </h3>
        <ol style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.95rem", color: "#4b5563" }}>
          <li>Connect this app to Neon (PostgreSQL) using DATABASE_URL.</li>
          <li>Add modules for Kids Academy, Lessons, Adults, and Staff dashboards.</li>
          <li>Deploy via Vercel from your GitHub repository.</li>
        </ol>
      </section>
    </main>
  );
}

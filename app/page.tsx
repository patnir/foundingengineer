import Image from "next/image";
import { PROJECTS, EXPERIENCE, STATS } from "./data";

const BOOKING_URL = "https://calendly.com/rahulpatni/30min";

function EditorialHero() {
  return (
    <section className="section hero no-top-border">
      <div className="topnav" style={{ marginBottom: 36 }}>
        <div className="logo">
          foundingengineer
          <span style={{ color: "var(--accent)" }}>.com</span>
        </div>
        <div className="links">
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#about">about</a>
          <a
            href="https://blog.foundingengineer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog ↗
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            book a call ↗
          </a>
        </div>
      </div>

      <h1 className="serif hero-title">
        Most small businesses
        <br />
        don&apos;t need a{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>team</em>.
        <br />
        They need{" "}
        <span className="underline-sketch">one AI-enabled engineer</span>
        <br />
        who actually ships.
      </h1>

      <div id="about" className="greeting-row">
        <Image
          src="/avatar.jpg"
          alt="Rahul Patni"
          width={120}
          height={120}
          className="greeting-avatar"
        />
        <div className="greeting-text">
          <h2 className="greeting-name">
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--accent)" }}>Rahul</span>.
          </h2>
          <p className="mono greeting-socials">
            <a
              href="https://x.com/iamrahulpatni"
              target="_blank"
              rel="noopener noreferrer"
            >
              x ↗
            </a>
            <span className="sep">·</span>
            <a
              href="https://www.linkedin.com/in/rahulpatni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin ↗
            </a>
            <span className="sep">·</span>
            <a
              href="https://github.com/patnir"
              target="_blank"
              rel="noopener noreferrer"
            >
              github ↗
            </a>
          </p>
        </div>
      </div>

      <div className="hero-grid">
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: 0 }}>
          Not a contractor. Not an agency. Just one person, sleeves up,
          building it with you. Apps, web, infra, the boring glue — whatever
          the week needs.
        </p>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            margin: 0,
            color: "var(--muted)",
          }}
        >
          I work with one or two small businesses at a time, in the messy 0→1
          phase, and stay until the thing is alive in the world.
        </p>
      </div>

      <div className="hero-cta-row">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Book a call →
        </a>
        <span
          className="mono"
          style={{ fontSize: 12, color: "var(--muted)" }}
        >
          ● accepting · 1 of 2 slots open · 2026
        </span>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="section stats">
      <div className="stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat-cell">
            <div className="serif stat-value">{s.value}</div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--muted)",
                marginTop: 10,
                letterSpacing: "0.06em",
              }}
            >
              {s.label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceGrid() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2
          className="mono"
          style={{
            fontSize: 12,
            margin: 0,
            color: "var(--muted)",
            letterSpacing: "0.12em",
          }}
        >
          THE RECEIPTS
        </h2>
        <span
          className="mono"
          style={{ fontSize: 11, color: "var(--muted)" }}
        >
          FULL CV ON LINKEDIN ↗
        </span>
      </div>

      <div className="exp-grid">
        {EXPERIENCE.map((e) => {
          const acquired = e.tag.startsWith("acquired");
          return (
            <div
              key={e.company}
              className={`exp-cell${acquired ? " acquired" : ""}`}
            >
              <div className="exp-cell-head">
                <div
                  className="mono"
                  style={{ fontSize: 11, color: "var(--muted)" }}
                >
                  {e.year}
                </div>
                {acquired ? (
                  <span className="pill accent" style={{ fontSize: 10 }}>
                    {e.tag.toUpperCase()}
                  </span>
                ) : (
                  <span
                    className="mono"
                    style={{ fontSize: 10, color: "var(--muted)" }}
                  >
                    {e.tag}
                  </span>
                )}
              </div>
              <div className="serif exp-company">{e.company}</div>
              <div className="exp-note">{e.note}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProjectsIndex() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <h2
          className="mono"
          style={{
            fontSize: 12,
            margin: 0,
            color: "var(--muted)",
            letterSpacing: "0.12em",
          }}
        >
          WHAT WE&apos;VE SHIPPED
        </h2>
        <span
          className="mono"
          style={{ fontSize: 11, color: "var(--muted)" }}
        >
          {PROJECTS.length} ENTRIES
        </span>
      </div>
      <ol style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}>
        {PROJECTS.map((p) => {
          const titleRowContent = (
            <>
              <span
                className="serif"
                style={{
                  fontSize: 14,
                  color: "var(--accent)",
                  fontStyle: "italic",
                }}
              >
                {p.n}.
              </span>
              <span className="serif project-title">{p.title}</span>
            </>
          );
          return (
            <li key={p.n} className="project-row">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title-row"
                >
                  {titleRowContent}
                </a>
              ) : (
                <div className="project-title-row">{titleRowContent}</div>
              )}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <div
                  style={{
                    fontSize: 15,
                    color: "var(--ink)",
                    lineHeight: 1.5,
                  }}
                >
                  {p.blurb}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                  }}
                >
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "underline",
                        textUnderlineOffset: 2,
                      }}
                    >
                      {p.url}
                    </a>
                  ) : (
                    <span>{p.url}</span>
                  )}
                  <span>·</span>
                  <span>{p.tag}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function SiteFooter() {
  return (
    <section id="book" className="section footer">
      <div className="footer-row">
        <div className="serif footer-heading">
          Got a thing that needs building?
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Book 30 min on Calendly
        </a>
      </div>
      <div
        className="mono"
        style={{
          fontSize: 11,
          color: "var(--muted)",
          marginTop: 24,
          letterSpacing: "0.12em",
        }}
      >
        FOUNDINGENGINEER.COM · NO AGENDA · BRING THE MESS
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 0 }}>
      <EditorialHero />
      <StatsBand />
      <ExperienceGrid />
      <ProjectsIndex />
      <SiteFooter />
    </main>
  );
}

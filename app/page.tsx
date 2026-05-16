import type { CSSProperties } from "react";
import { PROJECTS, EXPERIENCE, STATS } from "./data";

const PAPER_BG = "#f6f2ea";
const BOOKING_URL = "https://calendly.com/rahulpatni/30min";

function EditorialHero() {
  return (
    <section
      style={{
        padding: "40px 56px 60px",
        background: PAPER_BG,
        color: "var(--ink)",
        position: "relative",
      }}
    >
      <div className="topnav" style={{ padding: 0, marginBottom: 36 }}>
        <div className="logo">
          foundingengineer
          <span style={{ color: "var(--accent)" }}>.com</span>
        </div>
        <div className="links">
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#about">about</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            book a call ↗
          </a>
        </div>
      </div>

      <h1
        className="serif"
        style={{
          fontSize: 96,
          lineHeight: 0.98,
          margin: 0,
          fontWeight: 400,
          letterSpacing: "-0.035em",
          maxWidth: 1080,
        }}
      >
        Most small businesses
        <br />
        don&apos;t need a{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>team</em>.
        <br />
        They need <span className="underline-sketch">one engineer</span>
        <br />
        who actually ships.
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          marginTop: 56,
          maxWidth: 1080,
        }}
      >
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

      <div
        style={{
          marginTop: 40,
          display: "flex",
          alignItems: "center",
          gap: 22,
        }}
      >
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
    <section
      style={{
        padding: "0 56px",
        borderTop: "1.5px solid var(--ink)",
        background: PAPER_BG,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${STATS.length}, 1fr)`,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "32px 24px",
              borderRight:
                i < STATS.length - 1 ? "1.5px solid var(--ink)" : "none",
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: 56,
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {s.value}
            </div>
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
    <section
      id="experience"
      style={{
        padding: "64px 56px 40px",
        borderTop: "1.5px solid var(--ink)",
        position: "relative",
        background: PAPER_BG,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          borderTop: "1.5px solid var(--ink)",
          borderLeft: "1.5px solid var(--ink)",
        }}
      >
        {EXPERIENCE.map((e) => {
          const acquired = e.tag.startsWith("acquired");
          const cellStyle: CSSProperties = {
            padding: "28px 28px",
            borderRight: "1.5px solid var(--ink)",
            borderBottom: "1.5px solid var(--ink)",
            position: "relative",
            minHeight: 180,
            background: acquired ? "rgba(210,83,42,0.06)" : "transparent",
          };
          return (
            <div key={e.company} style={cellStyle}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
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
              <div
                className="serif"
                style={{
                  fontSize: 38,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {e.company}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  color: "var(--ink)",
                  lineHeight: 1.55,
                  maxWidth: 460,
                  marginTop: 16,
                }}
              >
                {e.note}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProjectsIndex() {
  return (
    <section
      id="work"
      style={{
        padding: "60px 56px 24px",
        borderTop: "1.5px solid var(--ink)",
        background: PAPER_BG,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
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
        {PROJECTS.map((p) => (
          <li
            key={p.n}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              padding: "26px 0",
              borderTop: "1px solid #d8d1c2",
              alignItems: "baseline",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
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
              <span
                className="serif"
                style={{
                  fontSize: 36,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {p.title}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
        ))}
      </ol>
    </section>
  );
}

function SiteFooter() {
  return (
    <section
      id="book"
      style={{
        padding: "80px 56px 48px",
        borderTop: "1.5px solid var(--ink)",
        background: PAPER_BG,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div className="serif" style={{ fontSize: 28, fontWeight: 500 }}>
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
    <main style={{ background: PAPER_BG, position: "relative", zIndex: 0 }}>
      <EditorialHero />
      <StatsBand />
      <ExperienceGrid />
      <ProjectsIndex />
      <SiteFooter />
    </main>
  );
}

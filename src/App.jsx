import { useState, useEffect } from "react";
import aradhnaImg from "./assets/ard2img.jpeg";


/* ─────────────────────────── DATA FROM RESUME ─────────────────────────── */
const SKILLS = [
  { name: "Communication Skills", pct: 90 },
  { name: "Emotional Stability",  pct: 85 },
  { name: "Physical Stamina",     pct: 80 },
  { name: "Self-Care Ability",    pct: 80 },
  { name: "Desire to Learn",      pct: 75 },
  { name: "Critical Thinking",    pct: 70 },
];

const EDUCATION = [
  {
    school: "Rajiv Gandhi University of Science, Karnataka",
    degree: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
    year: "2019 – 2024",
    icon: "🎓",
  },
  {
    school: "HPIC School",
    degree: "Intermediate / 12th",
    year: "2016 – 2018",
    icon: "📚",
  },
  {
    school: "Sacred Heart School, Mauza Nichlaur, Maharajganj",
    degree: "High School / 10th",
    year: "2014 – 2016",
    icon: "🏫",
  },
];

const EXPERIENCE = [
  {
    period: "2025 – Present",
    role: "Junior Doctor",
    org: "Axis Hospital, Lucknow",
    points: [
      "Assisted senior doctors in OPD and IPD management.",
      "Supported diagnosis, treatment planning, and patient follow-up care.",
      "Ensured smooth coordination of clinical services for better patient outcomes.",
    ],
    color: "#0ea5e9",
  },
  {
    period: "2019 – 2024",
    role: "Clinical Rotation – General Medicine",
    org: "Rajiv Gandhi University (BAMS Training)",
    points: [
      "Hands-on experience in managing OPD/IPD patients.",
      "Conducted patient history taking, examination, and case documentation.",
      "Learned evidence-based practices under supervision of senior physicians.",
      "Performed routine diagnostic tests (Blood Pressure, Sugar, Health Reports).",
      "Developed strong skills in medical documentation and reporting.",
    ],
    color: "#8b5cf6",
  },
];

const CONTACT = [
  { icon: "📞", label: "Phone",    value: "+91 7268894583" },
  { icon: "📧", label: "Email",    value: "akushwaha73161@gmail.com" },
  { icon: "🌐", label: "Web Mail", value: "hello@reallygreatsite.com" },
  { icon: "📍", label: "Location", value: "Nichlaul, Maharajganj, Uttar Pradesh" },
];

const PAGES = ["Home", "About", "Experience", "Contact"];

/* ─────────────────────────── THEME CONFIG ─────────────────────────── */
const T = {
  dark: {
    bg:        "#06060f",
    bg2:       "#0d0d1f",
    bg3:       "#111127",
    card:      "rgba(255,255,255,0.04)",
    cardBorder:"rgba(255,255,255,0.08)",
    nav:       "rgba(6,6,15,0.92)",
    text:      "#ffffff",
    textSub:   "rgba(255,255,255,0.55)",
    textMuted: "rgba(255,255,255,0.3)",
    inputBg:   "rgba(255,255,255,0.05)",
    inputBorder:"rgba(255,255,255,0.1)",
    skillBg:   "rgba(255,255,255,0.06)",
    accent1:   "#e879b6",
    accent2:   "#818cf8",
    accent3:   "#38bdf8",
    grad:      "linear-gradient(135deg,#e879b6,#818cf8,#38bdf8)",
    gradBtn:   "linear-gradient(135deg,#e879b6 0%,#818cf8 100%)",
    gradHero:  "linear-gradient(135deg,#06060f 0%,#140828 45%,#0a1535 100%)",
    blob1:     "rgba(232,121,182,0.22)",
    blob2:     "rgba(129,140,248,0.22)",
    blob3:     "rgba(56,189,248,0.15)",
    scrollThumb:"linear-gradient(#e879b6,#818cf8)",
    tagBg:     "rgba(232,121,182,0.12)",
    tagColor:  "#f0abda",
    tagBorder: "rgba(232,121,182,0.3)",
  },
  light: {
    bg:        "#f8faff",
    bg2:       "#eef2ff",
    bg3:       "#ffffff",
    card:      "#ffffff",
    cardBorder:"rgba(0,0,0,0.07)",
    nav:       "rgba(248,250,255,0.94)",
    text:      "#0f0f2e",
    textSub:   "#4b5280",
    textMuted: "#8892b0",
    inputBg:   "#f1f5ff",
    inputBorder:"rgba(0,0,0,0.1)",
    skillBg:   "#e8eeff",
    accent1:   "#c026a0",
    accent2:   "#6366f1",
    accent3:   "#0284c7",
    grad:      "linear-gradient(135deg,#c026a0,#6366f1,#0284c7)",
    gradBtn:   "linear-gradient(135deg,#c026a0 0%,#6366f1 100%)",
    gradHero:  "linear-gradient(135deg,#f0f4ff 0%,#fce7f9 45%,#e8f4ff 100%)",
    blob1:     "rgba(192,38,160,0.12)",
    blob2:     "rgba(99,102,241,0.12)",
    blob3:     "rgba(2,132,199,0.08)",
    scrollThumb:"linear-gradient(#c026a0,#6366f1)",
    tagBg:     "rgba(192,38,160,0.08)",
    tagColor:  "#9b1b80",
    tagBorder: "rgba(192,38,160,0.2)",
  },
};

/* ─────────────────────────── HOOKS ─────────────────────────── */
function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

/* ─────────────────────────── SKILL BAR ─────────────────────────── */
function SkillBar({ name, pct, t, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: t.text, fontWeight: 600 }}>{name}</span>
        <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: t.accent2, fontWeight: 700 }}>{pct}%</span>
      </div>
      <div style={{ height: 8, background: t.skillBg, borderRadius: 50, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: animate ? `${pct}%` : "0%",
          background: t.gradBtn,
          borderRadius: 50,
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: `0 0 12px ${t.blob1}`,
        }} />
      </div>
    </div>
  );
}

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar({ page, setPage, dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const w = useWidth();
  const mob = w < 768;
  const t = dark ? T.dark : T.light;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }, [page]);
  useEffect(() => { if (!mob) setMenuOpen(false); }, [mob]);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      background: scrolled || menuOpen ? t.nav : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${t.cardBorder}` : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: mob ? "13px 18px" : scrolled ? "13px 48px" : "20px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "padding 0.4s",
      }}>
        {/* Logo */}
        <div onClick={() => setPage("Home")} style={{ cursor: "pointer" }}>
          <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: mob ? 18 : 22, fontWeight: 800, lineHeight: 1, color: dark ? "#ffffff" : "#0f0f2e" }}>
            Dr. <span style={{ color: dark ? "#c084fc" : "#7c3aed" }}>Aradhana</span>
          </div>
          <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 9, color: dark ? "rgba(255,255,255,0.4)" : "#6b7280", letterSpacing: 2.5, textTransform: "uppercase", marginTop: 2 }}>Kushwaha · BAMS · Junior Doctor</div>
        </div>

        {/* Desktop nav pills */}
        {!mob && (
          <div style={{ display: "flex", gap: 4, alignItems: "center", background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 50, padding: "5px 8px", border: `1px solid ${t.cardBorder}` }}>
            {PAGES.map(p => (
              <button key={p} onClick={() => setPage(p)} style={{
                background: page === p ? t.gradBtn : "transparent",
                color: page === p ? "#fff" : t.textSub,
                border: "none", cursor: "pointer",
                padding: "8px 18px", borderRadius: 50,
                fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13,
                transition: "all 0.3s",
                boxShadow: page === p ? "0 4px 18px rgba(129,140,248,0.4)" : "none",
              }}
                onMouseEnter={e => { if (page !== p) e.target.style.color = t.text; }}
                onMouseLeave={e => { if (page !== p) e.target.style.color = t.textSub; }}
              >{p}</button>
            ))}
          </div>
        )}

        {/* Right: Theme toggle + CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Clean professional theme toggle */}
          <button onClick={() => setDark(d => !d)} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 36, height: 36,
            background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)",
            border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
            borderRadius: 8, cursor: "pointer",
            transition: "all 0.3s ease", flexShrink: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = dark ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"; }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>{dark ? "☀️" : "🌙"}</span>
          </button>

          {!mob && (
            <button onClick={() => setPage("Contact")} style={{
              background: t.gradBtn, color: "white", border: "none", cursor: "pointer",
              padding: "10px 22px", borderRadius: 50,
              fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13,
              boxShadow: "0 4px 20px rgba(129,140,248,0.4)", transition: "all 0.3s",
            }}>Book Now</button>
          )}

          {mob && (
            <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: "5px" }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: 22, height: 2,
                  background: dark ? "#ffffff" : "#1f2937", borderRadius: 2, transition: "all 0.3s",
                  transform: menuOpen ? (i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none") : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {mob && menuOpen && (
        <div style={{ background: t.nav, backdropFilter: "blur(20px)", borderTop: `1px solid ${t.cardBorder}`, padding: "10px 18px 22px" }}>
          {PAGES.map(p => (
            <div key={p} onClick={() => setPage(p)} style={{
              fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15,
              color: page === p ? t.accent1 : t.textSub,
              padding: "13px 0", borderBottom: `1px solid ${t.cardBorder}`,
              cursor: "pointer", letterSpacing: 0.5,
            }}>{p}</div>
          ))}
          <button onClick={() => setPage("Contact")} style={{ marginTop: 14, width: "100%", background: t.gradBtn, color: "white", border: "none", cursor: "pointer", padding: "14px", borderRadius: 14, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 15 }}>
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────── PAGE: HOME ─────────────────────────── */
function HomePage({ setPage, dark }) {
  const t = dark ? T.dark : T.light;
  const w = useWidth();
  const mob = w < 768;
  const tab = w < 1024;
  const [animSkills, setAnimSkills] = useState(false);

  useEffect(() => { const id = setTimeout(() => setAnimSkills(true), 400); return () => clearTimeout(id); }, []);

  return (
    <div style={{ background: t.bg }}>
      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", background: t.gradHero,
        display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "8%", left: "2%", width: mob ? 220 : 420, height: mob ? 220 : 420, borderRadius: "50%", background: `radial-gradient(circle,${t.blob1},transparent 70%)`, filter: "blur(50px)", animation: "blobF 9s ease-in-out infinite" }} />
          <div style={{ position: "absolute", top: "35%", right: "5%", width: mob ? 170 : 350, height: mob ? 170 : 350, borderRadius: "50%", background: `radial-gradient(circle,${t.blob2},transparent 70%)`, filter: "blur(60px)", animation: "blobF 11s ease-in-out infinite 2s" }} />
          <div style={{ position: "absolute", bottom: "8%", left: "35%", width: mob ? 160 : 280, height: mob ? 160 : 280, borderRadius: "50%", background: `radial-gradient(circle,${t.blob3},transparent 70%)`, filter: "blur(70px)", animation: "blobF 13s ease-in-out infinite 4s" }} />
          {dark && <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)", backgroundSize: "55px 55px" }} />}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", padding: mob ? "100px 18px 60px" : "120px 48px 80px", position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: mob ? 44 : 80, flexDirection: mob ? "column-reverse" : "row" }}>
          {/* Left */}
          <div style={{ flex: 1, minWidth: 0, textAlign: mob ? "center" : "left" }}>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.tagBg, border: `1px solid ${t.tagBorder}`, borderRadius: 50, padding: "6px 18px", marginBottom: 22 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: t.accent1, boxShadow: `0 0 8px ${t.accent1}`, animation: "pulseD 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.tagColor, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>Available for Consultations</span>
            </div>

            <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: mob ? 44 : tab ? 58 : 74, lineHeight: 1.05, fontWeight: 900, color: t.text, marginBottom: 10 }}>
              Dr. Aradhana<br />
              <span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Kushwaha</span>
            </h1>

            <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: mob ? 13 : 15, color: t.textSub, letterSpacing: 3, textTransform: "uppercase", marginBottom: 22, fontWeight: 600 }}>
              BAMS · Professional Doctor · Lucknow
            </div>

            <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: mob ? 14 : 16, lineHeight: 1.9, color: t.textSub, maxWidth: 500, margin: mob ? "0 auto 34px" : "0 0 34px" }}>
              A dedicated and compassionate doctor utilizing Ayurvedic medical knowledge and ethical values to provide exceptional patient care and healthcare services. Currently practising at Axis Hospital, Lucknow.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: mob ? "center" : "flex-start" }}>
              <button onClick={() => setPage("Contact")} style={{ background: t.gradBtn, color: "white", border: "none", cursor: "pointer", padding: "14px 32px", borderRadius: 50, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 15, boxShadow: "0 8px 32px rgba(129,140,248,0.45)", transition: "all 0.3s" }}>
                Book Consultation →
              </button>
              <button onClick={() => setPage("About")} style={{ background: "transparent", color: t.text, border: `1.5px solid ${t.cardBorder}`, cursor: "pointer", padding: "14px 28px", borderRadius: 50, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, transition: "all 0.3s" }}>
                Know More
              </button>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: mob ? 18 : 36, marginTop: 48, justifyContent: mob ? "center" : "flex-start", flexWrap: "wrap" }}>
              {[["1+", "Year Exp."], ["BAMS", "Degree"], ["OPD/IPD", "Experience"], ["Axis", "Hospital"]].map(([v, l]) => (
                <div key={l} style={{ textAlign: mob ? "center" : "left" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 26 : 32, fontWeight: 900, background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: t.textMuted, letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — avatar card */}
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", animation: "floatCard 5s ease-in-out infinite" }}>
              <div style={{
                width: mob ? 230 : tab ? 280 : 320,
                height: mob ? 290 : tab ? 350 : 400,
                borderRadius: 40,
                background: dark
                  ? "linear-gradient(145deg,#1a0a38,#250e50,#0e1a40)"
                  : "linear-gradient(145deg,#ede9ff,#fce7f9,#e0f0ff)",
                border: `1px solid ${t.cardBorder}`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                boxShadow: dark
                  ? "0 30px 80px rgba(129,140,248,0.25), 0 0 0 1px rgba(232,121,182,0.1)"
                  : "0 30px 80px rgba(99,102,241,0.15), 0 0 0 1px rgba(192,38,160,0.08)",
                position: "relative", overflow: "hidden", padding: 0,
              }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 130, height: 130, borderRadius: "50%", background: `radial-gradient(circle,${t.blob1},transparent)`, pointerEvents: "none" }} />
                <img
  src={aradhnaImg}
  alt="aradhna"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",      // 👈 image proper crop
    objectPosition: "top",   // 👈 face upar se dikhe
    display: "block",
  }}
/>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)", padding: "20px 16px 12px", borderRadius: "0 0 40px 40px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: "white", fontWeight: 700, textAlign: "center" }}>Dr. Aradhana Kushwaha</div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: "rgba(244,192,255,0.9)", letterSpacing: 2, textAlign: "center", marginTop: 2 }}>BAMS · Junior Doctor</div>
                </div>

                {/* Org badge */}
                <div style={{ position: "absolute", bottom: 16, right: 14, background: dark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", borderRadius: 12, padding: "7px 12px", border: `1px solid ${t.cardBorder}`, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 14 }}>🏥</span>
                  <div>
                    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, fontWeight: 800, color: t.text }}>Axis Hospital</div>
                    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 9, color: t.textMuted }}>Lucknow</div>
                  </div>
                </div>
              </div>

              {/* Location badge */}
              <div style={{ position: "absolute", top: 16, left: mob ? -6 : -46, background: dark ? "rgba(15,15,40,0.9)" : "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderRadius: 14, padding: "9px 14px", border: `1px solid ${t.cardBorder}`, boxShadow: "0 8px 28px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>📍</span>
                <div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, fontWeight: 800, color: t.text }}>Lucknow, UP</div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 9, color: t.textMuted, letterSpacing: 1 }}>INDIA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 55 }}>
            <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,20 1440,35 L1440,70 L0,70 Z" fill={t.bg} />
          </svg>
        </div>
      </section>

      {/* ── SKILLS SECTION ── */}
      <section style={{ background: t.bg, padding: mob ? "60px 18px" : "100px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: mob ? 44 : 80, flexDirection: mob ? "column" : "row", alignItems: "flex-start" }}>
          {/* Left: Profile */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-block", background: t.tagBg, border: `1px solid ${t.tagBorder}`, borderRadius: 50, padding: "5px 16px", fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.tagColor, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>Profile</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 34 : 46, fontWeight: 900, color: t.text, lineHeight: 1.15, marginBottom: 22 }}>
              Committed to<br /><span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Patient Wellbeing</span>
            </h2>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, lineHeight: 1.9, color: t.textSub, marginBottom: 32 }}>
              As a dedicated and compassionate doctor, Dr. Aradhana aims to utilise her Ayurvedic medical knowledge and strong ethical values to provide exceptional patient care and healthcare services. Her priority is to ensure the well-being of patients and promote a positive healthcare environment.
            </p>
            {/* Contact chips */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CONTACT.map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: t.tagBg, border: `1px solid ${t.tagBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: t.accent2, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>{c.label}</div>
                    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: t.text, fontWeight: 600 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-block", background: dark ? "rgba(56,189,248,0.1)" : "rgba(2,132,199,0.08)", border: `1px solid ${dark ? "rgba(56,189,248,0.25)" : "rgba(2,132,199,0.2)"}`, borderRadius: 50, padding: "5px 16px", fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.accent3, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>My Skills</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 34 : 46, fontWeight: 900, color: t.text, lineHeight: 1.15, marginBottom: 32 }}>
              Core <span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Competencies</span>
            </h2>
            {SKILLS.map(s => <SkillBar key={s.name} name={s.name} pct={s.pct} t={t} animate={animSkills} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: mob ? "60px 18px" : "80px 48px", background: t.bg2 }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", background: dark ? "linear-gradient(135deg,rgba(232,121,182,0.1),rgba(129,140,248,0.1))" : "linear-gradient(135deg,rgba(192,38,160,0.07),rgba(99,102,241,0.07))", border: `1px solid ${t.tagBorder}`, borderRadius: 32, padding: mob ? "48px 24px" : "72px 80px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle,${t.blob1},transparent)`, pointerEvents: "none" }} />
          <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.tagColor, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Take the First Step</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 30 : 44, fontWeight: 900, color: t.text, lineHeight: 1.2, marginBottom: 18 }}>
            Your Health Deserves<br /><span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Compassionate Care</span>
          </h2>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: mob ? 14 : 16, color: t.textSub, lineHeight: 1.8, marginBottom: 34 }}>
            Book a consultation with Dr. Aradhana Kushwaha and experience medicine that truly cares for the whole person.
          </p>
          <button onClick={() => setPage("Contact")} style={{ background: t.gradBtn, color: "white", border: "none", cursor: "pointer", padding: "15px 38px", borderRadius: 50, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 16, boxShadow: "0 10px 36px rgba(129,140,248,0.4)", transition: "all 0.3s" }}>
            Book Appointment →
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────── PAGE: ABOUT ─────────────────────────── */
function AboutPage({ setPage, dark }) {
  const t = dark ? T.dark : T.light;
  const w = useWidth();
  const mob = w < 768;
  const tab = w < 1024;

  return (
    <div style={{ background: t.bg, paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: mob ? "60px 18px 40px" : "90px 48px 60px", background: t.gradHero, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "40%", right: "8%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,${t.blob2},transparent)`, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: mob ? 36 : 72, flexDirection: mob ? "column" : "row", alignItems: "center" }}>
          {/* Avatar */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: mob ? 220 : 300, height: mob ? 280 : 380, borderRadius: 36, background: dark ? "linear-gradient(145deg,#1a0a38,#250e50)" : "linear-gradient(145deg,#ede9ff,#fce7f9)", border: `1px solid ${t.cardBorder}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: dark ? "0 24px 70px rgba(129,140,248,0.2)" : "0 24px 70px rgba(99,102,241,0.1)", position: "relative", overflow: "hidden", padding: 0 }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: `radial-gradient(circle,${t.blob1},transparent)` }} />
              <img src="data:image/jpeg;base64,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" alt="Dr. Aradhana Kushwaha" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", position: "absolute", top: 0, left: 0, borderRadius: "36px" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)", padding: "18px 14px 10px", borderRadius: "0 0 36px 36px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "white", fontWeight: 700, textAlign: "center" }}>Dr. Aradhana Kushwaha</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: "rgba(200,180,255,0.9)", letterSpacing: 2, textAlign: "center", marginTop: 2 }}>BAMS</div>
              </div>
              <div style={{ position: "absolute", bottom: 14, right: 12, background: dark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 10, padding: "6px 10px", border: `1px solid ${dark ? "rgba(255,215,0,0.2)" : "rgba(0,0,0,0.06)"}` }}>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: "#fbbf24", fontWeight: 700 }}>🏥 Axis Hospital</div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-block", background: t.tagBg, border: `1px solid ${t.tagBorder}`, borderRadius: 50, padding: "5px 16px", fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.tagColor, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>About Me</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 34 : 52, fontWeight: 900, color: t.text, lineHeight: 1.15, marginBottom: 22 }}>
              Passionate About<br /><span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Healing Lives</span>
            </h1>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, lineHeight: 1.9, color: t.textSub, marginBottom: 14 }}>
              Dr. Aradhana Kushwaha is a professional Ayurvedic doctor from Nichlaul, Maharajganj, Uttar Pradesh. She completed her Bachelor of Ayurvedic Medicine and Surgery (BAMS) from Rajiv Gandhi University of Science, Karnataka in 2024 and is currently serving as a Junior Doctor at Axis Hospital, Lucknow.
            </p>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, lineHeight: 1.9, color: t.textSub, marginBottom: 30 }}>
              Her approach combines Ayurvedic wisdom with evidence-based modern practices. She is deeply committed to patient welfare, compassionate care, and continuous learning — bringing energy and dedication to every patient she sees.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 14 }}>
              {[
                { label: "Degree", value: "BAMS (Ayurvedic Medicine)" },
                { label: "Current Position", value: "Junior Doctor, Axis Hospital" },
                { label: "Location", value: "Nichlaul, Maharajganj, UP" },
                { label: "Available", value: "OPD & IPD Consultations" },
              ].map(item => (
                <div key={item.label} style={{ background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: 14, padding: "14px 18px" }}>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: t.accent2, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4, fontWeight: 700 }}>{item.label}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: t.text, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills grid */}
      <section style={{ padding: mob ? "60px 18px" : "90px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-block", background: dark ? "rgba(56,189,248,0.1)" : "rgba(2,132,199,0.08)", border: `1px solid ${dark ? "rgba(56,189,248,0.25)" : "rgba(2,132,199,0.18)"}`, borderRadius: 50, padding: "5px 16px", fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.accent3, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Competencies</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 34 : 48, fontWeight: 900, color: t.text }}>
              Skills & <span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Strengths</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : tab ? "1fr 1fr" : "repeat(3,1fr)", gap: 22 }}>
            {SKILLS.map((s, i) => (
              <div key={s.name} style={{ background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: 22, padding: 28, textAlign: "center", transition: "all 0.4s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = dark ? "0 20px 50px rgba(0,0,0,0.4)" : "0 20px 50px rgba(99,102,241,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Circular progress */}
                <div style={{ position: "relative", width: 90, height: 90, margin: "0 auto 18px" }}>
                  <svg width="90" height="90" viewBox="0 0 90 90" style={{ transform: "rotate(-90deg)" }}>
                    <circle cx="45" cy="45" r="36" fill="none" stroke={dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"} strokeWidth="7" />
                    <circle cx="45" cy="45" r="36" fill="none" stroke="url(#grad)" strokeWidth="7" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - s.pct / 100)}`}
                      style={{ transition: "stroke-dashoffset 1.2s ease" }} />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={t.accent1} />
                        <stop offset="100%" stopColor={t.accent2} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 900, background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.pct}%</div>
                </div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: t.text, fontWeight: 700 }}>{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────── PAGE: EXPERIENCE ─────────────────────────── */
function ExperiencePage({ setPage, dark }) {
  const t = dark ? T.dark : T.light;
  const w = useWidth();
  const mob = w < 768;

  return (
    <div style={{ background: t.bg, paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: mob ? "60px 18px 40px" : "90px 48px 60px", background: t.gradHero, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${t.blob2},transparent 65%)`, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ display: "inline-block", background: t.tagBg, border: `1px solid ${t.tagBorder}`, borderRadius: 50, padding: "5px 16px", fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.tagColor, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Career & Education</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 36 : 58, fontWeight: 900, color: t.text, lineHeight: 1.15, marginBottom: 16 }}>
          My <span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Journey</span>
        </h1>
        <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: mob ? 14 : 16, color: t.textSub, maxWidth: 520, margin: "0 auto" }}>
          From academic excellence to hands-on clinical practice — building a career rooted in compassion and learning.
        </p>
      </section>

      {/* Work Experience */}
      <section style={{ padding: mob ? "60px 18px" : "90px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 30 : 42, fontWeight: 900, color: t.text, marginBottom: 40 }}>
            Work <span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</span>
          </h2>
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.role} style={{ display: "flex", gap: mob ? 16 : 32, marginBottom: 44, position: "relative" }}>
              {/* Line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: exp.color, boxShadow: `0 0 18px ${exp.color}99`, marginTop: 6, flexShrink: 0 }} />
                {i < EXPERIENCE.length - 1 && <div style={{ width: 2, flex: 1, background: `linear-gradient(to bottom,${exp.color}66,${EXPERIENCE[i + 1].color}33)`, marginTop: 6 }} />}
              </div>
              {/* Card */}
              <div style={{ flex: 1, background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: 22, padding: mob ? 22 : 30, transition: "all 0.4s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${exp.color}44`; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.cardBorder; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ display: "inline-block", background: `${exp.color}18`, border: `1px solid ${exp.color}44`, borderRadius: 50, padding: "3px 12px", fontFamily: "'Nunito',sans-serif", fontSize: 10, color: exp.color, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>{exp.period}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 20 : 26, fontWeight: 800, color: t.text, marginBottom: 4 }}>{exp.role}</h3>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: exp.color, fontWeight: 700, marginBottom: 16, letterSpacing: 0.5 }}>{exp.org}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: exp.color, marginTop: 7, flexShrink: 0, boxShadow: `0 0 8px ${exp.color}` }} />
                      <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: t.textSub, lineHeight: 1.7 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ padding: mob ? "60px 18px" : "90px 48px", background: t.bg2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 30 : 42, fontWeight: 900, color: t.text, marginBottom: 40 }}>
            <span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Education</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {EDUCATION.map((edu, i) => (
              <div key={edu.school} style={{ background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: 22, padding: mob ? 22 : 30, display: "flex", gap: 20, alignItems: "center", transition: "all 0.4s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = dark ? "0 20px 50px rgba(0,0,0,0.3)" : "0 20px 50px rgba(99,102,241,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, background: t.tagBg, border: `1px solid ${t.tagBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{edu.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: t.accent2, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>{edu.year}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 17 : 22, fontWeight: 800, color: t.text, marginBottom: 4 }}>{edu.school}</h3>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: t.textSub }}>{edu.degree}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────── PAGE: CONTACT ─────────────────────────── */
function ContactPage({ dark }) {
  const t = dark ? T.dark : T.light;
  const w = useWidth();
  const mob = w < 768;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: t.bg, paddingTop: 80 }}>
      {/* Header */}
      <section style={{ padding: mob ? "60px 18px 40px" : "90px 48px 60px", background: t.gradHero, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 450, height: 450, borderRadius: "50%", background: `radial-gradient(circle,${t.blob1},transparent 65%)`, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ display: "inline-block", background: t.tagBg, border: `1px solid ${t.tagBorder}`, borderRadius: 50, padding: "5px 16px", fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.tagColor, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Reach Out</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: mob ? 36 : 58, fontWeight: 900, color: t.text, marginBottom: 14 }}>
          Get in <span style={{ background: t.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Touch</span>
        </h1>
        <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: mob ? 14 : 16, color: t.textSub, maxWidth: 480, margin: "0 auto" }}>
          Have a question or want to book an appointment? Reach Dr. Aradhana Kushwaha directly.
        </p>
      </section>

      <section style={{ padding: mob ? "50px 18px" : "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: mob ? 40 : 60, flexDirection: mob ? "column" : "row" }}>
          {/* Contact info */}
          <div style={{ flex: "0 0 auto", width: mob ? "100%" : 320, display: "flex", flexDirection: "column", gap: 18 }}>
            {CONTACT.map(c => (
              <div key={c.label} style={{ background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: 20, padding: "20px 24px", display: "flex", gap: 16, alignItems: "center", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.tagBorder; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.cardBorder; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: t.tagBg, border: `1px solid ${t.tagBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 10, color: t.accent2, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700, marginBottom: 3 }}>{c.label}</div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: t.text, fontWeight: 600, lineHeight: 1.5 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ flex: 1 }}>
            <div style={{ background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: 28, padding: mob ? 26 : 44 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ fontSize: 60, marginBottom: 18 }}>✅</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, color: t.text, fontWeight: 900, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, color: t.textSub, lineHeight: 1.8 }}>Dr. Aradhana will get back to you within 24 hours. Thank you for reaching out!</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }} style={{ marginTop: 24, background: t.gradBtn, color: "white", border: "none", cursor: "pointer", padding: "12px 30px", borderRadius: 50, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 14 }}>Send Another</button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 900, color: t.text, marginBottom: 28 }}>Book an Appointment</h3>
                  <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 18, marginBottom: 18 }}>
                    {[
                      { label: "Full Name *", key: "name", type: "text", ph: "Your full name" },
                      { label: "Email *", key: "email", type: "email", ph: "your@email.com" },
                      { label: "Phone", key: "phone", type: "tel", ph: "+91 00000 00000" },
                    ].map(f => (
                      <div key={f.key} style={f.key === "phone" && !mob ? { gridColumn: "1 / -1" } : {}}>
                        <label style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.textMuted, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8, fontWeight: 600 }}>{f.label}</label>
                        <input type={f.type} placeholder={f.ph} value={form[f.key]} onChange={e => setForm(x => ({ ...x, [f.key]: e.target.value }))}
                          style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: `1px solid ${t.inputBorder}`, background: t.inputBg, fontFamily: "'Nunito',sans-serif", fontSize: 14, color: t.text, outline: "none", transition: "border-color 0.3s" }}
                          onFocus={e => e.target.style.borderColor = t.accent2}
                          onBlur={e => e.target.style.borderColor = t.inputBorder} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 26 }}>
                    <label style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: t.textMuted, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8, fontWeight: 600 }}>Message / Concern</label>
                    <textarea placeholder="Describe your symptoms or reason for visit..." rows={4} value={form.message} onChange={e => setForm(x => ({ ...x, message: e.target.value }))}
                      style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: `1px solid ${t.inputBorder}`, background: t.inputBg, fontFamily: "'Nunito',sans-serif", fontSize: 14, color: t.text, outline: "none", resize: "vertical", transition: "border-color 0.3s" }}
                      onFocus={e => e.target.style.borderColor = t.accent2}
                      onBlur={e => e.target.style.borderColor = t.inputBorder} />
                  </div>
                  <button onClick={() => { if (form.name && form.email) setSent(true); }} style={{ width: "100%", background: t.gradBtn, color: "white", border: "none", cursor: "pointer", padding: "15px", borderRadius: 14, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 16, boxShadow: "0 8px 32px rgba(129,140,248,0.4)", transition: "all 0.3s", letterSpacing: 0.5 }}>
                    Send Message & Book Appointment ✨
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer({ setPage, dark }) {
  const t = dark ? T.dark : T.light;
  const w = useWidth();
  const mob = w < 768;

  return (
    <footer style={{ background: dark ? "#020209" : "#0f0f2e", borderTop: `1px solid ${dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.08)"}`, padding: mob ? "40px 18px 24px" : "48px 48px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 800, color: "white" }}>
              Dr. <span style={{ background: "linear-gradient(90deg,#f472b6,#818cf8,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Aradhana Kushwaha</span>
            </div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: 2.5, marginTop: 4 }}>BAMS · Junior Doctor · Axis Hospital, Lucknow</div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {PAGES.map(p => (
              <button key={p} onClick={() => setPage(p)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)", cursor: "pointer", padding: "8px 16px", borderRadius: 50, fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: 12, transition: "all 0.3s" }}
                onMouseEnter={e => { e.target.style.color = "white"; e.target.style.borderColor = "rgba(244,114,182,0.35)"; }}
                onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.55)"; e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >{p}</button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2025 Dr. Aradhana Kushwaha. All rights reserved.</div>
          <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Made with 🌸 | Axis Hospital, Lucknow</div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── ROOT ─────────────────────────── */
export default function App() {
  const [page, setPage] = useState("Home");
  const [dark, setDark] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "Home":       return <HomePage setPage={setPage} dark={dark} />;
      case "About":      return <AboutPage setPage={setPage} dark={dark} />;
      case "Experience": return <ExperiencePage setPage={setPage} dark={dark} />;
      case "Contact":    return <ContactPage dark={dark} />;
      default:           return <HomePage setPage={setPage} dark={dark} />;
    }
  };

  const t = dark ? T.dark : T.light;

  return (
    <div style={{ minHeight: "100vh", background: t.bg, transition: "background 0.4s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&family=Nunito:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        input, textarea { -webkit-appearance: none; }
        input::placeholder, textarea::placeholder { color: ${t.textMuted}; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${t.bg}; }
        ::-webkit-scrollbar-thumb { background: ${t.scrollThumb}; border-radius: 3px; }
        @keyframes blobF { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-22px) scale(1.04);} }
        @keyframes floatCard { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }
        @keyframes pulseD { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
        @keyframes pageIn { from{opacity:0;transform:translateY(18px);} to{opacity:1;transform:none;} }
      `}</style>

      <Navbar page={page} setPage={setPage} dark={dark} setDark={setDark} />

      <div key={page + dark} style={{ animation: "pageIn 0.5s ease" }}>
        {renderPage()}
      </div>

      <Footer setPage={setPage} dark={dark} />
    </div>
  );
}
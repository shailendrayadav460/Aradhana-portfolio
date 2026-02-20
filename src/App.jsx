import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Experience", "Testimonials", "Contact"];

const SERVICES = [
  { icon: "🫀", title: "Cardiology", desc: "Comprehensive heart care with advanced diagnostic and treatment solutions for cardiac conditions." },
  { icon: "🧠", title: "Neurology", desc: "Expert neurological assessments and treatments for brain and nervous system disorders." },
  { icon: "🩺", title: "General Medicine", desc: "Holistic primary care addressing all aspects of your health and wellness needs." },
  { icon: "💉", title: "Preventive Care", desc: "Proactive health screenings and vaccinations to keep you healthy and disease-free." },
  { icon: "🧬", title: "Diagnostics", desc: "Cutting-edge laboratory and imaging diagnostics for precise and accurate results." },
  { icon: "🌿", title: "Wellness Therapy", desc: "Integrative wellness programs combining modern medicine with lifestyle guidance." },
];

const STATS = [
  { value: "12+", label: "Years Exp." },
  { value: "8K+", label: "Patients" },
  { value: "98%", label: "Success" },
  { value: "25+", label: "Awards" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Patient", text: "Dr. Aradhana is not just a doctor — she's a healer. Her compassion and expertise changed my life completely. I highly recommend her to everyone.", avatar: "PS" },
  { name: "Ravi Gupta", role: "Patient", text: "Incredible experience. Dr. Maurya took time to listen and explain everything clearly. Her diagnosis was spot-on and treatment was very effective.", avatar: "RG" },
  { name: "Sunita Patel", role: "Patient", text: "The best physician I've ever visited. She is knowledgeable, kind, and truly cares about her patients. I always leave her clinic feeling better.", avatar: "SP" },
];

const TIMELINE = [
  { year: "2012", title: "MBBS — AIIMS Delhi", desc: "Graduated with distinction from All India Institute of Medical Sciences, New Delhi." },
  { year: "2015", title: "MD Internal Medicine — PGI Chandigarh", desc: "Post-graduate specialization in Internal Medicine with gold medal." },
  { year: "2017", title: "Fellowship — Johns Hopkins, USA", desc: "Advanced clinical fellowship in Cardiology at Johns Hopkins Medical Center." },
  { year: "2019", title: "Senior Consultant — Apollo Hospitals", desc: "Joined Apollo Hospitals as Senior Consultant Physician and Cardiologist." },
  { year: "2023", title: "Private Practice", desc: "Established her own clinic — Aradhana Healthcare — in New Delhi." },
];

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#fdf8f4", color: "#2d1b0e", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Raleway:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'Raleway', sans-serif; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.8; } 70% { transform: scale(1.3); opacity: 0; } 100% { transform: scale(1.3); opacity: 0; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        .anim-fadeInUp { animation: fadeInUp 0.9s ease forwards; opacity: 0; }
        .anim-float { animation: float 4s ease-in-out infinite; }
        .anim-spin { animation: spin-slow 20s linear infinite; }
        .d1 { animation-delay: 0.15s; } .d2 { animation-delay: 0.3s; } .d3 { animation-delay: 0.45s; } .d4 { animation-delay: 0.6s; } .d5 { animation-delay: 0.75s; }

        .gradient-text { background: linear-gradient(135deg, #b5635a 0%, #d4956a 50%, #b5635a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .card-hvr { transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); }
        .card-hvr:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(181,99,90,0.2); }

        .btn-p { display: inline-block; background: linear-gradient(135deg,#b5635a,#d4956a); color: white; padding: 13px 28px; border-radius: 50px; border: none; cursor: pointer; font-family: 'Raleway',sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 1px; transition: all 0.3s ease; box-shadow: 0 8px 25px rgba(181,99,90,0.35); white-space: nowrap; }
        .btn-p:hover { transform: translateY(-2px); box-shadow: 0 14px 35px rgba(181,99,90,0.5); }

        .btn-o { display: inline-block; background: transparent; color: #b5635a; padding: 12px 26px; border-radius: 50px; border: 2px solid #b5635a; cursor: pointer; font-family: 'Raleway',sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 1px; transition: all 0.3s ease; white-space: nowrap; }
        .btn-o:hover { background: #b5635a; color: white; transform: translateY(-2px); }

        .nav-lnk { font-family: 'Raleway',sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; color: #2d1b0e; cursor: pointer; position: relative; transition: color 0.3s; }
        .nav-lnk::after { content:''; position: absolute; bottom:-4px; left:0; width:0; height:2px; background: linear-gradient(135deg,#b5635a,#d4956a); transition: width 0.3s ease; }
        .nav-lnk:hover::after, .nav-lnk.active::after { width:100%; }
        .nav-lnk:hover, .nav-lnk.active { color: #b5635a; }

        .mob-lnk { font-family:'Raleway',sans-serif; font-weight:500; font-size:16px; letter-spacing:2px; text-transform:uppercase; color:#2d1b0e; cursor:pointer; padding:14px 0; border-bottom:1px solid rgba(181,99,90,0.1); transition:color 0.3s,padding-left 0.3s; display:block; }
        .mob-lnk:hover { color:#b5635a; padding-left:8px; }

        .stag { display:inline-block; background:rgba(181,99,90,0.1); color:#b5635a; padding:6px 18px; border-radius:50px; font-family:'Raleway',sans-serif; font-weight:600; font-size:11px; letter-spacing:2px; text-transform:uppercase; margin-bottom:16px; }

        .mesh { background-image: radial-gradient(at 20% 50%,rgba(181,99,90,0.08) 0px,transparent 50%), radial-gradient(at 80% 20%,rgba(212,149,106,0.08) 0px,transparent 50%), radial-gradient(at 50% 80%,rgba(181,99,90,0.05) 0px,transparent 50%); }

        .hbg { background:none; border:none; cursor:pointer; padding:4px; display:flex; flex-direction:column; gap:5px; }
        .hbg span { display:block; width:24px; height:2px; background:#2d1b0e; border-radius:2px; transition:all 0.3s ease; }
        .hbg.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .hbg.open span:nth-child(2) { opacity:0; }
        .hbg.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }
        .mob-menu { animation: slideDown 0.3s ease forwards; }

        input, textarea { -webkit-appearance:none; appearance:none; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#fdf8f4; }
        ::-webkit-scrollbar-thumb { background:linear-gradient(#b5635a,#d4956a); border-radius:3px; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled || menuOpen ? "rgba(253,248,244,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(181,99,90,0.1)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: isMobile ? "15px 20px" : scrolled ? "15px 40px" : "22px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "padding 0.4s ease",
        }}>
          <div className="font-display" style={{ fontSize: isMobile ? "18px" : "22px", fontWeight: 700, color: "#2d1b0e", flexShrink: 0 }}>
            Dr. <span className="gradient-text">Aradhana</span>
          </div>

          {!isMobile && (
            <div style={{ display: "flex", gap: "26px", alignItems: "center" }}>
              {NAV_LINKS.map(link => (
                <span key={link} className={`nav-lnk ${activeNav === link ? "active" : ""}`} onClick={() => scrollTo(link)}>{link}</span>
              ))}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {!isMobile && <button className="btn-p" onClick={() => scrollTo("Contact")}>Book Appointment</button>}
            {isMobile && (
              <button className={`hbg ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
                <span /><span /><span />
              </button>
            )}
          </div>
        </div>

        {isMobile && menuOpen && (
          <div className="mob-menu" style={{ background: "rgba(253,248,244,0.99)", borderTop: "1px solid rgba(181,99,90,0.1)", padding: "8px 20px 24px" }}>
            {NAV_LINKS.map(link => (
              <span key={link} className="mob-lnk" onClick={() => scrollTo(link)}>{link}</span>
            ))}
            <button className="btn-p" style={{ marginTop: 16, width: "100%", textAlign: "center" }} onClick={() => scrollTo("Contact")}>
              Book Appointment
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="mesh" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: isMobile ? "100px 20px 60px" : isTablet ? "100px 32px 60px" : "100px 40px 60px",
        position: "relative", overflow: "hidden",
      }}>
        {!isMobile && (
          <>
            <div className="anim-spin" style={{ position: "absolute", top: "10%", right: "4%", width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(181,99,90,0.12)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "16%", right: "7%", width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(212,149,106,0.1)", pointerEvents: "none" }} />
          </>
        )}
        <div style={{ position: "absolute", bottom: "10%", left: "-2%", width: 150, height: 150, borderRadius: "50%", background: "radial-gradient(circle,rgba(181,99,90,0.06),transparent)", pointerEvents: "none" }} />

        <div style={{
          maxWidth: 1200, margin: "0 auto", width: "100%",
          display: "flex", alignItems: "center",
          gap: isTablet ? 36 : 72,
          flexDirection: isMobile ? "column-reverse" : "row",
          textAlign: isMobile ? "center" : "left",
        }}>
          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="anim-fadeInUp"><div className="stag">🌸 Welcome to My Practice</div></div>
            <h1 className="font-display anim-fadeInUp d1" style={{ fontSize: isMobile ? "40px" : isTablet ? "52px" : "70px", lineHeight: 1.1, fontWeight: 900, marginBottom: 14 }}>
              Dr. Aradhana<br /><span className="gradient-text">Maurya</span>
            </h1>
            <p className="font-body anim-fadeInUp d2" style={{ fontSize: "14px", color: "#8a6450", letterSpacing: "2px", fontWeight: 500, marginBottom: 14 }}>
              MD · Cardiologist · Internal Medicine
            </p>
            <p className="font-body anim-fadeInUp d3" style={{
              fontSize: "15px", lineHeight: 1.85, color: "#6b4a35",
              maxWidth: isMobile ? "100%" : 440,
              margin: isMobile ? "0 auto 32px" : "0 0 32px",
            }}>
              A dedicated healer with over 12 years of experience, committed to compassionate, evidence-based medicine that treats the whole person — not just the disease.
            </p>
            <div className="anim-fadeInUp d4" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
              <button className="btn-p" onClick={() => scrollTo("Contact")}>Book Consultation</button>
              <button className="btn-o" onClick={() => scrollTo("About")}>Learn More</button>
            </div>
            <div className="anim-fadeInUp d5" style={{
              display: "flex", gap: isMobile ? 18 : 32, marginTop: 44,
              justifyContent: isMobile ? "center" : "flex-start", flexWrap: "wrap",
            }}>
              {STATS.map(s => (
                <div key={s.label} style={{ textAlign: isMobile ? "center" : "left" }}>
                  <div className="font-display" style={{ fontSize: isMobile ? "26px" : "30px", fontWeight: 900, color: "#b5635a" }}>{s.value}</div>
                  <div className="font-body" style={{ fontSize: "11px", color: "#8a6450", letterSpacing: "1px", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "center" }}>
            <div className="anim-float" style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -14, borderRadius: "50%", border: "2px solid rgba(181,99,90,0.2)", animation: "pulse-ring 3s ease-out infinite" }} />
              <div style={{ position: "absolute", inset: -14, borderRadius: "50%", border: "2px solid rgba(181,99,90,0.12)", animation: "pulse-ring 3s ease-out infinite", animationDelay: "0.75s" }} />
              <div style={{
                width: isMobile ? 220 : isTablet ? 270 : 310,
                height: isMobile ? 270 : isTablet ? 330 : 370,
                borderRadius: "60% 40% 60% 40% / 50% 50% 50% 50%",
                background: "linear-gradient(135deg,#f0d6cc,#e8c4b4 40%,#d4a08a)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                boxShadow: "0 30px 80px rgba(181,99,90,0.25), inset 0 0 40px rgba(255,255,255,0.3)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ fontSize: isMobile ? 80 : 96 }}>👩‍⚕️</div>
                <div className="font-display" style={{ fontSize: "13px", color: "#7a3d2e", fontWeight: 700, marginTop: 6, textAlign: "center", padding: "0 10px" }}>Dr. Aradhana Maurya</div>
                <div className="font-body" style={{ fontSize: "10px", color: "#9a5a45", letterSpacing: 1 }}>MBBS · MD · FAHA</div>
                <div style={{
                  position: "absolute", bottom: 14, right: 14,
                  background: "white", borderRadius: 12, padding: "7px 12px",
                  boxShadow: "0 6px 18px rgba(181,99,90,0.2)",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <span style={{ fontSize: 14 }}>⭐</span>
                  <div>
                    <div className="font-display" style={{ fontSize: "12px", fontWeight: 700, color: "#b5635a" }}>4.9/5</div>
                    <div className="font-body" style={{ fontSize: "9px", color: "#8a6450" }}>Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: isMobile ? "70px 20px" : "100px 40px", background: "white" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", gap: isMobile ? 36 : 64, alignItems: isMobile ? "stretch" : "center",
          flexDirection: isMobile ? "column" : "row",
        }}>
          <div style={{ flexShrink: 0, width: "100%", maxWidth: isMobile ? "100%" : 370 }}>
            <div style={{ background: "linear-gradient(135deg,#fdf0eb,#f5ddd3)", borderRadius: 28, padding: isMobile ? 24 : 36, boxShadow: "0 20px 60px rgba(181,99,90,0.1)", position: "relative" }}>
              <div style={{ fontSize: 44, marginBottom: 14 }}>🌸</div>
              <h3 className="font-display" style={{ fontSize: "19px", fontWeight: 700, color: "#2d1b0e", marginBottom: 10, lineHeight: 1.5 }}>
                "Medicine is not just science — it is an art of understanding human pain."
              </h3>
              <p className="font-body" style={{ color: "#8a6450", fontStyle: "italic", fontSize: "13px" }}>— Dr. Aradhana Maurya</p>
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                {["🎓 AIIMS Delhi Graduate", "🏥 Johns Hopkins Fellow", "🌍 International Speaker", "📖 Published Researcher"].map(t => (
                  <div key={t} className="font-body" style={{ fontSize: "13px", color: "#5a3220" }}>{t}</div>
                ))}
              </div>
              <div style={{ position: "absolute", top: -14, right: -14, width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#b5635a,#d4956a)", opacity: 0.12 }} />
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="stag">About Me</div>
            <h2 className="font-display" style={{ fontSize: isMobile ? "32px" : "46px", fontWeight: 900, lineHeight: 1.15, marginBottom: 18 }}>
              Healing with Heart &<br /><span className="gradient-text">Science</span>
            </h2>
            <p className="font-body" style={{ fontSize: "15px", lineHeight: 1.9, color: "#6b4a35", marginBottom: 14 }}>
              Dr. Aradhana Maurya is a distinguished physician and cardiologist with over 12 years of experience in internal medicine and cardiac care. Born and raised in Lucknow, she pursued her dream of medicine with exceptional dedication.
            </p>
            <p className="font-body" style={{ fontSize: "15px", lineHeight: 1.9, color: "#6b4a35", marginBottom: 28 }}>
              After completing her MBBS from AIIMS Delhi and MD from PGI Chandigarh, she undertook a prestigious fellowship at Johns Hopkins. Her approach integrates cutting-edge science with deep human empathy.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
              {[
                { label: "Specialization", value: "Cardiology & Internal Medicine" },
                { label: "Languages", value: "Hindi, English, Sanskrit" },
                { label: "Clinic", value: "Aradhana Healthcare, New Delhi" },
                { label: "Availability", value: "Mon – Sat, 9am – 6pm" },
              ].map(item => (
                <div key={item.label} style={{ borderLeft: "3px solid #b5635a", paddingLeft: 14 }}>
                  <div className="font-body" style={{ fontSize: "11px", color: "#8a6450", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div className="font-display" style={{ fontSize: "14px", color: "#2d1b0e", fontWeight: 600, marginTop: 3 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mesh" style={{ padding: isMobile ? "70px 20px" : "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="stag">What I Offer</div>
            <h2 className="font-display" style={{ fontSize: isMobile ? "32px" : "46px", fontWeight: 900 }}>
              Medical <span className="gradient-text">Services</span>
            </h2>
            <p className="font-body" style={{ color: "#8a6450", maxWidth: 460, margin: "12px auto 0", lineHeight: 1.8, fontSize: "14px" }}>
              Comprehensive care delivered with precision, compassion, and the latest medical advancements.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)", gap: 22 }}>
            {SERVICES.map(s => (
              <div key={s.title} className="card-hvr" style={{ background: "white", borderRadius: 22, padding: 28, boxShadow: "0 4px 20px rgba(181,99,90,0.07)", border: "1px solid rgba(181,99,90,0.07)" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
                <h3 className="font-display" style={{ fontSize: "19px", fontWeight: 700, marginBottom: 9, color: "#2d1b0e" }}>{s.title}</h3>
                <p className="font-body" style={{ fontSize: "13px", lineHeight: 1.8, color: "#8a6450" }}>{s.desc}</p>
                <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 7, color: "#b5635a" }}>
                  <span className="font-body" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: 1 }}>LEARN MORE</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: isMobile ? "70px 20px" : "100px 40px", background: "white" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="stag">My Journey</div>
            <h2 className="font-display" style={{ fontSize: isMobile ? "32px" : "46px", fontWeight: 900 }}>
              Education & <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {isMobile ? (
            <div style={{ position: "relative", paddingLeft: 30 }}>
              <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#b5635a,#d4956a)" }} />
              {TIMELINE.map((item, i) => (
                <div key={item.year} style={{ position: "relative", marginBottom: 28 }}>
                  <div style={{ position: "absolute", left: -27, top: 18, width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg,#b5635a,#d4956a)", boxShadow: "0 0 0 4px rgba(181,99,90,0.15)" }} />
                  <div className="card-hvr" style={{ background: i % 2 === 0 ? "linear-gradient(135deg,#fdf0eb,#f8e0d5)" : "white", borderRadius: 18, padding: 22, boxShadow: "0 6px 24px rgba(181,99,90,0.08)", border: "1px solid rgba(181,99,90,0.07)" }}>
                    <div className="font-display" style={{ fontSize: "22px", fontWeight: 900, color: "#b5635a", marginBottom: 5 }}>{item.year}</div>
                    <h4 className="font-display" style={{ fontSize: "15px", fontWeight: 700, marginBottom: 7, color: "#2d1b0e" }}>{item.title}</h4>
                    <p className="font-body" style={{ fontSize: "13px", color: "#8a6450", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#b5635a,#d4956a)", transform: "translateX(-50%)" }} />
              {TIMELINE.map((item, i) => (
                <div key={item.year} style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: 40, position: "relative" }}>
                  <div style={{ position: "absolute", left: "50%", top: 20, width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg,#b5635a,#d4956a)", transform: "translateX(-50%)", boxShadow: "0 0 0 4px rgba(181,99,90,0.18)" }} />
                  <div className="card-hvr" style={{ width: "44%", background: i % 2 === 0 ? "linear-gradient(135deg,#fdf0eb,#f8e0d5)" : "white", borderRadius: 18, padding: 26, boxShadow: "0 8px 28px rgba(181,99,90,0.08)", border: "1px solid rgba(181,99,90,0.07)" }}>
                    <div className="font-display" style={{ fontSize: "24px", fontWeight: 900, color: "#b5635a", marginBottom: 5 }}>{item.year}</div>
                    <h4 className="font-display" style={{ fontSize: "16px", fontWeight: 700, marginBottom: 7, color: "#2d1b0e" }}>{item.title}</h4>
                    <p className="font-body" style={{ fontSize: "13px", color: "#8a6450", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: isMobile ? "70px 20px" : "100px 40px", background: "linear-gradient(135deg,#2d1b0e,#5a3220)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div className="stag" style={{ background: "rgba(255,255,255,0.1)", color: "#d4956a" }}>Kind Words</div>
          <h2 className="font-display" style={{ fontSize: isMobile ? "32px" : "46px", fontWeight: 900, color: "white", marginBottom: 44 }}>
            Patient <span style={{ color: "#d4956a" }}>Testimonials</span>
          </h2>
          <div style={{ position: "relative", minHeight: isMobile ? 300 : 230 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} style={{
                position: i === activeTestimonial ? "relative" : "absolute",
                top: 0, left: 0, right: 0,
                opacity: i === activeTestimonial ? 1 : 0,
                transform: i === activeTestimonial ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s ease",
                pointerEvents: i === activeTestimonial ? "auto" : "none",
              }}>
                <div style={{ fontSize: 52, color: "#d4956a", lineHeight: 1, marginBottom: 10, fontFamily: "serif" }}>"</div>
                <p className="font-body" style={{ fontSize: isMobile ? "15px" : "18px", lineHeight: 1.85, color: "rgba(255,255,255,0.9)", maxWidth: 640, margin: "0 auto 26px", fontStyle: "italic" }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#b5635a,#d4956a)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "Georgia", fontWeight: 700, fontSize: "14px", flexShrink: 0 }}>{t.avatar}</div>
                  <div style={{ textAlign: "left" }}>
                    <div className="font-display" style={{ color: "white", fontWeight: 700, fontSize: "15px" }}>{t.name}</div>
                    <div className="font-body" style={{ color: "#d4956a", fontSize: "12px" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? 28 : 10, height: 10, borderRadius: 5, background: i === activeTestimonial ? "#d4956a" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mesh" style={{ padding: isMobile ? "70px 20px" : "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: isMobile ? 44 : 64, flexDirection: isMobile ? "column" : "row" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="stag">Get in Touch</div>
            <h2 className="font-display" style={{ fontSize: isMobile ? "32px" : "46px", fontWeight: 900, lineHeight: 1.15, marginBottom: 18 }}>
              Book an<br /><span className="gradient-text">Appointment</span>
            </h2>
            <p className="font-body" style={{ color: "#8a6450", lineHeight: 1.8, marginBottom: 32, fontSize: "14px" }}>
              Ready to take charge of your health? Schedule a consultation with Dr. Aradhana Maurya today.
            </p>
            {[
              { icon: "📍", label: "Clinic", value: "Aradhana Healthcare, Connaught Place, New Delhi – 110001" },
              { icon: "📞", label: "Phone", value: "+91 98765 43210" },
              { icon: "📧", label: "Email", value: "dr.aradhana@aradhanahealth.in" },
              { icon: "🕐", label: "Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: "linear-gradient(135deg,rgba(181,99,90,0.1),rgba(212,149,106,0.1))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.icon}</div>
                <div>
                  <div className="font-body" style={{ fontSize: "11px", color: "#8a6450", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div className="font-body" style={{ fontSize: "14px", color: "#2d1b0e", fontWeight: 500, marginTop: 2 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ background: "white", borderRadius: 26, padding: isMobile ? 24 : 40, boxShadow: "0 20px 60px rgba(181,99,90,0.1)" }}>
              <h3 className="font-display" style={{ fontSize: "21px", fontWeight: 700, marginBottom: 26, color: "#2d1b0e" }}>Send a Message</h3>
              {[
                { label: "Full Name", type: "text", placeholder: "Your full name" },
                { label: "Email Address", type: "email", placeholder: "your@email.com" },
                { label: "Phone Number", type: "tel", placeholder: "+91 00000 00000" },
              ].map(field => (
                <div key={field.label} style={{ marginBottom: 16 }}>
                  <label className="font-body" style={{ fontSize: "11px", color: "#8a6450", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} style={{ width: "100%", padding: "12px 14px", borderRadius: 11, border: "1.5px solid rgba(181,99,90,0.2)", fontFamily: "Raleway,sans-serif", fontSize: "14px", color: "#2d1b0e", outline: "none", background: "#fdf8f4", transition: "border-color 0.3s" }}
                    onFocus={e => e.target.style.borderColor = "#b5635a"}
                    onBlur={e => e.target.style.borderColor = "rgba(181,99,90,0.2)"} />
                </div>
              ))}
              <div style={{ marginBottom: 22 }}>
                <label className="font-body" style={{ fontSize: "11px", color: "#8a6450", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Message</label>
                <textarea placeholder="Describe your concern or question..." rows={4} style={{ width: "100%", padding: "12px 14px", borderRadius: 11, border: "1.5px solid rgba(181,99,90,0.2)", fontFamily: "Raleway,sans-serif", fontSize: "14px", color: "#2d1b0e", outline: "none", background: "#fdf8f4", resize: "vertical", transition: "border-color 0.3s" }}
                  onFocus={e => e.target.style.borderColor = "#b5635a"}
                  onBlur={e => e.target.style.borderColor = "rgba(181,99,90,0.2)"} />
              </div>
              <button className="btn-p" style={{ width: "100%", textAlign: "center" }}>Send Message ✨</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2d1b0e", padding: isMobile ? "32px 20px" : "40px", textAlign: "center" }}>
        <div className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "white", marginBottom: 6 }}>
          Dr. <span style={{ color: "#d4956a" }}>Aradhana Maurya</span>
        </div>
        <p className="font-body" style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginBottom: 22 }}>MBBS · MD · FAHA · Cardiologist & Physician</p>
        <div style={{ display: "flex", justifyContent: "center", gap: isMobile ? 14 : 26, flexWrap: "wrap", marginBottom: 22 }}>
          {NAV_LINKS.map(link => (
            <span key={link} onClick={() => scrollTo(link)} className="font-body" style={{ color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "11px", letterSpacing: 1, textTransform: "uppercase", transition: "color 0.3s" }}
              onMouseOver={e => e.target.style.color = "#d4956a"}
              onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.4)"}
            >{link}</span>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20 }}>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.22)", fontSize: "12px" }}>© 2024 Dr. Aradhana Maurya. All rights reserved. | Made with 🌸</p>
        </div>
      </footer>
    </div>
  );
}
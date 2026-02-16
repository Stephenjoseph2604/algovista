import { useState, useEffect, useRef } from "react";

/* ─── THEME TOKENS ─────────────────────────────────────── */
const T = {
  bg:      "#2b2e33",
  surface: "#32363d",
  border:  "#c1c4c8",
  muted:   "#7b7f85",
  text:    "#f5f6f7",
};

/* ─── GLOBAL STYLES injected once ──────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: ${T.bg};
    color: ${T.text};
    font-family: 'Instrument Sans', sans-serif;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${T.bg}; }
  ::-webkit-scrollbar-thumb { background: ${T.muted}; border-radius: 99px; }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateY(-50%) translateX(40px); }
    to   { opacity: 1; transform: translateY(-50%) translateX(0); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; } 50% { opacity: 0; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }
  @keyframes ctaPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(245,246,247,0.15); }
    50%       { box-shadow: 0 0 0 16px rgba(245,246,247,0); }
  }
  @keyframes heroIn0 {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .av-cursor {
    display: inline-block;
    width: 2px; height: 1em;
    background: ${T.text};
    margin-left: 2px;
    vertical-align: text-bottom;
    animation: blink 1.2s step-end infinite;
  }
  .av-eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: ${T.muted};
    display: inline-block;
    animation: pulse 2s ease-in-out infinite;
  }
  .av-cta-btn {
    animation: ctaPulse 3s ease-in-out infinite 2s;
  }

  /* Reveal utility */
  .av-reveal { opacity: 0; transform: translateY(30px); }
  .av-reveal.av-visible {
    animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
  }
  .av-reveal.av-d1 { animation-delay: 0.08s; }
  .av-reveal.av-d2 { animation-delay: 0.16s; }
  .av-reveal.av-d3 { animation-delay: 0.24s; }
  .av-reveal.av-d4 { animation-delay: 0.32s; }

  /* Hero stagger */
  .av-h0 { opacity:0; animation: heroIn0 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s  forwards; }
  .av-h1 { opacity:0; animation: heroIn0 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s forwards; }
  .av-h2 { opacity:0; animation: heroIn0 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s  forwards; }
  .av-h3 { opacity:0; animation: heroIn0 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s forwards; }
  .av-code-anim {
    opacity:0;
    animation: fadeInRight 1s cubic-bezier(0.16,1,0.3,1) 1s forwards;
  }

  /* Feature card hover */
  .av-feature-card {
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s;
  }
  .av-feature-card:hover {
    transform: translateY(-6px);
    border-color: rgba(193,196,200,0.28) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(193,196,200,0.08) !important;
  }
  .av-feature-card:hover .av-feature-icon {
    transform: scale(1.1) rotate(-3deg);
    background: rgba(193,196,200,0.18) !important;
  }
  .av-feature-card:hover .av-feature-title::after {
    width: 100% !important;
  }
  .av-feature-card:hover .av-card-glow { opacity: 1 !important; }

  .av-feature-icon {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.3s;
  }
  .av-feature-title {
    display: inline-block;
    position: relative;
  }
  .av-feature-title::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    height: 1px; width: 0;
    background: ${T.text};
    transition: width 0.35s cubic-bezier(0.16,1,0.3,1);
  }

  /* Nav link hover */
  .av-nav-link {
    position: relative;
    transition: color 0.25s;
  }
  .av-nav-link::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0;
    height: 1px; width: 0;
    background: ${T.text};
    transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .av-nav-link:hover { color: ${T.text} !important; }
  .av-nav-link:hover::after { width: 100%; }

  /* Button hover */
  .av-btn-primary {
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
    position: relative; overflow: hidden;
  }
  .av-btn-primary::before {
    content: '';
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.08);
    transform: translateX(-100%);
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }
  .av-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 40px rgba(245,246,247,0.18) !important; }
  .av-btn-primary:hover::before { transform: translateX(0); }
  .av-btn-primary:hover .av-btn-arrow,
  .av-btn-secondary:hover .av-btn-arrow { transform: translateX(4px); }

  .av-btn-secondary {
    transition: border-color 0.25s, background 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .av-btn-secondary:hover {
    border-color: rgba(193,196,200,0.5) !important;
    background: rgba(193,196,200,0.06) !important;
    transform: translateY(-3px);
  }

  .av-btn-arrow { transition: transform 0.25s cubic-bezier(0.16,1,0.3,1); }

  /* Flow step hover */
  .av-flow-node {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, background 0.3s;
  }
  .av-flow-step:hover .av-flow-node {
    transform: scale(1.12) translateY(-4px);
    border-color: rgba(193,196,200,0.35) !important;
    background: rgba(193,196,200,0.08) !important;
  }
  .av-flow-step:hover .av-flow-node svg { stroke: ${T.text} !important; }

  /* CTA btn hover */
  .av-cta-action {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
  }
  .av-cta-action:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 16px 48px rgba(245,246,247,0.2) !important; }

  /* grid background */
  .av-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(193,196,200,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(193,196,200,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%);
    mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%);
    pointer-events: none;
  }

  @media (max-width: 960px) {
    .av-hero-code { display: none !important; }
    .av-features-grid { grid-template-columns: 1fr !important; }
    .av-flow-wrapper { flex-direction: column !important; }
    .av-flow-wrapper::before { display: none !important; }
    .av-flow-step { flex-direction: row !important; text-align: left !important; align-items: flex-start !important; gap: 20px !important; }
    .av-flow-node { margin-bottom: 0 !important; flex-shrink: 0; }
  }
  @media (max-width: 640px) {
    .av-nav-links { display: none !important; }
    .av-hero-actions { flex-direction: column !important; }
    .av-stats-grid  { flex-direction: column !important; align-items: center !important; }
    .av-footer-inner { flex-direction: column !important; }
  }
`;

/* ─── HOOK: inject global CSS once ─────────────────────── */
function useGlobalStyle(css) {
  useEffect(() => {
    if (document.getElementById("av-global-styles")) return;
    const el = document.createElement("style");
    el.id = "av-global-styles";
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}

/* ─── HOOK: nav scroll class ────────────────────────────── */
function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

/* ─── HOOK: intersection observer reveal ───────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("av-visible"); obs.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── HOOK: hero parallax glow ──────────────────────────── */
function useParallax() {
  const ref = useRef(null);
  useEffect(() => {
    const handler = () => {
      if (ref.current)
        ref.current.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.15}px))`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return ref;
}

/* ─── SVG ICONS ──────────────────────────────────────────── */
const IconEye = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconCode = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/>
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconGrid = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IconList = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/>
    <line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);
const IconClipboard = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);
const IconArrow = () => (
  <svg className="av-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M8 3l5 5-5 5"/>
  </svg>
);
const IconArrowLg = () => (
  <svg className="av-btn-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9h12M9 3l6 6-6 6"/>
  </svg>
);
const LogoMark = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" fill={T.bg}>
    <path d="M2 13 L8 3 L14 13 M4.8 9h6.4" stroke={T.bg} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

/* ─── REVEAL WRAPPER ─────────────────────────────────────── */
function Reveal({ children, delay = 0, style = {} }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`av-reveal${delay ? ` av-d${delay}` : ""}`} style={style}>
      {children}
    </div>
  );
}

/* ─── FEATURE CARD ───────────────────────────────────────── */
function FeatureCard({ icon, title, desc, badge, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="av-feature-card" style={{
        background: T.surface,
        border: `1px solid rgba(193,196,200,0.1)`,
        borderRadius: 16,
        padding: 36,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}>
        {/* glow overlay */}
        <div className="av-card-glow" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(193,196,200,0.06) 0%, transparent 60%)",
          opacity: 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }} />
        {badge && (
          <span style={{
            position: "absolute", top: 20, right: 20,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem", color: T.muted,
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: "rgba(193,196,200,0.08)",
            border: "1px solid rgba(193,196,200,0.12)",
            padding: "4px 10px", borderRadius: 99,
          }}>{badge}</span>
        )}
        <div className="av-feature-icon" style={{
          width: 48, height: 48, borderRadius: 12,
          background: "rgba(193,196,200,0.1)",
          border: "1px solid rgba(193,196,200,0.15)",
          display: "grid", placeItems: "center",
          marginBottom: 24,
        }}>{icon}</div>
        <div className="av-feature-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.2rem", fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: 10, color: T.text,
        }}>{title}</div>
        <p style={{ color: T.muted, fontSize: "0.9rem", lineHeight: 1.7 }}>{desc}</p>
      </div>
    </Reveal>
  );
}

/* ─── FLOW STEP ──────────────────────────────────────────── */
function FlowStep({ icon, num, name, desc, delay }) {
  return (
    <Reveal delay={delay} style={{ flex: 1 }}>
      <div className="av-flow-step" style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
        padding: "0 20px", cursor: "default",
      }}>
        <div className="av-flow-node" style={{
          width: 56, height: 56, borderRadius: 14,
          background: T.surface,
          border: "1px solid rgba(193,196,200,0.15)",
          display: "grid", placeItems: "center",
          position: "relative", zIndex: 1,
          marginBottom: 20,
        }}>{icon}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: T.muted, letterSpacing: "0.1em", marginBottom: 6 }}>{num}</div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: T.text, letterSpacing: "-0.01em", marginBottom: 8 }}>{name}</div>
        <div style={{ fontSize: "0.8rem", color: T.muted, lineHeight: 1.55 }}>{desc}</div>
      </div>
    </Reveal>
  );
}

/* ─── STAT ITEM ──────────────────────────────────────────── */
function StatItem({ num, label, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add("av-visible"), delay * 80);
        obs.unobserve(el);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="av-reveal" style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.04em", color: T.text, lineHeight: 1, marginBottom: 6 }}>{num}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

/* ─── HERO CODE SNIPPET ──────────────────────────────────── */
function HeroCode() {
  const Ln = ({ n }) => <span style={{ color: "rgba(123,127,133,0.4)", userSelect: "none", minWidth: 18, textAlign: "right" }}>{n}</span>;
  const Kw = ({ c }) => <span style={{ color: T.border }}>{c}</span>;
  const Fn = ({ c }) => <span style={{ color: T.text }}>{c}</span>;
  const Cm = ({ c }) => <span style={{ color: T.muted, fontStyle: "italic" }}>{c}</span>;
  const Num = ({ c }) => <span style={{ color: "#a8aaae" }}>{c}</span>;
  const line = { display: "flex", gap: 12 };

  return (
    <div className="av-hero-code av-code-anim" style={{
      position: "absolute", right: 0, top: "50%",
      transform: "translateY(-50%)",
      width: 380,
      background: T.surface,
      border: "1px solid rgba(193,196,200,0.12)",
      borderRadius: 14, padding: 24,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "0.78rem", lineHeight: 1.8,
      boxShadow: "0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(193,196,200,0.05)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(193,196,200,0.1)" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "auto", color: T.muted, fontSize: "0.7rem", letterSpacing: "0.08em" }}>binary_search.py</span>
      </div>
      <div style={line}><Ln n={1}/><Cm c="// Visualizing binary search ↓"/></div>
      <div style={line}><Ln n={2}/></div>
      <div style={line}><Ln n={3}/><Kw c="def "/><Fn c="binary_search"/>(arr, target):</div>
      <div style={line}><Ln n={4}/>&nbsp;&nbsp;<Fn c="lo"/>, <Fn c="hi"/> = <Num c="0"/>, <Fn c="len"/>(arr) - <Num c="1"/></div>
      <div style={line}><Ln n={5}/>&nbsp;&nbsp;<Kw c="while "/><Fn c="lo"/> &lt;= <Fn c="hi"/>:</div>
      <div style={line}><Ln n={6}/>&nbsp;&nbsp;&nbsp;&nbsp;<Fn c="mid"/> = (<Fn c="lo"/> + <Fn c="hi"/>) // <Num c="2"/></div>
      <div style={line}><Ln n={7}/>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="if "/><Fn c="arr"/>&#91;mid&#93; == target:</div>
      <div style={line}><Ln n={8}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="return "/><Fn c="mid"/></div>
      <div style={line}><Ln n={9}/>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="elif "/><Fn c="arr"/>&#91;mid&#93; &lt; target:</div>
      <div style={line}><Ln n={10}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Fn c="lo"/> = <Fn c="mid"/> + <Num c="1"/></div>
      <div style={line}><Ln n={11}/>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="else"/>: <Fn c="hi"/> = <Fn c="mid"/> - <Num c="1"/></div>
      <div style={line}><Ln n={12}/>&nbsp;&nbsp;<Kw c="return "/><Num c="-1"/><span className="av-cursor"/></div>
    </div>
  );
}

/* ─── SECTION HEADER ─────────────────────────────────────── */
function SectionHeader({ label, title, sub }) {
  return (
    <>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", fontWeight: 400, color: T.muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "inline-block", width: 24, height: 1, background: T.muted }} />
        {label}
      </div>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: 16, color: T.text }}
        dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p style={{ color: T.muted, maxWidth: 500, marginBottom: 64, fontSize: "1rem", lineHeight: 1.7 }}>{sub}</p>}
    </>
  );
}

/* ─── SMOOTH SCROLL ──────────────────────────────────────── */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function AlgoVista() {
  useGlobalStyle(GLOBAL_CSS);
  const scrolled   = useNavScroll();
  const glowRef    = useParallax();
  const ctaRef     = useReveal();

  return (
    <div style={{ background: T.bg, color: T.text, fontFamily: "'Instrument Sans', sans-serif", position: "relative", overflowX: "hidden" }}>

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "18px 0",
        background: scrolled ? "rgba(43,46,51,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(193,196,200,0.12)" : "1px solid transparent",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.35rem", letterSpacing: "-0.02em", color: T.text, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, background: T.text, borderRadius: 6, display: "grid", placeItems: "center", flexShrink: 0 }}>
              <LogoMark />
            </div>
            AlgoVista
          </a>
          <ul className="av-nav-links" style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none" }}>
            {["Home", "Topics", "Roadmap", "About"].map((item, i) => (
              <li key={item}>
                <a className="av-nav-link" onClick={() => scrollTo(["hero","features","flow","cta"][i])} href="#"
                  style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: T.muted, textDecoration: "none", letterSpacing: "0.02em" }}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a onClick={() => scrollTo("cta")} href="#" style={{
                background: T.text, color: T.bg,
                padding: "8px 20px", borderRadius: 8,
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 600, fontSize: "0.875rem",
                textDecoration: "none", letterSpacing: "0.01em",
                transition: "background 0.25s, transform 0.2s",
                display: "inline-block",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#e8eaed"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = T.text; e.currentTarget.style.transform = ""; }}
              >Get Started</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
        <div className="av-hero-grid" />
        <div ref={glowRef} style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(193,196,200,0.07) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <div className="av-h0" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: T.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 28 }}>
              <span className="av-eyebrow-dot" />
              Visual Interview Preparation
            </div>

            <h1 className="av-h1" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", color: T.text, marginBottom: 24 }}>
              Master Coding Interviews
              <span style={{ display: "block", color: "transparent", WebkitTextStroke: "1px rgba(193,196,200,0.5)" }}>Through Visual</span>
              Problem Solving
            </h1>

            <p className="av-h2" style={{ fontSize: "1.1rem", lineHeight: 1.7, color: T.muted, maxWidth: 540, marginBottom: 44 }}>
              Understand how algorithms work internally with step-by-step visual explanations. Not just solutions — intuition.
            </p>

            <div className="av-h3 av-hero-actions" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a className="av-btn-primary" onClick={() => scrollTo("features")} href="#"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: T.text, color: T.bg, fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", padding: "14px 28px", borderRadius: 10, textDecoration: "none", letterSpacing: "0.01em", boxShadow: "0 4px 24px rgba(245,246,247,0.12)" }}>
                Explore Topics <IconArrow />
              </a>
              <a className="av-btn-secondary" onClick={() => scrollTo("flow")} href="#"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: T.text, fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500, fontSize: "0.9rem", padding: "14px 28px", borderRadius: 10, textDecoration: "none", letterSpacing: "0.01em", border: "1px solid rgba(193,196,200,0.25)" }}>
                View Roadmap <IconArrow />
              </a>
            </div>
          </div>
        </div>

        <HeroCode />
      </section>

      {/* ── STATS ───────────────────────────────────────── */}
      <div style={{ padding: "60px 0", borderTop: "1px solid rgba(193,196,200,0.08)", borderBottom: "1px solid rgba(193,196,200,0.08)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px" }}>
          <div className="av-stats-grid" style={{ display: "flex", justifyContent: "space-around", gap: 40, flexWrap: "wrap" }}>
            <StatItem num="200+" label="Problems Visualized" delay={0} />
            <StatItem num="18"   label="Core Topic Areas"    delay={1} />
            <StatItem num="Step-by-Step" label="Visual Breakdowns" delay={2} />
            <StatItem num="O(1)" label="Complexity Clarity"  delay={3} />
          </div>
        </div>
      </div>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section id="features" style={{ padding: "96px 0", background: "linear-gradient(180deg, #2b2e33 0%, #2e3138 50%, #2b2e33 100%)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px" }}>
          <SectionHeader label="What We Offer" title="Built for Real<br/>Interview Preparation" sub="Everything you need to understand algorithms deeply, not just recognize patterns." />
          <div className="av-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <FeatureCard delay={0} icon={<IconEye  />} badge="Core"     title="Visual Algorithm Explanations"    desc="Watch algorithms run in real time with animated, frame-by-frame visualizations. Build true intuition before reading a single line of code." />
            <FeatureCard delay={1} icon={<IconTarget/>} badge="Strategy" title="Interview-Focused Thinking"        desc="Learn how to communicate your thought process clearly. Each problem includes interview notes and common follow-up questions." />
            <FeatureCard delay={2} icon={<IconCode  />} badge="Code"     title="Clean Optimized Solutions"         desc="Industry-grade solutions with thoughtful variable naming, inline comments, and multiple approaches from brute-force to optimal." />
            <FeatureCard delay={3} icon={<IconChart />} badge="Analysis" title="Time & Space Complexity Analysis"  desc="Understand the why behind Big O, not just the what. Detailed derivations with visual representations of how complexity grows." />
          </div>
        </div>
      </section>

      {/* ── LEARNING FLOW ───────────────────────────────── */}
      <section id="flow" style={{ padding: "96px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px" }}>
          <SectionHeader label="How It Works" title="Your Learning<br/>Journey" sub="A structured path from zero to confident in every interview." />

          <div className="av-flow-wrapper" style={{ display: "flex", alignItems: "stretch", gap: 0, position: "relative" }}>
            {/* connecting line */}
            <div style={{ position: "absolute", top: 28, left: 48, right: 48, height: 1, background: "linear-gradient(90deg, transparent, rgba(193,196,200,0.2) 10%, rgba(193,196,200,0.2) 90%, transparent)" }} />

            <FlowStep delay={0} icon={<IconHome     />} num="01" name="Landing"        desc="Explore the platform and choose your starting difficulty" />
            <FlowStep delay={1} icon={<IconGrid     />} num="02" name="Topics"         desc="Pick from Arrays, Trees, Graphs, DP, and 14 more core areas" />
            <FlowStep delay={2} icon={<IconList     />} num="03" name="Problems"       desc="Select a curated problem with difficulty rating and hints" />
            <FlowStep delay={3} icon={<IconPlay     />} num="04" name="Visualization"  desc="Step through the algorithm frame-by-frame with annotated states" />
            <FlowStep delay={4} icon={<IconClipboard/>} num="05" name="Interview Notes" desc="Review key insights, edge cases, and what interviewers actually look for" />
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section id="cta" style={{ padding: "120px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(193,196,200,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
          <div ref={ctaRef} className="av-reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: T.muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>Ready to begin?</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: T.text, marginBottom: 20 }}>
              Start Preparing Smarter for Interviews
            </h2>
            <p style={{ color: T.muted, fontSize: "1rem", marginBottom: 44, lineHeight: 1.7 }}>
              Join developers who chose to truly understand algorithms — not just grind through them.
            </p>
            <a href="#" className="av-cta-btn av-cta-action" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: T.text, color: T.bg, fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: "1rem", padding: "16px 36px", borderRadius: 12, textDecoration: "none", letterSpacing: "0.01em" }}>
              Start for Free <IconArrowLg />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{ padding: "36px 0", borderTop: "1px solid rgba(193,196,200,0.08)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px" }}>
          <div className="av-footer-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <a href="#" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: T.text, letterSpacing: "-0.02em", textDecoration: "none" }}>AlgoVista</a>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: T.muted, letterSpacing: "0.04em" }}>© 2025 AlgoVista · Built for learners</span>
            <ul style={{ display: "flex", gap: 24, listStyle: "none" }}>
              {["Privacy", "Terms", "GitHub"].map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize: "0.8rem", color: T.muted, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = T.text}
                    onMouseLeave={e => e.currentTarget.style.color = T.muted}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
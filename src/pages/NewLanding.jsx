import { useState, useEffect, useRef } from "react";

// ─── TYPE DEFINITIONS ───────────────────────────────────────
const ANIMATIONS = {
  slideUp: "slideUp",
  fadeInRight: "fadeInRight",
  heroIn0: "heroIn0",
  codeAnim: "av-code-anim"
};

// ─── HOOKS ──────────────────────────────────────────────────
function useGlobalStyle() {
  useEffect(() => {
    if (document.getElementById("av-global-styles")) return;
    const style = document.createElement("style");
    style.id = "av-global-styles";
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
  }, []);
}

function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("av-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

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

// ─── UTILITY FUNCTIONS ──────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── SVG ICONS (using Tailwind theme colors) ────────────────
const IconEye = () => (
  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

// Add other icons similarly...

// ─── GLOBAL CSS (Updated to use theme variables) ────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  
  html { scroll-behavior: smooth; }
  
  body {
    @apply bg-bg text-text font-instrument overflow-x-hidden;
  }

  /* Animations */
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(var(--spacing-12)); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* All your existing animations using theme vars */
  .av-reveal { @apply opacity-0 translate-y-[var(--spacing-12)]; }
  .av-reveal.av-visible { animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }

  /* Feature cards */
  .av-feature-card {
    @apply transition-all duration-300 border-border/10 bg-surface-dark rounded-[var(--radius-lg)] p-[var(--spacing-9)] relative overflow-hidden cursor-default;
    border-width: 1px;
  }
  .av-feature-card:hover {
    @apply translate-y-[-6px] border-border/28 shadow-2xl shadow-black/30 border;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(var(--color-border-rgb), 0.08) !important;
  }

  /* All other utility classes using @apply and theme vars */
`;

// ─── REUSABLE COMPONENTS ────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useReveal();
  return (
    <div 
      ref={ref} 
      className={`av-reveal ${delay ? `av-d${delay}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function FeatureCard({ icon, title, desc, badge, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="av-feature-card group">
        <div className="av-card-glow absolute inset-0 bg-gradient-to-t from-border/6 via-transparent to-transparent opacity-0 transition-opacity duration-400 pointer-events-none rounded-[var(--radius-lg)]" />
        {badge && (
          <span className="absolute top-5 right-5 font-mono text-[0.65rem] uppercase bg-border/8 border border-border/12 px-2.5 py-1 rounded-full text-muted">
            {badge}
          </span>
        )}
        <div className="av-feature-icon w-12 h-12 bg-border/10 border border-border/15 rounded-[var(--radius-3)] grid place-items-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
          {icon}
        </div>
        <h3 className="av-feature-title font-syne text-lg font-[var(--font-weight-700)] tracking-[-0.02em] mb-[10px] text-text inline-block relative">
          {title}
        </h3>
        <p className="text-muted text-[0.9rem] leading-[1.7]">{desc}</p>
      </div>
    </Reveal>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────
export default function AlgoVista() {
  useGlobalStyle();
  const scrolled = useNavScroll();
  const glowRef = useParallax();
  const ctaRef = useReveal();

  return (
    <div className="bg-bg text-text font-instrument relative overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed inset-x-0 top-0 z-[100] px-8 py-[18px] transition-all duration-400 ${
        scrolled 
          ? 'bg-primary/72 backdrop-blur-xl backdrop-saturate-140 border-b border-border/12' 
          : 'border-transparent'
      }`}>
        {/* Logo & Nav Links */}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center py-[120px] pb-20 relative overflow-hidden">
        <div className="av-hero-grid absolute inset-0 bg-grid-pattern" />
        <div 
          ref={glowRef}
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-r from-border/7 via-transparent to-transparent -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none"
        />
        {/* Hero content */}
      </section>

      {/* All other sections using Tailwind + theme variables */}
    </div>
  );
}

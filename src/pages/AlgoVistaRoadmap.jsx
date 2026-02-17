import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Play,
  Target,
  Brain,
  Clock,
  Award,
  BookOpen,
  Zap,
  Github,
  Twitter,
  ArrowRight,
  CheckCircle,
  Star,
  Terminal,
  ChevronRight,
  MapPin,
  TrendingUp,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const roadmapSteps = [
  {
    phase: "Week 1",
    title: "Array Mastery",
    desc: "Build core sliding window + two pointers intuition. Solve 50+ problems.",
    topics: ["Arrays", "Hashing", "Two Pointers", "Sliding Window"],
    duration: "Week 1",
    icon: () => <Target size={20} color="#f5f6f7" />,
  },
  {
    phase: "Week 2",
    title: "Stack & Tree Confidence",
    desc: "Master monotonic stack + tree traversal. Unlock medium problems.",
    topics: ["Stack", "Binary Search", "Linked List", "Trees"],
    duration: "Week 2",
    icon: () => <TrendingUp size={20} color="#f5f6f7" />,
  },
  {
    phase: "Week 3",
    title: "DP Foundation",
    desc: "1D/2D DP patterns that appear in 80% of FAANG interviews.",
    topics: ["Dynamic Programming", "Greedy"],
    duration: "Week 3",
    icon: () => <Award size={20} color="#f5f6f7" />,
  },
  {
    phase: "Week 4",
    title: "Mock Interviews",
    desc: "Live code Top 50 under time pressure. Perfect your interview delivery.",
    topics: ["Graphs", "Advanced", "Company Tagged"],
    duration: "Week 4",
    icon: () => <Zap size={20} color="#f5f6f7"   />,
  },
];

export default function AlgoVistaRoadmap() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-[#2b2e33] overflow-x-hidden"
      style={{ fontFamily: '"Syne", sans-serif' }}
    >
      {/* ── dot-grid texture ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c1c4c866 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* ════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex items-center pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-7"
            >
              {/* Badge */}
              <motion.div variants={fade} custom={0}>
                <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-4 py-2">
                  <MapPin size={12} className="text-[#2b2e33]" />
                  <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                    Structured Learning Path
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fade} custom={1}>
                <h1 className="text-[58px] font-extrabold leading-[1.06] tracking-[-2px] m-0">
                  Your Roadmap to
                  <br />
                  <span className="text-[#7b7f85]">Algorithm Mastery</span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.div variants={fade} custom={2}>
                <p className="text-[16px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
                  Follow a proven 4-phase journey from basics to
                  interview-ready. Visualize progress, track milestones, and
                  land your dream job.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fade}
                custom={3}
                className="flex items-center gap-3 pt-1"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#2b2e33] text-[#f5f6f7] text-[14px] font-bold rounded-xl
                    shadow-[0_4px_20px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}
                >
                  <TrendingUp size={15} /> Start Journey{" "}
                  <ArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#2b2e33] text-[14px] font-semibold
                    border border-[#c1c4c8] rounded-xl hover:bg-[#f5f6f7] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}
                >
                  <Play size={14} /> View Progress
                </motion.button>
              </motion.div>

              {/* Trust */}
              <motion.div
                variants={fade}
                custom={4}
                className="flex items-center gap-6 pt-1"
              >
                {["4 Phases", "500+ Problems", "Proven Success"].map(
                  (label) => (
                    <div key={label} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-green-500" />
                      <span className="text-[12px] font-semibold text-[#7b7f85]">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </motion.div>
            </motion.div>

            {/* Right — Roadmap Preview */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(43,46,51,0.10)] p-8">
                <div className="space-y-6">
                  {roadmapSteps.slice(0, 3).map((step, i) => (
                    <motion.div
                      key={step.phase}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center">
                        <step.icon size={18} color="#f5f6f7" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[14px] font-bold text-[#2b2e33]">
                          {step.title}
                        </div>
                        <div className="text-[12px] text-[#7b7f85]">
                          {step.duration}
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-[#c1c4c8]" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#c1c4c8]">
                  <div className="text-[12px] font-semibold text-[#7b7f85] text-center">
                    Continue to Phase 4...
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ ROADMAP TIMELINE ══════════════════════ */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24  ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 lg:mb-20 text-center"
          >
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2 bg-[var(--color-bg)] border border-[var(--color-muted)] rounded-lg px-4 py-2 mb-5 inline-block">
                <TrendingUp
                  size={11}
                  className="text-[var(--color-secondary)]"
                />
                <span className="text-[11px] font-bold text-[var(--color-secondary)] tracking-[1px] uppercase">
                  30-Day Interview Plan
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={fade}
              className="text-[32px] sm:text-[38px] lg:text-[42px] font-black tracking-[-1.2px] m-0 leading-tight text-[var(--color-text)]"
            >
              From Zero to FAANG Offer
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-[15px] text-[var(--color-text-muted)] mt-4 font-medium leading-relaxed max-w-[480px] mx-auto"
            >
              Master LeetCode patterns phase-by-phase. Each step builds
              interview muscle memory.
            </motion.p>
          </motion.div>

          {/* Animated Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-[var(--color-primary)]/20 via-[var(--color-primary)]/40 to-[var(--color-primary)]/20 h-full z-0" />

            {/* Mobile Vertical Stack */}
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
              {roadmapSteps.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  {/* Step Number Circle */}
                  <div className="absolute -left-6 sm:-left-8 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[var(--color-bg)] to-[var(--color-card)] border-4 border-[var(--color-surface)] rounded-2xl shadow-xl flex items-center justify-center z-20 lg:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[var(--color-primary)] rounded-xl grid place-items-center font-bold text-xs text-[#f5f6f7]">
                      {i + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-[var(--color-bg)] border border-[var(--color-muted)]/50 hover:border-[var(--color-primary)]/70 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(43,46,51,0.06)] hover:shadow-[0_16px_48px_rgba(43,46,51,0.12)] hover:-translate-y-2 transition-all duration-500 relative z-10 group-hover:bg-[var(--color-card)]/50 backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--color-primary)] to-[#3d4147] rounded-xl flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0 shadow-lg">
                        <step.icon
                          size={18}
                          className="sm:size-20"
                          color="#f5f6f7"
                        />
                      </div>
                      <div>
                        <div className="text-[11px] sm:text-xs font-bold text-[var(--color-secondary)] uppercase tracking-[1px]">
                          {step.phase}
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-black text-[var(--color-text)] mt-1 leading-tight">
                          {step.title}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed font-medium mb-6">
                      {step.desc}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {step.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1.5 bg-[var(--color-surface)]/80 border border-[var(--color-muted)]/50 hover:border-[var(--color-primary)]/70 rounded-lg text-xs sm:text-sm font-semibold text-[var(--color-text)] transition-all duration-200 hover:bg-[var(--color-bg)]"
                        >
                          {topic}
                        </span>
                      ))}
                      {step.topics.length > 3 && (
                        <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-[var(--color-secondary)]">
                          +{step.topics.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] uppercase tracking-[0.8px]">
                      <Clock
                        size={14}
                        className="text-[var(--color-secondary)]"
                      />
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ CTA ═══════════════════════════════════ */}
      <section className="relative z-10 py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-7"
          >
            <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-5 py-2">
              <CheckCircle size={12} className="text-green-500" />
              <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                Track Your Progress — Free Forever
              </span>
            </div>

            <h2 className="text-[50px] font-extrabold tracking-[-1.5px] leading-[1.08] m-0">
              Ready to Start?
              <br />
              <span className="text-[#7b7f85]">Begin Your Journey</span>
            </h2>

            <p className="text-[15px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
              Join thousands mastering algorithms. Visualize, learn, and conquer
              interviews.
            </p>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-10 py-4 bg-[#2b2e33] text-[#f5f6f7] text-[15px] font-bold rounded-2xl
                shadow-[0_6px_32px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
              style={{ fontFamily: '"Syne",sans-serif' }}
            >
              <Zap size={17} /> Launch Roadmap <ArrowRight size={15} />
            </motion.button>

            <div className="flex items-center gap-7 pt-1">
              {["No signup needed", "All phases included", "Forever free"].map(
                (t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-green-500" />
                    <span className="text-[12px] font-semibold text-[#7b7f85]">
                      {t}
                    </span>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

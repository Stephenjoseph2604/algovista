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
  Eye,
  ChevronRight,
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

const topics = [
  {
    name: "Arrays & Hashing",
    problems: 45,
    desc: "Master array manipulations, hash tables for fast lookups, and common patterns like prefix sums.",
  },
  {
    name: "Two Pointers",
    problems: 28,
    desc: "Efficiently solve problems with two pointers moving towards each other or in the same direction.",
  },
  {
    name: "Stack",
    problems: 22,
    desc: "Use stacks for parentheses validation, expression evaluation, and monotonic stack problems.",
  },
  {
    name: "Binary Search",
    problems: 15,
    desc: "Apply binary search on sorted arrays, matrices, and rotated arrays for optimal search.",
  },
  {
    name: "Sliding Window",
    problems: 18,
    desc: "Optimize subarray problems with fixed or variable size windows for maximum efficiency.",
  },
  {
    name: "Linked List",
    problems: 25,
    desc: "Handle singly and doubly linked lists, cycle detection, and reversal techniques.",
  },
  {
    name: "Trees",
    problems: 32,
    desc: "Traverse binary trees with DFS/BFS, balance trees, and solve tree-specific challenges.",
  },
  {
    name: "Dynamic Programming",
    problems: 40,
    desc: "Break down complex problems into subproblems with memoization and tabulation.",
  },
];

export default function AlgoVistaTopics() {
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

      {/* ════════════════════════════════ NAVBAR ════════════════════════════════ */}
      <nav
        className={`fixed top-3 left-4 right-4 z-50 rounded-2xl backdrop-blur-xl transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 border border-[#c1c4c8] shadow-[0_4px_24px_rgba(43,46,51,0.09)]"
            : "bg-white/75 border border-[#e8e9ea] shadow-[0_2px_12px_rgba(43,46,51,0.04)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#2b2e33] rounded-xl grid place-items-center">
              <Code2 size={17} color="#f5f6f7" />
            </div>
            <span className="font-extrabold text-[17px] tracking-tight">
              AlgoVista
            </span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-7">
              {["Topics", "Solutions", "Roadmap", "Patterns"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-[13px] font-semibold text-[#7b7f85] hover:text-[#2b2e33] transition-colors duration-200 no-underline"
                >
                  {l}
                </a>
              ))}
            </div>
            <button
              className="px-5 py-2 bg-[#2b2e33] text-[#f5f6f7] text-[13px] font-bold rounded-xl hover:bg-[#3d4147] transition-colors"
              style={{ fontFamily: '"Syne",sans-serif' }}
            >
              Start Free →
            </button>
          </div>
        </div>
      </nav>

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
                  <Target size={12} className="text-[#2b2e33]" />
                  <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                    Explore Topics
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fade} custom={1}>
                <h1 className="text-[58px] font-extrabold leading-[1.06] tracking-[-2px] m-0">
                  Dive into
                  <br />
                  <span className="text-[#7b7f85]">Algorithm Topics</span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.div variants={fade} custom={2}>
                <p className="text-[16px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
                  Browse curated topics with problem counts and descriptions.
                  Visualize solutions and track your progress across 500+
                  problems.
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
                  <Terminal size={15} /> Browse Topics <ArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#2b2e33] text-[14px] font-semibold
                    border border-[#c1c4c8] rounded-xl hover:bg-[#f5f6f7] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}
                >
                  <Play size={14} /> Watch Intro
                </motion.button>
              </motion.div>

              {/* Trust */}
              <motion.div
                variants={fade}
                custom={4}
                className="flex items-center gap-6 pt-1"
              >
                {["8 Core Topics", "500+ Problems", "Visual Learning"].map(
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

            {/* Right — Topics Preview */}
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
                <div className="space-y-4">
                  {topics.slice(0, 4).map((topic, i) => (
                    <motion.div
                      key={topic.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-4 bg-white border border-[#c1c4c8] rounded-xl"
                    >
                      <div>
                        <div className="text-[14px] font-bold text-[#2b2e33]">
                          {topic.name}
                        </div>
                        <div className="text-[12px] text-[#7b7f85]">
                          {topic.problems} problems
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-[#c1c4c8]" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#c1c4c8]">
                  <div className="text-[12px] font-semibold text-[#7b7f85] text-center">
                    View all topics below...
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ TOPICS GRID ═══════════════════════════ */}
      <section className="relative z-10 py-24 bg-[#f5f6f7] border-y border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2 bg-white border border-[#c1c4c8] rounded-lg px-4 py-2 mb-5">
                <BookOpen size={11} className="text-[#7b7f85]" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                  All Topics
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={fade}
              className="text-[40px] font-extrabold tracking-[-1px] m-0"
            >
              Explore by Category
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-[15px] text-[#7b7f85] mt-4 font-medium leading-relaxed max-w-[500px] mx-auto"
            >
              Click "View" to dive into problems, visualizations, and detailed
              explanations for each topic.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-[#c1c4c8] rounded-2xl p-6 shadow-[0_2px_8px_rgba(43,46,51,0.05)]
                  hover:border-[#2b2e33] hover:shadow-[0_14px_40px_rgba(43,46,51,0.10)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#f5f6f7] border border-[#c1c4c8] rounded-xl grid place-items-center">
                    <Target size={20} className="text-[#2b2e33]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#7b7f85] bg-[#f5f6f7] border border-[#c1c4c8] px-3 py-1 rounded-md tracking-[0.5px] uppercase">
                    {topic.problems} Problems
                  </span>
                </div>
                <h3 className="text-[16px] font-extrabold text-[#2b2e33] mb-3 tracking-tight m-0">
                  {topic.name}
                </h3>
                <p className="text-[13px] text-[#7b7f85] leading-relaxed font-medium m-0 mb-6">
                  {topic.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#2b2e33] text-[#f5f6f7] text-[13px] font-bold rounded-xl
                    hover:bg-[#3d4147] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}
                >
                  <Eye size={14} /> View Problems
                </motion.button>
              </motion.div>
            ))}
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
                Start Learning — Free Forever
              </span>
            </div>

            <h2 className="text-[50px] font-extrabold tracking-[-1.5px] leading-[1.08] m-0">
              Ready to Conquer
              <br />
              <span className="text-[#7b7f85]">Algorithms?</span>
            </h2>

            <p className="text-[15px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
              Pick a topic, visualize solutions, and build your skills. Join
              10K+ developers on their journey.
            </p>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-10 py-4 bg-[#2b2e33] text-[#f5f6f7] text-[15px] font-bold rounded-2xl
                shadow-[0_6px_32px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
              style={{ fontFamily: '"Syne",sans-serif' }}
            >
              <Zap size={17} /> Explore Topics <ArrowRight size={15} />
            </motion.button>

            <div className="flex items-center gap-7 pt-1">
              {["No signup needed", "All topics free", "Visual guides"].map(
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

      {/* ════════════════════════════════ FOOTER ════════════════════════════════ */}
      <footer className="relative z-10 bg-[#f5f6f7] border-t border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="flex items-center justify-between pb-8 border-b border-[#c1c4c8]">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#2b2e33] rounded-xl grid place-items-center">
                <Code2 size={16} color="#f5f6f7" />
              </div>
              <div>
                <div className="text-[16px] font-extrabold tracking-tight">
                  AlgoVista
                </div>
                <div className="text-[11px] text-[#c1c4c8] font-semibold">
                  Visual Interview Prep
                </div>
              </div>
            </div>

            {/* Links + social */}
            <div className="flex items-center gap-10">
              <div className="flex gap-7">
                {[
                  "Topics",
                  "Solutions",
                  "Roadmap",
                  "Blog",
                  "Privacy",
                  "Terms",
                ].map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-[13px] text-[#7b7f85] hover:text-[#2b2e33] transition-colors duration-200 no-underline"
                  >
                    {l}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-[#7b7f85] hover:text-[#2b2e33] transition-colors duration-200"
                >
                  <Github size={16} />
                </a>
                <a
                  href="#"
                  className="text-[#7b7f85] hover:text-[#2b2e33] transition-colors duration-200"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

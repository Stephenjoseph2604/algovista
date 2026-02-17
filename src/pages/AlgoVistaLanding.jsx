import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Play,
  Target,
  Brain,
  BookOpen,
  Zap,
  Github,
  Twitter,
  ArrowRight,
  CheckCircle,
  Star,
  Terminal,
  Menu,
  MessageCircle,
  TrendingUp,
  Clock,
  BarChart3,
  Award,
  Linkedin,
  Youtube,
} from "lucide-react";
import TopicsCarousel from "../components/TopicsCarousel";

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

const codeLines = [
  {
    ln: "01",
    indent: 0,
    code: "def binary_search(arr, target):",
    accent: false,
  },
  { ln: "02", indent: 1, code: "lo, hi = 0, len(arr) − 1", accent: false },
  { ln: "03", indent: 1, code: "while lo <= hi:", accent: true },
  { ln: "04", indent: 2, code: "mid = (lo + hi) // 2", accent: false },
  { ln: "05", indent: 2, code: "if arr[mid] == target:", accent: false },
  { ln: "06", indent: 3, code: "return mid", accent: false },
];

const topics = [
  { name: "Arrays & Hashing", problems: 45 },
  { name: "Two Pointers", problems: 28 },
  { name: "Stack", problems: 22 },
  { name: "Binary Search", problems: 15 },
  { name: "Sliding Window", problems: 18 },
  { name: "Linked List", problems: 25 },
  { name: "Trees", problems: 32 },
  { name: "Dynamic Programming", problems: 40 },
];

{
  /* Features Data */
}
const features = [
  {
    icon: Target,
    title: "Top 150 Questions",
    desc: "Curated LeetCode problems that appear in 90%+ of FAANG interviews - no filler content.",
    badge: "NeetCode 150",
  },
  {
    icon: TrendingUp,
    title: "Company Tagged",
    desc: "Filter by Google, Amazon, Microsoft - see exactly what each company asks most.",
    badge: "6 Companies",
  },
  {
    icon: Clock,
    title: "Optimal Solutions",
    desc: "Every problem solved with the exact approach interviewers expect - O(n) not O(n²).",
    badge: "100% Optimal",
  },
  {
    icon: Brain,
    title: "14 Patterns Mastered",
    desc: "Sliding Window, Two Pointers, Fast & Slow, Merge Intervals - all interview patterns covered.",
    badge: "14 Patterns",
  },
  {
    icon: MessageCircle,
    title: "Interview Scripts",
    desc: "Exact phrasing to explain your approach - sound like a senior engineer instantly.",
    badge: "Live Coded",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Mock interview scores, pattern mastery, company readiness - know when you're interview-ready.",
    badge: "Analytics",
  },
];

const stats = [
  { value: "500+", label: "LeetCode Problems", icon: Code2 },
  { value: "15K+", label: "Interviews Cracked", icon: Award },
  { value: "14", label: "Patterns Mastered", icon: Brain },
  { value: "98%", label: "Success Rate", icon: TrendingUp },
];

export default function AlgoVistaLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
        className={`fixed top-3 left-4 right-4 z-50 bg-transparent rounded-2xl backdrop-blur-xl transition-all duration-300
    ${
      scrolled
        ? " border border-[#c1c4c8] shadow-[0_4px_24px_rgba(43,46,51,0.09)]"
        : " border border-[#e8e9ea] shadow-[0_2px_12px_rgba(43,46,51,0.04)]"
    }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo - Always visible */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#2b2e33] rounded-xl grid place-items-center">
              <Code2 size={17} color="#f5f6f7" />
            </div>
            <span className="font-extrabold text-[17px] tracking-tight">
              AlgoPrep
            </span>
          </div>

          {/* Desktop Nav + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-7">
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl hover:bg-[#f5f6f7] transition-colors"
            >
              <Menu size={20} className="text-[#7b7f85]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-[#c1c4c8] bg-transparent backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {["Topics", "Solutions", "Roadmap", "Patterns"].map((l) => (
                <a
                  key={l}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="block text-[15px] bg-transparent font-semibold text-[#7b7f85] hover:text-[#2b2e33] py-2 transition-colors no-underline border-b border-[#f5f6f7] last:border-b-0"
                >
                  {l}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setMobileOpen(false)}
                className="w-full px-5 py-3 bg-[#2b2e33] text-[#f5f6f7] text-[14px] font-bold rounded-xl hover:bg-[#3d4147] transition-colors"
                style={{ fontFamily: '"Syne",sans-serif' }}
              >
                Start Free →
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex items-center pt-28 pb-20 ">
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
                <div className="inline-flex items-center gap-2  border border-[#c1c4c8] rounded-lg px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                    Live · 500+ Problems Solved
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fade} custom={1}>
                <h1 className="text-[48px] font-extrabold leading-[1.08] tracking-[-1.5px] m-0">
                  Ace
                  <br />
                  <span className="inline-block">
                    {Array.from("Interviews.").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[#7b7f85] inline-block"
                        style={{ display: "inline-block" }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                  <br />
                  Land the Job.
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.div variants={fade} custom={2}>
                <p className="text-[16px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
                  Master topic-wise LeetCode questions with detailed solutions
                  and approaches. Understand <em>exactly why</em> each solution
                  works — not just the code.
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
                  <Terminal size={15} /> Start Practicing{" "}
                  <ArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#2b2e33] text-[14px] font-semibold
              border border-[#c1c4c8] rounded-xl hover:bg-[#f5f6f7] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}
                >
                  <Play size={14} /> Watch Solution
                </motion.button>
              </motion.div>

              {/* Trust */}
              <motion.div
                variants={fade}
                custom={4}
                className="flex items-center gap-6 pt-1"
              >
                {["Free Forever", "10K+ Developers"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-green-500" />
                    <span className="text-[12px] font-semibold text-[#7b7f85]">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Terminal Card (UNCHANGED) */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(43,46,51,0.10)]">
                {/* Title bar */}
                <div className="flex items-center gap-3 px-6 py-4 bg-[#f5f6f7] border-b border-[#c1c4c8]">
                  <div className="flex gap-2">
                    {["#f87171", "#fbbf24", "#4ade80"].map((c) => (
                      <div
                        key={c}
                        className="w-3 h-3 rounded-full"
                        style={{ background: c, opacity: 0.85 }}
                      />
                    ))}
                  </div>
                  <span className="ml-auto text-[11px] font-bold text-[#c1c4c8] tracking-[0.8px] uppercase">
                    two_sum.py
                  </span>
                </div>

                {/* Code */}
                <div className="p-7 font-mono">
                  <div className="space-y-1">
                    {codeLines.map(({ ln, indent, code, accent }) => (
                      <div
                        key={ln}
                        className={`flex gap-5 px-3 py-1.5 rounded-lg
                    ${
                      accent
                        ? "bg-[#2b2e33]/[0.06] border-l-[2px] border-[#2b2e33]"
                        : "border-l-[2px] border-transparent"
                    }`}
                      >
                        <span className="w-6 text-right text-[11px] text-[#c1c4c8] select-none flex-shrink-0">
                          {ln}
                        </span>
                        <span
                          className={`text-[13px] leading-relaxed ${accent ? "text-[#2b2e33] font-bold" : "text-[#7b7f85] font-medium"}`}
                          style={{ paddingLeft: indent * 20 }}
                        >
                          {code}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Run row */}
                  <div className="mt-6 flex items-center justify-between bg-[#f5f6f7] border border-[#c1c4c8] rounded-xl px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-[12px] font-semibold text-[#7b7f85]">
                        Ready to run
                      </span>
                    </div>
                    <button
                      className="flex items-center gap-1.5 px-4 py-1.5 bg-[#2b2e33] text-[#f5f6f7] text-[11px] font-bold rounded-lg"
                      style={{ fontFamily: '"Syne",sans-serif' }}
                    >
                      <Play size={10} /> Run
                    </button>
                  </div>
                </div>

                {/* Stats strip */}
                <div className="flex border-t border-[#c1c4c8] bg-[#f5f6f7]">
                  {[
                    { label: "Time", value: "O(n)" },
                    { label: "Space", value: "O(1)" },
                    { label: "Steps", value: "5" },
                  ].map(({ label, value }, i) => (
                    <div
                      key={label}
                      className={`flex-1 px-6 py-4 ${i < 2 ? "border-r border-[#c1c4c8]" : ""}`}
                    >
                      <div className="text-[10px] font-bold text-[#c1c4c8] uppercase tracking-[0.8px]">
                        {label}
                      </div>
                      <div className="text-[15px] font-extrabold text-[#2b2e33] mt-1">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ TOPICS STRIP ══════════════════════════ */}

      <TopicsCarousel />

      {/* ════════════════════════════════ HOW IT WORKS ══════════════════════════ */}
      <section className="relative z-10 py-24   border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2  border border-[#c1c4c8] rounded-lg px-4 py-2 mb-5">
                <Code2 size={11} className="text-[#7b7f85]" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                  Interview-Focused Learning
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={fade}
              className="text-[40px] font-extrabold tracking-[-1px] m-0"
            >
              Master Every Interview Question
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-[15px] text-[#7b7f85] mt-4 font-medium leading-relaxed max-w-[500px]"
            >
              Topic-wise LeetCode problems with optimal solutions, detailed
              approaches, and exact interview explanations used by FAANG
              engineers.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Code panel - Two Sum Solution */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#c1c4c8] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(43,46,51,0.07)]"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-[#f5f6f7] border-b border-[#c1c4c8]">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[0.6px] uppercase">
                  two_sum.py — Optimal Solution (O(n))
                </span>
              </div>
              <div className="p-6 font-mono">
                {[
                  {
                    ln: "1",
                    code: "def twoSum(nums, target):",
                    active: false,
                  },
                  {
                    ln: "2",
                    code: "    num_map = {}",
                    active: true,
                  },
                  {
                    ln: "3",
                    code: "    for i, num in enumerate(nums):",
                    active: false,
                  },
                  {
                    ln: "4",
                    code: "        complement = target - num",
                    active: false,
                  },
                  {
                    ln: "5",
                    code: "        if complement in num_map:",
                    active: false,
                  },
                  {
                    ln: "6",
                    code: "            return [num_map[complement], i]",
                    active: false,
                  },
                  {
                    ln: "7",
                    code: "        num_map[num] = i",
                    active: false,
                  },
                ].map(({ ln, code, active }) => (
                  <div
                    key={ln}
                    className={`flex gap-5 px-3 py-1.5 mb-0.5 rounded-md
                ${active ? "bg-[#2b2e33]/[0.05] border-l-[2px] border-[#2b2e33]" : "border-l-[2px] border-transparent"}`}
                  >
                    <span className="w-4 text-right text-[11px] text-[#c1c4c8] flex-shrink-0 select-none">
                      {ln}
                    </span>
                    <span
                      className={`text-[13px] ${active ? "text-[#2b2e33] font-bold" : "text-[#7b7f85] font-medium"}`}
                    >
                      {code}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interview Features */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: CheckCircle,
                  title: "Optimal Solutions",
                  desc: "Every problem solved with the most efficient approach expected in interviews.",
                },
                {
                  icon: Target,
                  title: "FAANG Patterns",
                  desc: "Tagged by interview patterns - Arrays, Two Pointers, Sliding Window, DP, Graphs.",
                },
                {
                  icon: Clock,
                  title: "Time & Space Analysis",
                  desc: "Complete Big O breakdown with real examples from each solution.",
                },
                {
                  icon: MessageCircle,
                  title: "Interview Explanations",
                  desc: "Exact phrasing and thought process used by top engineers in live interviews.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5 px-6 py-5 bg-white border border-[#c1c4c8] rounded-2xl cursor-pointer
              hover:border-[#2b2e33] hover:shadow-[0_4px_20px_rgba(43,46,51,0.07)] transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-[#f5f6f7] border border-[#c1c4c8] rounded-xl grid place-items-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#2b2e33]" />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#2b2e33] mb-1">
                      {title}
                    </div>
                    <div className="text-[13px] text-[#7b7f85] leading-relaxed font-medium">
                      {desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FEATURES ══════════════════════════════ */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-4 py-2 mb-5">
                <Award size={11} className="text-[#2b2e33]" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                  Interview Ready
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={fade}
              className="text-[40px] font-extrabold tracking-[-1px] m-0 max-w-[520px]"
            >
              Crack FAANG Interviews
              <span className="text-[#7b7f85]"> in 30 Days</span>
            </motion.h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, badge }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl cursor-pointer
            hover:border-[#2b2e33] hover:shadow-[0_14px_40px_rgba(43,46,51,0.10)] transition-all duration-300
            shadow-[0_2px_8px_rgba(43,46,51,0.05)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#f5f6f7] border border-[#c1c4c8] rounded-xl grid place-items-center">
                    <Icon size={20} className="text-[#2b2e33]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#7b7f85] bg-[#f5f6f7] border border-[#c1c4c8] px-3 py-1 rounded-md tracking-[0.5px] uppercase">
                    {badge}
                  </span>
                </div>
                <h3 className="text-[16px] font-extrabold text-[#2b2e33] mb-3 tracking-tight m-0">
                  {title}
                </h3>
                <p className="text-[13px] text-[#7b7f85] leading-relaxed font-medium m-0">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ STATS BAR ═════════════════════════════ */}
      <section className="relative z-10   py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: 2 columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className={`group relative py-6 px-4 text-center rounded-xl bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-sm
        border border-[#c1c4c8]/40 hover:border-[#2b2e33]/80 hover:bg-gradient-to-b hover:from-white hover:to-white/90
        shadow-[0_2px_12px_rgba(43,46,51,0.04)] hover:shadow-[0_8px_28px_rgba(43,46,51,0.12)] 
        transition-all duration-300 overflow-hidden
        ${i < 3 && i !== stats.length - 1 ? "lg:border-r border-[#c1c4c8]/20" : ""}
        ${i === 0 || i === 2 ? "lg:border-r border-[#c1c4c8]/20" : ""}`}
              >
                {/* Premium Icon Ring - FIXED */}
                <div className="relative mx-auto mb-3 w-12 h-12">
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-[#f5f6f7] to-[#fafbfc] rounded-2xl border border-[#c1c4c8]/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className="w-10 h-10 mx-auto bg-gradient-to-b from-[#fafbfc] to-white border-2 border-[#c1c4c8]/40 rounded-2xl grid place-items-center shadow-sm absolute inset-2
          group-hover:bg-[#2b2e33] group-hover:border-[#2b2e33]/80 group-hover:shadow-[0_4px_16px_rgba(43,46,51,0.15)]
          transition-all duration-300"
                  >
                    <Icon
                      size={18}
                      className="text-[#7b7f85]  transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Enhanced Value */}
                <motion.div
                  className="text-[26px] sm:text-[30px] lg:text-[38px] font-black text-[#2b2e33] tracking-[-1.5px] leading-none mb-2 px-1"
                  initial={{ scale: 0.9, y: 8 }}
                  whileInView={{ scale: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08 + 0.2,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.25,
                  }}
                  whileHover={{ scale: 1.05, color: "#1a1d22" }}
                >
                  {value}
                </motion.div>

                {/* Premium Label */}
                <div className="text-[10px] sm:text-[11px] font-bold text-[#7b7f85] uppercase tracking-[1.2px] leading-tight bg-gradient-to-r bg-clip-text from-[#7b7f85] to-[#9ca3af] group-hover:from-[#2b2e33] transition-all duration-300">
                  {label}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 scale-x-[2] origin-left opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#2b2e33]/20 via-[#2b2e33]/10 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ CTA ═══════════════════════════════════ */}
      <section className="relative z-10 py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-5 py-2">
              <Award size={12} className="text-green-500" />
              <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                98% Interview Success Rate
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[50px] font-extrabold tracking-[-1.5px] leading-[1.08] ">
              Crack Your Dream Job
              <br />
              <span className="text-[#7b7f85]"> in 30 Days</span>
            </h2>

            {/* Subtext */}
            <p className="text-[15px] text-[#7b7f85] leading-relaxed font-medium max-w-2xl m-0">
              Join 15K+ developers who've mastered LeetCode patterns and landed
              FAANG offers. Optimal solutions + interview scripts = your unfair
              advantage.
            </p>

            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-10 py-4 bg-[#2b2e33] text-[#f5f6f7] text-[15px] font-bold rounded-2xl shadow-[0_6px_32px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] hover:shadow-[0_8px_40px_rgba(43,46,51,0.28)] transition-all duration-200"
              style={{ fontFamily: '"Syne",sans-serif' }}
            >
              <Zap size={17} /> Start Solving Top 150 — Free Forever{" "}
              <ArrowRight size={15} />
            </motion.button>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-1">
              {[
                "Top 150 LeetCode",
                "14 Patterns Covered",
                "Company Tagged",
                "No signup needed",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-1.5 min-w-[120px]"
                >
                  <CheckCircle
                    size={12}
                    className="text-green-500 flex-shrink-0"
                  />
                  <span className="text-[12px] font-semibold text-[#7b7f85] text-left">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════ FOOTER ════════════════════════════════ */}
      <footer className="relative z-10 bg-[#f5f6f7] border-t border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Top Section - Fully Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-8 border-b border-[#c1c4c8]">
            {/* Brand - Always left */}
            <motion.div
              className="flex items-start gap-3 col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#2b2e33] rounded-xl grid place-items-center flex-shrink-0">
                <Code2
                  size={16}
                  className="sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5"
                  color="#f5f6f7"
                />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-lg lg:text-xl font-black tracking-tight leading-tight">
                  AlgoPrep
                </div>
                <div className="text-[11px] sm:text-xs text-[#c1c4c8] font-semibold mt-0.5 leading-tight">
                  LeetCode Interview Mastery
                </div>
              </div>
            </motion.div>

            {/* Links - Responsive columns */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { label: "Topics", href: "#topics" },
                { label: "Solutions", href: "#solutions" },
                { label: "Roadmap", href: "#roadmap" },
                { label: "Patterns", href: "#patterns" },
                { label: "Pricing", href: "#pricing" },
                { label: "Blog", href: "#blog" },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -1, scale: 1.02 }}
                  className="text-sm lg:text-base font-semibold text-[#7b7f85] hover:text-[#2b2e33] hover:underline transition-all duration-200 block text-center lg:text-left leading-tight"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social + Copyright - Perfect mobile layout */}
          <div className="flex flex-col xs:flex-row sm:items-center justify-between gap-4 pt-8">
            {/* Social Icons */}
            <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
              {[Github, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white border border-[#c1c4c8] rounded-xl grid place-items-center flex-shrink-0
              hover:border-[#2b2e33] hover:bg-[#2b2e33] hover:shadow-md transition-all duration-200"
                >
                  <Icon
                    size={15}
                    className="text-[#7b7f85] hover:text-[#f5f6f7]"
                  />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <span className="text-xs sm:text-sm font-semibold text-[#c1c4c8] leading-tight">
                © 2026 AlgoPrep. Built for coders who crack interviews.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Play, Target, Brain, Clock, Award, BookOpen, Zap, Github, Twitter,
  ArrowRight, CheckCircle, Star, Terminal,
} from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const codeLines = [
  { ln: '01', indent: 0, code: 'def binary_search(arr, target):', accent: false },
  { ln: '02', indent: 1, code: 'lo, hi = 0, len(arr) − 1',        accent: false },
  { ln: '03', indent: 1, code: 'while lo <= hi:',                   accent: true  },
  { ln: '04', indent: 2, code: 'mid = (lo + hi) // 2',             accent: false },
  { ln: '05', indent: 2, code: 'if arr[mid] == target:',            accent: false },
  { ln: '06', indent: 3, code: 'return mid',                        accent: false },
];

const topics = [
  { name: 'Arrays & Hashing', problems: 45 },
  { name: 'Two Pointers',     problems: 28 },
  { name: 'Stack',            problems: 22 },
  { name: 'Binary Search',    problems: 15 },
  { name: 'Sliding Window',   problems: 18 },
  { name: 'Linked List',      problems: 25 },
  { name: 'Trees',            problems: 32 },
  { name: 'Dynamic Programming', problems: 40 },
];

const features = [
  { icon: Target,   title: 'Interview Notes',      desc: 'What to say when stuck. Follow-ups to expect.',      badge: 'Pro'      },
  { icon: Brain,    title: 'Pattern Recognition',  desc: '14 patterns → 500+ problems mapped',                 badge: 'Core'     },
  { icon: Clock,    title: 'Complexity Visualizer',desc: 'Big O charts that actually make sense',              badge: 'Essential'},
  { icon: BookOpen, title: 'FAANG Playlists',      desc: 'Company-specific problem sequences',                 badge: 'New'      },
  { icon: Play,     title: 'Live Animations',      desc: 'Watch your solution execute visually',               badge: 'Popular'  },
  { icon: Award,    title: 'Mock Timers',          desc: '45min countdown with real interview pressure',        badge: 'Soon'     },
];

const stats = [
  { value: '500+', label: 'Problems Covered' },
  { value: '14',   label: 'Core Patterns'    },
  { value: '10K+', label: 'Active Users'     },
  { value: '100%', label: 'Free, Always'     },
];

export default function AlgoVistaLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#2b2e33] overflow-x-hidden" style={{ fontFamily: '"Syne", sans-serif' }}>

      {/* ── dot-grid texture ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c1c4c866 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* ════════════════════════════════ NAVBAR ════════════════════════════════ */}
      <nav className={`fixed top-3 left-4 right-4 z-50 rounded-2xl backdrop-blur-xl transition-all duration-300
        ${scrolled
          ? 'bg-white/95 border border-[#c1c4c8] shadow-[0_4px_24px_rgba(43,46,51,0.09)]'
          : 'bg-white/75 border border-[#e8e9ea] shadow-[0_2px_12px_rgba(43,46,51,0.04)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#2b2e33] rounded-xl grid place-items-center">
              <Code2 size={17} color="#f5f6f7" />
            </div>
            <span className="font-extrabold text-[17px] tracking-tight">AlgoVista</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-7">
              {['Topics','Solutions','Roadmap','Patterns'].map(l => (
                <a key={l} href="#"
                  className="text-[13px] font-semibold text-[#7b7f85] hover:text-[#2b2e33] transition-colors duration-200 no-underline">
                  {l}
                </a>
              ))}
            </div>
            <button className="px-5 py-2 bg-[#2b2e33] text-[#f5f6f7] text-[13px] font-bold rounded-xl hover:bg-[#3d4147] transition-colors"
              style={{ fontFamily: '"Syne",sans-serif' }}>
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
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-7">

              {/* Badge */}
              <motion.div variants={fade} custom={0}>
                <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                    Live · 500+ Problems Visualized
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fade} custom={1}>
                <h1 className="text-[58px] font-extrabold leading-[1.06] tracking-[-2px] m-0">
                  Visualize<br />
                  <span className="text-[#7b7f85]">Algorithms.</span><br />
                  Land the Job.
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.div variants={fade} custom={2}>
                <p className="text-[16px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
                  Master LeetCode through animated step-by-step visualizations.
                  See exactly <em>why</em> each algorithm works — not just that it does.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fade} custom={3} className="flex items-center gap-3 pt-1">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#2b2e33] text-[#f5f6f7] text-[14px] font-bold rounded-xl
                    shadow-[0_4px_20px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}>
                  <Terminal size={15} /> Start Solving <ArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#2b2e33] text-[14px] font-semibold
                    border border-[#c1c4c8] rounded-xl hover:bg-[#f5f6f7] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}>
                  <Play size={14} /> Watch Demo
                </motion.button>
              </motion.div>

              {/* Trust */}
              <motion.div variants={fade} custom={4} className="flex items-center gap-6 pt-1">
                {['Free Forever','10K+ Developers'].map(label => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-green-500" />
                    <span className="text-[12px] font-semibold text-[#7b7f85]">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Terminal Card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <div className="bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(43,46,51,0.10)]">

                {/* Title bar */}
                <div className="flex items-center gap-3 px-6 py-4 bg-[#f5f6f7] border-b border-[#c1c4c8]">
                  <div className="flex gap-2">
                    {['#f87171','#fbbf24','#4ade80'].map(c => (
                      <div key={c} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.85 }} />
                    ))}
                  </div>
                  <span className="ml-auto text-[11px] font-bold text-[#c1c4c8] tracking-[0.8px] uppercase">
                    binary_search.py
                  </span>
                </div>

                {/* Code */}
                <div className="p-7 font-mono">
                  <div className="space-y-1">
                    {codeLines.map(({ ln, indent, code, accent }) => (
                      <div key={ln}
                        className={`flex gap-5 px-3 py-1.5 rounded-lg
                          ${accent
                            ? 'bg-[#2b2e33]/[0.06] border-l-[2px] border-[#2b2e33]'
                            : 'border-l-[2px] border-transparent'}`}>
                        <span className="w-6 text-right text-[11px] text-[#c1c4c8] select-none flex-shrink-0">{ln}</span>
                        <span
                          className={`text-[13px] leading-relaxed ${accent ? 'text-[#2b2e33] font-bold' : 'text-[#7b7f85] font-medium'}`}
                          style={{ paddingLeft: indent * 20 }}>
                          {code}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Run row */}
                  <div className="mt-6 flex items-center justify-between bg-[#f5f6f7] border border-[#c1c4c8] rounded-xl px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-[12px] font-semibold text-[#7b7f85]">Ready to visualize</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#2b2e33] text-[#f5f6f7] text-[11px] font-bold rounded-lg"
                      style={{ fontFamily: '"Syne",sans-serif' }}>
                      <Play size={10} /> Run
                    </button>
                  </div>
                </div>

                {/* Stats strip */}
                <div className="flex border-t border-[#c1c4c8] bg-[#f5f6f7]">
                  {[{ label:'Time', value:'O(log n)' },{ label:'Space', value:'O(1)' },{ label:'Steps', value:'7' }]
                    .map(({ label, value }, i) => (
                    <div key={label} className={`flex-1 px-6 py-4 ${i < 2 ? 'border-r border-[#c1c4c8]' : ''}`}>
                      <div className="text-[10px] font-bold text-[#c1c4c8] uppercase tracking-[0.8px]">{label}</div>
                      <div className="text-[15px] font-extrabold text-[#2b2e33] mt-1">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ TOPICS STRIP ══════════════════════════ */}
      <section className="relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth:'none' }}>
            {topics.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay: i * 0.06 }} whileHover={{ y:-2 }}
                className="flex-shrink-0 px-5 py-3 bg-[#fafbfc] border border-[#c1c4c8] rounded-xl cursor-pointer
                  hover:border-[#2b2e33] hover:shadow-[0_4px_16px_rgba(43,46,51,0.08)] transition-all duration-200">
                <div className="text-[13px] font-bold text-[#2b2e33]">{t.name}</div>
                <div className="text-[11px] text-[#c1c4c8] mt-0.5 font-semibold">{t.problems} problems</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ HOW IT WORKS ══════════════════════════ */}
      <section className="relative z-10 py-24 bg-[#f5f6f7] border-y border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mb-16">
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2 bg-white border border-[#c1c4c8] rounded-lg px-4 py-2 mb-5">
                <Play size={11} className="text-[#7b7f85]" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">Real-time Visualization</span>
              </div>
            </motion.div>
            <motion.h2 variants={fade} className="text-[40px] font-extrabold tracking-[-1px] m-0">See Algorithms Run</motion.h2>
            <motion.p variants={fade} className="text-[15px] text-[#7b7f85] mt-4 font-medium leading-relaxed max-w-[500px]">
              Not just pseudocode — actual animated execution with pointer tracking,
              array state snapshots, and annotated decisions at every step.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Code panel */}
            <motion.div
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              transition={{ duration:0.6 }}
              className="bg-white border border-[#c1c4c8] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(43,46,51,0.07)]">
              <div className="flex items-center gap-3 px-6 py-4 bg-[#f5f6f7] border-b border-[#c1c4c8]">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[0.6px] uppercase">
                  binary_search.py — Visualization Active
                </span>
              </div>
              <div className="p-6 font-mono">
                {[
                  { ln:'1', code:'def binary_search(arr, target):',  active:false },
                  { ln:'2', code:'    lo, hi = 0, len(arr) - 1',     active:true  },
                  { ln:'3', code:'    while lo <= hi:',               active:false },
                  { ln:'4', code:'        mid = (lo + hi) // 2',     active:false },
                  { ln:'5', code:'        if arr[mid] == target:',   active:false },
                  { ln:'6', code:'            return mid',            active:false },
                ].map(({ ln, code, active }) => (
                  <div key={ln}
                    className={`flex gap-5 px-3 py-1.5 mb-0.5 rounded-md
                      ${active ? 'bg-[#2b2e33]/[0.05] border-l-[2px] border-[#2b2e33]' : 'border-l-[2px] border-transparent'}`}>
                    <span className="w-4 text-right text-[11px] text-[#c1c4c8] flex-shrink-0 select-none">{ln}</span>
                    <span className={`text-[13px] ${active ? 'text-[#2b2e33] font-bold' : 'text-[#7b7f85] font-medium'}`}>
                      {code}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Feature rows */}
            <div className="flex flex-col gap-4">
              {[
                { icon:Play,  title:'Step-by-Step Execution', desc:'Watch every iteration with array state highlighted at each decision point.' },
                { icon:Clock, title:'Time Complexity',        desc:'O(log n) — visual breakdown showing exactly how the search space halves.' },
                { icon:Award, title:'Space Analysis',         desc:'O(1) auxiliary space — memory diagram updates live as the algorithm runs.' },
                { icon:Brain, title:'Pattern Tagging',        desc:'Every problem is tagged to a core pattern so knowledge transfers fast.' },
              ].map(({ icon:Icon, title, desc }, i) => (
                <motion.div key={title}
                  initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                  transition={{ delay: i*0.09, duration:0.5 }} whileHover={{ x:4 }}
                  className="flex items-start gap-5 px-6 py-5 bg-white border border-[#c1c4c8] rounded-2xl cursor-pointer
                    hover:border-[#2b2e33] hover:shadow-[0_4px_20px_rgba(43,46,51,0.07)] transition-all duration-200">
                  <div className="w-11 h-11 bg-[#f5f6f7] border border-[#c1c4c8] rounded-xl grid place-items-center flex-shrink-0">
                    <Icon size={18} className="text-[#2b2e33]" />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#2b2e33] mb-1">{title}</div>
                    <div className="text-[13px] text-[#7b7f85] leading-relaxed font-medium">{desc}</div>
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
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mb-14">
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-4 py-2 mb-5">
                <Star size={11} className="text-[#2b2e33]" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">Battle-tested Features</span>
              </div>
            </motion.div>
            <motion.h2 variants={fade} className="text-[40px] font-extrabold tracking-[-1px] m-0 max-w-[520px]">
              Built by Interviewees,{' '}
              <span className="text-[#7b7f85]">for Interviewees</span>
            </motion.h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon:Icon, title, desc, badge }, i) => (
              <motion.div key={title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay: i*0.08, duration:0.5 }}
                whileHover={{ y:-5 }}
                className="p-8 bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl cursor-pointer
                  hover:border-[#2b2e33] hover:shadow-[0_14px_40px_rgba(43,46,51,0.10)] transition-all duration-300
                  shadow-[0_2px_8px_rgba(43,46,51,0.05)]">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#f5f6f7] border border-[#c1c4c8] rounded-xl grid place-items-center">
                    <Icon size={20} className="text-[#2b2e33]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#7b7f85] bg-[#f5f6f7] border border-[#c1c4c8] px-3 py-1 rounded-md tracking-[0.5px] uppercase">
                    {badge}
                  </span>
                </div>
                <h3 className="text-[16px] font-extrabold text-[#2b2e33] mb-3 tracking-tight m-0">{title}</h3>
                <p className="text-[13px] text-[#7b7f85] leading-relaxed font-medium m-0">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ STATS BAR ═════════════════════════════ */}
      <section className="relative z-10 bg-[#f5f6f7] border-y border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay: i*0.1 }}
                className={`py-12 px-8 text-center ${i < 3 ? 'border-r border-[#c1c4c8]' : ''}`}>
                <div className="text-[42px] font-extrabold text-[#2b2e33] tracking-[-1.5px] leading-none">{value}</div>
                <div className="text-[11px] font-bold text-[#7b7f85] mt-2 uppercase tracking-[0.8px]">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ CTA ═══════════════════════════════════ */}
      <section className="relative z-10 py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.6 }}
            className="flex flex-col items-center gap-7">

            <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-5 py-2">
              <CheckCircle size={12} className="text-green-500" />
              <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                Free Forever — No Card Required
              </span>
            </div>

            <h2 className="text-[50px] font-extrabold tracking-[-1.5px] leading-[1.08] m-0">
              From LeetCode Noob<br />
              <span className="text-[#7b7f85]">to Interview Pro</span>
            </h2>

            <p className="text-[15px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
              Join 10,000+ developers who stopped guessing and started understanding algorithms.
            </p>

            <motion.button
              whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              className="flex items-center gap-3 px-10 py-4 bg-[#2b2e33] text-[#f5f6f7] text-[15px] font-bold rounded-2xl
                shadow-[0_6px_32px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
              style={{ fontFamily:'"Syne",sans-serif' }}>
              <Zap size={17} /> Launch AlgoVista — It's Free <ArrowRight size={15} />
            </motion.button>

            <div className="flex items-center gap-7 pt-1">
              {['No signup needed','All 500+ problems','Forever free'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-green-500" />
                  <span className="text-[12px] font-semibold text-[#7b7f85]">{t}</span>
                </div>
              ))}
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
                <div className="text-[16px] font-extrabold tracking-tight">AlgoVista</div>
                <div className="text-[11px] text-[#c1c4c8] font-semibold">Visual Interview Prep</div>
              </div>
            </div>

            {/* Links + social */}
            <div className="flex items-center gap-10">
              <div className="flex gap-7">
                {['Topics','Solutions','Roadmap','Blog','Privacy','Terms'].map(l => (
                  <a key={l} href="#"
                    className="text-[13px] font-semibold text-[#7b7f85] hover:text-[#2b2e33] transition-colors duration-200 no-underline">
                    {l}
                  </a>
                ))}
              </div>
              <div className="flex gap-2">
                {[Github, Twitter].map((Icon, i) => (
                  <motion.a key={i} href="#" whileHover={{ y:-2 }}
                    className="w-9 h-9 bg-white border border-[#c1c4c8] rounded-lg grid place-items-center
                      hover:border-[#2b2e33] transition-all duration-200">
                    <Icon size={15} className="text-[#7b7f85]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center">
            <span className="text-[12px] font-semibold text-[#c1c4c8]">
              © 2026 AlgoVista. Built for coders who ship.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Play, Target, Brain, Clock, Award, BookOpen, Zap, Github, Twitter,
  ArrowRight, CheckCircle, Star, Terminal, ChevronRight, MapPin, TrendingUp,
} from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const roadmapSteps = [
  {
    phase: 'Phase 1: Foundations',
    title: 'Master the Basics',
    desc: 'Build a strong understanding of programming fundamentals, time/space complexity, and basic data structures.',
    topics: ['Big O Notation', 'Arrays', 'Strings', 'Hash Tables'],
    icon: Target,
    duration: '2-4 weeks',
    color: '#2b2e33',
  },
  {
    phase: 'Phase 2: Core Algorithms',
    title: 'Search & Sort',
    desc: 'Dive into essential algorithms like binary search, sorting techniques, and their applications.',
    topics: ['Binary Search', 'Quick Sort', 'Merge Sort', 'Two Pointers'],
    icon: Brain,
    duration: '3-5 weeks',
    color: '#7b7f85',
  },
  {
    phase: 'Phase 3: Data Structures',
    title: 'Advanced Structures',
    desc: 'Explore trees, graphs, heaps, and dynamic programming to solve complex problems.',
    topics: ['Trees & BST', 'Graphs & BFS/DFS', 'Heaps', 'Dynamic Programming'],
    icon: BookOpen,
    duration: '4-6 weeks',
    color: '#c1c4c8',
  },
  {
    phase: 'Phase 4: Practice & Optimization',
    title: 'Interview Mastery',
    desc: 'Apply patterns to 500+ problems, optimize solutions, and simulate real interviews.',
    topics: ['Sliding Window', 'Greedy Algorithms', 'Backtracking', 'Mock Interviews'],
    icon: Award,
    duration: 'Ongoing',
    color: '#f5f6f7',
  },
];

export default function AlgoVistaRoadmap() {
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
                  <MapPin size={12} className="text-[#2b2e33]" />
                  <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                    Structured Learning Path
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fade} custom={1}>
                <h1 className="text-[58px] font-extrabold leading-[1.06] tracking-[-2px] m-0">
                  Your Roadmap to<br />
                  <span className="text-[#7b7f85]">Algorithm Mastery</span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.div variants={fade} custom={2}>
                <p className="text-[16px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
                  Follow a proven 4-phase journey from basics to interview-ready. Visualize progress, track milestones, and land your dream job.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fade} custom={3} className="flex items-center gap-3 pt-1">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#2b2e33] text-[#f5f6f7] text-[14px] font-bold rounded-xl
                    shadow-[0_4px_20px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}>
                  <TrendingUp size={15} /> Start Journey <ArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#2b2e33] text-[14px] font-semibold
                    border border-[#c1c4c8] rounded-xl hover:bg-[#f5f6f7] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}>
                  <Play size={14} /> View Progress
                </motion.button>
              </motion.div>

              {/* Trust */}
              <motion.div variants={fade} custom={4} className="flex items-center gap-6 pt-1">
                {['4 Phases','500+ Problems','Proven Success'].map(label => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-green-500" />
                    <span className="text-[12px] font-semibold text-[#7b7f85]">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Roadmap Preview */}
            <motion.div
              initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <div className="bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(43,46,51,0.10)] p-8">
                <div className="space-y-6">
                  {roadmapSteps.slice(0, 3).map((step, i) => (
                    <motion.div
                      key={step.phase}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center">
                        <step.icon size={18} color="#f5f6f7" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[14px] font-bold text-[#2b2e33]">{step.title}</div>
                        <div className="text-[12px] text-[#7b7f85]">{step.duration}</div>
                      </div>
                      <ChevronRight size={16} className="text-[#c1c4c8]" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#c1c4c8]">
                  <div className="text-[12px] font-semibold text-[#7b7f85] text-center">Continue to Phase 4...</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ ROADMAP TIMELINE ══════════════════════ */}
      <section className="relative z-10 py-24 bg-[#f5f6f7] border-y border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center">
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2 bg-white border border-[#c1c4c8] rounded-lg px-4 py-2 mb-5">
                <TrendingUp size={11} className="text-[#7b7f85]" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">4-Phase Journey</span>
              </div>
            </motion.div>
            <motion.h2 variants={fade} className="text-[40px] font-extrabold tracking-[-1px] m-0">Step-by-Step Mastery</motion.h2>
            <motion.p variants={fade} className="text-[15px] text-[#7b7f85] mt-4 font-medium leading-relaxed max-w-[500px] mx-auto">
              Animated timeline showing your progress. Each phase builds on the last, with visualizations to reinforce learning.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
       

            {roadmapSteps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`flex items-center gap-8 mb-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 lg:flex-1/2">
                  <div className="bg-white border border-[#c1c4c8] rounded-2xl p-8 shadow-[0_4px_24px_rgba(43,46,51,0.07)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2b2e33] flex items-center justify-center">
                        <step.icon size={20} color="#f5f6f7" />
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-[#7b7f85] uppercase tracking-[0.8px]">{step.phase}</div>
                        <div className="text-[18px] font-extrabold text-[#2b2e33]">{step.title}</div>
                      </div>
                    </div>
                    <p className="text-[14px] text-[#7b7f85] leading-relaxed font-medium mb-4">{step.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {step.topics.map(topic => (
                        <span key={topic} className="px-3 py-1 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg text-[12px] font-semibold text-[#2b2e33]">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="text-[12px] font-bold text-[#c1c4c8] uppercase tracking-[0.8px]">Duration: {step.duration}</div>
                  </div>
                </div>

                {/* Connector */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-[#2b2e33] rounded-full border-4 border-white shadow-lg">
                  <div className="w-3 h-3 bg-[#f5f6f7] rounded-full"></div>
                </div>

                {/* Spacer for mobile */}
                <div className="flex-1 lg:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ CTA ═══════════════════════════════════ */}
      <section className="relative z-10 py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-7">

            <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-5 py-2">
              <CheckCircle size={12} className="text-green-500" />
              <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                Track Your Progress — Free Forever
              </span>
            </div>

            <h2 className="text-[50px] font-extrabold tracking-[-1.5px] leading-[1.08] m-0">
              Ready to Start?<br />
              <span className="text-[#7b7f85]">Begin Your Journey</span>
            </h2>

            <p className="text-[15px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
              Join thousands mastering algorithms. Visualize, learn, and conquer interviews.
            </p>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-10 py-4 bg-[#2b2e33] text-[#f5f6f7] text-[15px] font-bold rounded-2xl
                shadow-[0_6px_32px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
              style={{ fontFamily: '"Syne",sans-serif' }}>
              <Zap size={17} /> Launch Roadmap <ArrowRight size={15} />
            </motion.button>

            <div className="flex items-center gap-7 pt-1">
              {['No signup needed', 'All phases included', 'Forever free'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-green-500" />
                  <span className="text-[12px] font-semibold text-[#7b7f85]">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

</div>
  );
}


    
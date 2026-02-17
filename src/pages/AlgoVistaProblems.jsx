// 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Play, Target, Brain, Clock, Award, BookOpen, Zap, Github, Twitter,
  ArrowRight, CheckCircle, Star, Terminal, Eye, ChevronRight, Filter,
} from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    topic: 'Arrays & Hashing',
    desc: 'Given an array of integers, return indices of two numbers that add up to target.',
    acceptance: '47.2%',
  },
  {
    id: 2,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    topic: 'Stack',
    desc: 'Given a string containing just the characters, determine if the input string is valid.',
    acceptance: '39.1%',
  },
  {
    id: 3,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    topic: 'Linked List',
    desc: 'Merge two sorted linked lists and return it as a sorted list.',
    acceptance: '55.0%',
  },
  {
    id: 4,
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    desc: 'Given an integer array nums, find the contiguous subarray with the largest sum.',
    acceptance: '47.4%',
  },
  {
    id: 5,
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    topic: 'Dynamic Programming',
    desc: 'You are climbing a staircase. It takes n steps to reach the top.',
    acceptance: '48.2%',
  },
  {
    id: 6,
    title: 'Binary Tree Inorder Traversal',
    difficulty: 'Easy',
    topic: 'Trees',
    desc: 'Given the root of a binary tree, return the inorder traversal of its nodes.',
    acceptance: '67.3%',
  },
  {
    id: 7,
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    topic: 'Binary Search',
    desc: 'There is an integer array nums sorted in ascending order, rotated at some pivot.',
    acceptance: '36.5%',
  },
  {
    id: 8,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    topic: 'Sliding Window',
    desc: 'Given a string s, find the length of the longest substring without repeating characters.',
    acceptance: '31.5%',
  },
  {
    id: 9,
    title: 'Container With Most Water',
    difficulty: 'Medium',
    topic: 'Two Pointers',
    desc: 'Given n non-negative integers, find two lines that form a container with the most water.',
    acceptance: '52.1%',
  },
  {
    id: 10,
    title: '3Sum',
    difficulty: 'Medium',
    topic: 'Two Pointers',
    desc: 'Given an integer array nums, return all the triplets that sum to zero.',
    acceptance: '27.1%',
  },
  // Add more problems as needed
];

const getDifficultyColor = (diff) => {
  switch (diff) {
    case 'Easy': return 'text-green-600 bg-green-100 border-green-200';
    case 'Medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    case 'Hard': return 'text-red-600 bg-red-100 border-red-200';
    default: return 'text-gray-600 bg-gray-100 border-gray-200';
  }
};

export default function AlgoVistaProblems() {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredProblems = filter === 'All' ? problems : problems.filter(p => p.difficulty === filter);

  return (
    <div className="min-h-screen  text-[#2b2e33] overflow-x-hidden" style={{ fontFamily: '"Syne", sans-serif' }}>

      {/* ── dot-grid texture ── */}
      <div
        className="fixed inset-0 -z-1 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c1c4c866 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

        
      {/* ════════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex items-center pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-7">

              {/* Badge */}
              <motion.div variants={fade} custom={0}>
                <div className="inline-flex items-center gap-2  border border-[#c1c4c8] rounded-lg px-4 py-2">
                  <Terminal size={12} className="text-[#2b2e33]" />
                  <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">
                    All Problems
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fade} custom={1}>
                <h1 className="text-[58px] font-extrabold leading-[1.06] tracking-[-2px] m-0">
                  Explore<br />
                  <span className="text-[#7b7f85]">500+ Problems</span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.div variants={fade} custom={2}>
                <p className="text-[16px] text-[#7b7f85] leading-relaxed font-medium max-w-[440px] m-0">
                  Browse the complete collection of algorithm problems. Filter by difficulty, visualize solutions, and track your progress.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fade} custom={3} className="flex items-center gap-3 pt-1">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#2b2e33] text-[#f5f6f7] text-[14px] font-bold rounded-xl
                    shadow-[0_4px_20px_rgba(43,46,51,0.22)] hover:bg-[#3d4147] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}>
                  <Terminal size={15} /> Browse Problems <ArrowRight size={14} />
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
                {['500+ Problems','Visual Solutions','Free Forever'].map(label => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-green-500" />
                    <span className="text-[12px] font-semibold text-[#7b7f85]">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Problems Preview */}
            <motion.div
              initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <div className="bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(43,46,51,0.10)] p-8">
                <div className="space-y-4">
                  {problems.slice(0, 4).map((problem, i) => (
                    <motion.div
                      key={problem.id}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-4 bg-white border border-[#c1c4c8] rounded-xl"
                    >
                      <div>
                        <div className="text-[14px] font-bold text-[#2b2e33]">{problem.title}</div>
                        <div className="text-[12px] text-[#7b7f85]">{problem.topic} • {problem.acceptance}</div>
                      </div>
                      <div className={`px-2 py-1 text-[10px] font-bold rounded-md border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#c1c4c8]">
                  <div className="text-[12px] font-semibold text-[#7b7f85] text-center">Scroll to view all problems...</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FILTERS ═══════════════════════════════ */}
      <section className="relative z-10 py-8 bg-[#f5f6f7] border-y border-[#c1c4c8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4">
            <Filter size={16} className="text-[#7b7f85]" />
            <span className="text-[14px] font-semibold text-[#2b2e33]">Filter by Difficulty:</span>
            {['All', 'Easy', 'Medium', 'Hard'].map(diff => (
              <button
                key={diff}
                onClick={() => setFilter(diff)}
                className={`px-4 py-2 text-[13px] font-bold rounded-lg transition-all duration-200 ${
                  filter === diff
                    ? 'bg-[#2b2e33] text-[#f5f6f7]'
                    : 'bg-white text-[#7b7f85] border border-[#c1c4c8] hover:bg-[#f5f6f7]'
                }`}
                style={{ fontFamily: '"Syne",sans-serif' }}>
                {diff}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ PROBLEMS GRID ═════════════════════════ */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center">
            <motion.div variants={fade}>
              <div className="inline-flex items-center gap-2 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg px-4 py-2 mb-5">
                <Code2 size={11} className="text-[#7b7f85]" />
                <span className="text-[11px] font-bold text-[#7b7f85] tracking-[1px] uppercase">Problem List</span>
              </div>
            </motion.div>
            <motion.h2 variants={fade} className="text-[40px] font-extrabold tracking-[-1px] m-0">All Problems</motion.h2>
            <motion.p variants={fade} className="text-[15px] text-[#7b7f85] mt-4 font-medium leading-relaxed max-w-[500px] mx-auto">
              Click "View Solution" to see animated visualizations and step-by-step explanations.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProblems.map((problem, i) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-[#fafbfc] border border-[#c1c4c8] rounded-2xl p-6 shadow-[0_2px_8px_rgba(43,46,51,0.05)]
                  hover:border-[#2b2e33] hover:shadow-[0_14px_40px_rgba(43,46,51,0.10)] transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-[#f5f6f7] border border-[#c1c4c8] rounded-lg grid place-items-center">
                    <Code2 size={16} className="text-[#2b2e33]" />
                  </div>
                  <span className={`px-2 py-1 text-[10px] font-bold rounded-md border ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <h3 className="text-[16px] font-extrabold text-[#2b2e33] mb-2 tracking-tight m-0">{problem.title}</h3>
                <p className="text-[13px] text-[#7b7f85] leading-relaxed font-medium m-0 mb-4">{problem.desc}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-semibold text-[#c1c4c8]">{problem.topic}</span>
                  <span className="text-[12px] font-semibold text-[#7b7f85]">{problem.acceptance}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#2b2e33] text-[#f5f6f7] text-[13px] font-bold rounded-xl
                    hover:bg-[#3d4147] transition-all duration-200"
                  style={{ fontFamily: '"Syne",sans-serif' }}>
                  <Eye size={14} /> View Solution
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ CTA ═══════════════════════════════════ */}
      <section className="relative z-10 pb-10  ">

        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#f5f6f7] border border-[#c1c4c8] rounded-2xl p-8 shadow-[0_4px_20px_rgba(43,46,51,0.05)]"
          >
            <h3 className="text-[28px] font-extrabold tracking-tight m-0">Ready to Level Up Your Coding Skills?</h3>
            <p className="text-[15px] text-[#7b7f85] mt-4 font-medium leading-relaxed">
              Join thousands of developers who are mastering algorithms with AlgoVista.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 px-6 py-3 bg-[#2b2e33] text-[#f5f6f7] text-[14px] font-bold rounded-xl hover:bg-[#3d4147] transition-colors duration-200"
              style={{ fontFamily: '"Syne",sans-serif' }}
            >
              Start Free Trial →
            </motion.button>
          </motion.div>

          </div>
          </section>
          </div>
  )};

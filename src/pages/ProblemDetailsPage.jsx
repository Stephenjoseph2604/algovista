// components/ProblemDetailsPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Code2,
  Clock,
  MessageCircle,
  AlertCircle,
  XCircle,
  Zap,
  Play,
  Target,
  Award,
  Link2,
  Clipboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { generateProblemDocument } from "../utilities/problemToDocument";
const ProblemDetailsPage = ({ problem }) => {
  const navigate = useNavigate();
  const [activeLang, setActiveLang] = useState("javascript");
  const [showSteps, setShowSteps] = useState(true);

  const getDifficultyColor = (difficulty) =>
    ({
      Easy: "bg-emerald-100 text-emerald-800 border-emerald-200",
      Medium: "bg-amber-100 text-amber-800 border-amber-200",
      Hard: "bg-red-100 text-red-800 border-red-200",
    })[difficulty] || "bg-gray-100 text-gray-800 border-gray-200";

  if (!problem) return null;

  const languages = Object.keys(problem.solutions || {});

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      {/* Compact Go Back Header */}
      <div className="sticky top-19 z-50  backdrop-blur ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 active:scale-90  border border-[var(--color-muted)]/50 hover:border-[var(--color-primary)] px-4 py-2 rounded-xl font-semibold text-[var(--color-text)] shadow-sm hover:shadow-md transition-all"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Problems</span>
          </motion.button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 lg:space-y-12"
        >
          {/* Compact Hero */}
          <section className="lg:flex lg:items-start lg:gap-6 ">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/90 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mb-4 lg:mb-0">
              <Code2 size={20} color="#f5f6f7" />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className={`inline-flex px-3 py-1.5 text-sm font-bold rounded-full border ${getDifficultyColor(problem.difficulty)}`}
              >
                {problem.difficulty}
              </div>
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black text-[var(--color-text)] mt-3 leading-tight">
                {problem.title}
              </h1>
              <div className="flex items-center flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-muted)]/30 rounded-lg text-sm font-semibold text-[var(--color-text)]">
                  {problem.topic}
                </span>
                {problem.patterns?.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 bg-[var(--color-primary)]/10 text-xs font-mono text-[var(--color-primary)] rounded"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section>
            <h2 className="text-xl lg:text-2xl font-black text-[var(--color-text)] mb-5 flex items-center gap-2">
              <BookOpen size={20} /> Problem
            </h2>
            <div className="bg-[var(--color-card)] border border-[var(--color-muted)]/20 rounded-2xl p-6 lg:p-8">
              <p className="text-lg text-[var(--color-text-muted)] mb-6 leading-relaxed">
                {problem.statement?.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Play size={14} /> Example
                  </div>
                  <div className="bg-[var(--color-surface)] p-4 rounded-xl font-mono text-sm border border-[var(--color-muted)]/30">
                    <div>
                      Input:{" "}
                      <span className="font-bold text-[var(--color-primary)]">
                        {problem.statement?.input}
                      </span>
                    </div>
                    <div className="mt-1 text-green-600 font-mono">
                      Output: <span className="font-bold">[0,1]</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Target size={14} /> Constraints
                  </div>
                  <div className="bg-[var(--color-surface)] p-4 rounded-xl max-h-32 overflow-y-auto border border-[var(--color-muted)]/30 text-xs">
                    {problem.statement?.constraints?.slice(0, 4).map((c, i) => (
                      <div key={i} className="flex items-center gap-2 py-1">
                        <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                        <span>{c}</span>
                      </div>
                    ))}
                    {problem.statement?.constraints?.length > 4 && (
                      <div className="text-[var(--color-secondary)] mt-2">
                        +{problem.statement.constraints.length - 4} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intuition */}
          {problem.intuition && (
            <section>
              <h2 className="text-xl lg:text-2xl font-black text-[var(--color-text)] mb-5 flex items-center gap-2">
                <Brain size={20} /> Intuition
              </h2>
              <div className="bg-gradient-to-r from-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-2xl p-6">
                <p className="text-lg text-[var(--color-primary)] font-semibold">
                  {problem.intuition}
                </p>
              </div>
            </section>
          )}

          {/* Approaches */}
          {problem.approaches?.length > 0 && (
            <section>
              <h2 className="text-xl lg:text-2xl font-black text-[var(--color-text)] mb-5 flex items-center gap-2">
                <Zap size={20} /> Approaches
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {problem.approaches.map((approach, i) => (
                  <div
                    key={i}
                    className="p-5 border border-[var(--color-muted)]/30 rounded-xl hover:shadow-lg hover:border-[var(--color-primary)]/50 transition-all bg-[var(--color-card)]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-[var(--color-text)] text-lg">
                        {approach.type}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-mono bg-[var(--color-surface)] px-2 py-1 rounded-lg">
                        <span>{approach.timeComplexity}</span>
                        <span>{approach.spaceComplexity}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">
                      {approach.description}
                    </p>
                    {approach.keyInsight && (
                      <div className="text-xs bg-[var(--color-primary)]/10 p-2 rounded-lg font-semibold text-[var(--color-primary)]">
                        💡 {approach.keyInsight}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Solutions - Tabbed */}
          {problem.solutions && languages.length > 0 && (
            <section>
              <h2 className="text-xl lg:text-2xl font-black text-[var(--color-text)] mb-6 flex items-center gap-2">
                <Code2 size={20} /> Solution ({problem.complexity?.time} |{" "}
                {problem.complexity?.space})
              </h2>

              {/* Language Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 -mx-1">
                {languages.map((lang) => (
                  <motion.button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-xl font-bold text-sm flex-1 min-w-[100px] transition-all ${
                      activeLang === lang
                        ? "bg-[var(--color-primary)] text-[var(--color-bg)] shadow-lg"
                        : "bg-[var(--color-card)] border border-[var(--color-muted)]/50 hover:border-[var(--color-primary)] text-[var(--color-text)] hover:shadow-md"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </motion.button>
                ))}
              </div>

              {/* Single Code Console */}
              <div className="bg-[var(--color-card)] border border-[var(--color-muted)]/30 rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 px-6 py-4 text-[var(--color-bg)] font-bold flex items-center justify-between shadow-lg">
                  <span className="text-lg tracking-wider">
                    {activeLang.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock size={14} />
                    <span>{problem.complexity?.time} time</span>
                  </div>
                </div>
                <pre className="p-6 lg:p-8 text-sm font-mono text-[var(--color-text)] bg-[var(--color-surface)] overflow-x-auto max-h-80 !m-0 !border-t-0 rounded-b-2xl">
                  <code>{problem.solutions[activeLang]?.code}</code>
                </pre>
              </div>
            </section>
          )}

          {/* Enhanced Deep Explanation */}
          {problem.deepExplanation && (
            <section>
              <h2 className="text-xl lg:text-2xl font-black text-[var(--color-text)] mb-6 flex items-center gap-2">
                <Brain size={20} className="text-[var(--color-primary)]" />
                Deep Explanation
              </h2>

              {/* Toggle Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                <motion.button
                  onClick={() => setShowSteps(true)}
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all flex-1 min-w-[120px] ${
                    showSteps
                      ? "bg-[var(--color-primary)] text-[var(--color-bg)] shadow-lg"
                      : "bg-[var(--color-card)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] hover:shadow-lg"
                  }`}
                >
                  <Clipboard size={14} /> Steps
                </motion.button>
                <motion.button
                  onClick={() => setShowSteps(false)}
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all flex-1 min-w-[120px] ${
                    !showSteps
                      ? "bg-[var(--color-primary)] text-[var(--color-bg)] shadow-lg"
                      : "bg-[var(--color-card)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] hover:shadow-lg"
                  }`}
                >
                  <BookOpen size={14} /> Overview
                </motion.button>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-muted)]/20 rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm overflow-hidden">
                {showSteps ? (
                  /* Steps from deepExplanation.steps - FIXED */
                  <div className="space-y-4 overflow-x-hidden max-h-96 p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-muted)] scrollbar-track-[var(--color-surface)]">
                    {problem.deepExplanation?.steps?.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="group flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-l-4 border-blue-400 rounded-xl hover:shadow-lg transition-all backdrop-blur-sm hover:-translate-x-1 overflow-hidden"
                      >
                        {/* Fixed number circle - smaller */}
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-lg flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform flex-shrink-0">
                          {i + 1}
                        </div>

                        {/* Fixed content - constrained width */}
                        <div className="flex-1 min-w-0 pr-2 max-w-none">
                          <h4 className="font-black text-[var(--color-text)] text-base mb-1.5 group-hover:text-[var(--color-primary)] line-clamp-1">
                            {step.title}
                          </h4>
                          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
                            {step.description}
                          </p>
                          {step.visual && (
                            <div className="mt-2 text-xs bg-[var(--color-surface)]/80 px-2.5 py-1 rounded-md font-mono text-[var(--color-secondary)] whitespace-nowrap">
                              🔍 {step.visual.action || "Visual step"}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  /* Paragraph - unchanged */
                  <div className="p-6 lg:p-8 bg-gradient-to-br from-blue-50/60 to-emerald-50/60 border-2 border-blue-200/40 rounded-2xl shadow-xl backdrop-blur-sm">
                    <p className="text-lg lg:text-xl text-[var(--color-primary)] font-semibold leading-relaxed line-clamp-6">
                      {problem.deepExplanation?.paragraph ||
                        problem.interviewNotes?.explainInInterview}
                    </p>
                  </div>
                )}
              </div>


              {/* NEW: Interview Quick Stats */}
              <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[var(--color-muted)]/30">
                <div className="text-center p-4 rounded-xl bg-[var(--color-surface)]/50">
                  <div className="text-2xl font-black text-[var(--color-primary)] mb-1">
                    {problem.interviewNotes?.timeToSolve}
                  </div>
                  <div className="text-xs text-[var(--color-secondary)] uppercase tracking-wider">
                    Solve Time
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-[var(--color-surface)]/50">
                  <div className="text-2xl font-black text-green-600 mb-1">
                    {problem.frequency || "90%"}
                  </div>
                  <div className="text-xs text-[var(--color-secondary)] uppercase tracking-wider">
                    Interview Freq
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-[var(--color-surface)]/50">
                  <div className="flex items-center justify-center gap-1 text-lg font-black mb-1">
                    <Zap size={18} className="text-yellow-500" />
                    {problem.approaches?.find((a) => a.recommended)?.type ||
                      "Optimal"}
                  </div>
                  <div className="text-xs text-[var(--color-secondary)] uppercase tracking-wider">
                    Best Approach
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Interview Preparation (Your Original Design - Unchanged) */}
          {problem.interviewNotes && (
            <section className="mt-12">
              <h2 className="text-xl lg:text-2xl font-black text-[var(--color-text)] mb-8 flex items-center gap-2">
                <MessageCircle
                  size={20}
                  className="text-[var(--color-primary)]"
                />
                Interview Preparation
              </h2>

              {/* Test Cases */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
                  <Target size={18} className="text-orange-500" />
                  Must Test Cases
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {problem.interviewNotes.mustTestCases?.map((testCase, i) => (
                    <div
                      key={i}
                      className="group p-4 bg-[var(--color-surface)] border border-[var(--color-muted)]/30 rounded-xl hover:shadow-md hover:border-[var(--color-primary)]/50 transition-all cursor-pointer"
                    >
                      <div className="font-mono text-sm text-[var(--color-text-muted)] leading-tight">
                        {testCase}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2-Column Layout - Your Original Design */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Common Mistakes */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
                    <AlertCircle size={20} className="text-orange-500" />
                    Common Mistakes
                  </h3>
                  <div className="space-y-2">
                    {problem.interviewNotes.commonMistakes?.map(
                      (mistake, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 bg-[var(--color-surface)]/50 border border-[var(--color-muted)]/20 rounded-xl hover:bg-[var(--color-surface)] transition-all"
                        >
                          <XCircle
                            size={18}
                            className="text-orange-400 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-[var(--color-text-muted)] leading-relaxed">
                            {mistake}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Perfect Explanation */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
                    <Award size={20} className="text-emerald-500" />
                    Perfect Explanation
                  </h3>
                  <div className="p-6 bg-gradient-to-r from-emerald-50/70 to-blue-50/70 border border-emerald-200/50 rounded-2xl shadow-lg">
                    <p className="text-lg text-[var(--color-primary)] font-semibold leading-relaxed italic">
                      "{problem.interviewNotes.explainInInterview}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow-up Questions */}
              {problem.interviewNotes.followUpQuestions && (
                <div className="mt-12 pt-12 border-t border-[var(--color-muted)]/30">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
                    <Zap size={18} className="text-purple-500" />
                    Follow-up Questions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {problem.interviewNotes.followUpQuestions.map(
                      (question, i) => (
                        <div
                          key={i}
                          className="group p-4 bg-gradient-to-r from-purple-50/50 to-violet-50/50 border border-purple-200/30 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                        >
                          <span className="text-[var(--color-text)] font-semibold">
                            {question}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* References */}
          {problem.references && (
            <section className="mt-12 pt-12 border-t border-[var(--color-muted)]/30">
              <h2 className="text-xl lg:text-2xl font-black text-[var(--color-text)] mb-6 flex items-center gap-2">
                <Link2 size={20} className="text-[var(--color-primary)]" />
                Resources
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {problem.references.leetcod && (
                  <a
                    href={problem.references.leetcod}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-[var(--color-card)] border border-[var(--color-muted)] rounded-2xl hover:shadow-xl hover:border-[var(--color-primary)] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen
                        size={18}
                        className="text-[var(--color-primary)] group-hover:scale-110"
                      />
                      <span className="font-bold text-[var(--color-text)]">
                        LeetCode
                      </span>
                    </div>
                    <span className="text-sm text-[var(--color-text-muted)] line-clamp-2">
                      Official problem page
                    </span>
                  </a>
                )}
                {problem.references.relatedProblems?.map((related, i) => (
                  <div
                    key={i}
                    className="group p-6 bg-[var(--color-surface)]/50 border border-[var(--color-muted)]/30 rounded-2xl hover:shadow-lg hover:bg-[var(--color-card)] transition-all cursor-pointer"
                  >
                    <div className="font-bold text-[var(--color-text)] mb-1 line-clamp-1">
                      {related.title}
                    </div>
                    <div
                      className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${getDifficultyColor(related.difficulty)}`}
                    >
                      {related.difficulty}
                    </div>
                  </div>
                ))}
                
              </div>
             <button
             onClick={() => generateProblemDocument(problem)} 
              className="mt-4 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg active:scale-90 transition-all ">
               Download PDF
             </button>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemDetailsPage;

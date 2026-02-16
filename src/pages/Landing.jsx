import { motion } from "framer-motion";
import { ArrowRight, Brain, BarChart3, Code } from "lucide-react";

export default function Landing() {
  return (
    <div className="bg-primary min-h-screen">
      
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Master Coding Interviews
          <br />
          <span className="text-secondary">
            Through Visual Problem Solving
          </span>
        </motion.h1>

        <p className="mt-6 text-secondary max-w-2xl mx-auto">
          AlgoVista helps you understand how algorithms actually work —
          step by step, visually, and interview-first.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-3 bg-surface text-primary font-semibold rounded-xl flex items-center gap-2 hover:scale-105 transition">
            Explore Topics <ArrowRight size={18} />
          </button>
          <button className="px-6 py-3 border border-muted rounded-xl text-surface hover:bg-muted hover:text-primary transition">
            View Roadmap
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">
        <Feature
          icon={<Brain />}
          title="Think Like an Interviewer"
          desc="Clear intuition, brute force reasoning, and optimized thinking."
        />
        <Feature
          icon={<BarChart3 />}
          title="Visualize Every Step"
          desc="Pointers, recursion trees, DP tables — see logic unfold."
        />
        <Feature
          icon={<Code />}
          title="Interview-Ready Solutions"
          desc="Clean code, complexity analysis, and follow-up questions."
        />
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-primary border border-muted rounded-2xl p-6 text-center"
    >
      <div className="flex justify-center mb-4 text-surface">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary text-sm">{desc}</p>
    </motion.div>
  );
}

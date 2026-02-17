import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TopicsCarousel = () => {
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

  const containerRef = useRef(null);

  // Triple topics for seamless infinite loop
  const infiniteTopics = [...topics, ...topics, ...topics];

  // Continuous linear animation - NO HOVER PAUSE
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 3; // One full set width
    let animationStart = 0;
    let rafId = null;

    const animate = () => {
      // Continuous movement - NEVER stops
      animationStart -= 0.6; // Linear speed (adjust for faster/slower)
      
      if (animationStart <= -totalWidth) {
        animationStart = 0; // Seamless reset
      }
      
      container.style.transform = `translateX(${animationStart}px)`;
      rafId = requestAnimationFrame(animate);
    };

    animate(); // Start animation

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative z-10 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Desktop: Continuous Infinite Carousel */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl h-[90px]">
            <div 
              ref={containerRef}
              className="flex gap-3 h-full absolute w-max"
              style={{ 
                scrollbarWidth: "none", 
                msOverflowStyle: "none",
                willChange: "transform"
              }}
            >
              {infiniteTopics.map((topic, index) => (
                <motion.div
                  key={`${topic.name}-${index}`}
                  className="flex-shrink-0 w-60 px-5 py-3 bg-[#fafbfc] border border-[#c1c4c8] rounded-xl cursor-pointer hover:border-[#2b2e33] hover:shadow-[0_4px_16px_rgba(43,46,51,0.12)] transition-all duration-200 flex flex-col justify-center"
                  whileHover={{ scale: 1.02 }} // Only scale on hover
                >
                  <div className="text-[13px] font-bold text-[#2b2e33] leading-tight line-clamp-1">
                    {topic.name}
                  </div>
                  <div className="text-[11px] text-[#c1c4c8] mt-1 font-semibold">
                    {topic.problems} problems
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gradient Edges */}
            <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Mobile: Simple scroll */}
        <div className="lg:hidden">
          <div className="flex gap-3 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory rounded-2xl p-4 bg-[#fafbfc]">
            {topics.map((topic) => (
              <motion.div
                key={topic.name}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-44 px-4 py-3 bg-white border border-[#c1c4c8] rounded-xl cursor-grab active:cursor-grabbing snap-center hover:border-[#2b2e33] hover:shadow-[0_4px_16px_rgba(43,46,51,0.12)] transition-all duration-200 flex flex-col justify-center"
              >
                <div className="text-[12px] font-bold text-[#2b2e33] leading-tight line-clamp-1">
                  {topic.name}
                </div>
                <div className="text-[11px] text-[#c1c4c8] mt-1 font-semibold">
                  {topic.problems} problems
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsCarousel;

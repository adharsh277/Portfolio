"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonialsData = [
  {
    name: "Yash Singh",
    title: "Senior DevOps Engineer @Oracle",
    testimonial:
      "Working with Adharsh was a great experience. His passion for his work, attention to detail, and eagerness to learn made him a highly effective and reliable team member.",
  },
  {
    name: "Apoorv Patel",
    title: "Scientist @DRDO",
    testimonial:
      "Working with Adharsh has been a fantastic experience. We often code together and share technical insights. He combines strong technical skills with a collaborative mindset, making him an inspiring and reliable teammate.",
  },
  {
    name: "Faye Kelmith",
    title: "Open Source Engineer & CNCF Contributor",
    testimonial:
      "Talented Engineer — Adharsh has shown remarkable curiosity and dedication in learning DevOps and open-source practices. From day one, I knew he had the potential to do things that are truly out-of-the-box. I am confident he will continue to innovate and make a strong impact in the open-source and DevOps community.",
  },
  {
    name: "U Akshay",
    title: "System Administrator @Siemens, Germany",
    testimonial:
      "Adharsh is a highly skilled professional. We collaborated on projects where he consistently shared innovative ideas and demonstrated excellent problem-solving skills. His creativity, technical expertise, and proactive approach make him a standout talent.",
  },
  {
    name: "Jon Bronicki",
    title: "SDE @Microsoft",
    testimonial:
      "Adharsh and I have worked together on different CNCF projects, including Flatcar. He consistently shows a keen interest in debugging and resolving issues, approaching challenges with dedication and a problem-solving mindset. His enthusiasm and technical skills make him a valuable contributor to any open-source project.",
  },
  {
    name: "Terry Howe",
    title: "SDE @AWS",
    testimonial:
      "Adharsh is a highly motivated and talented engineer. During our interactions, I observed his deep technical understanding, curiosity, and dedication to solving challenging problems. He approaches projects with enthusiasm, consistently contributes innovative ideas, and has the potential to excel in any technical endeavor he undertakes.",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-12 mb-16 min-h-[420px] flex flex-col items-center justify-center">
      <p className="text-base uppercase tracking-[0.3em] text-[color:var(--text-dim)] mb-8">Industry Voices</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-2">
        {testimonialsData.map((item, idx) => {
          const isActive = active === idx;
          return (
            <motion.button
              key={item.name}
              type="button"
              className={`relative group rounded-xl border border-white/10 bg-black/80 shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-start justify-start p-5 text-left focus:outline-none ${isActive ? 'z-20 scale-105 border-[color:var(--primary)] shadow-2xl' : 'opacity-80 hover:opacity-100'} ${active !== null && !isActive ? 'scale-95 opacity-40 pointer-events-none' : ''}`}
              style={{ minHeight: 120 }}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(idx)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(isActive ? null : idx)}
              tabIndex={0}
              aria-expanded={isActive}
            >
              <span className="font-semibold text-[color:var(--primary)] text-base mb-1">{item.name}</span>
              <span className="text-xs text-[color:var(--text-dim)] mb-2">{item.title}</span>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="testimonial"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-[color:var(--text-main)]"
                  >
                    {item.testimonial}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

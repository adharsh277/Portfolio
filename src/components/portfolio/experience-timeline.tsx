"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";

export function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <motion.section
      id="experience"
      className="panel-glass p-6 sm:p-8 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-extrabold tracking-[0.18em] uppercase text-[color:var(--text-main)] mb-3 drop-shadow-lg">Experience Timeline</h2>
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Career Journey</p>
      <div className="relative mt-6 space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(var(--violet),transparent)] sm:before:left-1/2">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.article
              key={exp.title}
              className={`relative rounded-2xl border border-white/10 bg-black/20 p-5 sm:w-[48%] transition-all duration-200 cursor-pointer hover:scale-[1.025] hover:shadow-xl ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <motion.span
                className={`absolute left-[-0.65rem] top-6 h-3 w-3 rounded-full bg-[color:var(--crimson)] sm:left-auto sm:right-[-0.65rem]`}
                animate={isOpen ? { boxShadow: "0 0 0 6px #f3438f55, 0 0 16px #f3438f" } : { boxShadow: "0 0 16px var(--crimson)" }}
                whileHover={{ scale: 1.25, boxShadow: "0 0 0 8px #f3438f88, 0 0 24px #f3438f" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <p className="label-mini">{exp.time}</p>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--text-main)]">{exp.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-dim)]">{exp.focus}</p>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3"
              >
                {isOpen && exp.details && (
                  <div className="text-xs text-[color:var(--text-main)] bg-black/30 rounded-lg p-3 border border-white/10">
                    {Array.isArray(exp.details)
                      ? exp.details.map((d, i) => <div key={i} className="mb-1">{d}</div>)
                      : exp.details}
                  </div>
                )}
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}

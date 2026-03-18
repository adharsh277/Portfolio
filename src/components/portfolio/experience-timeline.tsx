"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="panel-glass p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Experience Timeline</p>
      <div className="relative mt-6 space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(var(--violet),transparent)] sm:before:left-1/2">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.title}
            className={`relative rounded-2xl border border-white/10 bg-black/20 p-5 sm:w-[48%] ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <span className="absolute left-[-0.65rem] top-6 h-3 w-3 rounded-full bg-[color:var(--crimson)] shadow-[0_0_16px_var(--crimson)] sm:left-auto sm:right-[-0.65rem]" />
            <p className="label-mini">{exp.time}</p>
            <h3 className="mt-2 text-base font-semibold text-[color:var(--text-main)]">{exp.title}</h3>
            <p className="mt-2 text-sm text-[color:var(--text-dim)]">{exp.focus}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

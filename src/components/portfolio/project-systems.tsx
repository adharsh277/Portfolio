"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio-data";

export function ProjectSystems() {
  return (
    <section className="space-y-5" id="systems">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Systems</p>
      <a href="/blockchain" className="system-chip inline-flex text-xs uppercase tracking-[0.2em]">
        Explore Blockchain Systems
      </a>
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          className="panel-neu p-5 sm:p-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="max-w-3xl text-lg font-semibold text-[color:var(--text-main)] sm:text-2xl">{project.title}</h3>
            <div className="system-chip text-xs">System ID: {project.id.toUpperCase()}</div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-4">
            <div>
              <p className="label-mini">Architecture</p>
              {project.architecture.map((item) => (
                <p key={item} className="system-chip mt-2 text-xs">{item}</p>
              ))}
            </div>
            <div>
              <p className="label-mini">Stack</p>
              {project.tech.map((item) => (
                <p key={item} className="system-chip mt-2 text-xs">{item}</p>
              ))}
            </div>
            <div>
              <p className="label-mini">Deployment Flow</p>
              {project.flow.map((item) => (
                <p key={item} className="system-chip mt-2 text-xs">{item}</p>
              ))}
            </div>
            <div>
              <p className="label-mini">Impact Metrics</p>
              {project.metrics.map((item) => (
                <p key={item} className="system-chip mt-2 text-xs">{item}</p>
              ))}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="system-chip text-xs hover:border-[color:var(--crimson)]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  );
}

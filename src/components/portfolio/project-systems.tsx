"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TechStackInventory } from "@/components/portfolio/tech-stack-inventory";
import { projects } from "@/data/portfolio-data";

export function ProjectSystems() {
  return (
    <section className="space-y-5" id="systems">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Systems</p>
      <h2 className="text-3xl font-semibold text-[color:var(--text-main)] sm:text-4xl">Selected Infrastructure Projects</h2>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(243,67,143,0.55)] to-transparent lg:block" />

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="panel-glass group overflow-hidden p-4 sm:p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(8,6,11,0.75)]">
                {project.image ? (
                  <div className="relative h-36 w-full sm:h-40">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 48vw"
                    />
                  </div>
                ) : (
                  <div className="flex h-36 w-full items-end bg-[linear-gradient(135deg,rgba(243,67,143,0.32),rgba(201,77,248,0.15),rgba(7,5,10,0.95))] p-4 sm:h-40">
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-main)]">Project Preview</p>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,4,8,0.8)] via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-lg border border-[rgba(243,67,143,0.55)] bg-[rgba(10,7,12,0.7)] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-main)]">
                  {project.id.toUpperCase()}
                </div>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug text-[color:var(--text-main)] sm:text-lg">{project.title}</h3>

              {project.id === "sys-01" && (
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-lg border border-[rgba(243,67,143,0.5)] bg-[rgba(243,67,143,0.14)] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-main)]">
                    Prod
                  </span>
                  <span className="rounded-lg border border-white/20 bg-white/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-main)]">
                    Global Dashboard
                  </span>
                </div>
              )}

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="label-mini">Architecture</p>
                  <p className="mt-2 text-xs text-[color:var(--text-dim)]">{project.architecture.slice(0, 2).join(" • ")}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="label-mini">Stack</p>
                  <p className="mt-2 text-xs text-[color:var(--text-dim)]">{project.tech.slice(0, 4).join(" • ")}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="label-mini">Deployment</p>
                  <p className="mt-2 text-xs text-[color:var(--text-dim)]">{project.flow.slice(0, 2).join(" • ")}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="label-mini">Impact</p>
                  <p className="mt-2 text-xs text-[color:var(--text-dim)]">{project.metrics.join(" • ")}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.05] text-[color:var(--text-main)] transition-all duration-200 hover:border-[color:var(--crimson)] hover:bg-[rgba(243,67,143,0.12)] hover:shadow-[0_0_16px_rgba(243,67,143,0.2)]"
                  >
                    {link.label.toLowerCase().includes("repository") ? (
                      <Github className="size-4" />
                    ) : (
                      <ExternalLink className="size-4" />
                    )}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <a
          href="/blockchain"
          className="inline-flex items-center rounded-xl border border-[rgba(243,67,143,0.55)] bg-[rgba(243,67,143,0.12)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[color:var(--text-main)] transition-all duration-200 hover:bg-[rgba(243,67,143,0.22)] hover:shadow-[0_0_22px_rgba(243,67,143,0.25)]"
        >
          Explore Archive Projects
        </a>
      </div>

      <TechStackInventory />
    </section>
  );
}

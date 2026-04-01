import Link from "next/link";
import { ArrowUpRight, CircleDot, Github } from "lucide-react";
import { blockchainProjects } from "@/data/portfolio-data";

export default function BlockchainPage() {
  return (
    <main className="mx-auto min-h-screen w-[min(94%,1140px)] py-10 sm:py-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,12,24,0.9),rgba(6,5,10,0.96))] p-7 sm:p-10">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_12%_18%,rgba(243,67,143,0.2),transparent_34%),radial-gradient(circle_at_88%_86%,rgba(200,77,248,0.2),transparent_40%)]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--text-dim)]">WEB3 · BLOCKCHAIN · DECENTRALIZED</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-[color:var(--text-main)] sm:text-5xl">On-Chain Product Studio</h1>
          <p className="mt-3 max-w-2xl text-sm uppercase tracking-[0.22em] text-[color:var(--text-dim)] sm:text-base">
            Production-ready dApps crafted for speed, trust, and real users.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[rgba(243,67,143,0.38)] bg-[rgba(243,67,143,0.12)] px-4 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--text-main)]">3 Launches</div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--text-main)]">3 Live dApps</div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--text-main)]">2 Ecosystems</div>
          </div>
        </div>
      </section>

      <section className="mt-7 grid gap-5 lg:grid-cols-3">
        {blockchainProjects.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-[linear-gradient(150deg,rgba(20,15,30,0.95),rgba(10,8,14,0.95))] p-5 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_80%_10%,rgba(243,67,143,0.18),transparent_34%)]" />
            <div className="relative z-10">
              <h2 className="text-xl font-semibold leading-snug text-[color:var(--text-main)]">{project.name}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/14 bg-white/[0.04] px-2.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--text-dim)]"
                  >
                    {tech}
                  </span>
              ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {project.links.map((link) => {
                  const isRepo = link.label.toLowerCase().includes("repository");

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn relative flex aspect-square min-h-[96px] flex-col items-start justify-between overflow-hidden rounded-2xl border border-white/16 bg-[linear-gradient(140deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-3.5 transition-all duration-200 hover:border-[rgba(243,67,143,0.56)] hover:bg-[linear-gradient(140deg,rgba(243,67,143,0.18),rgba(201,77,248,0.08))]"
                    >
                      <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-[rgba(243,67,143,0.2)] blur-xl" />
                      <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--text-main)]">
                        {isRepo ? <Github className="size-3.5" /> : <CircleDot className="size-3.5" />}
                        {link.label}
                      </div>
                      <div className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-dim)] group-hover/btn:text-[color:var(--text-main)]">
                        Open Link
                        <ArrowUpRight className="size-3.5" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-xl border border-[rgba(243,67,143,0.45)] bg-[rgba(243,67,143,0.12)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[color:var(--text-main)] transition-all duration-200 hover:bg-[rgba(243,67,143,0.24)] hover:shadow-[0_0_20px_rgba(243,67,143,0.22)]"
        >
          Back to AI Infrastructure System
        </Link>
      </div>
    </main>
  );
}

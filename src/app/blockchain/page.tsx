import Link from "next/link";
import { blockchainProjects } from "@/data/portfolio-data";

export default function BlockchainPage() {
  return (
    <main className="mx-auto min-h-screen w-[min(94%,1100px)] py-10">
      <section className="panel-glass p-8">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-dim)]">WEB3 · BLOCKCHAIN · DECENTRALIZED</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--text-main)]">Blockchain Projects - Adharsh Unnikrishnan</h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="system-chip">3 Projects</div>
          <div className="system-chip">3 Live dApps</div>
          <div className="system-chip">2 Ecosystems</div>
        </div>
      </section>

      <section className="mt-7 space-y-4">
        {blockchainProjects.map((project) => (
          <article key={project.name} className="panel-neu p-6">
            <h2 className="text-2xl font-semibold text-[color:var(--text-main)]">{project.name}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="system-chip text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="system-chip text-xs uppercase tracking-[0.2em]">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-8">
        <Link href="/" className="system-chip text-xs uppercase tracking-[0.2em]">
          Back to AI Infrastructure System
        </Link>
      </div>
    </main>
  );
}

"use client";

import { certifications } from "@/data/portfolio-data";

export function RecognizedSection() {
  return (
    <section className="panel-neu p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Recognized and Certified by</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((name) => (
          <div key={name} className="system-chip flex h-12 items-center justify-center text-xs uppercase tracking-[0.18em]">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { testimonials } from "@/data/portfolio-data";

export function TestimonialsSection() {
  return (
    <section className="panel-glass p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Industry Voices</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item} className="rounded-xl border border-white/10 bg-black/25 p-4 text-sm text-[color:var(--text-dim)]">
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}

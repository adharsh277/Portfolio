"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications, openSourceContributions } from "@/data/portfolio-data";

export function CredentialsContributions() {
  return (
    <motion.section
      id="credentials"
      className="mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mb-6 sm:mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--text-dim)]">Credentials</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--text-main)] sm:text-4xl">Certifications and Open Source Contributions</h2>
          <p className="mt-2 max-w-2xl text-sm text-[color:var(--text-dim)]">
            A tighter view of the credentials I have earned and the public infrastructure work I have contributed to.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 sm:p-5">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-dim)]">Certifications</p>
            <h3 className="mt-1 text-xl font-semibold text-[color:var(--text-main)]">Company-backed credentials</h3>
          </div>

          <div className="-mx-1 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-4 px-1">
              {certifications.map((cert, index) => (
                <motion.article
                  key={cert.title}
                  className="group w-[286px] overflow-hidden rounded-3xl border border-white/10 bg-[rgba(8,6,11,0.72)] shadow-[0_10px_32px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(243,67,143,0.42)] sm:w-[300px] lg:w-[24%]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 75vw, 24vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,7,0.78)] via-[rgba(4,4,7,0.12)] to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[rgba(10,7,12,0.72)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-main)]">
                      {cert.issuer}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-dim)]">{cert.date}</p>
                    <h4 className="mt-2 text-sm font-semibold leading-snug text-[color:var(--text-main)]">{cert.title}</h4>
                    <span className="mt-3 inline-flex rounded-full border border-[rgba(243,67,143,0.42)] bg-[rgba(243,67,143,0.12)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[color:var(--text-main)]">
                      {cert.badge}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(243,67,143,0.08),rgba(255,255,255,0.02))] p-4 sm:p-5">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-dim)]">Open Source Contribution</p>
            <h3 className="mt-1 text-xl font-semibold text-[color:var(--text-main)]">Public infrastructure work</h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {openSourceContributions.map((item, index) => (
              <motion.article
                key={item.href}
                className="group rounded-3xl border border-white/10 bg-[rgba(7,5,10,0.68)] p-4 transition duration-300 hover:border-[rgba(243,67,143,0.42)] hover:bg-[rgba(10,7,14,0.82)]"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-semibold text-[color:var(--text-main)]">{item.name}</h4>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-dim)]">
                        {item.organization}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-dim)]">{item.summary}</p>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${item.name} repository`}
                    className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] text-[color:var(--text-main)] transition hover:border-[rgba(243,67,143,0.5)] hover:bg-[rgba(243,67,143,0.12)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[rgba(243,67,143,0.2)] bg-[rgba(243,67,143,0.08)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-main)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

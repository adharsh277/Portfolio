"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { identity, socialLinks } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export function ContactSection() {
  const linkedIn = socialLinks.find((item) => item.label.toLowerCase().includes("linkedin"));
  const github = socialLinks.find((item) => item.label.toLowerCase().includes("github"));
  const twitter = socialLinks.find((item) => item.label.toLowerCase() === "x" || item.label.toLowerCase().includes("twitter"));

  return (
    <motion.section
      id="let-s-connect"
      className="p-6 mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-dim)]">{identity.badge}</p>
      <h3 className="mt-2 text-3xl font-semibold text-[color:var(--text-main)]">{identity.name}</h3>
      <p className="mt-1 text-sm text-[color:var(--text-dim)]">{identity.headline}</p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Let&apos;s Collaborate</p>
        <a
          href={`mailto:${identity.email}?subject=Resume%20Request`}
          className="inline-flex items-center rounded-xl border border-[rgba(243,67,143,0.58)] bg-[rgba(243,67,143,0.12)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-main)] transition-all duration-200 hover:bg-[rgba(243,67,143,0.22)] hover:shadow-[0_0_20px_rgba(243,67,143,0.24)]"
        >
          Get Resume
        </a>
      </div>

      <h4 className="mt-4 text-xl font-semibold text-[color:var(--text-main)]">Operate with me on your next platform challenge.</h4>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-[color:var(--text-dim)]">
        <a href={`mailto:${identity.email}`} className="system-chip">{identity.email}</a>
        <a href={`tel:${identity.phone}`} className="system-chip">{identity.phone}</a>
        <span className="system-chip">{identity.location}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {linkedIn && (
          <a
            href={linkedIn.href}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-[color:var(--text-main)] transition-all duration-200 hover:border-[rgba(243,67,143,0.6)] hover:bg-[rgba(243,67,143,0.14)]"
          >
            <Linkedin className="size-5" />
          </a>
        )}
        {github && (
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-[color:var(--text-main)] transition-all duration-200 hover:border-[rgba(243,67,143,0.6)] hover:bg-[rgba(243,67,143,0.14)]"
          >
            <Github className="size-5" />
          </a>
        )}
        {twitter && (
          <a
            href={twitter.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            title="Twitter"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-[color:var(--text-main)] transition-all duration-200 hover:border-[rgba(243,67,143,0.6)] hover:bg-[rgba(243,67,143,0.14)]"
          >
            <Twitter className="size-5" />
          </a>
        )}
      </div>
    </motion.section>
  );
}

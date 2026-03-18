"use client";

import { identity, socialLinks } from "@/data/portfolio-data";

export function ContactSection() {
  return (
    <section id="let-s-connect" className="panel-neu p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Let&apos;s Connect</p>
      <h3 className="mt-3 text-2xl font-semibold text-[color:var(--text-main)]">Operate with me on your next platform challenge.</h3>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-[color:var(--text-dim)]">
        <a href={`mailto:${identity.email}`} className="system-chip">{identity.email}</a>
        <a href={`tel:${identity.phone}`} className="system-chip">{identity.phone}</a>
        <span className="system-chip">{identity.location}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {socialLinks.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="system-chip text-xs uppercase tracking-[0.18em]">
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { identity } from "@/data/portfolio-data";
import { Github, Linkedin, Twitter } from "lucide-react";

export function IdentityPanel() {
  const [role, setRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = identity.roles[roleIndex % identity.roles.length];
    const timeout = setTimeout(() => {
      if (charIndex < currentRole.length) {
        setRole(currentRole.slice(0, charIndex + 1));
        setCharIndex((v) => v + 1);
        return;
      }

      setTimeout(() => {
        setRole("");
        setCharIndex(0);
        setRoleIndex((v) => (v + 1) % identity.roles.length);
      }, 1000);
    }, 65);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <motion.section
      id="home"
      className="relative min-h-[88vh] overflow-hidden p-8 sm:p-12 mb-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute top-6 right-8 z-10">
        <Badge className="system-chip border-none bg-white/5 text-[10px] tracking-[0.26em] text-[color:var(--text-dim)]">
          {identity.badge}
        </Badge>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
        <div className="flex-1 text-left">
          <p className="text-lg font-bold tracking-[0.34em] text-[color:var(--crimson)] mb-2">WELCOME TO MY UNIVERSE</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-[color:var(--text-main)] mb-2">Crafting Digital<br />Masterpieces</h1>
          <p className="mt-2 max-w-2xl text-xl text-[color:var(--text-dim)] mb-4">
            I’m Adharsh U, a professional <span className="text-[color:var(--violet)] font-semibold">{role || identity.roles[0]}</span> focused on building resilient AI infra, distributed systems, and automation workflows.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="https://www.linkedin.com/in/adharsh277/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-[color:var(--text-main)] transition-all duration-200 hover:border-[rgba(243,67,143,0.6)] hover:bg-[rgba(243,67,143,0.14)]">
              <Linkedin className="size-6" />
            </a>
            <a href="https://github.com/adharsh277" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-[color:var(--text-main)] transition-all duration-200 hover:border-[rgba(243,67,143,0.6)] hover:bg-[rgba(243,67,143,0.14)]">
              <Github className="size-6" />
            </a>
            <a href="https://x.com/itsAdharsh" target="_blank" rel="noreferrer" aria-label="Twitter" title="Twitter" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-[color:var(--text-main)] transition-all duration-200 hover:border-[rgba(243,67,143,0.6)] hover:bg-[rgba(243,67,143,0.14)]">
              <Twitter className="size-6" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center rounded-xl border border-[rgba(243,67,143,0.58)] bg-[rgba(243,67,143,0.12)] px-6 py-3 text-base uppercase tracking-[0.2em] text-[color:var(--text-main)] transition-all duration-200 hover:bg-[rgba(243,67,143,0.22)] hover:shadow-[0_0_20px_rgba(243,67,143,0.24)]">Let's Collaborate</a>
            <a href="#resume" className="inline-flex items-center rounded-xl border border-[rgba(243,67,143,0.58)] bg-[rgba(243,67,143,0.12)] px-6 py-3 text-base uppercase tracking-[0.2em] text-[color:var(--text-main)] transition-all duration-200 hover:bg-[rgba(243,67,143,0.22)] hover:shadow-[0_0_20px_rgba(243,67,143,0.24)]">Get Resume</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--violet-soft),transparent_65%)]" />
    </motion.section>
  );
}

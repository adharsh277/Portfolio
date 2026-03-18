"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { identity } from "@/data/portfolio-data";

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
    <section id="home" className="panel-glass relative min-h-[88vh] overflow-hidden p-8 sm:p-12">
      <motion.div
        className="flex min-h-[78vh] flex-col justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Badge className="system-chip border-none bg-white/5 text-[10px] tracking-[0.26em] text-[color:var(--text-dim)]">
          {identity.badge}
        </Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[color:var(--text-main)] sm:text-6xl lg:text-7xl">
          {identity.name}
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[color:var(--text-dim)] sm:text-2xl">{identity.headline}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[color:var(--violet)] sm:text-sm">
          <span>{role}</span>
          <span className="inline-block h-4 w-[1px] animate-pulse bg-[color:var(--crimson)]" />
        </div>
      </motion.div>
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--violet-soft),transparent_65%)]" />
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio-data";

export function BlogsShowcase() {
  return (
    <motion.section
      className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(130deg,rgba(243,67,143,0.14),rgba(200,77,248,0.08),rgba(5,4,8,0.9))] p-5 sm:p-7"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_12%_10%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_88%_84%,rgba(243,67,143,0.22),transparent_42%)]" />

      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">Knowledge Stream</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold text-[color:var(--text-main)] sm:text-3xl">Featured Blogs</h2>
          <a
            href="https://medium.com/@adharshunni0007"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(243,67,143,0.45)] bg-[rgba(243,67,143,0.12)] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[color:var(--text-main)] transition-all duration-200 hover:bg-[rgba(243,67,143,0.24)] hover:shadow-[0_0_20px_rgba(243,67,143,0.22)]"
          >
            View Full Medium
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(145deg,rgba(18,14,26,0.94),rgba(9,7,14,0.9))]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <a href={post.href} target="_blank" rel="noreferrer" className="block">
                <div className="relative h-40 overflow-hidden border-b border-white/10">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,4,8,0.72)] via-transparent to-transparent" />
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-dim)]">
                    <span>{post.readTime}</span>
                    <span>{post.published}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-[color:var(--text-main)]">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--text-dim)]">{post.summary}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--primary)]">
                    Read on Medium
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

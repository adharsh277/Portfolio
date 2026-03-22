"use client";

import { motion } from "framer-motion";

const layers = [
  "Neural telemetry streaming across regions",
  "GPU orchestration heatmaps adapting in real time",
  "Policy engines mutating rollout thresholds",
  "Distributed services converging on target SLO",
  "Autonomous remediation feedback loop stable",
  "Data contracts validated across platform boundaries",
];

export function InfiniteScrollStream() {
  return (
    <motion.section
      id="communication"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-transparent p-6 sm:p-10 mb-16 min-h-[520px] md:min-h-[600px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Animated big planet at the bottom */}
      <motion.div
        className="absolute -bottom-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--crimson),transparent_70%)] opacity-25"
        aria-hidden="true"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      >
        {/* Orbiting orb (true circular motion) */}
        <span className="absolute left-1/2 top-1/2 w-full h-full pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
          <span className="absolute left-1/2 top-0 animate-orbit" style={{ transform: 'translateX(-50%)', transformOrigin: '50% 210px' }}>
            <span className="block w-3 h-3 rounded-full bg-white/80 shadow-lg blur-[2px]" />
          </span>
        </span>
      </motion.div>
      {/* Minimal static stars */}
      <div aria-hidden="true">
        <span className="absolute left-12 top-16 w-1 h-1 rounded-full bg-white/60 opacity-70" />
        <span className="absolute right-24 top-32 w-0.5 h-0.5 rounded-full bg-white/40 opacity-60" />
        <span className="absolute left-1/2 top-10 w-0.5 h-0.5 rounded-full bg-white/50 opacity-50" />
        <span className="absolute right-10 bottom-24 w-1 h-1 rounded-full bg-white/30 opacity-60" />
        <span className="absolute left-24 bottom-10 w-0.5 h-0.5 rounded-full bg-white/40 opacity-50" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-between gap-8 h-full">
        {/* Left: Communication & Form */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold text-white mb-2">Communication</h2>
          <h4 className="text-lg font-semibold text-white">Send a Message</h4>
          <p className="text-sm text-gray-300 mb-2">I'll get back to you within 24 hours.</p>
          <form
            className="flex flex-col gap-3"
            onSubmit={e => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.name.value;
              const email = form.email.value;
              const message = form.message.value;
              const subject = encodeURIComponent(`New message from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
              window.open(`mailto:adharshu777@gmail.com?subject=${subject}&body=${body}`);
            }}
          >
            <div>
              <label className="block text-xs text-gray-400 mb-1">Your Name</label>
              <input className="w-full rounded-md px-3 py-2 bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-crimson" placeholder="John Doe" type="text" name="name" autoComplete="name" required />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Your Email</label>
              <input className="w-full rounded-md px-3 py-2 bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-crimson" placeholder="john@example.com" type="email" name="email" autoComplete="email" required />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Your Message</label>
              <textarea className="w-full rounded-md px-3 py-2 bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-crimson" placeholder="Tell me about your project..." name="message" rows={4} required />
            </div>
            <button type="submit" className="mt-2 rounded-md bg-crimson px-4 py-2 text-white font-semibold hover:bg-pink-600 transition">Send Message</button>
          </form>
        </div>
        {/* Center: Professional Statement & Navigation */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8 gap-4">
          <h3 className="text-xl font-semibold text-crimson mb-2">Let's Connect</h3>
          <p className="text-base text-gray-200 max-w-xs mb-2">Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.</p>
          <p className="text-sm text-[color:var(--text-dim)] max-w-xs mb-2">Professional DevOps and Platform Engineer dedicated to immersive, high-performance digital systems.</p>
          <nav className="flex flex-col gap-2 mt-4">
            <a href="#selected-work" className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)] transition hover:text-[color:var(--text-main)]">Selected Work</a>
            <a href="#experience" className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)] transition hover:text-[color:var(--text-main)]">Experience</a>
            <a href="#my-skills" className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)] transition hover:text-[color:var(--text-main)]">Skills</a>
            <a href="#let-s-connect" className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)] transition hover:text-[color:var(--text-main)]">Contact</a>
          </nav>
        </div>
        {/* Right: Direct Contact */}
        <div className="flex-1 flex flex-col justify-center gap-2 items-end md:items-end">
          <h4 className="text-lg font-semibold mb-2 text-white">Direct Contact</h4>
          <div className="mb-1">
            <span className="block text-xs text-gray-400">Email</span>
            <span className="block text-white">adharshu777@gmail.com</span>
          </div>
          <div className="mb-1">
            <span className="block text-xs text-gray-400">Phone</span>
            <span className="block text-white">+91 8714717587</span>
          </div>
          <div className="mb-1">
            <span className="block text-xs text-gray-400">Location</span>
            <span className="block text-white">Alappuzha</span>
          </div>
          <div className="mt-2">
            <span className="block text-xs text-gray-400 mb-1">Social Presence</span>
            <div className="flex gap-3 mt-1">
              <a href="https://github.com/adharsh277" target="_blank" rel="noopener" aria-label="GitHub" className="text-white hover:text-crimson"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg></a>
              <a href="https://www.linkedin.com/in/adharsh277/" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-white hover:text-crimson"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg></a>
              <a href="https://x.com/itsAdharsh" target="_blank" rel="noopener" aria-label="X" className="text-white hover:text-crimson"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-2.13-.56-4.13-1.53-5.84l-7.06 7.06-2.12-2.12 7.06-7.06zM12 22C6.48 22 2 17.52 2 12c0-1.85.5-3.58 1.36-5.06l7.06 7.06 2.12-2.12-7.06-7.06A9.96 9.96 0 0 1 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="absolute left-0 right-0 bottom-0 w-full border-t border-[color:var(--border)] pt-4 text-center text-xs text-[color:var(--text-dim)] bg-transparent">
        © 2026 Adharsh Unnikrishnan. All rights reserved.
      </div>
    </motion.section>
  );
}

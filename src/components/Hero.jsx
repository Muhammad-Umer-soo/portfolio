import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  RiArrowDownLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Available for freelance work
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-6xl md:text-8xl font-extrabold leading-none mb-6"
          >
            <span className="block text-white">Muhammad Umer</span>
            <span className="block text-gradient mt-2">Frontend Dev</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I craft{" "}
            <span className="text-slate-200 font-medium">
              pixel-perfect interfaces
            </span>{" "}
            and{" "}
            <span className="text-slate-200 font-medium">
              scalable web apps
            </span>{" "}
            - turning ideas into beautiful, performant digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(16,185,129,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-dark-900 font-semibold rounded-xl transition-colors shadow-lg shadow-brand-500/30 font-display tracking-wide"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 bg-dark-700 hover:bg-dark-600 border border-dark-500/60 hover:border-brand-500/40 text-slate-200 font-semibold rounded-xl transition-all font-display tracking-wide"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {[
              {
                icon: <RiGithubLine size={20} />,
                href: "https://github.com",
                label: "GitHub",
              },
              {
                icon: <RiLinkedinLine size={20} />,
                href: "https://www.linkedin.com/in/muhammad-umer-soomro/",
                label: "LinkedIn",
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#10b981" }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-700 border border-dark-500/60 text-slate-400 hover:border-brand-500/40 transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
            <span className="text-dark-500 text-xs ml-2 font-mono">
              @umer.dev
            </span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={item}
            className="flex flex-col items-center gap-2 text-slate-600 text-xs font-mono"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            >
              <RiArrowDownLine size={20} />
            </motion.div>
            scroll to explore
          </motion.div>
        </motion.div>
      </div>

      {/* Floating code snippets */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-8 top-1/3 hidden xl:block font-mono text-xs text-brand-500/30 select-none"
      >
        <div>const dev = {"{"}</div>
        <div>
          &nbsp;&nbsp;name: <span className="text-brand-400/50">"umer"</span>,
        </div>
        <div>
          &nbsp;&nbsp;loves: <span className="text-brand-400/50">"Code"</span>
        </div>
        <div>{"}"}</div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute right-8 top-1/2 hidden xl:block font-mono text-xs text-brand-500/30 select-none"
      >
        <div className="text-teal-500/30">{"<Portfolio"}</div>
        <div>
          &nbsp;&nbsp;built=
          <span className="text-brand-400/50">"with love"</span>
        </div>
        <div className="text-teal-500/30">{"/>"}</div>
      </motion.div>
    </section>
  );
}

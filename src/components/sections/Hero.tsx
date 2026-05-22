"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import type { ProductData } from "@/types";

interface HeroProps {
  data: ProductData["hero"];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Variante exclusiva para o mockup
const mockupVariants: Variants = {
  hidden: { opacity: 1, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero({ data }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-24"
      aria-label="Seção principal"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 hero-gradient pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6"
      >
        {/* Badge animado piscando */}
        <motion.div variants={itemVariants}>
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[var(--accent)] tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            {data.badge}
          </motion.span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.04] tracking-[-0.03em]"
        >
          {data.headline}
          <br className="hidden sm:block" />
          <span className="gradient-text">{data.headlineAccent}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-[var(--text-secondary)] text-base sm:text-lg lg:text-xl leading-relaxed px-4"
        >
          {data.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
        >
          <a
            href="#oferta"
            className="btn-magnetic group inline-flex w-full sm:w-auto justify-center items-center gap-3 px-8 py-4 rounded-full bg-[var(--accent)] text-black font-display font-bold text-base hover:bg-[var(--accent-strong)] transition-all duration-200 accent-glow"
          >
            {data.ctaPrimary}
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>

          <a
            href="#metodo"
            className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 px-6 py-4 rounded-full glass hover:border-[var(--accent)] text-sm font-medium transition-all duration-200"
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[var(--accent-glow)] border border-[var(--border-hover)]">
              <Play className="w-3.5 h-3.5 text-[var(--accent)] fill-[var(--accent)]" />
            </span>
            {data.ctaSecondary}
          </a>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm text-[var(--text-secondary)] mt-4"
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2" aria-hidden="true">
            {data.socialAvatars.map((l, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[var(--bg-primary)] bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-[10px] font-bold text-black"
                style={{ zIndex: data.socialAvatars.length - i }}
              >
                {l}
              </div>
            ))}
          </div>

          {/* Stars & Text */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 star-filled fill-current"
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm mt-0.5 sm:mt-0">
              {data.socialProof}
            </span>
          </div>
        </motion.div>

        {/* Product mockup (Stratos Dashboard) */}
        <motion.div
          variants={mockupVariants}
          className="mt-12 w-full max-w-4xl px-4 sm:px-0"
        >
          <div className="glass bg-white/5 rounded-2xl overflow-hidden border border-[var(--border)] shadow-[0_32px_64px_rgba(0,0,0,0.5)] relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Mockup top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[#0a0a0c]/80">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="flex-1 text-center text-xs text-[var(--text-muted)] font-mono tracking-wider">
                {data.mockup.title}
              </span>
            </div>

            {/* Dashboard mock */}
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.mockup.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1 transition-colors hover:bg-white/10"
                >
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                    {stat.label}
                  </span>
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">
                    {stat.change} vs. mês anterior
                  </span>
                </div>
              ))}
            </div>

            {/* Mini bar chart */}
            <div className="px-4 pb-4 sm:px-6 sm:pb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-end gap-1.5 sm:gap-2 h-20 sm:h-28">
                  {data.mockup.chart.values.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all duration-300 hover:opacity-80"
                      style={{
                        height: `${h}%`,
                        background:
                          i === data.mockup.chart.values.length - 1
                            ? "var(--accent)"
                            : "rgba(110,231,183,0.15)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 px-1">
                  <span className="text-[10px] text-[var(--text-muted)] font-medium">
                    {data.mockup.chart.startLabel}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] font-medium">
                    {data.mockup.chart.endLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
          {data.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

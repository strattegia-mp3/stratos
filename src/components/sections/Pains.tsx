"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { icons } from "lucide-react";
import type { ProductData } from "@/types";

interface PainsProps {
  data: ProductData["painsSection"];
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Pains({ data }: PainsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dores"
      ref={ref}
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-labelledby="pains-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #f87171 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-[0.2em] font-medium block mb-4">
            {data.subtitle}
          </span>
          <h2
            id="pains-heading"
            className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight"
          >
            {data.titleMain}{" "}
            <span className="text-red-400">{data.titleAccent}</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="Lista de dores comuns"
        >
          {data.pains.map((pain) => {
            const Icon =
              icons[pain.icon as keyof typeof icons] || icons.CircleAlert;

            return (
              <motion.article
                key={pain.id}
                variants={cardVariants}
                role="listitem"
                className="glass rounded-2xl p-6 hover:border-red-500/30 transition-colors duration-300 group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 text-red-400" strokeWidth={2} />
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-2 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {pain.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bridge line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <div className="flex sm:inline-flex items-start sm:items-center gap-3 px-5 sm:px-6 py-4 sm:py-3 rounded-2xl sm:rounded-full glass w-full sm:w-auto text-left sm:text-center">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse flex-shrink-0 mt-1.5 sm:mt-0" />
            <span className="text-sm text-[var(--text-secondary)] leading-snug">
              {data.bridgeText}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

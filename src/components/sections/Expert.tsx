"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ProductData } from "@/types";

interface ExpertProps {
  data: ProductData["expert"];
}

export function Expert({ data }: ExpertProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="especialista"
      ref={ref}
      className="relative py-24 sm:py-36 overflow-hidden"
      aria-labelledby="expert-heading"
    >
      {/* Glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left: photo + floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center w-full order-1 lg:order-none mt-4 sm:mt-0"
          >
            {/* Photo frame */}
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div
                className="w-full h-full rounded-3xl overflow-hidden border border-[var(--border)] shadow-[0_24px_60px_rgba(0,0,0,0.5)] relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                }}
              >
                {/* Avatar placeholder dinâmico */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[var(--accent)] to-teal-600 flex items-center justify-center text-3xl sm:text-4xl font-display font-bold text-black shadow-inner">
                    {data.initials}
                  </div>
                </div>
              </div>

              {/* Accent border ring */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), transparent)",
                  filter: "blur(8px)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating achievement card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 lg:-right-8 z-20 glass rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-xl"
              aria-hidden="true"
            >
              <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mb-0.5">
                {data.floatingCard1.label}
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white flex items-end gap-1">
                {data.floatingCard1.value}
                {data.floatingCard1.trend && (
                  <span className="text-emerald-400 text-xs sm:text-sm font-medium mb-0.5">
                    {data.floatingCard1.trend}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Floating achievement card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 lg:-left-8 z-20 glass rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-xl"
              aria-hidden="true"
            >
              <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mb-0.5">
                {data.floatingCard2.label}
              </div>
              <div className="font-display font-bold text-lg sm:text-xl text-white">
                {data.floatingCard2.value}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-none"
          >
            <div>
              <span className="text-xs text-[var(--accent)] uppercase tracking-[0.2em] font-medium block mb-3">
                {data.sectionSubtitle}
              </span>
              <h2
                id="expert-heading"
                className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
              >
                {data.name}
              </h2>
              <p className="text-[var(--text-secondary)] mt-1 sm:mt-2 text-sm sm:text-base font-medium">
                {data.role}
              </p>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
              {data.bio}
            </p>

            {/* Achievements grid */}
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              role="list"
              aria-label="Conquistas e métricas"
            >
              {data.achievements.map((a) => (
                <div
                  key={a.id}
                  role="listitem"
                  className="glass rounded-2xl p-4 sm:p-5 flex flex-col gap-1 hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">
                    {a.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[var(--text-muted)] leading-snug">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Credential badges dinâmicos */}
            <div className="flex flex-wrap gap-2 pt-2">
              {data.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-[var(--text-secondary)] hover:text-white transition-colors cursor-default"
                >
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--accent)]" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

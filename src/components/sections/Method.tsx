"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import type { MethodSectionData } from "@/types";

interface MethodProps {
  data: MethodSectionData;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export function Method({ data }: MethodProps) {
  const { modules } = data;
  const [[activeIndex, direction], setPage] = useState([0, 0]);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const active = modules[activeIndex];

  const paginate = (newDirection: number) => {
    const nextIndex = activeIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < modules.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  const setIndex = (newIndex: number) => {
    if (newIndex !== activeIndex) {
      setPage([newIndex, newIndex > activeIndex ? 1 : -1]);
    }
  };

  return (
    <section
      id="metodo"
      ref={ref}
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-labelledby="method-heading"
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <span className="text-xs text-[var(--accent)] uppercase tracking-[0.2em] font-medium block mb-4">
            {data.subtitle}
          </span>
          <h2
            id="method-heading"
            className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight"
          >
            {data.titleMain}
            <span className="gradient-text">{data.titleAccent}</span>
            {data.titleSuffix}
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          role="tablist"
          aria-label="Módulos do programa"
          className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2 mb-8 sm:mb-10 pb-4 sm:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {modules.map((mod, index) => (
            <button
              key={mod.id}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`panel-${mod.id}`}
              id={`tab-${mod.id}`}
              onClick={() => setIndex(index)}
              className={`relative flex-shrink-0 snap-center px-5 py-2.5 rounded-full text-sm font-medium font-display transition-all duration-200 ${
                activeIndex === index
                  ? "text-black"
                  : "glass text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {activeIndex === index && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 rounded-full bg-[var(--accent)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">
                {mod.number} — {mod.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Panel Container */}
        <div className="relative min-h-[600px] sm:min-h-[500px] lg:min-h-[400px] flex flex-col justify-center w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center w-full"
            >
              {/* Left: info */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="font-display font-bold text-[var(--accent)] text-5xl opacity-30 leading-none select-none">
                    {active.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
                      {active.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3.5 h-3.5" />
                        {active.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <BookOpen className="w-3.5 h-3.5" />
                        {active.lessons.length} {data.lessonsLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                  {active.description}
                </p>

                {/* Progress bar */}
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-[var(--text-muted)] mb-2">
                    <span>{data.progressLabel}</span>
                    <span>{data.progressValue}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-[var(--accent)]"
                    />
                  </div>
                </div>
              </div>

              {/* Right: lessons list */}
              <div
                className="flex flex-col gap-3"
                role="list"
                aria-label={`Aulas do módulo ${active.number}`}
              >
                {active.lessons.map((lesson, i) => (
                  <motion.div
                    key={lesson}
                    role="listitem"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center text-xs font-bold text-[var(--accent)]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed pt-0.5">
                      {lesson}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controller (Slider Navigation) */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => paginate(-1)}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] disabled:opacity-30 disabled:hover:border-[var(--border)] disabled:cursor-not-allowed transition-all"
            aria-label="Módulo anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2" aria-hidden="true">
            {modules.map((_, index) => (
              <button
                key={index}
                onClick={() => setIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[var(--accent)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir para módulo ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            disabled={activeIndex === modules.length - 1}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] disabled:opacity-30 disabled:hover:border-[var(--border)] disabled:cursor-not-allowed transition-all"
            aria-label="Próximo módulo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

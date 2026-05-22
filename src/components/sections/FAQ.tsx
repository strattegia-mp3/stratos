"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { FAQ as FAQType, FaqSectionData } from "@/types";

interface FAQProps {
  data: FaqSectionData;
}

function FAQItem({
  faq,
  index,
  inView,
}: {
  faq: FAQType;
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`glass rounded-2xl overflow-hidden transition-colors duration-200 ${
        open ? "border-[var(--accent)]/30 bg-white/5" : "hover:border-white/10"
      }`}
    >
      <button
        id={`faq-btn-${faq.id}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${faq.id}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 rounded-2xl"
      >
        <span className="font-display font-semibold text-white text-base sm:text-lg leading-snug pr-4">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[var(--accent)] text-black shadow-[0_0_15px_rgba(110,231,183,0.3)]"
              : "bg-white/10 text-[var(--text-secondary)]"
          }`}
          aria-hidden="true"
        >
          {open ? (
            <Minus className="w-4 h-4" strokeWidth={2.5} />
          ) : (
            <Plus className="w-4 h-4" strokeWidth={2.5} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${faq.id}`}
            role="region"
            aria-labelledby={`faq-btn-${faq.id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ data }: FAQProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 sm:py-36 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs text-[var(--accent)] uppercase tracking-[0.2em] font-medium block mb-4">
            {data.subtitle}
          </span>
          <h2
            id="faq-heading"
            className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight"
          >
            {data.titleMain}{" "}
            <span className="gradient-text">{data.titleAccent}</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 sm:gap-4" role="list">
          {data.items.map((faq, i) => (
            <div key={faq.id} role="listitem">
              <FAQItem faq={faq} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center flex justify-center"
        >
          <div className="flex w-full sm:w-auto flex-col sm:flex-row justify-center items-center gap-2 sm:gap-1.5 px-6 py-4 rounded-2xl sm:rounded-full glass border-[var(--border)]">
            <span className="text-sm sm:text-base text-[var(--text-muted)]">
              {data.supportText}
            </span>
            <a
              href={data.supportLinkUrl}
              className="text-sm sm:text-base text-[var(--accent)] font-medium hover:text-[var(--accent-strong)] transition-colors relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
            >
              {data.supportLinkText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

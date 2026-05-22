"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial, TestimonialsSectionData } from "@/types";

interface TestimonialsProps {
  data: TestimonialsSectionData;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`Avaliação: ${rating} de 5 estrelas`}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "star-filled fill-current" : "text-white/20"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  featured,
  featuredBadgeText,
  delay = 0,
  inView,
}: {
  t: Testimonial;
  featured?: boolean;
  featuredBadgeText: string;
  delay?: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col h-full gap-4 hover:border-[var(--accent)]/30 transition-colors duration-300 ${
        featured
          ? "border-[var(--accent)]/20 bg-gradient-to-b from-white/5 to-transparent"
          : ""
      }`}
      aria-label={`Depoimento de ${t.name}`}
    >
      {featured && (
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-[10px] text-[var(--accent)] uppercase tracking-widest font-medium">
            {featuredBadgeText}
          </span>
        </div>
      )}

      <Quote
        className="w-6 h-6 text-[var(--accent)] opacity-40"
        aria-hidden="true"
      />

      <blockquote
        className={`text-white leading-relaxed flex-grow ${featured ? "text-base sm:text-lg font-medium" : "text-sm sm:text-base"}`}
      >
        &quot;{t.text}&quot;
      </blockquote>

      {/* Result badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/20 w-fit my-2">
        <span className="text-xs text-[var(--accent)] font-medium">
          {t.result}
        </span>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 mt-auto pt-4 border-t border-[var(--border)]">
        <div className="flex items-center gap-3">
          {/* Avatar initials */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-sm font-bold text-black flex-shrink-0">
            {t.name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">
              {t.name}
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-tight mt-0.5">
              {t.role} · {t.company}
            </p>
          </div>
        </div>
        <StarRating rating={t.rating} />
      </div>
    </motion.article>
  );
}

export function Testimonials({ data }: TestimonialsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = data.testimonials.filter((t) => t.featured);
  const regular = data.testimonials.filter((t) => !t.featured);

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="relative py-24 sm:py-36 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/3 w-[300px] sm:w-[500px] h-[300px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
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
            id="testimonials-heading"
            className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight"
          >
            {data.titleMain}
            <span className="gradient-text">{data.titleAccent}</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Aggregate stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16"
          role="list"
          aria-label="Estatísticas gerais dos alunos"
        >
          {data.aggregateStats.map((stat) => (
            <div
              key={stat.label}
              role="listitem"
              className="glass rounded-2xl px-4 py-5 sm:px-6 sm:py-6 text-center flex flex-col justify-center"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {/* Featured cards */}
          {featured.map((t, i) => (
            <div key={t.id} className={i === 0 ? "md:col-span-2" : ""}>
              <TestimonialCard
                t={t}
                featured
                featuredBadgeText={data.featuredBadgeText}
                delay={i * 0.1}
                inView={inView}
              />
            </div>
          ))}

          {/* Regular cards */}
          {regular.map((t, i) => {
            const isLast = i === regular.length - 1;

            return (
              <div
                key={t.id}
                className={`col-span-1 ${
                  isLast ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <TestimonialCard
                  t={t}
                  featuredBadgeText={data.featuredBadgeText}
                  delay={(featured.length + i) * 0.08}
                  inView={inView}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

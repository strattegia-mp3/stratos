"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Shield, CheckCircle2, ArrowRight, Lock, icons } from "lucide-react";
import type { ProductData } from "@/types";

interface OfferProps {
  offer: ProductData["offer"];
  ctaLabel: string;
}

const schema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .regex(/^\d[\d\s()\-]+$/, "Apenas números"),
});

type FormData = z.infer<typeof schema>;

export function Offer({ offer, ctaLabel }: OfferProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const totalBonusValue = offer.bonuses.reduce((s, b) => s + b.value, 0);

  async function onSubmit(data: FormData) {
    // Simula envio — deve ser substituído pelo gateway de pagamento real
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    console.log("Lead capturado:", data);
  }

  return (
    <section
      id="oferta"
      ref={ref}
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-labelledby="offer-heading"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, var(--accent) 0%, transparent 70%)",
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
          <span className="text-xs text-[var(--accent)] uppercase tracking-[0.2em] font-medium block mb-4">
            {offer.subtitle}
          </span>
          <h2
            id="offer-heading"
            className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight"
          >
            {offer.titleMain}
            <span className="gradient-text">{offer.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8 border-[var(--accent)]/20 accent-glow"
          >
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs text-red-400 font-medium">
                {offer.urgencyBadge}
              </span>
            </div>

            <div className="flex items-end gap-3 mb-2">
              <span className="font-display font-bold text-5xl text-white">
                R${offer.currentPrice.toLocaleString("pt-BR")}
              </span>
              <span className="text-[var(--text-muted)] line-through mb-2">
                R${offer.originalPrice.toLocaleString("pt-BR")}
              </span>
            </div>

            <p className="text-[var(--text-secondary)] text-sm mb-6">
              {offer.paymentTextPrefix}{" "}
              <strong className="text-white">
                {offer.installments}x de R${offer.installmentValue}
              </strong>{" "}
              {offer.paymentTextSuffix}
            </p>

            {/* What's included */}
            <div className="space-y-2 mb-6">
              {offer.includedItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Shield
                className="w-8 h-8 text-[var(--accent)] flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {offer.guaranteeTitle}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {offer.guaranteeDescription}
                </p>
              </div>
            </div>

            {/* Bonus section */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <icons.Gift
                  className="w-4 h-4 text-[var(--accent)]"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-white">
                  {offer.bonusTitlePrefix} R$
                  {totalBonusValue.toLocaleString("pt-BR")}
                  {offer.bonusTitleSuffix}
                </span>
              </div>

              <div
                className="space-y-2"
                role="list"
                aria-label="Lista de bônus"
              >
                {offer.bonuses.map((bonus) => {
                  const Icon =
                    icons[bonus.icon as keyof typeof icons] || icons.Gift;
                  return (
                    <div
                      key={bonus.id}
                      role="listitem"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent)]/25 flex items-center justify-center flex-shrink-0">
                        <Icon
                          className="w-4 h-4 text-[var(--accent)]"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white leading-tight">
                          {bonus.title}
                          <span className="ml-2 text-xs text-[var(--accent)]">
                            +R${bonus.value.toLocaleString("pt-BR")}
                          </span>
                        </p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">
                          {bonus.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Checkout form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <h3 className="font-display font-bold text-2xl">
                  {offer.form.successTitle}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
                  {offer.form.successDescription}
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-2xl mb-2">
                  {offer.form.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">
                  {offer.form.description}
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                  aria-label="Formulário de inscrição"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5"
                    >
                      {offer.form.nameLabel}
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder={offer.form.namePlaceholder}
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent)] ${
                        errors.name
                          ? "border-red-500/60"
                          : "border-[var(--border)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5"
                    >
                      {offer.form.emailLabel}
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder={offer.form.emailPlaceholder}
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent)] ${
                        errors.email
                          ? "border-red-500/60"
                          : "border-[var(--border)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5"
                    >
                      {offer.form.phoneLabel}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={offer.form.phonePlaceholder}
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent)] ${
                        errors.phone
                          ? "border-red-500/60"
                          : "border-[var(--border)]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-magnetic mt-2 w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--accent)] text-black font-display font-bold text-base hover:bg-[var(--accent-strong)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 accent-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        {offer.form.processingText}
                      </>
                    ) : (
                      <>
                        {ctaLabel}
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <Lock className="w-3 h-3" aria-hidden="true" />
                    <span>{offer.form.secureText}</span>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

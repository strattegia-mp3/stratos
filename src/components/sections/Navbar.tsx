"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";

interface NavbarProps {
  ctaLabel: string;
}

const navLinks = [
  { href: "#dores", label: "O Problema" },
  { href: "#metodo", label: "O Método" },
  { href: "#especialista", label: "Especialista" },
  { href: "#depoimentos", label: "Resultados" },
  { href: "#oferta", label: "Investimento" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.2 } },
};

export function Navbar({ ctaLabel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll integrada com o Lenis
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      if (lenis) {
        // Se o Lenis estiver ativo, usamos o scrollTo dele (Premium Glide)
        lenis.scrollTo(elem, {
          offset: -80, // Desconta a altura da navbar (valor negativo)
          duration: 1.5, // Duração maior para aquele arrasto mais dramático e suave
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de aceleração expoOut
        });
      } else {
        // Fallback para o nativo caso o Lenis não tenha carregado
        const offset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled || mobileOpen
            ? "bg-[rgba(6,6,8,0.85)] backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              if (lenis) {
                lenis.scrollTo(0, { duration: 1.5 });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 font-display font-bold text-lg tracking-tight relative z-50"
            aria-label="Stratos — voltar ao topo"
          >
            <span className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <Zap className="w-4 h-4 text-black" strokeWidth={2.5} />
            </span>
            <span className="text-white">stratos</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 relative z-50">
            <a
              href="#oferta"
              onClick={(e) => handleScroll(e, "#oferta")}
              className="btn-magnetic hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-black text-sm font-semibold font-display hover:bg-[var(--accent-strong)] transition-colors duration-200 accent-glow"
            >
              {ctaLabel}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -mr-2 rounded-lg text-[var(--text-secondary)] hover:text-white transition-colors"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu animado */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-16 inset-x-0 z-40 bg-[rgba(6,6,8,0.97)] backdrop-blur-xl border-b border-[var(--border)] md:hidden overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  variants={mobileItemVariants}
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-lg font-medium text-[var(--text-secondary)] hover:text-white py-3 px-2 transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                variants={mobileItemVariants}
                className="pt-4 mt-2 border-t border-white/10"
              >
                <a
                  href="#oferta"
                  onClick={(e) => handleScroll(e, "#oferta")}
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl bg-[var(--accent)] text-black font-semibold font-display text-base hover:bg-[var(--accent-strong)] transition-colors"
                >
                  {ctaLabel}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

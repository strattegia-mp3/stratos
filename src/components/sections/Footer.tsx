"use client";

import { icons, Zap } from "lucide-react";
import type { ProductData } from "@/types";

interface FooterProps {
  data: ProductData["footer"];
}

export function Footer({ data }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-[var(--border)] bg-[var(--bg-secondary)]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Grid otimizado: 2 colunas no mobile, 4 no tablet, 5 no desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand - Ocupa 2 colunas em todas as telas */}
          <div className="col-span-2 flex flex-col gap-5 sm:gap-4">
            <a
              href="#"
              onClick={scrollToTop}
              className="flex items-center gap-2 font-display font-bold text-lg w-fit"
              aria-label={`${data.brandName} — voltar ao topo`}
            >
              <span className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" strokeWidth={2.5} />
              </span>
              <span className="text-white tracking-tight">
                {data.brandName}
              </span>
            </a>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              {data.brandDescription}
            </p>

            {/* Security badges */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3 mt-2"
              role="list"
              aria-label="Selos de segurança"
            >
              {data.securityBadges.map((badge) => {
                const Icon =
                  icons[badge.icon as keyof typeof icons] || icons.Shield;

                return (
                  <div
                    key={badge.label}
                    role="listitem"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-[11px] sm:text-xs text-[var(--text-muted)]"
                  >
                    <Icon
                      className="w-3.5 h-3.5 text-[var(--accent)]"
                      aria-hidden="true"
                    />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Link columns - Cada lista ocupa 1 coluna no mobile */}
          {Object.entries(data.links).map(([category, links]) => (
            <nav
              key={category}
              className="col-span-1"
              aria-label={`Links de ${category}`}
            >
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4 sm:mb-5">
                {category}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-[var(--text-muted)]">{data.copyright}</p>
          <p className="text-xs text-[var(--text-muted)]">{data.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { productData } from "@/lib/content";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Pains } from "@/components/sections/Pains";
import { Method } from "@/components/sections/Method";
import { Expert } from "@/components/sections/Expert";
import { Testimonials } from "@/components/sections/Testimonials";
import { Offer } from "@/components/sections/Offer";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const {
    hero,
    expert,
    painsSection,
    methodSection,
    testimonialsSection,
    offer,
    faqSection,
  } = productData;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <Navbar ctaLabel={hero.ctaPrimary} />

      <Hero data={hero} />

      <hr className="section-divider" />

      <Pains data={painsSection} />

      <hr className="section-divider" />

      <Method data={methodSection} />

      <hr className="section-divider" />

      <Expert data={expert} />

      <hr className="section-divider" />

      <Testimonials data={testimonialsSection} />

      <hr className="section-divider" />

      <Offer offer={offer} ctaLabel={hero.ctaPrimary} />

      <hr className="section-divider" />

      <FAQ data={faqSection} />

      <Footer data={productData.footer} />
    </motion.main>
  );
}

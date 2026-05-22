// ============================================================
// TYPES & MOCK DATA
// ============================================================

// ------------------------------------------------------------
// 1. HERO SECTION
// ------------------------------------------------------------

/** Estatísticas numéricas exibidas no painel/mockup do Hero */
export interface DashboardStat {
  label: string;
  value: string;
  change: string;
}

/** Configuração do gráfico de barras do painel/mockup do Hero */
export interface ChartData {
  values: number[];
  startLabel: string;
  endLabel: string;
}

/** Dados principais da primeira dobra da página (Hero) */
export interface HeroData {
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  socialProof: string;
  socialAvatars: string[];
  mockup: {
    title: string;
    stats: DashboardStat[];
    chart: ChartData;
  };
  scroll: string;
}

// ------------------------------------------------------------
// 2. PAINS SECTION (Dores e problemas do cliente)
// ------------------------------------------------------------

/** Representa uma dor individual/situação comum enfrentada pelo lead */
export interface Pain {
  id: string;
  icon: string;
  title: string;
  description: string;
}

/** Dados gerais da seção de dores e conscientização do problema */
export interface PainsSectionData {
  subtitle: string;
  titleMain: string;
  titleAccent: string;
  description: string;
  bridgeText: string;
  pains: Pain[];
}

// ------------------------------------------------------------
// 3. METHOD SECTION (Apresentação do Método/Módulos)
// ------------------------------------------------------------

/** Estrutura de um módulo individual do curso ou programa */
export interface Module {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: string[];
  duration: string;
}

/** Textos e dados da seção que detalha como o método funciona */
export interface MethodSectionData {
  subtitle: string;
  titleMain: string;
  titleAccent: string;
  titleSuffix: string;
  description: string;
  lessonsLabel: string;
  progressLabel: string;
  progressValue: string;
  modules: Module[];
}

// ------------------------------------------------------------
// 4. EXPERT SECTION (Autoridade e quem ensina)
// ------------------------------------------------------------

/** Uma conquista estática listada no grid de autoridade (ex: Prêmios, Anos de Exp.) */
export interface Achievement {
  id: string;
  value: string;
  label: string;
}

/** Cartões flutuantes interativos que ficam sobre a foto do especialista */
export interface FloatingCard {
  label: string;
  value: string;
  trend?: string;
}

/** Dados de perfil, biografia e autoridade do criador/especialista */
export interface ExpertData {
  sectionSubtitle: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  floatingCard1: FloatingCard;
  floatingCard2: FloatingCard;
  achievements: Achievement[];
  badges: string[];
}

// ------------------------------------------------------------
// 5. TESTIMONIALS SECTION (Prova Social)
// ------------------------------------------------------------

/** Depoimento individual de um aluno ou cliente */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  result: string;
  featured?: boolean;
}

/** Estatísticas gerais e agregadas de sucesso dos alunos */
export interface AggregateStat {
  value: string;
  label: string;
}

/** Dados gerais da seção de prova social e depoimentos */
export interface TestimonialsSectionData {
  subtitle: string;
  titleMain: string;
  titleAccent: string;
  description: string;
  featuredBadgeText: string;
  aggregateStats: AggregateStat[];
  testimonials: Testimonial[];
}

// ------------------------------------------------------------
// 6. OFFER SECTION (Preço, Bônus e Formulário)
// ------------------------------------------------------------

/** Representa um bônus entregue na compra do produto */
export interface Bonus {
  id: string;
  title: string;
  description: string;
  value: number;
  icon: string;
}

/** Textos de conversão, dados de precificação, bônus e formulário de checkout */
export interface OfferData {
  subtitle: string;
  titleMain: string;
  titleAccent: string;
  urgencyBadge: string;
  originalPrice: number;
  currentPrice: number;
  installments: number;
  installmentValue: number;
  paymentTextPrefix: string;
  paymentTextSuffix: string;
  includedItems: string[];
  guaranteeTitle: string;
  guaranteeDescription: string;
  bonusTitlePrefix: string;
  bonusTitleSuffix: string;
  bonuses: Bonus[];
  form: {
    successTitle: string;
    successDescription: string;
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    processingText: string;
    secureText: string;
  };
}

// ------------------------------------------------------------
// 7. FAQ SECTION (Perguntas Frequentes)
// ------------------------------------------------------------

/** Uma pergunta frequente com sua respectiva resposta */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

/** Textos e lista de perguntas para quebra de objeções finais */
export interface FaqSectionData {
  subtitle: string;
  titleMain: string;
  titleAccent: string;
  description: string;
  supportText: string;
  supportLinkText: string;
  supportLinkUrl: string;
  items: FAQ[];
}

// ------------------------------------------------------------
// 8. FOOTER SECTION (Rodapé)
// ------------------------------------------------------------

/** Link de navegação simples contido no rodapé */
export interface FooterLink {
  label: string;
  href: string;
}

/** Selos de segurança exibidos no rodapé para confiança extra */
export interface SecurityBadge {
  icon: string;
  label: string;
}

/** Textos de copyright, links legais, menus de rodapé e selos */
export interface FooterData {
  brandName: string;
  brandDescription: string;
  securityBadges: SecurityBadge[];
  links: Record<string, FooterLink[]>; // Record permite mapear "Categoria" -> "Array de Links"
  copyright: string;
  disclaimer: string;
}

// ============================================================
// ROOT INTERFACE (Objeto Principal)
// ============================================================

/** * Estrutura principal de dados da Landing Page.
 * Todas as seções do site consomem suas propriedades a partir deste objeto global.
 */
export interface ProductData {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  hero: HeroData;
  expert: ExpertData;
  painsSection: PainsSectionData;
  methodSection: MethodSectionData;
  testimonialsSection: TestimonialsSectionData;
  offer: OfferData;
  faqSection: FaqSectionData;
  footer: FooterData;
}

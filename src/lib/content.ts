import type { ProductData } from "../types";

export const productData: ProductData = {
  meta: {
    title: "Stratos — Transforme IA em Receita de 6 Dígitos",
    description:
      "O único método que combina Inteligência Artificial com estratégias de vendas high-ticket para você fechar contratos de R$10k+ todo mês, mesmo partindo do zero.",
    keywords: [
      "Stratos",
      "Inteligência artificial para vendas",
      "Consultoria premium",
      "Vendas High-ticket",
      "Automação com IA",
      "Escalar negócios",
      "Rafael Monteiro",
    ],
    ogImage: "/og/og-image.webp",
  },
  hero: {
    badge: "Apenas 47 vagas disponíveis",
    headline: "Fature R$50k/mês usando",
    headlineAccent: "IA como sua sócia.",
    subheadline:
      "O método exclusivo que já transformou 1.200+ profissionais em autoridades high-ticket — sem precisar de audiência, sem tráfego pago e sem anos de experiência.",
    ctaPrimary: "Quero minha vaga agora",
    ctaSecondary: "Ver como funciona",
    socialProof: "1.247 alunos transformados nos últimos 12 meses",
    socialAvatars: ["A", "B", "C", "D", "E"],
    mockup: {
      title: "stratos/dashboard",
      stats: [
        { label: "Receita este mês", value: "R$47.800", change: "+32%" },
        { label: "Contratos fechados", value: "9", change: "+4" },
        { label: "Ticket médio", value: "R$5.311", change: "+18%" },
      ],
      chart: {
        values: [40, 55, 35, 70, 60, 85, 92, 78, 95, 88, 100, 96],
        startLabel: "Jan",
        endLabel: "Dez",
      },
    },
    scroll: "Role para baixo",
  },
  expert: {
    sectionSubtitle: "Quem vai construir sua solução",
    name: "Victor Rocha",
    role: "Head de Tecnologia e Automação · CEO da MythMirror",
    bio: "Sou estudante de Ciência da Computação e profissional de tecnologia com experiência em desenvolvimento full-stack, automação de testes, liderança de startup e implementação de soluções com IA. Minha atuação foca em criar tecnologia útil, escalável e orientada à resolução de problemas reais.",
    initials: "VR",
    floatingCard1: {
      label: "Empreendedor do Futuro",
      value: "1º Lugar",
      trend: "SEBRAE (2022)",
    },
    floatingCard2: {
      label: "Projetos Sociais Liderados",
      value: "MythMirror",
    },
    achievements: [
      {
        id: "1",
        value: "RenderUp",
        label: "Co-founder & Head de TI",
      },
      {
        id: "2",
        value: "MythMirror",
        label: "CEO & Fundador",
      },
      {
        id: "3",
        value: "Full-Stack",
        label: "Node.js, React e APIs REST",
      },
      {
        id: "4",
        value: "IA Aplicada",
        label: "Otimização de processos operacionais",
      },
    ],
    badges: [
      "Desenvolvimento Web Full-Stack",
      "Arquitetura de Aplicações",
      "Automação e QA",
      "Soluções com Propósito Social",
    ],
  },
  painsSection: {
    subtitle: "Reconhece alguma dessas situações?",
    titleMain: "Por que você ainda não fatura ",
    titleAccent: "o que merece",
    description:
      "Se pelo menos uma dessas situações soa familiar, você está exatamente no lugar certo — e isso está prestes a mudar.",
    bridgeText:
      "Existe um caminho diferente — e você está prestes a conhecê-lo.",
    pains: [
      {
        id: "1",
        icon: "TrendingDown",
        title: "Trabalha mais, ganha menos",
        description:
          "Você entrega projetos incríveis mas cobra preços de freelancer junior. O mercado não te vê como especialista — ainda.",
      },
      {
        id: "2",
        icon: "Bot",
        title: "IA te assusta mais do que te ajuda",
        description:
          "Todo dia surge uma nova ferramenta. Você tentou o ChatGPT, mas ainda não sabe como transformar isso em receita real e consistente.",
      },
      {
        id: "3",
        icon: "Frown",
        title: "Propostas rejeitadas por preço",
        description:
          "Você sente que precisa baixar o preço para fechar. Seus concorrentes cobram 3x mais pelo mesmo serviço — e ainda ganham o cliente.",
      },
      {
        id: "4",
        icon: "Clock",
        title: "Preso na armadilha do tempo por dinheiro",
        description:
          "Cada real que você ganha exige uma hora de trabalho. Férias? Descanso? Isso parece um luxo que você ainda não pode ter.",
      },
      {
        id: "5",
        icon: "Target",
        title: "Sem estratégia clara de posicionamento",
        description:
          "Você é bom no que faz, mas não sabe como comunicar seu valor de forma que justifique preços premium. O resultado: invisibilidade.",
      },
      {
        id: "6",
        icon: "BatteryWarning",
        title: "Clientes errados, energia drenada",
        description:
          "Você atende clientes que pedem desconto, não pagam no prazo e ainda reclamam. Parece que bons clientes existem só para os outros.",
      },
    ],
  },
  methodSection: {
    subtitle: "O Método",
    titleMain: "4 módulos. Um sistema ",
    titleAccent: "comprovado",
    titleSuffix: ".", // O ponto final após a palavra destacada
    description:
      "Cada módulo foi destilado a partir de centenas de consultorias reais e validado com mais de 1.200 alunos em diferentes nichos.",
    lessonsLabel: "aulas",
    progressLabel: "Progresso dos alunos",
    progressValue: "94% de conclusão",
    modules: [
      {
        id: "1",
        number: "01",
        title: "Fundação High-Ticket",
        description:
          "Construa a base mental e estratégica para operar no mercado premium. Entenda a psicologia do comprador de alto valor e como se posicionar como a escolha óbvia.",
        lessons: [
          "A mentalidade dos 6 dígitos mensais",
          "Mapeando o mercado de alto valor",
          "Seu posicionamento irresistível em 72h",
          "A oferta que vende sozinha",
        ],
        duration: "4h 30min",
      },
      {
        id: "2",
        number: "02",
        title: "IA como Alavanca de Receita",
        description:
          "Domine as ferramentas de IA que geram resultado real: automação de prospecção, criação de conteúdo de autoridade e análise preditiva de clientes.",
        lessons: [
          "Stack de IA para consultores premium",
          "Prospecção automatizada com ChatGPT + Clay",
          "Conteúdo de autoridade em escala",
          "Análise e qualificação de leads com IA",
        ],
        duration: "6h 15min",
      },
      {
        id: "3",
        number: "03",
        title: "O Método de Fechamento Magnético",
        description:
          "O script de vendas validado em mais de 3.000 calls que fecha contratos de R$10k a R$50k sem pressão, sem objeções travadas e sem precisar dar desconto.",
        lessons: [
          "A anatomia da call de fechamento perfeita",
          "Contornando as 7 objeções mais comuns",
          "Precificação baseada em valor (não em horas)",
          "Follow-up que não irrita e ainda converte",
        ],
        duration: "5h 45min",
      },
      {
        id: "4",
        number: "04",
        title: "Escala e Sistemas",
        description:
          "Crie sistemas que trabalhem por você: onboarding automatizado, entrega padronizada e uma esteira de produtos que gera receita recorrente 24/7.",
        lessons: [
          "SOPs que eliminam o caos operacional",
          "Criando programas de mentoria escaláveis",
          "Recorrência e receita previsível",
          "Contratando e treinando sua equipe com IA",
        ],
        duration: "4h 20min",
      },
    ],
  },
  testimonialsSection: {
    subtitle: "Prova Social",
    titleMain: "Resultados reais de ",
    titleAccent: "pessoas reais",
    description:
      "Mais de 1.200 profissionais transformaram suas receitas seguindo exatamente este método. Estes são alguns deles.",
    featuredBadgeText: "Destaque",
    aggregateStats: [
      { value: "1.247", label: "Alunos formados" },
      { value: "4.9/5", label: "Avaliação média" },
      { value: "R$48M+", label: "Receita gerada" },
      { value: "94%", label: "Taxa de conclusão" },
    ],
    testimonials: [
      {
        id: "1",
        name: "Camila Ferreira",
        role: "Consultora de Marketing",
        company: "CF Estratégias",
        avatar: "/avatars/camila.jpg",
        rating: 5,
        text: "Em 60 dias saí de R$4k/mês para fechar meu primeiro contrato de R$18k. O módulo de fechamento mudou completamente como eu conduzo minhas calls. Nunca mais voltei para os preços antigos.",
        result: "+350% de receita em 60 dias",
        featured: true,
      },
      {
        id: "2",
        name: "Bruno Takahashi",
        role: "Designer & Estrategista",
        company: "Studio Takahashi",
        avatar: "/avatars/bruno.jpg",
        rating: 5,
        text: "Eu sabia que meu trabalho era bom, mas não conseguia cobrar o que merecia. O Rafael me mostrou como estruturar uma oferta que o cliente percebe como investimento, não como custo.",
        result: "Ticket médio de R$2k para R$15k",
      },
      {
        id: "3",
        name: "Fernanda Alves",
        role: "Coach Executiva",
        company: "Líder Fem",
        avatar: "/avatars/fernanda.jpg",
        rating: 5,
        text: "A combinação de IA com as estratégias high-ticket é devastadora. Minha prospecção virou automática e meu tempo livre triplicou enquanto a receita dobrou.",
        result: "Receita dobrou, horas trabalhadas caíram",
        featured: true,
      },
      {
        id: "4",
        name: "Marcos Oliveira",
        role: "Dev & Tech Consultant",
        company: "MOCode",
        avatar: "/avatars/marcos.jpg",
        rating: 5,
        text: "Achei que programador não conseguia vender high-ticket. Errei feio. Hoje fecho projetos de R$25k+ aplicando exatamente o que aprendi aqui.",
        result: "Primeiro contrato de R$25k em 45 dias",
      },
      {
        id: "5",
        name: "Juliana Costa",
        role: "CFO Fractional",
        company: "JC Consultoria",
        avatar: "/avatars/juliana.jpg",
        rating: 5,
        text: "Passei anos cobrando por hora. Hoje tenho 3 clientes de retainer que me pagam R$8k/mês cada. Trabalho menos, ganho mais, e ainda tenho fim de semana.",
        result: "3 clientes de R$8k/mês em retainer",
      },
      {
        id: "6",
        name: "Diego Barbosa",
        role: "Especialista em Tráfego",
        company: "Barbosa Media",
        avatar: "/avatars/diego.jpg",
        rating: 5,
        text: "Estava prestes a largar o digital. O programa não salvou só minha receita — salvou meu negócio. Faturei R$67k no mês passado.",
        result: "R$67k no mês 4 de programa",
        featured: true,
      },
    ],
  },
  offer: {
    subtitle: "Investimento",
    titleMain: "Tudo que você precisa para ",
    titleAccent: "escalar agora",
    urgencyBadge: "Oferta por tempo limitado",
    originalPrice: 4997,
    currentPrice: 1997,
    installments: 12,
    installmentValue: 197,
    paymentTextPrefix: "ou",
    paymentTextSuffix: "sem juros",
    includedItems: [
      "Acesso vitalício a todos os 4 módulos",
      "Aulas em vídeo HD + áudio para download",
      "Materiais e templates prontos para usar",
      "Suporte direto por 6 meses",
      "Atualizações gratuitas do conteúdo",
    ],
    guaranteeTitle: "7 dias de garantia incondicional",
    guaranteeDescription: "Peça o reembolso total sem nenhuma pergunta.",
    bonusTitlePrefix: "Bônus inclusos (valor total:",
    bonusTitleSuffix: ")",
    bonuses: [
      {
        id: "1",
        title: "Biblioteca de Scripts de Vendas",
        description:
          "47 scripts testados para cada etapa do funil: cold outreach, call de descoberta e fechamento. Plug-and-play.",
        value: 997,
        icon: "FileText",
      },
      {
        id: "2",
        title: "Vault de Prompts para IA",
        description:
          "500+ prompts categorizados para prospecção, criação de conteúdo, análise de mercado e automação de processos.",
        value: 797,
        icon: "Zap",
      },
      {
        id: "3",
        title: "Comunidade Vitalícia High-Ticket",
        description:
          "Acesso permanente a um grupo exclusivo de consultores premium com sessões de hot-seats semanais ao vivo.",
        value: 1497,
        icon: "Users",
      },
      {
        id: "4",
        title: "Mentoria em Grupo Semanal (3 meses)",
        description:
          "12 sessões ao vivo com Rafael para revisar sua oferta, posicionamento e fechar suas primeiras vendas high-ticket.",
        value: 2997,
        icon: "Video",
      },
    ],
    form: {
      successTitle: "Você está na lista!",
      successDescription:
        "Em instantes você receberá um e-mail com o acesso à plataforma e todos os bônus. Confira sua caixa de entrada.",
      title: "Reserve sua vaga agora",
      description: "Preencha seus dados para garantir acesso imediato.",
      nameLabel: "Nome completo",
      namePlaceholder: "Seu nome completo",
      emailLabel: "E-mail",
      emailPlaceholder: "seu@email.com",
      phoneLabel: "WhatsApp",
      phonePlaceholder: "(11) 99999-0000",
      processingText: "Processando…",
      secureText: "Pagamento 100% seguro · SSL · PCI DSS",
    },
  },
  faqSection: {
    subtitle: "Dúvidas Frequentes",
    titleMain: "Respondendo suas ",
    titleAccent: "objeções",
    description:
      "Reunimos as dúvidas mais comuns antes da decisão de investimento.",
    supportText: "Ainda tem dúvidas?",
    supportLinkText: "Fale com nosso time",
    supportLinkUrl: "mailto:suporte@stratos.app",
    items: [
      {
        id: "1",
        question: "Preciso ter experiência com IA para entrar no programa?",
        answer:
          "Não. O programa foi desenhado para quem nunca usou IA profissionalmente. Começamos do zero e você vai ter as ferramentas funcionando no seu negócio ainda na primeira semana. O importante não é a IA em si — é saber onde e como aplicá-la para gerar receita.",
      },
      {
        id: "2",
        question: "Em quanto tempo verei resultados concretos?",
        answer:
          "A maioria dos alunos fecha o primeiro contrato high-ticket entre 30 e 60 dias. Alguns fecham ainda nas primeiras semanas. O resultado depende da sua dedicação e velocidade de implementação, mas o método é altamente prático — você age enquanto aprende.",
      },
      {
        id: "3",
        question: "Funciona para a minha área de atuação?",
        answer:
          "Sim. O método já foi validado em mais de 40 nichos: marketing digital, design, tecnologia, coaching, consultoria financeira, RH, jurídico, saúde e muito mais. Se você tem conhecimento especializado e quer cobrar mais por ele, o programa funciona para você.",
      },
      {
        id: "4",
        question: "Como funciona a garantia de 7 dias?",
        answer:
          "Simples e sem burocracia. Se por qualquer motivo — ou sem motivo algum — você não estiver satisfeito nos primeiros 7 dias, basta enviar um e-mail para suporte@stratos.app e devolvemos 100% do seu investimento. Sem perguntas, sem julgamento.",
      },
      {
        id: "5",
        question: "Vou conseguir acompanhar com minha agenda atual?",
        answer:
          "O programa foi estruturado para profissionais ocupados. As aulas são gravadas (acesso vitalício), a carga semanal recomendada é de 3 a 5 horas, e você pode implementar no seu próprio ritmo. A comunidade e as mentorias ao vivo têm gravações disponíveis.",
      },
      {
        id: "6",
        question: "Esse é mais um curso gravado que vou deixar para depois?",
        answer:
          "Entendemos a desconfiança — e é exatamente por isso que o programa é orientado à ação desde o Módulo 1. Você não vai apenas assistir aulas; vai preencher o seu plano de posicionamento, criar sua oferta e fazer suas primeiras abordagens ainda na primeira semana. Resultado ou reembolso.",
      },
    ],
  },
  footer: {
    brandName: "stratos",
    brandDescription:
      "O ecossistema definitivo para profissionais que buscam alavancar suas operações, dominar o mercado e escalar de forma inteligente.",
    securityBadges: [
      { icon: "Shield", label: "Compra Segura" },
      { icon: "Lock", label: "SSL 256-bit" },
      { icon: "CreditCard", label: "PCI DSS" },
    ],
    links: {
      Produto: [
        { label: "O Problema", href: "#dores" },
        { label: "O Método", href: "#metodo" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Investimento", href: "#oferta" },
        { label: "FAQ", href: "#faq" },
      ],
      Empresa: [
        { label: "Sobre nós", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Parceiros", href: "#" },
        { label: "Imprensa", href: "#" },
      ],
      Legal: [
        { label: "Política de Privacidade", href: "#" },
        { label: "Termos de Uso", href: "#" },
        { label: "Política de Reembolso", href: "#" },
        { label: "LGPD", href: "#" },
      ],
    },
    copyright: `© ${new Date().getFullYear()} Stratos · Stratos Digital Ltda`,
    disclaimer: "Este site não é afiliado ao Facebook, Instagram ou Google.",
  },
};

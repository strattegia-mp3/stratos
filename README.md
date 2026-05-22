<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-Non--Commercial-red?style=for-the-badge" alt="License: Non-Commercial" /></a>
</p>

# ⚡ Stratos — High-Ticket Landing Page

![Open Graph Preview](public/og/og-image.webp)

> **Stratos** é um template de landing page de altíssima conversão focado em produtos digitais e mentorias High-Ticket. Construído para ser visualmente imersivo, rápido e focado em UX premium, utilizando o poder do Next.js, Framer Motion e Lenis Scroll.

_Nota: Todas as informações (exceto sobre "O Especialista") e marcas exibidas neste projeto são inteiramente fictícias e servem apenas como demonstração técnica de competência em engenharia de software frontend._


## ✨ Funcionalidades

O Stratos foi projetado para elevar a percepção de valor do seu produto:

- **🎢 Experiência Imersiva:** Scroll amanteigado e inercial nativo implementado com **Lenis**, oferecendo uma navegação premium e fluida.
- **✨ Animações Orquestradas:** Transições de estado, fade-ins de rolagem, efeitos de magnetic buttons e micro-interações construídas com **Framer Motion**.
- **🧩 Layouts Modernos:** - Slider interativo com gestos para a seção do Método.
  - Design assíncrono em **Bento Grid** para a Prova Social (Depoimentos).
  - FAQ com Accordions suaves e responsivos.
- **📱 Mobile-First Real:** Design minuciosamente ajustado para dispositivos móveis, sem quebras de layout ou elementos espremidos.
- **📈 Focado em Dados:** Integração nativa, leve e sem atrito com **Vercel Analytics** e **Google Analytics 4**.
- **🔍 SEO Avançado:** Metadata configurada com OpenGraph, Canonical URLs, Apple Touch Icons e Manifest dinâmico.

## 🛠️ Stack Tecnológico

Arquitetura construída para performance extrema e facilidade de customização:

- **Core:** Next.js (App Router) + React
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (com utilitários de Glassmorphism e Glow customizados)
- **Animações:** Framer Motion
- **Smooth Scroll:** @studio-freight/react-lenis
- **Ícones:** Lucide React
- **Monitoramento:** @vercel/analytics + @next/third-parties/google

---

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/strattegia-mp3/stratos.git
cd stratos
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as Variáveis de Ambiente:** Crie um arquivo .env.local na raiz para habilitar o Google Analytics localmente:
```bash
Snippet de código
NEXT_PUBLIC_GA_ID=G-SEU_CODIGO_AQUI
```

4. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
# Acesse http://localhost:3000 no seu navegador.
```

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── app/ # Next.js App Router (Layout principal e Metadados)
├── components/ # Componentes React
│ ├── sections/ # Seções modulares da Landing Page (Hero, Pains, Method, etc)
│ └── SmoothScroll/ # Provedor de Inércia Global (Lenis)
├── types/ # Definições TS e Mock Data Centralizado (Fácil de alterar)
└── globals.css # Design Tokens, Animações CSS, Custom Scrollbar
```

---

## 🎨 Design System

A identidade visual utiliza cores profundas (Deep Cosmos background) contrastando com tons de neon/esmeralda (var(--accent)). Todos os tokens visuais e tipografias (Sora para Display, DM Sans para Body) são facilmente customizáveis via variáveis CSS no globals.css.

---

## ⚖️ Licença e Uso

Este projeto está licenciado sob uma **Licença de Uso Restrito (Não-Comercial Proprietary)**.

- Você **pode utilizar**, modificar e fazer o deploy deste código para uso em seus próprios projetos ou para vender o seu próprio produto final, que não seja o código da página em si.

- Você **NÃO pode revender**, redistribuir ou empacotar este código-fonte (ou suas derivações) como um software proprietário, template comercial ou produto de código fechado para terceiros.

<div align="right">
  <p><code>~ $ "Desenvolvido com 💜 e TypeScript por Victor Rocha."</code></p>
</div>

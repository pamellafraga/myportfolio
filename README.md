<div align="center">

# Portfólio — Pamella Fraga

**Engenharia de software · Arquitetura de dados · Interfaces que conectam**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[LinkedIn](https://www.linkedin.com/in/pamella-fraga/) · [GitHub](https://github.com/pamellafraga)

</div>

---

Site pessoal em **uma única página (SPA)** com navegação por secções: apresentação, idiomas, stack técnico, projetos, formação e contato. Visual **dark tech** com acentos em ciano, tipografia **Outfit**, animações com **Framer Motion** e layout pensado para **desktop e mobile** (incluindo *safe areas* em dispositivos com notch).

## Destaques

| Área | O que foi cuidado |
|------|-------------------|
| **UX** | Navegação fixa acessível, transições entre páginas, hierarquia clara de conteúdo |
| **Responsivo** | Grid adaptativo, cartões de portfólio e menu inferior otimizado para toque |
| **Acessibilidade** | `aria-label` na navegação, textos alternativos, contraste em tema escuro |
| **Performance** | Build com Vite, lazy loading de imagens onde aplicável |

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** — animações e microinterações
- **Lucide React** — ícones da navegação

## Pré-requisitos

- [Node.js](https://nodejs.org/) **18+** (recomendado: LTS atual)
- npm (incluído com o Node)

## Como executar

```bash
# Clonar o repositório
git clone https://github.com/pamellafraga/myportfolio.git
cd myportfolio

# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Modo desenvolvimento com HMR |
| `npm run build` | Typecheck (`tsc -b`) + build de produção em `dist/` |
| `npm run preview` | Pré-visualização local do build |
| `npm run lint` | ESLint no projeto |

## Estrutura (resumo)

```
src/
├── App.tsx                 # Shell, backdrop e router por estado
├── profile.ts              # Nome, links, e-mail, telefone, imagens públicas
├── nav.ts                  # Itens da navegação
├── components/
│   ├── HeroSection.tsx
│   ├── PortfolioSection.tsx
│   ├── TechnologiesSection.tsx
│   ├── LanguagesSection.tsx
│   ├── EducationSection.tsx
│   ├── ContactSection.tsx
│   ├── FooterSection.tsx
│   ├── SideNav.tsx
│   ├── TechBackdrop.tsx
│   └── …
└── main.tsx
public/                     # favicon, retrato, assinatura, assets estáticos
```

## Personalização rápida

- **Dados e links:** edite `src/profile.ts`.
- **Imagens:** coloque ficheiros em `public/` e atualize os caminhos em `profile.ts` (retrato, assinatura, etc.).
- **Projetos do portfólio:** lista e metadados em `src/components/PortfolioSection.tsx`.

## Deploy

O output estático fica em **`dist/`** após `npm run build`. Compatível com **GitHub Pages**, **Vercel**, **Netlify** ou qualquer hospedagem de ficheiros estáticos — configure a raiz do site para servir `index.html` nas rotas da SPA (*fallback* para SPA, se a plataforma exigir).

---

<div align="center">

**Pamella Fraga** — Engenharia de software com foco em dados, sistemas e produto.

</div>

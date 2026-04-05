import { motion } from 'framer-motion'
import { useState } from 'react'
import { PROFILE } from '../profile'

/** Miniatura pública do site (amostra da página). Troque por `/portfolio/nome.jpg` em `public/` se quiser arquivo próprio. */
function sitePreviewImage(siteUrl: string, width = 1200) {
  const u = encodeURIComponent(siteUrl)
  return `https://s.wordpress.com/mshots/v1/${u}?w=${width}`
}

type Project = {
  title: string
  desc: string
  tags: readonly string[]
  tone: string
  image: string
  imageAlt: string
  /** Para screenshots de página: foco no topo (hero/navegação). */
  imageFocus?: 'top' | 'center'
  /** Sem link: apenas aviso de acesso restrito (ex.: código privado / NDA). */
  restricted?: boolean
  href?: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    title: 'Xpress Solutions',
    desc:
      'Presença digital para empresa de tecnologia que combina site institucional com compras dentro do próprio sistema: fluxo de pedidos, área de pagamentos e fechamento integrado na experiência — além de diagnóstico, formulários e mensagem clara de valor em segurança e eficiência para negócios.',
    tags: ['Institucional + vendas', 'Pagamentos', 'Brasil'],
    tone: 'from-[#22d3ee]/28 to-[#06b6d4]/12',
    href: 'https://www.xpresssolutions.com.br/',
    linkLabel: 'Ver site ao vivo',
    image: sitePreviewImage('https://www.xpresssolutions.com.br/'),
    imageAlt: 'Pré-visualização do site Xpress Solutions',
    imageFocus: 'top',
  },
  {
    title: 'Assure Seguros',
    desc:
      'Landing e presença digital para corretora especializada em seguros empresariais, garantias para licitações, risco de engenharia e responsabilidade civil — foco em confiança e conversão.',
    tags: ['Landing', 'Seguros B2B', 'UI comercial'],
    tone: 'from-[#06b6d4]/18 to-[#0891b2]/12',
    href: 'https://www.assureseguros.com.br/',
    linkLabel: 'Ver site ao vivo',
    image: sitePreviewImage('https://www.assureseguros.com.br/'),
    imageAlt: 'Pré-visualização do site Assure Seguros',
    imageFocus: 'top',
  },
  {
    title: 'BiasScope',
    desc:
      'Ferramenta de detecção de viés linguístico em textos gerados por IA, com regras explicáveis e foco em ética e inclusão.',
    tags: ['IA responsável', 'CSS', 'Pesquisa'],
    tone: 'from-[#0891b2]/16 to-[#22d3ee]/10',
    href: `${PROFILE.github}/BiasScope`,
    linkLabel: 'Código no GitHub',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Visual abstrato de inteligência artificial e redes neurais',
  },
  {
    title: 'LLM-Guard',
    desc:
      'Auditor ético e de segurança para respostas de LLMs: viés, conteúdo sensível e robustez contra prompt injection.',
    tags: ['LLM', 'Security', 'Python'],
    tone: 'from-[#06b6d4]/20 to-[#0891b2]/12',
    href: `${PROFILE.github}/LLM-Guard`,
    linkLabel: 'Código no GitHub',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Representação de segurança digital e proteção de dados',
  },
  {
    title: 'PromptShield',
    desc:
      'Simulador de ataques de prompt injection para avaliar segurança de sistemas baseados em modelos de linguagem.',
    tags: ['Python', 'LLM', 'Segurança'],
    tone: 'from-[#22d3ee]/25 to-[#0891b2]/10',
    href: `${PROFILE.github}/PromptShield`,
    linkLabel: 'Código no GitHub',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Cibersegurança e monitoramento de sistemas',
  },
  {
    title: 'ai-chatbot-node',
    desc:
      'Chatbot com Node.js e OpenAI: API e interface para interação com IA — exemplo de integração ponta a ponta.',
    tags: ['Node.js', 'OpenAI', 'JavaScript'],
    tone: 'from-[#22d3ee]/20 to-[#06b6d4]/12',
    href: `${PROFILE.github}/ai-chatbot-node`,
    linkLabel: 'Código no GitHub',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Código e ambiente de desenvolvimento — API, Node e integração',
  },
  {
    title: 'Dashboard SaaS — gestão de locações',
    desc:
      'SaaS admin de locações em produção: Next.js 15, React 19, TypeScript, Tailwind, Supabase e UI shadcn (Sonner, Recharts). Auth com papéis Admin/Comercial, permissões finas, KPIs ao vivo, CRUD, auditoria, notificações e chat em tempo real, NF-e/NFS-e, comissões e fluxos críticos com confirmação. Sidebar responsiva, skeletons e polish de produto. Repositório privado (NDA).',
    tags: ['Next.js 15', 'Supabase', 'Tempo real', 'shadcn/ui'],
    tone: 'from-[#0891b2]/14 to-[#06b6d4]/10',
    restricted: true,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Visual abstrato de dados e painéis — ilustrativo, sem o produto real',
  },
]

function TagPill({ tag, compact }: { tag: string; compact?: boolean }) {
  return (
    <span
      title={tag}
      className={[
        'inline-block min-w-0 max-w-full truncate rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/10 font-medium text-slate-200',
        compact ? 'px-2 py-0.5 text-[10px] sm:text-[11px]' : 'px-2.5 py-0.5 text-[11px] leading-tight sm:px-3 sm:py-1 sm:text-xs',
      ].join(' ')}
    >
      {tag}
    </span>
  )
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [imageFailed, setImageFailed] = useState(false)
  const objectPosition = p.imageFocus === 'top' ? 'object-top' : 'object-center'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative z-0 flex h-full min-h-0 flex-col hover:z-20 max-lg:flex-none lg:min-h-[26rem]"
    >
      <div className="relative flex h-full min-h-0 flex-1 flex-col">
        {/* Card base — mesma altura na linha do grid; rodapé cresce para preencher */}
        <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 shadow-[0_20px_50px_-24px_rgb(0_0_0_/_0.4)] active:scale-[0.99] max-lg:transition-transform sm:rounded-[2.25rem]">
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-900 sm:aspect-[5/3]">
          {!imageFailed ? (
            <img
              src={p.image}
              alt=""
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${objectPosition}`}
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${p.tone} opacity-90`}
              aria-hidden
            >
              <span className="px-6 text-center text-xs text-slate-400">{p.imageAlt}</span>
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
            aria-hidden
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-35 mix-blend-soft-light ${p.tone}`}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
          <div
            className="pointer-events-none absolute inset-x-4 top-3 h-1/2 rounded-[1.5rem] bg-gradient-to-b from-[#00d4ff]/15 to-transparent opacity-50 blur-2xl"
            aria-hidden
          />
            </div>

            <div className="flex min-h-0 min-w-0 flex-1 flex-col rounded-b-xl border-t border-white/5 bg-gradient-to-b from-slate-900/90 to-slate-950/95 px-4 pb-4 pt-3.5 sm:rounded-b-[2rem] sm:px-7 sm:pb-6 sm:pt-5">
          <h3 className="line-clamp-2 min-h-0 text-left text-base font-semibold leading-snug text-white max-lg:min-h-[2.75rem] sm:text-lg md:min-h-[3.5rem] md:text-xl">
            {p.title}
          </h3>
          {/* Desktop/tablet: só título + tags; descrição no overlay ao hover */}
          <p className="mt-2 line-clamp-4 text-left text-sm leading-relaxed text-slate-400 md:hidden sm:text-[0.9375rem]">
            {p.desc}
          </p>
          <div className="mt-auto flex min-h-0 min-w-0 flex-wrap content-start gap-1.5 pt-3 md:mt-3 md:min-h-[4rem] md:pt-0 sm:gap-2">
            {p.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
          <p className="sr-only">
            Descrição resumida no cartão em ecrã pequeno; link abre o projeto. Em desktop largo, detalhe extra ao
            passar o rato.
          </p>
          {!p.restricted && p.href && p.linkLabel ? (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-[#00d4ff] underline-offset-2 hover:text-[#67e8f9] hover:underline md:sr-only"
            >
              {p.linkLabel}
            </a>
          ) : null}
            </div>
          </div>
        </div>

        {/* Overlay: só md+ (hover); altura = card; descrição com scroll para não mudar tamanho */}
        <div
          className={[
            'absolute inset-0 z-10 hidden min-h-0 min-w-0 flex-col rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#151d2a]/[0.98] via-[#121a26]/[0.97] to-[#0f1623]/[0.98] p-4 opacity-0 shadow-[0_24px_60px_-20px_rgb(0_0_0_/_0.5)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:rounded-[2.25rem] sm:p-5 md:flex',
            'pointer-events-none translate-y-4',
            'group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100',
          ].join(' ')}
        >
          <div className="shrink-0 border-b border-white/10 pb-3">
            <h3 className="line-clamp-2 min-h-[2.75rem] text-left text-base font-bold leading-snug text-white sm:min-h-[3rem] sm:text-lg">
              {p.title}
            </h3>
          </div>

          <p className="min-h-0 flex-1 overflow-y-auto py-3 text-left text-xs leading-relaxed text-slate-300 sm:py-3.5 sm:text-sm sm:leading-relaxed">
            {p.desc}
          </p>

          <div className="flex min-h-[3.5rem] min-w-0 shrink-0 flex-wrap content-end gap-1.5 border-t border-white/10 pt-3">
            {p.tags.map((tag) => (
              <TagPill key={`overlay-${tag}`} tag={tag} compact />
            ))}
          </div>

          <div className="mt-4 flex shrink-0 flex-col gap-2 sm:mt-3 sm:flex-row sm:items-center sm:justify-end">
            {p.restricted ? (
              <div className="rounded-xl border border-amber-200/80 bg-amber-50/90 px-3 py-2.5 text-left text-xs leading-snug text-amber-900/90 sm:text-sm">
                <p>
                  <span className="font-semibold text-amber-950">NDA.</span> Código sob confidencialidade; sem link
                  público.
                </p>
              </div>
            ) : p.href && p.linkLabel ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#00d4ff]/35 bg-[#00d4ff]/10 px-4 py-2 text-xs font-semibold text-[#00d4ff] transition-colors hover:border-[#00d4ff]/55 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {p.linkLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function PortfolioSection() {
  return (
    <div className="flex flex-1 flex-col px-1 py-2 sm:px-2">
      <header className="mb-6 text-center sm:mb-8">
        <h2 className="text-balance bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text px-1 font-sans text-xl font-bold text-transparent sm:text-2xl md:text-3xl">
          Projetos que contam a história técnica
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm text-slate-400 sm:text-base">
          <strong className="font-medium text-slate-200">Sites e produtos no ar</strong> para clientes reais, além de{' '}
          <strong className="font-medium text-slate-200">ferramentas e pesquisa em código aberto</strong> no{' '}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#00d4ff] underline-offset-2 hover:text-[#67e8f9] hover:underline"
          >
            GitHub
          </a>
          . Nos sites entregues, a capa do card mostra uma amostra da página ao vivo.
        </p>
      </header>

      <div className="grid flex-1 auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>

      <p className="mt-8 text-pretty text-center text-[10px] leading-relaxed text-slate-500 sm:text-xs">
        Projetos open source: fotos ilustrativas (Unsplash). Sites no ar: miniatura automática da página (serviço
        público de preview). Para usar só logo ou print seu, coloque PNG/WebP em public/portfolio/ e altere o campo
        image nesses cards no código.
      </p>
    </div>
  )
}

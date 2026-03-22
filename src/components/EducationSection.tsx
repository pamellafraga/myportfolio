import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { PROFILE } from '../profile'

type TrajectoryItem = {
  id: string
  featured?: boolean
  title: string
  tagline?: string
  body: ReactNode
  accentBar: string
  cardGlow?: string
}

const educationPath: TrajectoryItem[] = [
  {
    id: 'psych',
    featured: true,
    title: 'Psicologia',
    tagline: 'O diferencial que vem primeiro',
    body: (
      <>
        Entender a <strong className="font-medium text-slate-200">mente humana</strong> antes de qualquer linha de
        código ou decisão de produto. Comportamento, motivação e impacto real nas pessoas —{' '}
        <span className="text-slate-400">não só em stack.</span>
      </>
    ),
    accentBar: 'from-[#0891b2] via-[#06b6d4] to-[#00d4ff]',
    cardGlow: 'shadow-[0_12px_40px_-16px_rgb(6_182_212_/_0.12)] ring-1 ring-[#06b6d4]/25',
  },
  {
    id: 'cc',
    title: 'Ciências da Computação',
    body: 'Fundamentos sólidos em computação, algoritmos e pensamento sistêmico — a base que sustenta tudo o que construo.',
    accentBar: 'from-[#22d3ee] via-[#06b6d4]/70 to-transparent',
  },
  {
    id: 'ads',
    title: 'Análise e Desenvolvimento de Sistemas',
    body: 'Análise de requisitos, modelagem e entrega de software com foco no que o negócio precisa rodar.',
    accentBar: 'from-[#0891b2] to-[#06b6d4]/40',
  },
  {
    id: 'eng',
    title: 'Engenharia de Software',
    tagline: 'Graduação em andamento',
    body: 'Consolida engenharia, qualidade e visão de produto em nível profissional — da especificação ao deploy.',
    accentBar: 'from-[#06b6d4] via-[#0891b2] to-[#22d3ee]',
  },
]

const impactStrip: TrajectoryItem[] = [
  {
    id: 'data',
    title: 'Arquitetura de dados & sistemas',
    body: 'Modelagem, consistência e soluções que escalam com o negócio — dados como ativo, não como gargalo.',
    accentBar: 'from-[#22d3ee] to-[#06b6d4]',
  },
  {
    id: 'ai',
    title: 'Ferramentas & IA responsável',
    body: (
      <>
        Segurança de LLMs, viés e robustez — trabalho que você vê no{' '}
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[#00d4ff] underline decoration-[#00d4ff]/40 underline-offset-2 transition-colors hover:text-[#67e8f9]"
        >
          GitHub
        </a>
        .
      </>
    ),
    accentBar: 'from-[#06b6d4] to-[#00d4ff]',
  },
]

function TrajectoryCard({ item, index }: { item: TrajectoryItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={[
        'group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0f1623]/55 p-5 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:border-[#00d4ff]/25 hover:shadow-[0_0_32px_rgb(0_212_255_/_0.08)] sm:rounded-[1.5rem] sm:p-6',
        item.featured ? item.cardGlow ?? '' : '',
      ].join(' ')}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${item.accentBar} opacity-90`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#06b6d4]/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative text-left">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h4 className="font-sans text-base font-bold text-white sm:text-lg">{item.title}</h4>
          {item.featured ? (
            <span className="shrink-0 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#00d4ff]">
              Pilar humano
            </span>
          ) : null}
        </div>
        {item.tagline ? (
          <p className="mt-1 bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text text-sm font-semibold text-transparent">
            {item.tagline}
          </p>
        ) : null}
        <div className="mt-3 text-sm leading-relaxed text-slate-400">{item.body}</div>
      </div>
    </motion.article>
  )
}

function ColumnHeading({
  id,
  label,
  tone,
}: {
  id: string
  label: string
  tone: 'cyan' | 'violet'
}) {
  const line =
    tone === 'cyan'
      ? 'from-transparent via-[#22d3ee]/55 to-transparent'
      : 'from-transparent via-[#06b6d4]/45 to-transparent'
  const text =
    tone === 'cyan'
      ? 'bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text text-transparent'
      : 'bg-gradient-to-r from-[#06b6d4] to-[#00d4ff] bg-clip-text text-transparent'
  return (
    <div className="mb-6 flex items-center gap-4 sm:mb-8">
      <div className={`h-px flex-1 bg-gradient-to-r ${line}`} aria-hidden />
      <h3
        id={id}
        className={`shrink-0 text-center text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs ${text}`}
      >
        {label}
      </h3>
      <div className={`h-px flex-1 bg-gradient-to-l ${line}`} aria-hidden />
    </div>
  )
}

export function EducationSection() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-1 py-2 sm:px-2">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1623]/65 px-4 py-8 text-center shadow-[0_24px_60px_-28px_rgb(0_0_0_/_0.4)] sm:mb-12 sm:rounded-[2rem] sm:px-10 sm:py-11"
      >
        <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#00d4ff]/15 blur-[90px]" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[#0891b2]/18 blur-[80px]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-30%,rgb(6_182_212_/_0.08),transparent_55%)]"
          aria-hidden
        />

        <div className="relative">
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00d4ff] sm:text-[11px]">
            Trajetória intencional
          </div>
          <h2 className="text-balance font-sans text-xl font-bold tracking-tight text-white sm:text-2xl md:text-[2.15rem] md:leading-tight">
            <span className="bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text text-transparent">
              Formação & linha técnica
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Uma base que começa pelo <strong className="font-medium text-slate-200">ser humano</strong> e avança em{' '}
            <strong className="font-medium text-slate-200">computação e sistemas</strong> — o tipo de perfil que une
            profundidade, ética e entrega.
          </p>
          <div className="mx-auto mt-7 flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Humanidades', 'Ciência da computação', 'Engenharia em curso', 'Dados & IA'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-300 shadow-sm backdrop-blur-sm sm:text-xs"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </motion.header>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1623]/45 p-5 shadow-[0_20px_50px_-24px_rgb(0_0_0_/_0.35)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:p-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgb(34_211_238_/_0.06)_50%,transparent_65%)]"
          aria-hidden
        />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-12">
          <section aria-labelledby="education-heading">
            <ColumnHeading id="education-heading" label="Educação" tone="cyan" />
            <ul className="space-y-4 sm:space-y-5">
              {educationPath.map((item, i) => (
                <li key={item.id}>
                  <TrajectoryCard item={item} index={i} />
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="highlights-heading">
            <ColumnHeading id="highlights-heading" label="Destaques de atuação" tone="violet" />
            <ul className="space-y-4 sm:space-y-5">
              {impactStrip.map((item, i) => (
                <li key={item.id}>
                  <TrajectoryCard item={item} index={i + educationPath.length} />
                </li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 rounded-2xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 px-4 py-3 text-center text-xs leading-relaxed text-slate-400 sm:text-sm"
            >
              Trajetória em construção — cada etapa alimenta a próxima. O portfólio mostra onde isso vira código.
            </motion.p>
          </section>
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { SiCoursera, SiGoogle, SiMeta } from 'react-icons/si'
import { PROFILE } from '../profile'

/** Escudo estilizado — Harvard (CS50 / certificações acadêmicas). */
function HarvardMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden>
      <path fill="#A51C30" d="M12 1.5 2.5 6.2v9.1c0 4.2 3.4 7.6 9.5 10.7l.5.3.5-.3c6.1-3.1 9.5-6.5 9.5-10.7V6.2L12 1.5z" />
      <path
        fill="#fff"
        d="M8.2 7.4h1.9v9.2H8.2V7.4zm5.7 0h1.9v9.2h-1.9V7.4zm-5.7 3.7h7.6v1.8H8.2v-1.8z"
      />
    </svg>
  )
}

/** Rede / nós — Data Science Academy (identidade aproximada, multicolor). */
function DataScienceAcademyMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden>
      <circle cx="12" cy="6.5" r="2.4" fill="#facc15" />
      <circle cx="6.5" cy="15.5" r="2.4" fill="#22d3ee" />
      <circle cx="17.5" cy="15.5" r="2.4" fill="#4ade80" />
      <path
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.2"
        fill="none"
        d="M12 8.7L7.4 14M12 8.7l4.6 5.3M7.9 15.5h8.2"
      />
    </svg>
  )
}

/** Logo Microsoft (quatro quadrados — cores oficiais). */
function MicrosoftMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden>
      <path fill="#F25022" d="M1 1h10.5v10.5H1z" />
      <path fill="#7FBA00" d="M12.5 1H23v10.5H12.5z" />
      <path fill="#00A4EF" d="M1 12.5h10.5V23H1z" />
      <path fill="#FFB900" d="M12.5 12.5H23V23H12.5z" />
    </svg>
  )
}

/** Três pilares — evocação da marca Fundação Bradesco (vermelho institucional). */
function BradescoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden>
      <rect x="4.5" y="5" width="3.8" height="15" rx="1.2" fill="#E31837" />
      <rect x="10.1" y="3" width="3.8" height="17" rx="1.2" fill="#E31837" />
      <rect x="15.7" y="6" width="3.8" height="14" rx="1.2" fill="#E31837" />
    </svg>
  )
}

/** Wordmark Google — cores oficiais por letra. */
function GoogleWordmark({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  )
}

type InstitutionDef = {
  id: string
  name: string
  /** Logo horizontal oficial (brasão + texto); ignora renderIcon/renderLabel. */
  lockupImage?: string
  renderIcon: () => ReactNode
  renderLabel: () => ReactNode
}

/** Ordem: maior reconhecimento global → instituições com forte presença regional. */
const institutionStrip: InstitutionDef[] = [
  {
    id: 'harvard',
    name: 'Harvard University',
    renderIcon: () => <HarvardMark className="h-9 w-9 sm:h-10 sm:w-10" />,
    renderLabel: () => (
      <div className="font-serif leading-tight text-white">
        <div className="text-[13px] font-semibold uppercase tracking-[0.12em] sm:text-sm">Harvard</div>
        <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-400 sm:text-[11px]">University</div>
      </div>
    ),
  },
  {
    id: 'google',
    name: 'Google',
    renderIcon: () => <SiGoogle className="h-9 w-9 sm:h-10 sm:w-10" aria-hidden />,
    renderLabel: () => (
      <div className="font-sans text-lg font-medium leading-none tracking-tight sm:text-xl">
        <GoogleWordmark />
      </div>
    ),
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    renderIcon: () => <MicrosoftMark className="h-9 w-9 sm:h-10 sm:w-10" />,
    renderLabel: () => (
      <div className="font-sans text-[15px] font-normal leading-none tracking-tight text-slate-400 sm:text-base">
        Microsoft
      </div>
    ),
  },
  {
    id: 'meta',
    name: 'Meta',
    renderIcon: () => <SiMeta className="h-9 w-9 sm:h-10 sm:w-10 text-[#0668E1]" aria-hidden />,
    renderLabel: () => (
      <div className="font-sans text-[15px] font-semibold leading-none tracking-tight text-slate-200 sm:text-base">Meta</div>
    ),
  },
  {
    id: 'coursera',
    name: 'Coursera',
    renderIcon: () => <SiCoursera className="h-9 w-9 sm:h-10 sm:w-10 text-[#0056D2]" aria-hidden />,
    renderLabel: () => (
      <div className="font-sans text-[15px] font-semibold leading-none tracking-tight text-slate-200 sm:text-base">Coursera</div>
    ),
  },
  {
    id: 'pucrs',
    name: 'Pontifícia Universidade Católica do Rio Grande do Sul',
    lockupImage: '/logos/pucrs.png',
    renderIcon: () => null,
    renderLabel: () => null,
  },
  {
    id: 'dsa',
    name: 'Data Science Academy',
    renderIcon: () => <DataScienceAcademyMark className="h-9 w-9 sm:h-10 sm:w-10" />,
    renderLabel: () => (
      <div className="font-sans leading-tight">
        <div className="text-[13px] font-semibold text-slate-100 sm:text-sm">Data Science</div>
        <div className="text-[11px] font-medium text-slate-400 sm:text-xs">Academy</div>
      </div>
    ),
  },
  {
    id: 'bradesco',
    name: 'Fundação Bradesco',
    renderIcon: () => <BradescoMark className="h-9 w-9 sm:h-10 sm:w-10" />,
    renderLabel: () => (
      <div className="font-sans leading-tight">
        <div className="text-[13px] font-semibold text-slate-100 sm:text-sm">Fundação</div>
        <div className="text-[11px] font-medium text-[#E31837] sm:text-xs">Bradesco</div>
      </div>
    ),
  },
]

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

          <div
            className="mx-auto mt-8 max-w-5xl border-t border-white/10 pt-8"
            role="group"
            aria-labelledby="certificados-globais-heading"
          >
            <h3
              id="certificados-globais-heading"
              className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 sm:mb-6 sm:text-[11px]"
            >
              Certificados Globais
            </h3>
            <ul className="flex flex-wrap items-stretch justify-center gap-2.5 sm:gap-3">
              {institutionStrip.map((org, i) => (
                <motion.li
                  key={org.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="min-w-0"
                >
                  <div
                    title={org.name}
                    className={[
                      'flex h-full min-h-[52px] items-center rounded-xl border border-white/10 bg-white/[0.04] py-2 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[#00d4ff]/35 hover:bg-white/[0.07] sm:min-h-[56px]',
                      org.lockupImage ? 'justify-center px-2.5 sm:px-4' : 'gap-2.5 pl-2.5 pr-3 sm:gap-3 sm:pl-3 sm:pr-4',
                    ].join(' ')}
                  >
                    {org.lockupImage ? (
                      <img
                        src={org.lockupImage}
                        alt={org.name}
                        className="h-10 w-auto max-h-12 max-w-[min(100%,320px)] object-contain object-left sm:h-11 sm:max-w-[min(100%,380px)]"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
                          {org.renderIcon()}
                        </span>
                        <span className="min-w-0 text-left">{org.renderLabel()}</span>
                      </>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
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

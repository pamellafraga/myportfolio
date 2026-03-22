import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  SiBootstrap,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

/** Marca Cursor (ícone estilizado — ambiente de desenvolvimento). */
function CursorIDEIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.8 2L2 7.2v9.6l9.8 5.2 9.8-5.2V7.2L11.8 2zm0 1.8l7.4 3.9v7.6l-7.4 3.9-7.4-3.9V7.7l7.4-3.9z" />
      <path d="M11.8 7.4L7.2 9.9v4.2l4.6 2.5 4.6-2.5v-4.2l-4.6-2.5zm0 1.6l2.8 1.5v3l-2.8 1.5-2.8-1.5v-3l2.8-1.5z" />
    </svg>
  )
}

type TechDef = {
  name: string
  color: string
  render: () => ReactNode
}

function icon(Icon: IconType, color: string) {
  return () => <Icon className="h-7 w-7 sm:h-8 sm:w-8" style={{ color }} aria-hidden />
}

const GROUPS: {
  id: string
  title: string
  subtitle: string
  accent: string
  items: TechDef[]
}[] = [
  {
    id: 'langs',
    title: 'Linguagens',
    subtitle: 'Tipagem, legibilidade e ecossistema maduro.',
    accent: 'from-[#22d3ee]/45 to-[#22d3ee]/12',
    items: [
      { name: 'JavaScript', color: '#F7DF1E', render: icon(SiJavascript, '#F7DF1E') },
      { name: 'TypeScript', color: '#3178C6', render: icon(SiTypescript, '#3178C6') },
      { name: 'Python', color: '#3776AB', render: icon(SiPython, '#3776AB') },
      { name: 'PHP', color: '#777BB4', render: icon(SiPhp, '#777BB4') },
    ],
  },
  {
    id: 'web',
    title: 'Ecossistema web',
    subtitle: 'Do markup às SPAs e estilização em escala.',
    accent: 'from-[#06b6d4]/22 to-[#22d3ee]/10',
    items: [
      { name: 'HTML5', color: '#E34F26', render: icon(SiHtml5, '#E34F26') },
      { name: 'CSS3', color: '#1572B6', render: icon(SiCss, '#1572B6') },
      { name: 'React', color: '#61DAFB', render: icon(SiReact, '#61DAFB') },
      { name: 'Next.js', color: '#FFFFFF', render: icon(SiNextdotjs, '#FFFFFF') },
      { name: 'Bootstrap', color: '#7952B3', render: icon(SiBootstrap, '#7952B3') },
      { name: 'Tailwind', color: '#06B6D4', render: icon(SiTailwindcss, '#06B6D4') },
      { name: 'jQuery', color: '#0769AD', render: icon(SiJquery, '#0769AD') },
      { name: 'Laravel', color: '#FF2D20', render: icon(SiLaravel, '#FF2D20') },
    ],
  },
  {
    id: 'data',
    title: 'Bancos de dados',
    subtitle:
      'SQL e NoSQL no dia a dia: modelagem, consultas, índices, transações e integração com APIs e produtos em produção.',
    accent: 'from-[#0891b2]/18 to-[#06b6d4]/08',
    items: [
      { name: 'PostgreSQL', color: '#336791', render: icon(SiPostgresql, '#336791') },
      { name: 'MySQL', color: '#4479A1', render: icon(SiMysql, '#4479A1') },
      { name: 'MongoDB', color: '#47A248', render: icon(SiMongodb, '#47A248') },
      { name: 'Redis', color: '#DC382D', render: icon(SiRedis, '#DC382D') },
      { name: 'SQLite', color: '#003B57', render: icon(SiSqlite, '#003B57') },
      { name: 'Supabase', color: '#3ECF8E', render: icon(SiSupabase, '#3ECF8E') },
    ],
  },
  {
    id: 'tooling',
    title: 'Engenharia & fluxo',
    subtitle: 'Versionamento, colaboração e produtividade no editor.',
    accent: 'from-[#22d3ee]/35 via-[#06b6d4]/12 to-[#0891b2]/10',
    items: [
      { name: 'Git', color: '#F05032', render: icon(SiGit, '#F05032') },
      { name: 'GitHub', color: '#F0F6FC', render: icon(SiGithub, '#F0F6FC') },
      {
        name: 'Cursor',
        color: '#E4E4E7',
        render: () => (
          <CursorIDEIcon className="h-7 w-7 text-slate-100 sm:h-8 sm:w-8" />
        ),
      },
    ],
  },
]

function TechTile({
  tech,
  delay,
}: {
  tech: TechDef
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1623]/70 p-4 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/30 hover:shadow-[0_0_28px_rgb(0_212_255_/_0.12)] sm:rounded-[1.25rem] sm:p-5">
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle, ${tech.color}55 0%, transparent 70%)`,
          }}
          aria-hidden
        />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-slate-800/80 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-[1.06] group-hover:ring-[#00d4ff]/45 group-hover:shadow-[0_0_24px_-6px_rgb(0_212_255_/_0.25)] sm:h-14 sm:w-14">
            {tech.render()}
          </div>
          <span className="max-w-[7rem] text-[11px] font-semibold leading-snug tracking-tight text-slate-200 sm:max-w-none sm:text-xs">
            {tech.name}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function GroupCard({
  group,
  index,
}: {
  group: (typeof GROUPS)[number]
  index: number
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1623]/55 shadow-[0_20px_50px_-24px_rgb(0_0_0_/_0.35)] backdrop-blur-2xl sm:rounded-[2rem]"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-[0.55] ${group.accent}`}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(6_182_212_/_0.07),transparent)]" />
      <div className="relative border-b border-white/10 px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-sans text-lg font-bold tracking-tight text-white sm:text-xl">
              {group.title}
            </h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-400">
              {group.subtitle}
            </p>
          </div>
          <span className="shrink-0 self-start rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#00d4ff] sm:text-[11px]">
            {group.items.length} itens
          </span>
        </div>
      </div>
      <div className="relative grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 sm:gap-4 md:p-7 lg:grid-cols-4">
        {group.items.map((tech, i) => (
          <TechTile key={tech.name} tech={tech} delay={i * 0.04} />
        ))}
      </div>
    </motion.section>
  )
}

export function TechnologiesSection() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-1 py-1 sm:px-2 sm:py-2">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1623]/65 p-4 shadow-[0_24px_60px_-28px_rgb(0_0_0_/_0.4)] sm:mb-12 sm:rounded-[2rem] sm:p-10 md:p-12"
      >
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#22d3ee]/28 blur-[100px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#0891b2]/18 blur-[90px]" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#00d4ff] sm:text-[11px]">
              Stack técnico
            </div>
            <h2 className="text-balance font-sans text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Linguagens e{' '}
              <span className="bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text text-transparent">
                tecnologias
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Conjunto curado para{' '}
              <strong className="font-medium text-slate-200">entregar software em produção</strong>
              : front moderno, back PHP/Laravel,{' '}
              <strong className="font-medium text-slate-200">bancos relacionais e NoSQL</strong>{' '}
              (PostgreSQL, MySQL, MongoDB, Redis e outros), automação com Python e fluxo sólido com
              Git, GitHub e <strong className="font-medium text-slate-200">Cursor</strong> no dia a
              dia.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3 md:flex-col md:items-stretch">
            {[
              { k: '21+', l: 'ferramentas mapeadas' },
              { k: '4', l: 'pilares do stack' },
              { k: 'Prod', l: 'foco em código real' },
            ].map((s) => (
              <div
                key={s.k}
                className="min-w-[7.5rem] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center shadow-sm backdrop-blur-sm md:text-left"
              >
                <p className="bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text font-sans text-2xl font-bold tabular-nums text-transparent">
                  {s.k}
                </p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.header>

      <div className="flex flex-col gap-6 sm:gap-8">
        {GROUPS.map((group, i) => (
          <GroupCard key={group.id} group={group} index={i} />
        ))}
      </div>
    </div>
  )
}

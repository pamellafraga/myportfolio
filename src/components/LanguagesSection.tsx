import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProgressBar } from './ProgressBar'

type Lang = {
  /** ISO 3166-1 alpha-2 para flagcdn.com */
  flagCode: 'br' | 'us' | 'fr'
  flagFallback: string
  country: string
  label: string
  level: string
  value: number
  hint: string
  accent: string
  glow: string
}

const languages: Lang[] = [
  {
    flagCode: 'br',
    flagFallback: 'BR',
    country: 'Brasil',
    label: 'Português',
    level: 'Nativo',
    value: 100,
    hint: 'Língua materna — apresentações, escrita e negociação.',
    accent: 'from-[#22d3ee]/35 via-[#06b6d4]/12 to-transparent',
    glow: 'shadow-[0_12px_40px_-16px_rgb(34_211_238_/_0.2)]',
  },
  {
    flagCode: 'us',
    flagFallback: 'US',
    country: 'Estados Unidos',
    label: 'Inglês',
    level: 'Intermediário',
    value: 55,
    hint: 'Leitura técnica, documentação e conversação profissional.',
    accent: 'from-[#06b6d4]/28 via-[#0891b2]/10 to-transparent',
    glow: 'shadow-[0_12px_40px_-16px_rgb(6_182_212_/_0.15)]',
  },
  {
    flagCode: 'fr',
    flagFallback: 'FR',
    country: 'França',
    label: 'Francês',
    level: 'Básico',
    value: 28,
    hint: 'Base em construção — vocabulário e compreensão inicial.',
    accent: 'from-[#0891b2]/25 via-[#22d3ee]/12 to-transparent',
    glow: 'shadow-[0_12px_40px_-16px_rgb(0_212_255_/_0.14)]',
  },
]

/** Bandeira circular — imagem via flagcdn.com, recorte com object-cover. */
function FlagRound({
  code,
  fallbackLabel,
  label,
}: {
  code: string
  fallbackLabel: string
  label: string
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = `https://flagcdn.com/w160/${code}.png`

  return (
    <div
      className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15 bg-slate-900 shadow-sm ring-2 ring-[#00d4ff]/35 sm:h-12 sm:w-12"
      role="img"
      aria-label={`Bandeira — ${label}`}
    >
      {!imgFailed ? (
        <img
          src={src}
          alt=""
          width={160}
          height={112}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center select-none bg-slate-800 text-[10px] font-bold uppercase tracking-tight text-slate-300 sm:text-xs">
          {fallbackLabel}
        </span>
      )}
    </div>
  )
}

export function LanguagesSection() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-1 py-2 sm:px-2">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1623]/65 px-4 py-7 text-center shadow-[0_20px_50px_-24px_rgb(0_0_0_/_0.4)] sm:mb-12 sm:rounded-[2rem] sm:px-10 sm:py-10"
      >
        <div
          className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#22d3ee]/25 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-[#0891b2]/18 blur-[70px]"
          aria-hidden
        />
        <div className="relative">
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00d4ff] sm:text-[11px]">
            Comunicação global
          </div>
          <h2 className="text-balance font-sans text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text text-transparent">
              Idiomas
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            Português no dia a dia; inglês para <strong className="font-medium text-slate-200">stack e documentação</strong>;
            francês em <strong className="font-medium text-slate-200">evolução contínua</strong>.
          </p>
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {['BR · Nativo', 'US · Intermediário', 'FR · Básico'].map((chip) => (
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

      <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
        {languages.map((lang, index) => (
          <motion.article
            key={lang.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={[
              'group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0f1623]/55 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#00d4ff]/30 sm:rounded-[1.75rem] sm:p-6',
              lang.glow,
            ].join(' ')}
          >
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${lang.accent} opacity-90`}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(6_182_212_/_0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <FlagRound
                code={lang.flagCode}
                fallbackLabel={lang.flagFallback}
                label={`${lang.country} — ${lang.label}`}
              />
              <div className="min-w-0 flex-1 text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{lang.country}</p>
                <h3 className="mt-0.5 font-sans text-lg font-bold text-white sm:text-xl">{lang.label}</h3>
                <span className="mt-2 inline-flex rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/10 px-2.5 py-0.5 text-xs font-semibold text-[#00d4ff]">
                  {lang.level}
                </span>
              </div>
            </div>

            <p className="relative mt-4 text-left text-xs leading-relaxed text-slate-400 sm:text-sm">{lang.hint}</p>

            <div className="relative mt-5 flex-1">
              <div className="mb-2 flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-500">
                <span>Domínio estimado</span>
                <span className="bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text font-semibold tabular-nums text-transparent">
                  {lang.value}%
                </span>
              </div>
              <ProgressBar value={lang.value} className="h-2 sm:h-2.5" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

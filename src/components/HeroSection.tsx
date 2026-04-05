import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { PageId } from '../nav'
import { PROFILE } from '../profile'
import { ProfileSignature } from './ProfileSignature'

const ROLES = [
  'Engenheira de Software',
  'Arquiteta de dados & sistemas',
  'Criadora de ferramentas digitais',
] as const

const HERO_COPY =
  'Transformo análise e inteligência emocional em soluções digitais funcionais e humanas. Desenvolvo interfaces e sistemas que realmente conectam, com foco em experiência e clareza. Atuo com arquitetura de dados e engenharia consistente, do conceito ao produto final. Acredito em tecnologia que vai além de funcionar — ela deve impactar, evoluir e transformar vidas.'

type HeroSectionProps = {
  onNavigate: (id: PageId) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [text, setText] = useState('')
  const wordIndexRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)
  const pauseRef = useRef(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      const w = ROLES[wordIndexRef.current]
      if (pauseRef.current > 0) {
        pauseRef.current -= 1
        return
      }
      if (!deletingRef.current) {
        if (charRef.current < w.length) {
          charRef.current += 1
          setText(w.slice(0, charRef.current))
        } else {
          pauseRef.current = 22
          deletingRef.current = true
        }
      } else if (charRef.current > 0) {
        charRef.current -= 1
        setText(w.slice(0, charRef.current))
      } else {
        deletingRef.current = false
        wordIndexRef.current = (wordIndexRef.current + 1) % ROLES.length
      }
    }, 48)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="flex min-h-[min(62svh,480px)] flex-col items-center justify-center px-1 pb-6 pt-2 text-center sm:min-h-[min(70vh,560px)] sm:px-2 sm:pb-8 sm:pt-4 md:min-h-[min(72vh,620px)]">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="relative mb-6 sm:mb-8"
      >
        <div className="absolute -inset-6 rounded-full bg-[#00d4ff]/25 blur-3xl" />
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#0891b2]/50 via-[#06b6d4]/35 to-[#00d4ff]/40 blur-xl" />
        <div className="relative rounded-full bg-gradient-to-br from-[#0891b2] via-[#06b6d4] to-[#00d4ff] p-[3px] shadow-[0_0_40px_rgb(0_212_255_/_0.35)]">
          <div className="h-36 w-36 overflow-hidden rounded-full bg-[#0b111b] shadow-inner ring-2 ring-white/10 sm:h-40 sm:w-40">
            <img
              src={PROFILE.portraitImage}
              alt={`Retrato de ${PROFILE.name}`}
              className="h-full w-full object-cover object-[center_20%]"
              width={320}
              height={320}
              decoding="async"
            />
          </div>
        </div>
      </motion.div>

      <p className="mb-6 text-base text-slate-300 sm:text-lg">
        Olá, eu sou{' '}
        <span className="font-semibold text-[#00d4ff] drop-shadow-[0_0_20px_rgb(0_212_255_/_0.35)]">
          {PROFILE.name}
        </span>
      </p>

      <p className="mb-4 min-h-[2.75rem] text-base text-slate-200 sm:mb-6 sm:min-h-[1.75rem] sm:text-lg md:text-xl">
        Atuo como{' '}
        <span className="font-medium text-[#67e8f9]">
          {text}
          <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-[#00d4ff] align-middle shadow-[0_0_8px_#00d4ff] sm:h-6" />
        </span>
      </p>

      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8 w-full max-w-lg sm:mb-10"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-32 w-[min(100%,20rem)] -translate-x-1/2 bg-gradient-to-b from-[#00d4ff]/20 to-transparent blur-3xl"
          aria-hidden
        />
        <h1 className="relative text-center font-sans text-[1.05rem] font-bold uppercase leading-snug tracking-[0.05em] text-white sm:text-xl md:text-2xl md:tracking-[0.06em]">
          <span className="text-slate-400">Sua </span>
          <span className="text-[#00d4ff]">ideia,</span>
          <span className="text-slate-400"> minha </span>
          <span className="text-[#67e8f9]">missão:</span>
        </h1>
      </motion.header>

      <p className="mb-8 max-w-xl text-pretty text-sm leading-relaxed text-slate-400 sm:mb-10 sm:text-base">
        {HERO_COPY}
      </p>

      <ProfileSignature align="center" className="mb-6 mt-1 sm:mb-8 sm:mt-2" />

      <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate('portfolio')}
          className="min-h-[48px] w-full rounded-full bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] px-6 py-3.5 text-sm font-semibold text-[#0b111b] shadow-[0_0_28px_rgb(0_212_255_/_0.45)] transition-shadow hover:shadow-[0_0_40px_rgb(0_212_255_/_0.55)] sm:w-auto sm:px-8"
        >
          Ver portfólio técnico
        </motion.button>
        <motion.a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/35 bg-transparent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:border-[#00d4ff]/60 hover:text-[#00d4ff] sm:w-auto sm:px-8"
        >
          LinkedIn
        </motion.a>
      </div>
    </div>
  )
}

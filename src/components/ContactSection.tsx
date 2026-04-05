import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FooterSection } from './FooterSection'
import type { PageId } from '../nav'
import { PROFILE } from '../profile'

type ContactSectionProps = {
  onNavigate: (id: PageId) => void
}

const rowBase =
  'flex items-center gap-4 px-4 py-4 transition-colors hover:bg-white/[0.03] sm:px-5 sm:py-4'

export function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-2xl">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Contato
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Vamos conversar com seriedade
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-slate-400 sm:text-base">
            Oportunidades, parcerias técnicas e convites que exijam engenharia sólida. Segue e-mail e
            telefone; o LinkedIn está no rodapé, em Redes & código.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a1018]/80">
            <a href={`mailto:${PROFILE.email}`} className={`${rowBase} border-b border-white/[0.06]`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-400">
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-medium text-slate-500">E-mail</span>
                <span className="mt-0.5 block truncate text-sm font-medium text-slate-100 sm:whitespace-normal">
                  {PROFILE.email}
                </span>
              </span>
            </a>
            <a href={`tel:${PROFILE.phoneTel}`} className={`${rowBase} border-b border-white/[0.06]`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-400">
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-medium text-slate-500">Telefone</span>
                <span className="mt-0.5 block text-sm font-medium tabular-nums text-slate-100">
                  {PROFILE.phoneDisplay}
                </span>
              </span>
            </a>
            <div className={`${rowBase} cursor-default`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-400">
                <MapPin className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-medium text-slate-500">Localização</span>
                <span className="mt-0.5 block text-sm font-medium text-slate-100">Brasil</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 sm:mt-14">
        <FooterSection onNavigate={onNavigate} />
      </div>
    </div>
  )
}

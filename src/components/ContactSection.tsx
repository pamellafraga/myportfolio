import { motion } from 'framer-motion'
import { FooterSection } from './FooterSection'
import type { PageId } from '../nav'
import { PROFILE } from '../profile'

type ContactSectionProps = {
  onNavigate: (id: PageId) => void
}

export function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <div className="flex flex-1 flex-col px-0 py-2 sm:px-2">
      <header className="mb-6 text-center sm:mb-8">
        <h2 className="text-balance bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text px-1 font-sans text-xl font-bold text-transparent sm:text-2xl md:text-3xl">
          Vamos conversar com seriedade
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Para oportunidades, parcerias técnicas ou convites que exijam engenharia de
          verdade, o canal mais direto é o LinkedIn. E-mail e telefone aparecem em pequeno
          no rodapé, logo abaixo de Brasil.
        </p>
      </header>

      <motion.a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mx-auto mb-6 flex min-h-[52px] w-full max-w-md items-center justify-center rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-5 py-3.5 text-sm font-semibold text-[#00d4ff] shadow-[0_0_32px_rgb(0_212_255_/_0.2)] backdrop-blur-sm transition-colors hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/15 sm:mb-8 sm:px-6 sm:py-4"
      >
        Abrir perfil no LinkedIn
      </motion.a>

      <FooterSection onNavigate={onNavigate} />
    </div>
  )
}

import type { ReactNode } from 'react'
import type { PageId } from '../nav'
import { PROFILE } from '../profile'
import { ProfileSignature } from './ProfileSignature'
import { Github, Linkedin } from 'lucide-react'

const quickLinks: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Início' },
  { id: 'languages', label: 'Idiomas' },
  { id: 'technologies', label: 'Linguagens & tech' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'education', label: 'Formação' },
  { id: 'contact', label: 'Contato' },
]

type FooterSectionProps = {
  onNavigate: (id: PageId) => void
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
      {children}
    </h3>
  )
}

export function FooterSection({ onNavigate }: FooterSectionProps) {
  return (
    <footer className="rounded-xl border border-white/[0.06] bg-[#080d14]/90 px-5 py-8 backdrop-blur-sm sm:rounded-2xl sm:px-8 sm:py-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div>
          <p className="font-sans text-base font-semibold text-white">{PROFILE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            Engenharia de software com ênfase em arquitetura de dados, sistemas e ferramentas
            que resolvem problemas reais — do modelo ao produto.
          </p>
          <ProfileSignature align="start" className="mt-6" />
        </div>

        <div>
          <SectionLabel>Redes & código</SectionLabel>
          <p className="mb-5 max-w-sm text-sm leading-relaxed text-slate-400">
            Convites profissionais e código aberto nos canais abaixo.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
            >
              <Github className="h-4 w-4 text-slate-400" strokeWidth={1.75} aria-hidden />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
            >
              <Linkedin className="h-4 w-4 text-slate-400" strokeWidth={1.75} aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <SectionLabel>Navegação</SectionLabel>
          <nav aria-label="Secções do site">
            <ul className="flex flex-col gap-0.5 sm:max-w-xs">
              {quickLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    className="flex min-h-[44px] w-full items-center rounded-lg px-2 text-left text-sm text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <p className="mt-10 border-t border-white/[0.06] pt-6 text-center text-xs leading-relaxed text-slate-500 sm:text-[13px]">
        © {new Date().getFullYear()} {PROFILE.name}. Este site usa React, Tailwind CSS e Framer
        Motion.
      </p>
    </footer>
  )
}

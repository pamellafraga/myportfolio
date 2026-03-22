import type { PageId } from '../nav'
import { PROFILE } from '../profile'
import { ProfileSignature } from './ProfileSignature'

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

export function FooterSection({ onNavigate }: FooterSectionProps) {
  return (
    <footer className="rounded-2xl border border-white/10 bg-[#0f1623]/70 px-4 py-8 backdrop-blur-md sm:rounded-[2rem] sm:px-10 sm:py-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-sans text-lg font-semibold text-white">{PROFILE.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
            Engenharia de software com ênfase em arquitetura de dados, sistemas e
            ferramentas que resolvem problemas reais — do modelo ao produto.
          </p>
          <p className="mt-3 text-xs text-slate-500">Brasil</p>
          <div className="mt-2 flex max-w-sm flex-col gap-1">
            <a
              href={`mailto:${PROFILE.email}`}
              className="-mx-1 block w-fit max-w-full break-all rounded-md px-1 py-2 text-[10px] leading-snug text-slate-500 transition-colors hover:text-[#00d4ff] active:bg-white/5 sm:text-[11px]"
            >
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phoneTel}`}
              className="-mx-1 block w-fit rounded-md px-1 py-2 text-[10px] leading-snug text-slate-500 transition-colors hover:text-[#00d4ff] active:bg-white/5 sm:text-[11px]"
            >
              {PROFILE.phoneDisplay}
            </a>
          </div>
          <ProfileSignature align="start" className="mt-5" />
        </div>
        <div>
          <h3 className="mb-4 bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff] bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent">
            Redes & código
          </h3>
          <p className="mb-4 text-sm text-slate-400">
            O melhor canal para convites sérios e oportunidades é o{' '}
            <span className="font-medium text-white">LinkedIn</span>; o código e estudos
            estão no <span className="font-medium text-white">GitHub</span>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition-colors hover:border-[#00d4ff]/45 hover:text-[#00d4ff]"
            >
              github.com/pamellafraga
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition-colors hover:border-[#00d4ff]/45 hover:text-[#00d4ff]"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="mb-4 bg-gradient-to-r from-[#06b6d4] to-[#00d4ff] bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent">
            Navegação rápida
          </h3>
          <ul className="flex flex-wrap gap-2">
            {quickLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => onNavigate(id)}
                  className="min-h-[44px] rounded-full border border-transparent px-3 py-2 text-left text-sm text-slate-400 transition-colors hover:border-white/15 hover:bg-white/5 hover:text-white sm:py-1.5"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}. Stack deste site: React, Tailwind,
        Framer Motion.
      </p>
    </footer>
  )
}

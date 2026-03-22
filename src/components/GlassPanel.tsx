import type { ReactNode } from 'react'

type GlassPanelProps = {
  children: ReactNode
  className?: string
}

/** Painel interno — cartão escuro com cantos arredondados. */
export function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <div
      className={[
        'rounded-[1.75rem] border border-white/10 bg-[#0f1623]/60 shadow-[0_20px_50px_-24px_rgb(0_0_0_/_0.45)] backdrop-blur-xl sm:rounded-[2rem]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

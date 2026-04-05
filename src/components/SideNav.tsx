import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'
import { NAV_ITEMS, type PageId } from '../nav'

type SideNavProps = {
  active: PageId
  onNavigate: (id: PageId) => void
}

const LG_QUERY = '(min-width: 1024px)'

export function SideNav({ active, onNavigate }: SideNavProps) {
  const spacerRef = useRef<HTMLDivElement>(null)
  const [desktopLeftPx, setDesktopLeftPx] = useState<number | null>(null)

  useLayoutEffect(() => {
    function measure() {
      const el = spacerRef.current
      const mq = window.matchMedia(LG_QUERY)
      if (!mq.matches || !el) {
        setDesktopLeftPx(null)
        return
      }
      const r = el.getBoundingClientRect()
      setDesktopLeftPx(r.left)
    }

    measure()
    const ro = new ResizeObserver(measure)
    const spacer = spacerRef.current
    if (spacer) ro.observe(spacer)
    window.addEventListener('resize', measure)
    const mq = window.matchMedia(LG_QUERY)
    mq.addEventListener('change', measure)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
      mq.removeEventListener('change', measure)
    }
  }, [])

  const navStyle =
    desktopLeftPx != null
      ? ({
          left: desktopLeftPx,
          top: '50%',
          bottom: 'auto',
          transform: 'translateY(-50%)',
        } as const)
      : ({
          left: '50%',
          top: 'auto',
          bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))',
          transform: 'translateX(-50%)',
        } as const)

  return (
    <>
      {/* Reserva o mesmo espaço da coluna original no layout desktop; posição medida para o nav fixo */}
      <div
        ref={spacerRef}
        className="hidden w-14 shrink-0 lg:block"
        aria-hidden
      />
      <nav
        className="nav-mobile-scroll fixed z-50 flex gap-2 rounded-full border border-white/10 bg-[#0f1623]/95 px-2 py-2.5 shadow-[0_0_40px_-8px_rgb(0_212_255_/_0.25),0_12px_40px_-12px_rgb(0_0_0_/_0.5),inset_0_1px_0_rgb(255_255_255_/_0.06)] backdrop-blur-xl max-lg:max-h-[min(88svh,520px)] max-lg:max-w-[min(calc(100vw-1.25rem),calc(100vw-env(safe-area-inset-left)-env(safe-area-inset-right)-1rem))] max-lg:flex-row max-lg:flex-nowrap max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:overflow-y-hidden sm:gap-2 sm:px-3 sm:py-2.5 lg:flex-col lg:overflow-visible lg:px-2.5 lg:py-5"
        style={navStyle}
        aria-label="Navegação principal"
      >
        {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
          const isActive = active === id
          return (
            <motion.button
              key={id}
              type="button"
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onNavigate(id)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className={[
                'relative flex h-12 w-12 shrink-0 snap-center items-center justify-center rounded-full transition-colors duration-300 max-lg:active:scale-95 sm:h-12 sm:w-12',
                isActive
                  ? 'bg-[#00d4ff]/20 text-[#00d4ff] shadow-[0_0_24px_rgb(0_212_255_/_0.55),0_0_48px_rgb(0_212_255_/_0.2)] ring-2 ring-[#00d4ff]/50'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white',
              ].join(' ')}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.25 : 1.75} />
            </motion.button>
          )
        })}
      </nav>
    </>
  )
}

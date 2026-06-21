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
        className="hidden w-11 shrink-0 lg:block"
        aria-hidden
      />
      <nav
        className="side-nav-dock nav-mobile-scroll fixed z-50 flex gap-1 rounded-full border border-white/10 bg-[#0f1623]/92 px-1.5 py-1.5 shadow-[0_0_32px_-10px_rgb(0_212_255_/_0.28),0_10px_32px_-14px_rgb(0_0_0_/_0.55),inset_0_1px_0_rgb(255_255_255_/_0.06)] backdrop-blur-xl max-lg:max-w-[min(calc(100vw-1.25rem),calc(100vw-env(safe-area-inset-left)-env(safe-area-inset-right)-1rem))] max-lg:flex-row max-lg:flex-nowrap max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:overflow-y-hidden sm:gap-1.5 sm:px-2 sm:py-1.5 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-1.5 lg:py-2"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              className={[
                'relative flex h-9 w-9 shrink-0 snap-center items-center justify-center rounded-full transition-colors duration-300 sm:h-10 sm:w-10',
                isActive
                  ? 'bg-[#00d4ff]/22 text-[#00d4ff] shadow-[0_0_18px_rgb(0_212_255_/_0.45),0_0_32px_rgb(0_212_255_/_0.15)] ring-1 ring-[#00d4ff]/55'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white',
              ].join(' ')}
            >
              <Icon className="h-4 w-4" strokeWidth={isActive ? 2.25 : 1.75} />
            </motion.button>
          )
        })}
      </nav>
    </>
  )
}

import { motion } from 'framer-motion'
import { PROFILE } from '../profile'

/** Fundo tech: navy profundo + halos em ciano neon (#00d4ff). */
const BG = '#0b111b'
const NEON = '#00d4ff'

export function TechBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden pwa-brand-backdrop"
      style={{ backgroundColor: BG }}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% -20%, rgb(0 212 255 / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 100% 50%, rgb(8 145 178 / 0.08) 0%, transparent 45%),
            radial-gradient(ellipse 70% 50% at 0% 80%, rgb(6 182 212 / 0.06) 0%, transparent 40%),
            linear-gradient(180deg, ${BG} 0%, #040d14 55%, #050a10 100%)`,
        }}
      />

      <motion.div
        className="absolute left-[15%] top-[20%] h-[min(45vw,380px)] w-[min(45vw,380px)] rounded-full opacity-40 blur-[120px]"
        style={{ backgroundColor: NEON }}
        animate={{ opacity: [0.28, 0.42, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[5%] bottom-[15%] h-[min(40vw,320px)] w-[min(40vw,320px)] rounded-full bg-[#0891b2]/30 blur-[100px]"
        animate={{ opacity: [0.2, 0.35, 0.22] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgb(255 255 255 / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 255 255 / 0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% 50%, transparent 30%, rgb(4 13 20 / 0.85) 100%)',
        }}
      />

      {/* PWA / mobile: fundo com marca PF e halos que conversam com o logo */}
      <div className="pwa-brand-layer absolute inset-0 lg:hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(ellipse 90% 55% at 50% 18%, rgb(0 212 255 / 0.2) 0%, transparent 58%),
              radial-gradient(ellipse 70% 45% at 50% 100%, rgb(8 145 178 / 0.14) 0%, transparent 55%),
              linear-gradient(180deg, #040d14 0%, ${BG} 42%, #050a10 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `linear-gradient(rgb(0 212 255 / 0.9) 1px, transparent 1px),
              linear-gradient(90deg, rgb(0 212 255 / 0.9) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <motion.div
          className="absolute left-1/2 top-[12%] h-[min(72vw,320px)] w-[min(72vw,320px)] -translate-x-1/2 rounded-full opacity-35 blur-[90px]"
          style={{ backgroundColor: NEON }}
          animate={{ opacity: [0.22, 0.38, 0.24], scale: [0.95, 1.05, 0.98] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute left-1/2 top-[10%] flex -translate-x-1/2 flex-col items-center">
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, rgb(0 212 255 / 0.45) 0%, rgb(6 182 212 / 0.12) 45%, transparent 70%)',
              }}
            />
            <img
              src={PROFILE.brandLogo}
              alt=""
              width={280}
              height={280}
              decoding="async"
              className="relative h-[min(42vw,200px)] w-[min(42vw,200px)] object-contain opacity-[0.14] drop-shadow-[0_0_48px_rgb(0_212_255_/_0.35)]"
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-[45%]"
          style={{
            background:
              'linear-gradient(to top, rgb(5 10 16 / 0.98) 0%, rgb(5 10 16 / 0.55) 55%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}

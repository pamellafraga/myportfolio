import { motion } from 'framer-motion'

/** Fundo tech: navy profundo + halos em ciano neon (#00d4ff). */
const BG = '#0b111b'
const NEON = '#00d4ff'

export function TechBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
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
    </div>
  )
}

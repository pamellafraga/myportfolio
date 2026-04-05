import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type ProgressBarProps = {
  value: number
  className?: string
}

/** Barra horizontal com extremidades totalmente arredondadas. */
export function ProgressBar({ value, className = '' }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <div ref={ref} className={['h-2.5 w-full overflow-hidden rounded-full bg-slate-800/90', className].join(' ')}>
      <motion.div
        className="progress-glow h-full rounded-full bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#00d4ff]"
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

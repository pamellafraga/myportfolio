import { motion } from 'framer-motion'
import { useState } from 'react'
import { PROFILE } from '../profile'

type ProfileSignatureProps = {
  align?: 'center' | 'start'
  className?: string
}

/** Imagem da assinatura em `public/` (PNG ou SVG, fundo transparente). */
export function ProfileSignature({ align = 'center', className = '' }: ProfileSignatureProps) {
  const src = PROFILE.signatureImage
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!src || failed) return null

  const justify = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`flex ${justify} ${className}`}>
      <motion.img
        src={src}
        alt=""
        role="presentation"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="h-12 w-auto max-w-[min(100%,240px)] object-contain object-bottom drop-shadow-[0_0_20px_rgba(0,212,255,0.25)] sm:h-[3.75rem]"
      />
    </div>
  )
}

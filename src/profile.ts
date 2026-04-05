/** Dados públicos do perfil — links e mensagens principais do site. */
export const PROFILE = {
  name: 'Pamella Fraga',
  firstName: 'Pamella',
  email: 'ti.pamellafraga@gmail.com',
  /** DDD 51 — formato internacional para `tel:` */
  phoneTel: '+5551999237319',
  phoneDisplay: '(51) 99923-7319',
  linkedin: 'https://www.linkedin.com/in/pamella-fraga/',
  github: 'https://github.com/pamellafraga',
  /**
   * Retrato para o hero (PNG ou JPG em `public/`).
   */
  portraitImage: '/pamella-portrait.png',
  /**
   * Assinatura manuscrita (PNG ou SVG com fundo transparente).
   * Coloque o arquivo em `public/` e ajuste o caminho se o nome for outro.
   */
  signatureImage: '/assinatura.png',
} as const

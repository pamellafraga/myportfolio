import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { PageId } from './nav'
import { ContactSection } from './components/ContactSection'
import { EducationSection } from './components/EducationSection'
import { HeroSection } from './components/HeroSection'
import { LanguagesSection } from './components/LanguagesSection'
import { PortfolioSection } from './components/PortfolioSection'
import { SideNav } from './components/SideNav'
import { TechBackdrop } from './components/TechBackdrop'
import { TechnologiesSection } from './components/TechnologiesSection'

function App() {
  const [page, setPage] = useState<PageId>('home')

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-[#0b111b] font-sans text-slate-200 antialiased">
      <TechBackdrop />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col gap-3 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] pb-[calc(7rem+env(safe-area-inset-bottom,0px))] max-lg:gap-4 sm:pl-5 sm:pr-5 sm:pt-6 lg:flex-row lg:items-stretch lg:gap-6 lg:pl-8 lg:pr-8 lg:pt-8 lg:pb-10">
        <SideNav active={page} onNavigate={setPage} />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col rounded-2xl border border-white/10 bg-[#121a26]/85 p-3.5 shadow-[0_0_0_1px_rgb(0_212_255_/_0.06),0_24px_80px_-24px_rgb(0_0_0_/_0.55),inset_0_1px_0_rgb(255_255_255_/_0.04)] backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-6 md:p-8 lg:min-h-[min(100vh-4rem,900px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              role="main"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-0 flex-1 flex-col"
            >
              {page === 'home' && <HeroSection onNavigate={setPage} />}
              {page === 'languages' && <LanguagesSection />}
              {page === 'technologies' && <TechnologiesSection />}
              {page === 'portfolio' && <PortfolioSection />}
              {page === 'education' && <EducationSection />}
              {page === 'contact' && <ContactSection onNavigate={setPage} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default App

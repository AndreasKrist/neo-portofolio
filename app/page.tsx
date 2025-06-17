'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/ui/Navigation'
import { ParticleField } from '@/components/ui/ParticleField'
import { FloatingElements } from '@/components/ui/FloatingElements'
import { ScrollProgress } from '@/components/animations/ScrollProgress'
import { CursorGlow } from '@/components/animations/CursorGlow'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Activities } from '@/components/sections/Activities'
import { Contact } from '@/components/sections/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Prevent default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <>
      {/* Background Effects */}
      <div className="aurora-bg" />
      <ParticleField />
      <FloatingElements />
      <CursorGlow />
      
      {/* Progress Bar */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-sm"
        >
          <p>© 2025 John Developer. Crafted with passion and Next.js.</p>
          <p className="mt-2">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block text-red-500"
            >
              ❤️
            </motion.span>{' '}
            in San Francisco
          </p>
        </motion.div>
      </footer>

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(183, 148, 244, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 179, 237, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
    </>
  )
}
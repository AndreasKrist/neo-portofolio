'use client'

import { motion } from 'framer-motion'
import { useMousePosition } from '@/lib/hooks/useMousePosition'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      className="fixed w-96 h-96 rounded-full pointer-events-none z-0 mix-blend-screen"
      animate={{
        x: x - 192,
        y: y - 192,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-pink/20 blur-3xl" />
    </motion.div>
  )
}
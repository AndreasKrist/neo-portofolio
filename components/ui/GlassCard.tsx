'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  neonBorder?: boolean
  hover3D?: boolean
}

export function GlassCard({ children, className, neonBorder = false, hover3D = false }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl overflow-hidden',
        neonBorder && 'neon-border',
        hover3D && 'card-hover',
        className
      )}
      whileHover={hover3D ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Inner glow layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  )
}
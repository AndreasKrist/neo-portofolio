'use client'

import { useRef, useState, MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        'relative px-8 py-4 rounded-full font-medium transition-all duration-300',
        'bg-gradient-to-r from-neon-purple to-neon-blue',
        'hover:shadow-[0_0_30px_rgba(183,148,244,0.5)]',
        'active:scale-95',
        className
      )}
    >
      <span className="relative z-10 text-white">
        {children}
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 hover:opacity-100 blur-xl transition-opacity duration-300" />
    </motion.button>
  )
}
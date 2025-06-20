import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [prevOffset, setPrevOffset] = useState(0)

  useEffect(() => {
    const toggleScrollDirection = () => {
      const scrollY = window.pageYOffset

      if (scrollY === 0) {
        setScrollDirection('up')
      } else if (scrollY > prevOffset) {
        setScrollDirection('down')
      } else if (scrollY < prevOffset) {
        setScrollDirection('up')
      }

      setPrevOffset(scrollY)
    }

    window.addEventListener('scroll', toggleScrollDirection)

    return () => {
      window.removeEventListener('scroll', toggleScrollDirection)
    }
  }, [prevOffset])

  return scrollDirection
}
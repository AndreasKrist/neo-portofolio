'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code, Database, Cloud, Smartphone, Globe, Palette, Cpu, Shield, GitBranch, Terminal } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'

const skills = [
  { name: 'React/Next.js', icon: <Code className="w-8 h-8" />, level: 95, category: 'technical' },
  { name: 'TypeScript', icon: <Terminal className="w-8 h-8" />, level: 90, category: 'technical' },
  { name: 'Node.js', icon: <Database className="w-8 h-8" />, level: 88, category: 'technical' },
  { name: 'Python', icon: <Code className="w-8 h-8" />, level: 85, category: 'technical' },
  { name: 'AWS/Cloud', icon: <Cloud className="w-8 h-8" />, level: 92, category: 'technical' },
  { name: 'Docker/K8s', icon: <Cpu className="w-8 h-8" />, level: 80, category: 'technical' },
  { name: 'UI/UX Design', icon: <Palette className="w-8 h-8" />, level: 85, category: 'creative' },
  { name: 'Mobile Dev', icon: <Smartphone className="w-8 h-8" />, level: 75, category: 'technical' },
  { name: '3D Design', icon: <Palette className="w-8 h-8" />, level: 70, category: 'creative' },
  { name: 'API Design', icon: <Globe className="w-8 h-8" />, level: 90, category: 'technical' },
  { name: 'Security', icon: <Shield className="w-8 h-8" />, level: 82, category: 'technical' },
  { name: 'Git/DevOps', icon: <GitBranch className="w-8 h-8" />, level: 88, category: 'technical' }
]

export function Skills() {
  const [offset, setOffset] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const visibleSkills = 5
  const maxOffset = Math.max(0, skills.length - visibleSkills)

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Skills & Tools</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden px-12">
              <motion.div
                className="flex gap-6"
                animate={{ x: -offset * 300 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex-shrink-0 w-72"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * (index % visibleSkills) }}
                  >
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      perspective={1000}
                      scale={1.05}
                    >
                      <GlassCard className="p-6 h-full group hover:shadow-[0_0_40px_rgba(183,148,244,0.3)] transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                          <motion.div
                            className={`mb-4 p-4 rounded-full bg-gradient-to-br ${
                              skill.category === 'technical' 
                                ? 'from-neon-purple/20 to-neon-blue/20' 
                                : 'from-neon-blue/20 to-neon-pink/20'
                            }`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className="text-white">
                              {skill.icon}
                            </div>
                          </motion.div>
                          
                          <h3 className="font-bold text-lg mb-2 text-white">
                            {skill.name}
                          </h3>
                          
                          <div className="w-full mt-4">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : {}}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              />
                            </div>
                          </div>
                          
                          <span className="text-sm text-gray-500 mt-3 capitalize">
                            {skill.category}
                          </span>
                        </div>
                      </GlassCard>
                    </Tilt>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setOffset(Math.max(0, offset - 1))}
              disabled={offset === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 glass p-3 rounded-full transition-all ${
                offset === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setOffset(Math.min(maxOffset, offset + 1))}
              disabled={offset >= maxOffset}
              className={`absolute right-0 top-1/2 -translate-y-1/2 glass p-3 rounded-full transition-all ${
                offset >= maxOffset ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
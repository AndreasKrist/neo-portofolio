'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { TextReveal } from '@/components/animations/TextReveal'
import { useInView } from 'react-intersection-observer'

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <TextReveal>
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="text-gradient">About Me</span>
            </h2>
          </TextReveal>

          <GlassCard className="p-8 md:p-12" neonBorder hover3D>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-lg"
              >
                I'm a passionate Full Stack Developer with over 5 years of experience creating innovative digital solutions. 
                My journey in tech began with a fascination for how things work, which evolved into a career dedicated to 
                building products that make a difference.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-lg"
              >
                With a Bachelor's degree in Computer Science from MIT and a Master's in Human-Computer Interaction from 
                Stanford, I bring both technical expertise and user-centered design thinking to every project. I specialize 
                in creating scalable web applications, cloud infrastructure, and engaging user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-lg"
              >
                When I'm not coding, you'll find me contributing to open source projects, speaking at tech conferences, 
                or mentoring the next generation of developers. I believe in the power of technology to solve real-world 
                problems and am always excited to take on new challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-glass-border"
              >
                <h3 className="text-2xl font-bold mb-4 text-gradient">Quick Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: '🎓 Education', value: 'MIT & Stanford' },
                    { label: '💼 Experience', value: '5+ Years' },
                    { label: '🌍 Location', value: 'San Francisco, CA' },
                    { label: '🚀 Focus', value: 'Full Stack & Cloud' }
                  ].map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xl">{fact.label}</span>
                      <span className="text-gray-400">{fact.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { TextReveal } from '@/components/animations/TextReveal'
import Tilt from 'react-parallax-tilt'

const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights",
    image: "https://source.unsplash.com/600x400/?dashboard,analytics",
    tech: ["Next.js", "TypeScript", "TensorFlow.js", "D3.js"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration and inventory management",
    image: "https://source.unsplash.com/600x400/?ecommerce,shopping",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Cloud Infrastructure Manager",
    description: "DevOps tool for managing multi-cloud deployments",
    image: "https://source.unsplash.com/600x400/?cloud,technology",
    tech: ["Python", "Docker", "Kubernetes", "AWS"],
    github: "#",
    demo: "#"
  }
]

export function Hero() {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-neon-purple/20 via-transparent to-transparent animate-aurora" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-neon-blue/20 via-transparent to-transparent animate-aurora" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <Tilt
              className="h-full"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
            >
              <GlassCard className="p-8 h-full" neonBorder>
                <div className="text-center">
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-48 h-48 rounded-full mx-auto overflow-hidden border-4 border-white/20 relative">
                      <img
                        src="https://source.unsplash.com/200x200/?portrait,professional"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-neon-purple/40 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </motion.div>
                  
                  <TextReveal>
                    <h1 className="text-5xl font-bold mb-2 text-gradient">
                      John Developer
                    </h1>
                  </TextReveal>
                  
                  <TextReveal delay={0.1}>
                    <p className="text-xl text-gray-400 mb-8">
                      Full Stack Developer & Creative Technologist
                    </p>
                  </TextReveal>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: 'Projects', value: '50+', color: 'from-neon-purple to-neon-blue' },
                      { label: 'Years Exp', value: '5+', color: 'from-neon-blue to-neon-pink' },
                      { label: 'Clients', value: '100+', color: 'from-neon-pink to-neon-purple' }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                        className="relative"
                      >
                        <GlassCard className="p-4 hover:scale-105 transition-transform">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <MagneticButton>
                      <Download className="w-5 h-5 mr-2 inline" />
                      Download CV
                    </MagneticButton>
                  </motion.div>
                </div>
              </GlassCard>
            </Tilt>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <GlassCard className="p-8 h-full" neonBorder>
              <h2 className="text-2xl font-bold mb-6 text-gradient">Featured Projects</h2>
              
              <div className="relative h-[450px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Tilt className="h-full" tiltMaxAngleX={3} tiltMaxAngleY={3}>
                      <div className="relative h-64 rounded-lg overflow-hidden mb-4 group">
                        <img
                          src={featuredProjects[currentProject].image}
                          alt={featuredProjects[currentProject].title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {featuredProjects[currentProject].title}
                          </h3>
                        </div>
                      </div>
                    </Tilt>

                    <p className="text-gray-400 mb-4">
                      {featuredProjects[currentProject].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProjects[currentProject].tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 glass rounded-full text-xs font-medium text-gray-300 neon-glow"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={featuredProjects[currentProject].github}
                        className="flex items-center gap-2 text-neon-purple hover:text-neon-blue transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </motion.a>
                      <motion.a
                        href={featuredProjects[currentProject].demo}
                        className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <button
                  onClick={() => setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
                  className="absolute left-0 top-32 -translate-x-4 glass p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentProject((prev) => (prev + 1) % featuredProjects.length)}
                  className="absolute right-0 top-32 translate-x-4 glass p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentProject
                          ? 'w-8 bg-gradient-to-r from-neon-purple to-neon-blue'
                          : 'w-2 bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
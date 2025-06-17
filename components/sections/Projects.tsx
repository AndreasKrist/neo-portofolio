'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Github, ExternalLink, Star } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights for business intelligence",
    image: "https://source.unsplash.com/600x400/?dashboard,analytics",
    tech: ["Next.js", "TypeScript", "TensorFlow.js", "D3.js", "Redis"],
    github: "#",
    demo: "#",
    stars: 245,
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration, inventory management, and real-time notifications",
    image: "https://source.unsplash.com/600x400/?ecommerce,shopping",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Socket.io"],
    github: "#",
    demo: "#",
    stars: 189
  },
  {
    id: 3,
    title: "Cloud Infrastructure Manager",
    description: "DevOps tool for managing multi-cloud deployments with automated scaling and monitoring",
    image: "https://source.unsplash.com/600x400/?cloud,technology",
    tech: ["Python", "Docker", "Kubernetes", "AWS", "Terraform"],
    github: "#",
    demo: "#",
    stars: 312
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure financial management application with biometric authentication and blockchain integration",
    image: "https://source.unsplash.com/600x400/?banking,mobile",
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB", "Web3.js"],
    github: "#",
    demo: "#",
    stars: 156
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Track and analyze social media performance across platforms with AI-powered insights",
    image: "https://source.unsplash.com/600x400/?social,analytics",
    tech: ["Vue.js", "Python", "Redis", "PostgreSQL", "ChartJS"],
    github: "#",
    stars: 98
  },
  {
    id: 6,
    title: "IoT Home Automation",
    description: "Smart home system with voice control, mobile app, and energy optimization features",
    image: "https://source.unsplash.com/600x400/?smart,home",
    tech: ["React", "Node.js", "MQTT", "Raspberry Pi", "TensorFlow"],
    demo: "#",
    stars: 203
  },
  {
    id: 7,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparency, security, and anonymity",
    image: "https://source.unsplash.com/600x400/?blockchain,technology",
    tech: ["Solidity", "Web3.js", "React", "IPFS", "Hardhat"],
    github: "#",
    demo: "#",
    stars: 167
  },
  {
    id: 8,
    title: "AR Education Platform",
    description: "Interactive learning experiences using augmented reality for K-12 education",
    image: "https://source.unsplash.com/600x400/?education,technology",
    tech: ["Unity", "C#", "ARCore", "Firebase", "React"],
    demo: "#",
    stars: 234
  }
]

export function Projects() {
  const [offset, setOffset] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const visibleProjects = 3
  const maxOffset = Math.max(0, projects.length - visibleProjects)

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="text-gradient">IT Projects</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden px-12">
              <motion.div
                className="flex gap-6"
                animate={{ x: -offset * 420 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="flex-shrink-0 w-[400px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * (index % visibleProjects) }}
                  >
                    <Tilt
                      tiltMaxAngleX={5}
                      tiltMaxAngleY={5}
                      perspective={1000}
                      scale={1.02}
                    >
                      <GlassCard className="h-full overflow-hidden group hover:shadow-[0_0_50px_rgba(99,179,237,0.3)] transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          {project.featured && (
                            <motion.div
                              className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs font-bold text-neon-purple"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              FEATURED
                            </motion.div>
                          )}
                          <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-white">{project.stars}</span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs glass rounded-md text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="px-2 py-1 text-xs glass rounded-md text-gray-400">
                                +{project.tech.length - 4}
                              </span>
                            )}
                          </div>

                          <div className="flex gap-4">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Github className="w-4 h-4" />
                                <span className="text-sm">Code</span>
                              </motion.a>
                            )}
                            {project.demo && (
                              <motion.a
                                href={project.demo}
                                className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span className="text-sm">Demo</span>
                              </motion.a>
                            )}
                          </div>
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
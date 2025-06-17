'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Mic, Users, PenTool, Award } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { useInView } from 'react-intersection-observer'

const activities = [
  {
    id: 1,
    title: "Tech Conference Speaker",
    description: "Regular speaker at developer conferences on cloud architecture and microservices",
    image: "https://source.unsplash.com/600x400/?conference,speaker",
    category: "Speaking",
    icon: <Mic className="w-5 h-5" />,
    stats: "15+ Talks"
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Active contributor to major open source projects including React and Node.js ecosystem",
    image: "https://source.unsplash.com/600x400/?coding,github",
    category: "Community",
    icon: <Users className="w-5 h-5" />,
    stats: "500+ PRs"
  },
  {
    id: 3,
    title: "Tech Blog Writer",
    description: "Published 50+ technical articles on Medium and Dev.to about web development",
    image: "https://source.unsplash.com/600x400/?writing,blog",
    category: "Writing",
    icon: <PenTool className="w-5 h-5" />,
    stats: "100k+ Views"
  },
  {
    id: 4,
    title: "Hackathon Mentor",
    description: "Mentored teams at 10+ hackathons worldwide, helping them build innovative solutions",
    image: "https://source.unsplash.com/600x400/?hackathon,mentor",
    category: "Mentoring",
    icon: <Award className="w-5 h-5" />,
    stats: "50+ Teams"
  },
  {
    id: 5,
    title: "YouTube Educator",
    description: "Creating educational content about advanced programming concepts and best practices",
    image: "https://source.unsplash.com/600x400/?youtube,education",
    category: "Education",
    icon: <Mic className="w-5 h-5" />,
    stats: "25k Subs"
  },
  {
    id: 6,
    title: "Workshop Facilitator",
    description: "Conducting hands-on workshops on modern web development and cloud technologies",
    image: "https://source.unsplash.com/600x400/?workshop,teaching",
    category: "Teaching",
    icon: <Users className="w-5 h-5" />,
    stats: "30+ Workshops"
  }
]

export function Activities() {
  const [offset, setOffset] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const visibleActivities = 3
  const maxOffset = Math.max(0, activities.length - visibleActivities)

  return (
    <section id="activities" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Other Activities & Projects</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden px-12">
              <motion.div
                className="flex gap-6"
                animate={{ x: -offset * 420 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    className="flex-shrink-0 w-[400px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * (index % visibleActivities) }}
                  >
                    <GlassCard className="h-full overflow-hidden group hover:shadow-[0_0_50px_rgba(246,135,179,0.3)] transition-all duration-300" hover3D>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        
                        {/* Category Badge */}
                        <motion.div
                          className="absolute top-4 right-4 px-3 py-1 glass rounded-full flex items-center gap-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {activity.icon}
                          <span className="text-xs font-semibold">{activity.category}</span>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                          className="absolute bottom-4 left-4 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="text-2xl font-bold neon-glow">{activity.stats}</div>
                        </motion.div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
                          {activity.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </GlassCard>
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
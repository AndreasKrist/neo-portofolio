'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Instagram, MapPin, Phone, Send } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'

const socialLinks = [
  { name: 'GitHub', icon: <Github className="w-6 h-6" />, href: '#', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, href: '#', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, href: '#', color: 'hover:text-sky-400' },
  { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: '#', color: 'hover:text-pink-400' }
]

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'john.developer@example.com', href: 'mailto:john.developer@example.com' },
  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'San Francisco, CA', href: '#' }
]

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Get In Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-8 h-full" neonBorder>
                <h3 className="text-2xl font-bold mb-6 text-gradient">Let's Connect</h3>
                
                <p className="text-gray-400 mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology. 
                  Feel free to reach out through any of the channels below!
                </p>

                {/* Contact Details */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/5 transition-all group"
                    >
                      <div className="p-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{info.label}</div>
                        <div className="text-white group-hover:text-gradient transition-all">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-glass-border">
                  <h4 className="text-lg font-semibold mb-4 text-gray-300">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 glass rounded-full ${social.color} transition-all hover:shadow-[0_0_20px_rgba(183,148,244,0.3)]`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
              >
                <GlassCard className="p-8 h-full" neonBorder>
                  <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 glass rounded-lg bg-white/5 border border-glass-border focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 glass rounded-lg bg-white/5 border border-glass-border focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 glass rounded-lg bg-white/5 border border-glass-border focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all resize-none"
                        placeholder="Your message here..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      <MagneticButton className="w-full">
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send className="w-4 h-4" />
                        </span>
                      </MagneticButton>
                    </motion.div>
                  </form>
                </GlassCard>
              </Tilt>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
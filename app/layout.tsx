import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Developer - Full Stack Developer & Creative Technologist',
  description: 'Award-winning developer creating extraordinary digital experiences with cutting-edge technology.',
  keywords: 'developer, full stack, react, next.js, portfolio, web development',
  authors: [{ name: 'John Developer' }],
  openGraph: {
    title: 'John Developer - Portfolio',
    description: 'Explore my innovative projects and creative solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NewsletterModal } from './NewsletterModal'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const pathname = usePathname()

  const baseNavItems = [
    { href: '/music', label: 'Music' },
    { href: '/mercantile', label: 'Mercantile' },
    { href: '/library', label: 'Library' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
  ]

  const navItems = pathname === '/' 
    ? baseNavItems 
    : [{ href: '/', label: 'Home' }, ...baseNavItems]

  return (
    <header className="header-3d w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-3">
          <Link href="/" className="block">
            <h1 
              className="header-1 text-responsive-title"
              style={{
                fontFamily: "'Impact', 'Arial Black', 'Helvetica', 'sans-serif'",
                fontWeight: '900',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#FFD700',
                textAlign: 'center',
                textShadow: '4px 4px 8px rgba(0,0,0,0.5), 2px 2px 0px #A62400',
                position: 'relative',
                background: 'linear-gradient(45deg, #FFD700 0%, #FFE55C 25%, #FFD700 50%, #FFE55C 75%, #FFD700 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shine 3s ease-in-out infinite',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              Southern Cross Rangers
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex justify-center items-center gap-8 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`menu-item text-lg transition-all duration-300 ${
                pathname === item.href
                  ? 'font-bold'
                  : 'hover:font-bold'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Join Our Family CTA Button */}
          <button
            onClick={() => setShowNewsletterModal(true)}
            className="px-4 py-2 rounded-lg font-bold text-sm transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(145deg, #FFD700 0%, #FFE55C 25%, #FFD700 50%, #FFE55C 75%, #FFD700 100%)',
              color: '#5d4037',
              textShadow: 'none',
              border: '2px solid #b8860b',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              fontFamily: "'Rye', 'Smokum', 'Vast Shadow', cursive"
            }}
          >
            Join Our Family!
          </button>
        </nav>

        <div className="md:hidden flex justify-end py-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-menu p-2 menu-item hover:text-FFD700 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-current"></div>
              <div className="w-full h-0.5 bg-current"></div>
              <div className="w-full h-0.5 bg-current"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 py-2 border-t border-parchment-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`menu-item text-lg transition-all duration-300 ${
                  pathname === item.href
                    ? 'font-bold'
                    : 'hover:font-bold'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Join Our Family CTA Button */}
            <button
              onClick={() => {
                setShowNewsletterModal(true)
                setIsMenuOpen(false)
              }}
              className="px-4 py-2 rounded-lg font-bold text-sm transition-all hover:scale-105 mt-2"
              style={{
                background: 'linear-gradient(145deg, #FFD700 0%, #FFE55C 25%, #FFD700 50%, #FFE55C 75%, #FFD700 100%)',
                color: '#5d4037',
                textShadow: 'none',
                border: '2px solid #b8860b',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                fontFamily: "'Rye', 'Smokum', 'Vast Shadow', cursive"
              }}
            >
              Join Our Family!
            </button>
          </nav>
        )}
      </div>
      
      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </header>
  )
}

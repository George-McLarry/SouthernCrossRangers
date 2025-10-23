'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/content', label: 'Content Management', icon: '📝' },
    { href: '/admin/music', label: 'Music Management', icon: '🎵' },
    { href: '/admin/theme', label: 'Theme Customization', icon: '🎨' },
    { href: '/admin/newsletter', label: 'Newsletter Editor', icon: '📧' },
    { href: '/admin/analytics', label: 'Analytics', icon: '📈' },
    { href: '/admin/backups', label: 'Backups', icon: '💾' },
  ]

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavigation = (href: string) => {
    console.log('Navigating to:', href)
    setSidebarOpen(false)
    router.push(href)
  }

  const toggleSidebar = () => {
    console.log('Toggling sidebar from:', sidebarOpen, 'to:', !sidebarOpen)
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen" style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1137996207/photo/brown-wood-texture-dark-wooden-abstract-background.jpg?s=612x612&w=0&k=20&c=qZS2TJ_1fQ9xRmcnqkyEIbBlT-5K_ShnRKPCzwfOcQI=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-20 z-0"></div>
      
      {/* Header */}
      <header className="relative z-10" style={{
        background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 20%, #60a5fa 50%, #3b82f6 80%, #1e3a8a 100%)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.2)',
        position: 'relative'
      }}>
        {/* Shiny effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              {/* Hamburger Button - Only visible on mobile */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-3 rounded-md text-white hover:bg-blue-700 transition-colors border border-white/20 cursor-pointer"
                style={{ 
                  backgroundColor: sidebarOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
                  zIndex: 60
                }}
                title="Toggle Admin Menu"
                type="button"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`w-full h-0.5 bg-current transition-all duration-300 ${sidebarOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-current transition-all duration-300 ${sidebarOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-current transition-all duration-300 ${sidebarOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
              </button>
              
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold ml-2 sm:ml-4" style={{
                fontFamily: "'Rye', 'Smokum', 'Vast Shadow', cursive",
                color: '#FFD700',
                textShadow: '2px 2px 0px #A62400, 4px 4px 8px rgba(0,0,0,0.5)',
                background: 'linear-gradient(45deg, #FFD700 0%, #FFE55C 25%, #FFD700 50%, #FFE55C 75%, #FFD700 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                <span className="hidden sm:inline">Southern Cross Rangers Admin</span>
                <span className="sm:hidden">SCR Admin</span>
              </h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4" style={{ zIndex: 100 }}>
              <button
                onClick={() => {
                  console.log('Test button clicked');
                  alert('Test button works!');
                }}
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-colors bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm hover:scale-105 cursor-pointer"
                title="Test button"
                type="button"
                style={{ zIndex: 101 }}
              >
                <span className="hidden sm:inline">🧪 Test</span>
                <span className="sm:hidden">🧪</span>
              </button>
              <button
                onClick={() => handleNavigation('/')}
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-colors text-xs sm:text-sm hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, #ffd700 0%, #d4af37 50%, #ffd700 100%)',
                  border: '2px solid #b8860b',
                  color: '#3e2723',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                  zIndex: 101
                }}
                title="Go to main website"
                type="button"
              >
                <span className="hidden sm:inline">🌐 View Site</span>
                <span className="sm:hidden">🌐</span>
              </button>
              <button 
                onClick={() => {
                  console.log('Logout button clicked');
                  if (confirm('Are you sure you want to logout?')) {
                    alert('Logout functionality - This would clear admin session');
                  }
                }}
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-colors bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm hover:scale-105 cursor-pointer"
                title="Logout from admin panel"
                type="button"
                style={{ zIndex: 101 }}
              >
                <span className="hidden sm:inline">🚪 Logout</span>
                <span className="sm:hidden">🚪</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative z-10 min-h-screen">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside 
          className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`} 
          style={{
            background: 'linear-gradient(90deg, #1a3d1a 0%, #2d5016 20%, #3a6b1f 50%, #2d5016 80%, #1a3d1a 100%)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.2)',
            minHeight: '100vh',
            maxHeight: '100vh',
            overflowY: 'auto'
          }}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-green-600">
            <h2 className="text-lg font-bold text-white">Admin Panel</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-green-700 transition-colors"
              title="Close Menu"
              type="button"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current transform rotate-45 translate-y-1"></div>
                <div className="w-full h-0.5 bg-current transform -rotate-45 -translate-y-1"></div>
              </div>
            </button>
          </div>
          
          {/* Navigation Menu */}
          <nav className="flex-1 mt-4">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <button
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors text-sm font-medium cursor-pointer ${
                      pathname === item.href
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'text-green-100 hover:bg-green-700 hover:text-white'
                    }`}
                    onClick={() => handleNavigation(item.href)}
                    style={{ zIndex: 102 }}
                    type="button"
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-green-600">
            <div className="text-center mb-4">
              <button
                onClick={() => handleNavigation('/')}
                className="block w-full px-4 py-2 rounded-md transition-colors text-sm font-medium cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, #ffd700 0%, #d4af37 50%, #ffd700 100%)',
                  border: '2px solid #b8860b',
                  color: '#3e2723',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                  zIndex: 102
                }}
                title="Go to main website"
                type="button"
              >
                View Site
              </button>
            </div>
            <div className="text-center">
              <p className="text-green-200 text-xs">Southern Cross Rangers</p>
              <p className="text-green-300 text-xs">Admin Panel v1.0</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="p-2 sm:p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
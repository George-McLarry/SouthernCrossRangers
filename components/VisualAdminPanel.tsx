'use client'

import { useState } from 'react'

interface VisualAdminPanelProps {
  onLogout: () => void
}

export function VisualAdminPanel({ onLogout }: VisualAdminPanelProps) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'products', label: 'Products', icon: '🛒' },
    { id: 'newsletter', label: 'Newsletter', icon: '📧' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="header-2 text-3xl mb-6">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="parchment-section text-center">
                <div className="text-3xl mb-2">🎵</div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm">Total Tracks</div>
              </div>
              <div className="parchment-section text-center">
                <div className="text-3xl mb-2">🛒</div>
                <div className="text-2xl font-bold">47</div>
                <div className="text-sm">Orders</div>
              </div>
              <div className="parchment-section text-center">
                <div className="text-3xl mb-2">📧</div>
                <div className="text-2xl font-bold">234</div>
                <div className="text-sm">Subscribers</div>
              </div>
              <div className="parchment-section text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold">1,234</div>
                <div className="text-sm">Visitors</div>
              </div>
            </div>

            <div className="parchment-section">
              <h3 className="header-2 text-2xl mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="gold-button py-3">
                  Add New Track
                </button>
                <button className="gold-button py-3">
                  Send Newsletter
                </button>
                <button className="gold-button py-3">
                  Update Content
                </button>
              </div>
            </div>
          </div>
        )

      case 'content':
        return (
          <div className="space-y-6">
            <h2 className="header-2 text-3xl mb-6">Content Management</h2>
            
            <div className="parchment-section">
              <h3 className="header-2 text-2xl mb-4">Homepage Content</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Main Title:</label>
                  <input 
                    type="text" 
                    defaultValue="Southern Cross Rangers"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Tagline:</label>
                  <input 
                    type="text" 
                    defaultValue="Authentic Country Music from Tasmania"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">About Text:</label>
                  <textarea 
                    rows={4}
                    defaultValue="Experience the raw beauty of Tasmanian landscapes through our music..."
                    className="form-textarea"
                  />
                </div>
                <button className="gold-button py-3 px-6">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )

      case 'products':
        return (
          <div className="space-y-6">
            <h2 className="header-2 text-3xl mb-6">Product Management</h2>
            
            <div className="parchment-section">
              <h3 className="header-2 text-2xl mb-4">Add New Product</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Product Name:</label>
                  <input type="text" className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Description:</label>
                  <textarea rows={3} className="form-textarea" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Price (AUD):</label>
                    <input type="number" step="0.01" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Stock:</label>
                    <input type="number" className="form-input" />
                  </div>
                </div>
                <button className="gold-button py-3 px-6">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        )

      case 'newsletter':
        return (
          <div className="space-y-6">
            <h2 className="header-2 text-3xl mb-6">Newsletter Management</h2>
            
            <div className="parchment-section">
              <h3 className="header-2 text-2xl mb-4">Compose Newsletter</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject:</label>
                  <input type="text" className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Content:</label>
                  <textarea rows={8} className="form-textarea" />
                </div>
                <div className="flex space-x-4">
                  <button className="gold-button py-3 px-6">
                    Send to All Subscribers
                  </button>
                  <button className="gold-button py-3 px-6" style={{ background: '#6b7280' }}>
                    Save Draft
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Content for {activeTab}</div>
    }
  }

  return (
    <div className="min-h-screen" style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1137996207/photo/brown-wood-texture-dark-wooden-abstract-background.jpg?s=612x612&w=0&k=20&c=qZS2TJ_1fQ9xRmcnqkyEIbBlT-5K_ShnRKPCzwfOcQI=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header */}
      <header className="header-3d w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 menu-item"
              >
                ☰
              </button>
              <h1 className="header-1 text-2xl lg:text-3xl">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="gold-button text-sm px-4 py-2">
                🌐 View Site
              </button>
              <button 
                onClick={onLogout}
                className="gold-button text-sm px-4 py-2"
                style={{ background: '#dc2626' }}
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block w-64 bg-opacity-90 bg-white fixed lg:static inset-y-0 left-0 z-50 lg:z-auto`}>
          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  activeTab === item.id 
                    ? 'gold-button' 
                    : 'menu-item hover:bg-opacity-20'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}

'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { useState, useEffect } from 'react'
import { WebsiteContent, contentManager } from '@/lib/content'

export default function ContentManagement() {
  const [content, setContent] = useState<WebsiteContent>(contentManager.getContent())
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setContent(contentManager.getContent())
  }, [])

  const handleSave = () => {
    contentManager.saveContent(content)
    alert('Content saved successfully!')
    setIsEditing(false)
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset to default content?')) {
      setContent(contentManager.getContent())
      alert('Content reset to defaults!')
    }
  }

  const updateContent = (section: keyof WebsiteContent, field: string, value: any) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: '🏠' },
    { id: 'promotion', name: 'Promotion Section', icon: '🎵' },
    { id: 'about', name: 'About Section', icon: 'ℹ️' },
    { id: 'contact', name: 'Contact Section', icon: '📧' },
    { id: 'newsletter', name: 'Newsletter Section', icon: '📬' },
    { id: 'music', name: 'Music Page', icon: '🎶' },
    { id: 'mercantile', name: 'Mercantile Page', icon: '🛒' },
    { id: 'library', name: 'Library Page', icon: '📚' },
    { id: 'gallery', name: 'Gallery Page', icon: '📸' },
    { id: 'events', name: 'Events Page', icon: '📅' },
    { id: 'footer', name: 'Footer', icon: '🦶' },
    { id: 'theme', name: 'Theme Settings', icon: '🎨' }
  ]

  const renderSectionEditor = () => {
    const sectionData = content[activeSection as keyof WebsiteContent] as any

    return (
      <div className="space-y-6">
        {activeSection === 'hero' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={sectionData.title}
                onChange={(e) => updateContent('hero', 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <input
                type="text"
                value={sectionData.subtitle}
                onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={sectionData.description}
                onChange={(e) => updateContent('hero', 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Button Text</label>
                <input
                  type="text"
                  value={sectionData.primaryButton.text}
                  onChange={(e) => updateContent('hero', 'primaryButton', { ...sectionData.primaryButton, text: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Button Link</label>
                <input
                  type="text"
                  value={sectionData.primaryButton.link}
                  onChange={(e) => updateContent('hero', 'primaryButton', { ...sectionData.primaryButton, link: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </>
        )}

        {activeSection === 'theme' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input
                  type="color"
                  value={sectionData.primaryColor}
                  onChange={(e) => updateContent('theme', 'primaryColor', e.target.value)}
                  className="w-full h-12 border border-gray-300 rounded-md cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gold Color</label>
                <input
                  type="color"
                  value={sectionData.goldColor}
                  onChange={(e) => updateContent('theme', 'goldColor', e.target.value)}
                  className="w-full h-12 border border-gray-300 rounded-md cursor-pointer"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Header Font</label>
              <select
                value={sectionData.headerFont}
                onChange={(e) => updateContent('theme', 'headerFont', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Rye">Rye (Wild West)</option>
                <option value="Smokum">Smokum</option>
                <option value="Vast Shadow">Vast Shadow</option>
                <option value="Georgia">Georgia (Serif)</option>
              </select>
            </div>
          </>
        )}

        {/* Add more section editors as needed */}
      </div>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="parchment-section max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="header-1 text-3xl sm:text-4xl lg:text-5xl">Content Management</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isEditing ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isEditing ? '✏️ Editing' : '✏️ Edit Content'}
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
              >
                💾 Save Changes
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
              >
                🔄 Reset
              </button>
            </div>
          </div>
          <p className="body-text text-lg sm:text-xl mb-8">
            Manage all website content from one place. Edit text, images, and settings for every page.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Section Navigation */}
          <div className="lg:col-span-1">
            <div className="parchment-section">
              <h2 className="header-2 text-xl mb-4">Content Sections</h2>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <span className="text-lg mr-3">{section.icon}</span>
                    <span className="text-sm font-medium">{section.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Editor */}
          <div className="lg:col-span-3">
            <div className="parchment-section">
              <h2 className="header-2 text-2xl mb-6">
                {sections.find(s => s.id === activeSection)?.name}
              </h2>
              {isEditing ? (
                renderSectionEditor()
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-600">Click "Edit Content" to start editing this section.</p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <pre className="text-sm text-gray-700">
                      {JSON.stringify(content[activeSection as keyof WebsiteContent], null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}


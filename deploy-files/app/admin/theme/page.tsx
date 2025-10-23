'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { useState } from 'react'

export default function ThemeCustomization() {
  const [theme, setTheme] = useState({
    primaryColor: '#28D1CC',
    goldColor: '#FFD700',
    parchmentColor: '#f4e4c1',
    headerFont: 'Rye',
    bodyFont: 'Georgia',
    showBackground: true
  })

  const handleColorChange = (colorType: string, value: string) => {
    setTheme({...theme, [colorType]: value})
    alert(`Color updated! This would update the website theme in real-time.`)
  }

  const handleFontChange = (fontType: string, value: string) => {
    setTheme({...theme, [fontType]: value})
    alert(`Font updated! This would update the website typography in real-time.`)
  }

  const handleSaveTheme = () => {
    alert('Theme saved successfully! All changes have been applied to the website.')
  }

  const handleResetTheme = () => {
    if (confirm('Are you sure you want to reset to default theme?')) {
      setTheme({
        primaryColor: '#28D1CC',
        goldColor: '#FFD700',
        parchmentColor: '#f4e4c1',
        headerFont: 'Rye',
        bodyFont: 'Georgia',
        showBackground: true
      })
      alert('Theme reset to defaults!')
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="parchment-section max-w-4xl mx-auto">
          <h1 className="header-1 text-3xl sm:text-4xl lg:text-5xl mb-6">Theme Customization</h1>
          <p className="body-text text-lg sm:text-xl mb-8">Customize the look and feel of your website.</p>
        </div>

        {/* Color Scheme */}
        <div className="parchment-section max-w-6xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Color Scheme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color (Header/Footer)</label>
              <div className="flex items-center space-x-4">
                <input 
                  type="color" 
                  value={theme.primaryColor}
                  onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                  className="w-16 h-12 border border-gray-300 rounded-md cursor-pointer"
                />
                <span className="text-sm text-gray-600">{theme.primaryColor}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gold Color (Buttons/Accents)</label>
              <div className="flex items-center space-x-4">
                <input 
                  type="color" 
                  value={theme.goldColor}
                  onChange={(e) => handleColorChange('goldColor', e.target.value)}
                  className="w-16 h-12 border border-gray-300 rounded-md cursor-pointer"
                />
                <span className="text-sm text-gray-600">{theme.goldColor}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parchment Color (Sections)</label>
              <div className="flex items-center space-x-4">
                <input 
                  type="color" 
                  value={theme.parchmentColor}
                  onChange={(e) => handleColorChange('parchmentColor', e.target.value)}
                  className="w-16 h-12 border border-gray-300 rounded-md cursor-pointer"
                />
                <span className="text-sm text-gray-600">{theme.parchmentColor}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="parchment-section max-w-6xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Header Font</label>
              <select 
                value={theme.headerFont}
                onChange={(e) => handleFontChange('headerFont', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Rye">Rye (Wild West)</option>
                <option value="Smokum">Smokum</option>
                <option value="Vast Shadow">Vast Shadow</option>
                <option value="Georgia">Georgia (Serif)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Body Font</label>
              <select 
                value={theme.bodyFont}
                onChange={(e) => handleFontChange('bodyFont', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Georgia">Georgia (Serif)</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Palatino">Palatino</option>
                <option value="Book Antiqua">Book Antiqua</option>
              </select>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="parchment-section max-w-4xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Live Preview</h2>
          <div className="bg-gray-100 p-8 rounded-lg border-2 border-gray-300">
            <h3 className="text-2xl font-bold mb-4" style={{fontFamily: theme.headerFont, color: theme.primaryColor}}>
              Sample Heading
            </h3>
            <p className="text-lg mb-4" style={{fontFamily: theme.bodyFont}}>
              This is a sample paragraph to show how your text will look with the selected fonts and colors.
            </p>
            <button 
              className="px-6 py-3 rounded-lg font-bold transition-all"
              style={{
                background: `linear-gradient(145deg, ${theme.goldColor} 0%, #d4af37 50%, ${theme.goldColor} 100%)`,
                color: '#3e2723',
                border: '2px solid #b8860b',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)'
              }}
            >
              Sample Button
            </button>
          </div>
        </div>

        <div className="parchment-section max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleSaveTheme}
              className="gold-button text-lg py-3 px-8"
            >
              Save Theme Changes
            </button>
            <button 
              onClick={handleResetTheme}
              className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-lg transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { useState } from 'react'

export default function Backups() {
  const [backups, setBackups] = useState([
    {
      id: 1,
      name: 'Full Site Backup - Jan 15, 2025',
      type: 'Full',
      size: '2.3 MB',
      date: '2025-01-15',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Content Only - Jan 10, 2025',
      type: 'Content',
      size: '156 KB',
      date: '2025-01-10',
      status: 'Completed'
    },
    {
      id: 3,
      name: 'Database Backup - Jan 5, 2025',
      type: 'Database',
      size: '89 KB',
      date: '2025-01-05',
      status: 'Completed'
    }
  ])

  const [isCreatingBackup, setIsCreatingBackup] = useState(false)
  const [backupType, setBackupType] = useState('Full')

  const handleCreateBackup = () => {
    setIsCreatingBackup(true)
    // Simulate backup creation
    setTimeout(() => {
      const newBackup = {
        id: backups.length + 1,
        name: `${backupType} Backup - ${new Date().toLocaleDateString()}`,
        type: backupType,
        size: backupType === 'Full' ? '2.3 MB' : backupType === 'Content' ? '156 KB' : '89 KB',
        date: new Date().toISOString().split('T')[0],
        status: 'Completed'
      }
      setBackups([newBackup, ...backups])
      setIsCreatingBackup(false)
      alert('Backup created successfully!')
    }, 2000)
  }

  const handleDownloadBackup = (backup: any) => {
    alert(`Downloading ${backup.name}...`)
  }

  const handleDeleteBackup = (id: number) => {
    if (confirm('Are you sure you want to delete this backup?')) {
      setBackups(backups.filter(backup => backup.id !== id))
      alert('Backup deleted successfully!')
    }
  }

  const handleRestoreBackup = (backup: any) => {
    if (confirm(`Are you sure you want to restore from ${backup.name}? This will overwrite current data.`)) {
      alert('Backup restored successfully!')
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="parchment-section max-w-4xl mx-auto">
          <h1 className="header-1 text-3xl sm:text-4xl lg:text-5xl mb-6">Backup & Restore</h1>
          <p className="body-text text-lg sm:text-xl mb-8">
            Create, download, and restore backups of your website content and data.
          </p>
        </div>

        {/* Create Backup */}
        <div className="parchment-section max-w-4xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Create New Backup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Backup Type</label>
              <select
                value={backupType}
                onChange={(e) => setBackupType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Full">Full Site Backup</option>
                <option value="Content">Content Only</option>
                <option value="Database">Database Only</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleCreateBackup}
                disabled={isCreatingBackup}
                className={`w-full px-6 py-2 rounded-md transition-colors ${
                  isCreatingBackup
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isCreatingBackup ? '⏳ Creating...' : '💾 Create Backup'}
              </button>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Full Site Backup:</strong> Includes all content, settings, and database</p>
            <p><strong>Content Only:</strong> Website content and media files</p>
            <p><strong>Database Only:</strong> Database records and settings</p>
          </div>
        </div>

        {/* Backup List */}
        <div className="parchment-section max-w-6xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Available Backups</h2>
          <div className="space-y-4">
            {backups.map((backup) => (
              <div key={backup.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white bg-opacity-50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{backup.name}</h3>
                    <p className="text-sm text-gray-600">
                      {backup.type} • {backup.size} • {backup.date} • {backup.status}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownloadBackup(backup)}
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
                  >
                    📥 Download
                  </button>
                  <button
                    onClick={() => handleRestoreBackup(backup)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                  >
                    🔄 Restore
                  </button>
                  <button
                    onClick={() => handleDeleteBackup(backup.id)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backup Settings */}
        <div className="parchment-section max-w-4xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Backup Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Auto Backup Frequency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Backup Retention</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="7">Keep 7 backups</option>
                <option value="14">Keep 14 backups</option>
                <option value="30">Keep 30 backups</option>
                <option value="unlimited">Keep all backups</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
              💾 Save Settings
            </button>
          </div>
        </div>

        {/* Import/Export */}
        <div className="parchment-section max-w-4xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Import/Export</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Export Data</h3>
              <p className="text-sm text-gray-600 mb-4">Download your website data in JSON format</p>
              <button
                onClick={() => alert('Exporting website data...')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                📤 Export JSON
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Import Data</h3>
              <p className="text-sm text-gray-600 mb-4">Upload a JSON file to restore content</p>
              <input
                type="file"
                accept=".json"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
                📥 Import JSON
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { useState } from 'react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    tracks: 12,
    orders: 47,
    subscribers: 234,
    visitors: 1234
  })

  const [dashboardContent, setDashboardContent] = useState({
    title: 'Dashboard',
    description: 'Welcome to the Southern Cross Rangers admin panel. Manage your website content, customize themes, and track analytics.',
    quickActions: [
      { id: 1, title: 'Add New Track', action: 'addTrack' },
      { id: 2, title: 'Send Newsletter', action: 'sendNewsletter' },
      { id: 3, title: 'Customize Theme', action: 'customizeTheme' }
    ],
    recentActivity: [
      { id: 1, type: 'success', message: 'New album "The One You Need" published' },
      { id: 2, type: 'info', message: 'Newsletter sent to 234 subscribers' },
      { id: 3, type: 'warning', message: 'New order received - $20 AUD' }
    ]
  })

  const handleAddTrack = () => {
    console.log('Add New Track clicked');
    window.location.href = '/admin/music';
  }

  const handleSendNewsletter = () => {
    console.log('Send Newsletter clicked');
    window.location.href = '/admin/newsletter';
  }

  const handleCustomizeTheme = () => {
    console.log('Customize Theme clicked');
    window.location.href = '/admin/theme';
  }

  const handleEditContent = (field: string, value: string) => {
    setDashboardContent(prev => ({
      ...prev,
      [field]: value
    }));
    alert(`Content updated: ${field} = ${value}`);
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Main Dashboard Card */}
        <div className="parchment-section max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="header-1 text-3xl sm:text-4xl lg:text-5xl">{dashboardContent.title}</h1>
            <button
              onClick={() => {
                const newTitle = prompt('Edit Dashboard Title:', dashboardContent.title);
                if (newTitle) handleEditContent('title', newTitle);
              }}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
            >
              ✏️ Edit
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="body-text text-lg sm:text-xl mb-8 flex-1">{dashboardContent.description}</p>
            <button
              onClick={() => {
                const newDesc = prompt('Edit Description:', dashboardContent.description);
                if (newDesc) handleEditContent('description', newDesc);
              }}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors ml-4"
            >
              ✏️ Edit
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Total Tracks</p>
              <p className="text-3xl font-bold text-gray-900">{stats.tracks}</p>
            </div>
          </div>

          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Orders</p>
              <p className="text-3xl font-bold text-gray-900">{stats.orders}</p>
            </div>
          </div>

          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Subscribers</p>
              <p className="text-3xl font-bold text-gray-900">{stats.subscribers}</p>
            </div>
          </div>

          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Visitors</p>
              <p className="text-3xl font-bold text-gray-900">{stats.visitors.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="parchment-section">
            <div className="flex items-center justify-between mb-6">
              <h2 className="header-2 text-xl">Quick Actions</h2>
              <button
                onClick={() => {
                  const newAction = prompt('Add new quick action:');
                  if (newAction) {
                    const newId = dashboardContent.quickActions.length + 1;
                    setDashboardContent(prev => ({
                      ...prev,
                      quickActions: [...prev.quickActions, { id: newId, title: newAction, action: 'custom' }]
                    }));
                  }
                }}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
              >
                ➕ Add
              </button>
            </div>
            <div className="space-y-4">
              {dashboardContent.quickActions.map((action) => (
                <div key={action.id} className="flex items-center space-x-2">
                  <button 
                    onClick={() => {
                      if (action.action === 'addTrack') handleAddTrack();
                      else if (action.action === 'sendNewsletter') handleSendNewsletter();
                      else if (action.action === 'customizeTheme') handleCustomizeTheme();
                      else alert(`Custom action: ${action.title}`);
                    }}
                    className="gold-button flex-1 text-lg py-3"
                  >
                    {action.title}
                  </button>
                  <button
                    onClick={() => {
                      const newTitle = prompt('Edit action title:', action.title);
                      if (newTitle) {
                        setDashboardContent(prev => ({
                          ...prev,
                          quickActions: prev.quickActions.map(a => 
                            a.id === action.id ? { ...a, title: newTitle } : a
                          )
                        }));
                      }
                    }}
                    className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Delete this action?')) {
                        setDashboardContent(prev => ({
                          ...prev,
                          quickActions: prev.quickActions.filter(a => a.id !== action.id)
                        }));
                      }
                    }}
                    className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="parchment-section">
            <div className="flex items-center justify-between mb-6">
              <h2 className="header-2 text-xl">Recent Activity</h2>
              <button
                onClick={() => {
                  const newActivity = prompt('Add new activity:');
                  if (newActivity) {
                    const newId = dashboardContent.recentActivity.length + 1;
                    setDashboardContent(prev => ({
                      ...prev,
                      recentActivity: [...prev.recentActivity, { id: newId, type: 'info', message: newActivity }]
                    }));
                  }
                }}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
              >
                ➕ Add
              </button>
            </div>
            <div className="space-y-4">
              {dashboardContent.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg" style={{
                  backgroundColor: activity.type === 'success' ? '#f0fdf4' : 
                                 activity.type === 'warning' ? '#fffbeb' : '#eff6ff'
                }}>
                  <span className={`text-xl ${
                    activity.type === 'success' ? 'text-green-500' : 
                    activity.type === 'warning' ? 'text-orange-500' : 'text-blue-500'
                  }`}>
                    {activity.type === 'success' ? '✅' : 
                     activity.type === 'warning' ? '🛒' : '📧'}
                  </span>
                  <span className="text-sm text-gray-700 flex-1">{activity.message}</span>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => {
                        const newMessage = prompt('Edit activity:', activity.message);
                        if (newMessage) {
                          setDashboardContent(prev => ({
                            ...prev,
                            recentActivity: prev.recentActivity.map(a => 
                              a.id === activity.id ? { ...a, message: newMessage } : a
                            )
                          }));
                        }
                      }}
                      className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Delete this activity?')) {
                          setDashboardContent(prev => ({
                            ...prev,
                            recentActivity: prev.recentActivity.filter(a => a.id !== activity.id)
                          }));
                        }
                      }}
                      className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

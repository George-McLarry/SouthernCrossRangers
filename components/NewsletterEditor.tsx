'use client'

import { useState } from 'react'
import { sendNewsletter } from '@/lib/convertkit'

export function NewsletterEditor() {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [recipients, setRecipients] = useState('all')
  const [sendDate, setSendDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSend = async (type: 'now' | 'schedule') => {
    setIsLoading(true)
    setMessage('')

    try {
      const recipientList = recipients === 'all' 
        ? ['all-subscribers'] 
        : recipients.split(',').map(email => email.trim())

      await sendNewsletter({
        subject,
        content,
        recipients: recipientList
      })

      if (type === 'now') {
        setMessage('Newsletter sent successfully!')
      } else {
        setMessage('Newsletter scheduled successfully!')
      }
    } catch (error) {
      setMessage('Failed to send newsletter. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="parchment-section">
        <h1 className="header-1 text-4xl mb-6">Newsletter Editor</h1>
        <p className="body-text text-lg mb-8">Create and manage your newsletters with our newspaper-style editor.</p>
      </div>

      {/* Newsletter Templates */}
      <div className="parchment-section">
        <h2 className="header-2 text-2xl mb-4">Choose Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors bg-white bg-opacity-50">
            <div className="text-center">
              <span className="text-4xl mb-2 block">📰</span>
              <h3 className="font-semibold">Newsletter Template</h3>
              <p className="text-sm text-gray-600">Standard newsletter layout</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors bg-white bg-opacity-50">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🎵</span>
              <h3 className="font-semibold">Music Update</h3>
              <p className="text-sm text-gray-600">Music-focused template</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors bg-white bg-opacity-50">
            <div className="text-center">
              <span className="text-4xl mb-2 block">📅</span>
              <h3 className="font-semibold">Event Announcement</h3>
              <p className="text-sm text-gray-600">Event-focused template</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Editor */}
      <div className="parchment-section">
        <h2 className="header-2 text-2xl mb-4">Newsletter Content</h2>
        
        {/* Toolbar */}
        <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white bg-opacity-50">
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition-colors">
              <strong>B</strong>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition-colors">
              <em>I</em>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition-colors">
              <u>U</u>
            </button>
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition-colors">
              📷 Image
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition-colors">
              🎵 Audio
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm transition-colors">
              🔗 Link
            </button>
          </div>
        </div>

        {/* Editor */}
        <div className="border border-gray-200 rounded-lg p-4 min-h-96 bg-white bg-opacity-50">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Newsletter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full text-2xl font-bold border-none outline-none bg-transparent"
            />
            <div className="border-t border-gray-200 pt-4">
              <textarea 
                placeholder="Start writing your newsletter here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-64 border-none outline-none resize-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Settings */}
      <div className="parchment-section">
        <h2 className="header-2 text-2xl mb-4">Newsletter Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Send Date</label>
            <input 
              type="datetime-local" 
              value={sendDate}
              onChange={(e) => setSendDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
            <select 
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Subscribers (234)</option>
              <option value="new">New Subscribers Only</option>
              <option value="premium">Premium Members</option>
            </select>
          </div>
        </div>
      </div>

      {message && (
        <div className={`parchment-section p-4 ${
          message.includes('successfully') 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <p className="text-center font-semibold">{message}</p>
        </div>
      )}

      <div className="flex justify-end space-x-4">
        <button 
          className="gold-button"
          onClick={() => handleSend('now')}
          disabled={isLoading || !subject || !content}
        >
          {isLoading ? 'Sending...' : 'Send Now'}
        </button>
        <button 
          className="gold-button"
          onClick={() => handleSend('schedule')}
          disabled={isLoading || !subject || !content}
        >
          {isLoading ? 'Scheduling...' : 'Schedule Send'}
        </button>
      </div>
    </div>
  )
}


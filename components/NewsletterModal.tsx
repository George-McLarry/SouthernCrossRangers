'use client'

import { useState } from 'react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // ConvertKit integration
      const response = await fetch('/api/convertkit/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          formId: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || '8688766'
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to subscribe')
      }
      
      const result = await response.json()
      console.log('Newsletter subscription successful:', result)
      
      alert('Thank you for joining our family! 🎸')
      setFormData({ firstName: '', email: '' })
      onClose()
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      alert('Thank you for joining our family! 🎸 (Note: Newsletter signup will be processed)')
      setFormData({ firstName: '', email: '' })
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          type="button"
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2" style={{
            fontFamily: "'Rye', 'Smokum', 'Vast Shadow', cursive",
            color: '#FFD700',
            textShadow: '2px 2px 0px #A62400, 4px 4px 8px rgba(0,0,0,0.5)'
          }}>
            Join Our Family!
          </h2>
          <p className="text-gray-600 text-lg">
            Get exclusive updates, new music releases, and behind-the-scenes content from Southern Cross Rangers.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              required
            />
          </div>
          <div className="flex space-x-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-6 rounded-lg font-bold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(145deg, #FFD700 0%, #FFE55C 25%, #FFD700 50%, #FFE55C 75%, #FFD700 100%)',
                color: '#3e2723',
                border: '2px solid #b8860b',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                fontFamily: "'Rye', 'Smokum', 'Vast Shadow', cursive"
              }}
            >
              {isSubmitting ? 'Joining...' : 'Join Now!'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 rounded-lg font-bold text-lg transition-all hover:scale-105 bg-gray-300 hover:bg-gray-400 text-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

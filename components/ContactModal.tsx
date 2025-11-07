'use client'

import { useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    postalAddress: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ firstName: '', email: '', postalAddress: '', message: '' })
      setTimeout(() => {
        onClose()
        setSubmitStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="parchment-section max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="header-1 text-2xl">Contact George</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-gold transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block body-text mb-2">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="form-input w-full px-4 py-2 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="email" className="block body-text mb-2">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input w-full px-4 py-2 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="postalAddress" className="block body-text mb-2">
              Postal Address (Optional)
            </label>
            <input
              id="postalAddress"
              type="text"
              value={formData.postalAddress}
              onChange={(e) => setFormData({ ...formData, postalAddress: e.target.value })}
              className="form-input w-full px-4 py-2 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="message" className="block body-text mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input form-textarea w-full px-4 py-2 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="text-green-600 body-text">
              Message sent successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-600 body-text">
              Failed to send message. Please try again.
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="gold-button flex-1"
              style={{ color: '#5d4037', textShadow: 'none' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border-2 border-parchment-border rounded-lg hover:bg-parchment-dark transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


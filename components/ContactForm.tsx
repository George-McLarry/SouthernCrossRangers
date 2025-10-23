'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      // In a real implementation, this would send the form data to your backend
      console.log('Contact form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
            style={{
              backgroundColor: '#f5f1e8',
              color: '#3e2723',
              fontFamily: 'Georgia, serif'
            }}
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
            style={{
              backgroundColor: '#f5f1e8',
              color: '#3e2723',
              fontFamily: 'Georgia, serif'
            }}
          />
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
            style={{
              backgroundColor: '#f5f1e8',
              color: '#3e2723',
              fontFamily: 'Georgia, serif'
            }}
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="gold-button w-full"
        >
          {isSubmitting ? 'Sending...' : '📧 Send Message'}
        </button>
        
        {message && (
          <div className={`text-center p-3 rounded-lg ${
            message.includes('Thank you') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  )
}


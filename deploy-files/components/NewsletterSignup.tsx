'use client'

import { useState } from 'react'
import { subscribeToNewsletter } from '@/lib/convertkit'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      await subscribeToNewsletter({
        email,
        firstName: firstName || undefined,
        tags: ['website-subscriber']
      })
      
      setMessage('Thank you for subscribing! Welcome to the Southern Cross Rangers family!')
      setEmail('')
      setFirstName('')
    } catch (error) {
      setMessage('Sorry, there was an error subscribing. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="parchment-section">
      <h2 className="header-2 text-3xl md:text-4xl mb-6">
        Join Our Family
      </h2>
      <p className="body-text text-lg mb-8">
        Get exclusive updates, new music releases, and behind-the-scenes content 
        delivered straight to your inbox. Be the first to know about our latest adventures!
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
            style={{
              backgroundColor: '#f5f1e8',
              color: '#3e2723',
              fontFamily: 'Georgia, serif'
            }}
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="gold-button w-full"
        >
          {isLoading ? 'Joining...' : '🎵 Join Our Family'}
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


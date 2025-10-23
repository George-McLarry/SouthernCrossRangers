'use client'

import { useState } from 'react'

interface AdminAuthProps {
  onAuthenticated: () => void
}

export function AdminAuth({ onAuthenticated }: AdminAuthProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === 'Texas17762477426771!') {
      onAuthenticated()
    } else {
      setError('Invalid password. Please try again.')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1137996207/photo/brown-wood-texture-dark-wooden-abstract-background.jpg?s=612x612&w=0&k=20&c=qZS2TJ_1fQ9xRmcnqkyEIbBlT-5K_ShnRKPCzwfOcQI=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="parchment-section max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="header-1 text-4xl mb-4">Admin Access</h1>
          <p className="body-text text-lg">Enter password to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-center text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="gold-button w-full py-3 text-lg"
          >
            Access Admin Panel
          </button>
        </form>
      </div>
    </div>
  )
}

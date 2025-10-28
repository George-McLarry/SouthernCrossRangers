'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ParchmentSection } from '@/components/ParchmentSection'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (data.user?.user_metadata?.role === 'admin') {
        router.push('/admin')
      } else {
        setError('Access denied. Admin privileges required.')
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      backgroundImage: "url('https://media.istockphoto.com/id/1137996207/photo/brown-wood-texture-dark-wooden-abstract-background.jpg?s=612x612&w=0&k=20&c=qZS2TJ_1fQ9xRmcnqkyEIbBlT-5K_ShnRKPCzwfOcQI=')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <ParchmentSection className="max-w-md w-full p-8">
        <h1 className="header-1 text-3xl mb-6">Admin Login</h1>
        <p className="body-text mb-6">Enter your credentials to access the admin panel.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button 
            type="submit" 
            className="gold-button w-full"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </ParchmentSection>
    </div>
  )
}



'use client'

import { useState } from 'react'
import { AdminAuth } from '@/components/AdminAuth'
import { RealWebsiteAdmin } from '@/components/RealWebsiteAdmin'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuthenticated = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={handleAuthenticated} />
  }

  return <RealWebsiteAdmin onLogout={handleLogout} />
}
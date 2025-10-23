'use client'

import { useState } from 'react'
import { AdminAuth } from '@/components/AdminAuth'
import { FunctionalAdminPanel } from '@/components/FunctionalAdminPanel'

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

  return <FunctionalAdminPanel onLogout={handleLogout} />
}
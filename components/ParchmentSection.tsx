'use client'

import { ReactNode } from 'react'

interface ParchmentSectionProps {
  children: ReactNode
  className?: string
}

export function ParchmentSection({ children, className = '' }: ParchmentSectionProps) {
  return (
    <div className={`parchment-section ${className}`}>
      {children}
    </div>
  )
}

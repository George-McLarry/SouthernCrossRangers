'use client'

import { ReactNode } from 'react'

interface ParchmentSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function ParchmentSection({ children, className = '', id }: ParchmentSectionProps) {
  return (
    <div id={id} className={`parchment-section ${className}`}>
      {children}
    </div>
  )
}

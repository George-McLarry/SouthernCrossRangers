import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'

export const metadata: Metadata = {
  title: 'Southern Cross Rangers - Authentic Country Music from Tasmania',
  description: 'Experience the raw beauty of Tasmanian landscapes through our music. Every song tells a story of the land, the people, and the spirit that makes Tasmania special.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

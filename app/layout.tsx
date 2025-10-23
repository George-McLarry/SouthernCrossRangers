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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/rye/v13/r05XGLJT86YzEZv.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

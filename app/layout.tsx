import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { MusicPlayerProvider } from '@/components/MusicPlayerContext'
import { GlobalMusicPlayer } from '@/components/GlobalMusicPlayer'
import { Rye, Smokum, Vast_Shadow, Cinzel, Uncial_Antiqua } from 'next/font/google'

const rye = Rye({ weight: '400', subsets: ['latin'], variable: '--font-rye' })
const smokum = Smokum({ weight: '400', subsets: ['latin'], variable: '--font-smokum' })
const vastShadow = Vast_Shadow({ weight: '400', subsets: ['latin'], variable: '--font-vast-shadow' })
const cinzel = Cinzel({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-cinzel' })
const uncialAntiqua = Uncial_Antiqua({ weight: '400', subsets: ['latin'], variable: '--font-uncial-antiqua' })

export const metadata: Metadata = {
  title: 'Southern Cross Rangers - Authentic Country Music from Tasmania',
  description: 'Experience the raw beauty of Tasmanian landscapes through our music. Every song tells a story of the land, the people, and the spirit that makes Tasmania special.',
  keywords: [
    'Country Music',
    'Real Country Music',
    'George McLarry',
    'Southern Cross Rangers',
    'Music',
    'Music Bands',
    'Australian Country',
    'Australian Country Music',
    'Tasmania',
    'Tasmanian Country Music',
    'Cygnet Music',
    'Cygnet Country Music'
  ],
  icons: {
    icon: '/images/final_logo_transparent.png',
    apple: '/images/final_logo_transparent.png',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${rye.variable} ${smokum.variable} ${vastShadow.variable} ${cinzel.variable} ${uncialAntiqua.variable} flex flex-col min-h-screen h-full`}>
        <CartProvider>
          <MusicPlayerProvider>
            <div className="flex flex-col flex-grow min-h-full">
              {children}
            </div>
            <GlobalMusicPlayer />
          </MusicPlayerProvider>
        </CartProvider>
      </body>
    </html>
  )
}

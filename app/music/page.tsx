'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { MusicPlayer } from '@/components/MusicPlayer'

export default function MusicPage() {
  return (
    <div className="flex flex-col min-h-full flex-grow">
      <Header />
      
      <main className="flex-grow pb-24">
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            The Jukebox
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Welcome! I hope you enjoy our selection of country songs!
          </h2>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Now Playing
          </h2>
          <MusicPlayer />
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

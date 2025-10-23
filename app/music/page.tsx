import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { MusicPlayer } from '@/components/MusicPlayer'

export default function MusicPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6">
            Our Music
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6">
            Authentic Country Music from the Heart of Tasmania
          </h2>
          <p className="body-text text-lg md:text-xl mb-8">
            Experience the raw beauty of Tasmanian landscapes through our music. 
            Every song tells a story of the land, the people, and the spirit that makes Tasmania special.
          </p>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Now Playing
          </h2>
          <div className="mb-4 p-4 bg-gradient-to-r from-gold/20 to-gold-dark/20 rounded-lg border border-gold/30">
            <p className="body-text text-sm text-center">
              <strong>Note:</strong> To enable audio playback, add your WAV or MP3 files to the <code>/public/audio/</code> directory. 
              The music player supports both formats and will automatically detect the files.
            </p>
          </div>
          <MusicPlayer />
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Track Listing
          </h2>
          <div className="space-y-4">
            <div className="parchment-section">
              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform">
                  ▶️
                </button>
                <div className="flex-1">
                  <h3 className="header-2 text-lg">The One You Need</h3>
                  <p className="body-text text-sm">Southern Cross Rangers</p>
                </div>
                <span className="body-text text-sm">4:00</span>
              </div>
            </div>
            <div className="parchment-section">
              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform">
                  ▶️
                </button>
                <div className="flex-1">
                  <h3 className="header-2 text-lg">Being Near Is Better</h3>
                  <p className="body-text text-sm">Southern Cross Rangers</p>
                </div>
                <span className="body-text text-sm">3:15</span>
              </div>
            </div>
            <div className="parchment-section">
              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform">
                  ▶️
                </button>
                <div className="flex-1">
                  <h3 className="header-2 text-lg">We Will Meet Again</h3>
                  <p className="body-text text-sm">Southern Cross Rangers</p>
                </div>
                <span className="body-text text-sm">3:30</span>
              </div>
            </div>
            <div className="parchment-section">
              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform">
                  ▶️
                </button>
                <div className="flex-1">
                  <h3 className="header-2 text-lg">Don't Eat The Cheese</h3>
                  <p className="body-text text-sm">Southern Cross Rangers</p>
                </div>
                <span className="body-text text-sm">3:45</span>
              </div>
            </div>
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

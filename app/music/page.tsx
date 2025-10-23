import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { MusicPlayer } from '@/components/MusicPlayer'
import { db } from '@/lib/database'

export default async function MusicPage() {
  // Fetch music tracks from database with fallback
  let musicTracks: any[] = []
  
  try {
    musicTracks = await db.getMusicTracks()
  } catch (error) {
    console.log('Database not available, using default tracks')
    musicTracks = [
      {
        id: '1',
        title: 'The One You Need',
        artist: 'Southern Cross Rangers',
        url: '/audio/The One You Need.wav',
        description: 'Our signature track that captures the essence of Tasmanian country music.'
      },
      {
        id: '2',
        title: 'Being Near Is Better',
        artist: 'Southern Cross Rangers',
        url: '/audio/Being Near Is Better.wav',
        description: 'A heartfelt ballad about the importance of family and home.'
      }
    ]
  }
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
            {musicTracks.length > 0 ? (
              musicTracks.map((track) => (
                <div key={track.id} className="parchment-section">
                  <div className="flex items-center space-x-4">
                    <button className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform">
                      ▶️
                    </button>
                    <div className="flex-1">
                      <h3 className="header-2 text-lg">{track.title}</h3>
                      <p className="body-text text-sm">{track.artist}</p>
                      {track.description && (
                        <p className="body-text text-xs text-gray-600 mt-1">{track.description}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="body-text text-sm">Track</span>
                      <a 
                        href={track.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs"
                      >
                        Play
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="body-text">No tracks available. Add some music in the admin panel!</p>
              </div>
            )}
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

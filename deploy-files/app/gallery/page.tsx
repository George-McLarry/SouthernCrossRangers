import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6">
            Gallery
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6">
            Behind the Scenes & Live Performances
          </h2>
          <p className="body-text text-lg md:text-xl mb-8">
            Take a look behind the scenes of our recording sessions, live performances, 
            and the beautiful Tasmanian landscapes that inspire our music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gold-button">
              📸 View Photos
            </button>
            <button className="gold-button">
              🎥 Watch Videos
            </button>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Live at Hobart Town Hall', desc: 'Capturing the energy of our live show' },
              { title: 'Recording in the Wilderness', desc: 'Mobile studio in Tasmanian landscape' },
              { title: 'Behind the Scenes', desc: 'Music video production moments' },
              { title: 'Cradle Mountain Inspiration', desc: 'The stunning landscape that inspired us' },
              { title: 'Band Rehearsal', desc: 'Working on new material together' },
              { title: 'Acoustic by the Lake', desc: 'Intimate performance setting' }
            ].map((photo, index) => (
              <div key={index} className="parchment-section">
                <div className="text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                  <h3 className="header-2 text-lg mb-2">{photo.title}</h3>
                  <p className="body-text text-sm mb-4">{photo.desc}</p>
                  <button className="gold-button w-full">View Full Size</button>
                </div>
              </div>
            ))}
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Video Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="parchment-section">
              <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🎥</span>
              </div>
              <h3 className="header-2 text-xl mb-2">The One You Need - Music Video</h3>
              <p className="body-text mb-4">Official music video for our title track, filmed in the beautiful Tasmanian wilderness.</p>
              <button className="gold-button w-full">Watch Video</button>
            </div>
            <div className="parchment-section">
              <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🎥</span>
              </div>
              <h3 className="header-2 text-xl mb-2">Behind the Scenes Documentary</h3>
              <p className="body-text mb-4">An intimate look at the making of our debut album, from songwriting to final production.</p>
              <button className="gold-button w-full">Watch Documentary</button>
            </div>
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

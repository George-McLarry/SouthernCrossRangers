import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            Gallery
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Please enjoy looking through our photo album, there are lot's of good times to be remembered here!
          </h2>
        </ParchmentSection>

        <ParchmentSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Live at Hobart Town Hall', desc: 'Capturing the energy of our live show', date: 'March 2024' },
              { title: 'Recording in the Wilderness', desc: 'Mobile studio in Tasmanian landscape', date: 'February 2024' },
              { title: 'Behind the Scenes', desc: 'Music video production moments', date: 'January 2024' },
              { title: 'Cradle Mountain Inspiration', desc: 'The stunning landscape that inspired us', date: 'December 2023' },
              { title: 'Band Rehearsal', desc: 'Working on new material together', date: 'November 2023' },
              { title: 'Acoustic by the Lake', desc: 'Intimate performance setting', date: 'October 2023' }
            ].map((photo, index) => (
              <div key={index} className="parchment-section" style={{ 
                background: 'linear-gradient(135deg, #f5f1e8 0%, #e8ddd4 100%)',
                border: '2px solid #d4c4a8',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}>
                <div className="text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                  <h3 className="header-2 text-lg mb-2">{photo.title}</h3>
                  <p className="body-text text-sm mb-2">{photo.desc}</p>
                  <p className="body-text text-xs text-gray-600 mb-4">{photo.date}</p>
                  <button className="gold-button w-full">View Full Size</button>
                </div>
              </div>
            ))}
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

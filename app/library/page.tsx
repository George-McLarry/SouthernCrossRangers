import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'

export default function LibraryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6">
            Library
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6">
            Resources, Downloads & More
          </h2>
          <p className="body-text text-lg md:text-xl mb-8">
            Access our collection of newsletters, e-books, lyrics, stories, and exclusive content. 
            Everything you need to dive deeper into the world of Southern Cross Rangers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gold-button">
              📚 Browse Library
            </button>
            <button className="gold-button">
              🔍 Search Content
            </button>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="parchment-section">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📰</span>
                </div>
                <div>
                  <h3 className="header-2 text-xl">March 2024 Newsletter</h3>
                  <p className="body-text text-sm">Latest updates and behind-the-scenes stories</p>
                </div>
              </div>
              <p className="body-text mb-4">
                Our monthly newsletter featuring updates on new music, upcoming events, and behind-the-scenes stories from the recording studio.
              </p>
              <button className="gold-button w-full">Read Newsletter</button>
            </div>

            <div className="parchment-section">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="header-2 text-xl">The Making of "The One You Need"</h3>
                  <p className="body-text text-sm">E-book about our creative process</p>
                </div>
              </div>
              <p className="body-text mb-4">
                An in-depth look at the creative process behind our debut album, including songwriting stories, recording insights, and the inspiration behind each track.
              </p>
              <button className="gold-button w-full">Download E-book</button>
            </div>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            All Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: '📰', title: 'Newsletter Archive', desc: 'Past newsletters and updates' },
              { type: '📚', title: 'E-books & Guides', desc: 'Songwriting tips and techniques' },
              { type: '🎵', title: 'Lyrics & Stories', desc: 'Complete lyrics with backstories' },
              { type: '📄', title: 'Interviews', desc: 'Exclusive interviews and features' },
              { type: '📸', title: 'Photo Gallery', desc: 'Behind-the-scenes photos' },
              { type: '🎥', title: 'Video Content', desc: 'Recording sessions and performances' }
            ].map((resource, index) => (
              <div key={index} className="parchment-section">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{resource.type}</span>
                  </div>
                  <h3 className="header-2 text-lg mb-2">{resource.title}</h3>
                  <p className="body-text text-sm mb-4">{resource.desc}</p>
                  <button className="gold-button w-full">Explore</button>
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

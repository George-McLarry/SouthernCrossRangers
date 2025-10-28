import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'

export default function LibraryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            Library
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Welcome! Enjoy our collection of Newsletters, Stories, Lyrics, and More!
          </h2>
        </ParchmentSection>

        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Newsletter Articles
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Read the latest news, or travel back in time to when it all began…..
          </h2>
          <div className="text-center">
            <p className="body-text text-lg mb-8">
              <em>Newsletter articles will be added here as they become available.</em>
            </p>
            <button className="gold-button">
              📰 Browse Newsletters
            </button>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Lyrics
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Finally find out what your favourite songs really mean!
          </h2>
          <div className="text-center">
            <p className="body-text text-lg mb-8">
              <em>Song lyrics and their meanings will be added here.</em>
            </p>
            <button className="gold-button">
              🎵 Browse Lyrics
            </button>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            E-books and other stories!
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Free, helpful resources, interesting facts, funny stories and experiences (One comes across lots of them in the music world!)
          </h2>
          <div className="text-center">
            <p className="body-text text-lg mb-8">
              <em>E-books and stories will be added here as they become available.</em>
            </p>
            <button className="gold-button">
              📚 Browse E-books
            </button>
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

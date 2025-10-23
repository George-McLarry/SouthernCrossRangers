import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { db } from '@/lib/database'

export default async function HomePage() {
  // Fetch content from database with fallback
  let contentMap: Record<string, string> = {}
  
  try {
    const contentSections = await db.getContentSections()
    contentMap = contentSections.reduce((acc, section) => {
      acc[section.section_name] = section.content
      return acc
    }, {} as Record<string, string>)
  } catch (error) {
    console.log('Database not available, using default content')
  }
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6">
            {contentMap.hero_title || 'Welcome to Southern Cross Rangers'}
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6">
            {contentMap.hero_tagline || 'Authentic Country Music from the Heart of Tasmania'}
          </h2>
          <p className="body-text text-lg md:text-xl mb-8">
            {contentMap.hero_text || 'Experience the raw beauty of Tasmanian landscapes through our music. Every song tells a story of the land, the people, and the spirit that makes Tasmania special.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/music" className="gold-button">
              🎵 Listen to Our Music
            </a>
            <a href="/events" className="gold-button">
              📅 Upcoming Events
            </a>
          </div>
        </ParchmentSection>

        {/* Promotion Section */}
        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-6">
            New Album: "The One You Need"
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-gold to-gold-dark rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
            </div>
            <div>
              <p className="body-text text-lg mb-6">
                Our debut album featuring 10 authentic country tracks from the heart of Tasmania. 
                Each song tells a story of the land, the people, and the spirit that makes Tasmania special.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="header-1 text-3xl">$20 AUD</span>
                <span className="body-text line-through">$25 AUD</span>
                <span className="bg-gold text-text-dark px-2 py-1 rounded text-sm font-semibold">
                  Save $5
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/mercantile" className="gold-button">
                  🛒 Buy Now - $20 AUD
                </a>
                <a href="/music" className="gold-button">
                  🎧 Preview Tracks
                </a>
              </div>
            </div>
          </div>
        </ParchmentSection>

        {/* About Section */}
        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-6">
            About Southern Cross Rangers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="body-text text-lg mb-6">
                {contentMap.about_text || 'We are a country music band from Tasmania, Australia, dedicated to preserving and sharing the authentic sounds of our homeland. Our music is inspired by the rugged beauty of Tasmania\'s landscapes, the resilience of its people, and the rich heritage of Australian country music.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-64 bg-gradient-to-br from-gold to-gold-dark rounded-lg mb-6 flex items-center justify-center">
                <span className="text-6xl">🎸</span>
              </div>
              <h3 className="header-2 text-xl mb-4">Our Story</h3>
              <p className="body-text">
                Founded in the heart of Tasmania, we bring authentic country music to the world.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/library" className="gold-button">
              Learn More About Us
            </a>
          </div>
        </ParchmentSection>

        {/* Contact Section */}
        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-6">
            Get in Touch
          </h2>
          <p className="body-text text-lg mb-8">
            Want to book us for an event? Have a question about our music? 
            We'd love to hear from you!
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
              style={{
                backgroundColor: '#f5f1e8',
                color: '#3e2723',
                fontFamily: 'Georgia, serif'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
              style={{
                backgroundColor: '#f5f1e8',
                color: '#3e2723',
                fontFamily: 'Georgia, serif'
              }}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
              style={{
                backgroundColor: '#f5f1e8',
                color: '#3e2723',
                fontFamily: 'Georgia, serif'
              }}
            />
            <button className="gold-button w-full">
              📧 Send Message
            </button>
          </div>
        </ParchmentSection>

        {/* Newsletter Signup */}
        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-6">
            Join Our Family
          </h2>
          <p className="body-text text-lg mb-8">
            Get exclusive updates, new music releases, and behind-the-scenes content 
            delivered straight to your inbox. Be the first to know about our latest adventures!
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your First Name"
              className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
              style={{
                backgroundColor: '#f5f1e8',
                color: '#3e2723',
                fontFamily: 'Georgia, serif'
              }}
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-3 border-2 border-parchment-border rounded-lg focus:outline-none focus:border-gold transition-colors"
              style={{
                backgroundColor: '#f5f1e8',
                color: '#3e2723',
                fontFamily: 'Georgia, serif'
              }}
            />
            <button className="gold-button w-full">
              🎵 Join Our Family
            </button>
          </div>
        </ParchmentSection>

        {/* Credit Section */}
        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-6">
            Thank You
          </h2>
          <p className="body-text text-lg mb-8">
            Thank you for supporting independent Australian country music. 
            Your support helps us continue to create and share the music we love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#footer" className="gold-button">
              Follow Us on Social Media
            </a>
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

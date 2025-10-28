import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6">
            Events
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6">
            Upcoming Shows & Performances
          </h2>
          <p className="body-text text-lg md:text-xl mb-8">
            Join us for live performances across Tasmania and beyond. 
            Experience the authentic sound of Southern Cross Rangers in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gold-button">
              📅 View Calendar
            </button>
            <button className="gold-button">
              🎫 Get Tickets
            </button>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            <div className="parchment-section">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🎵</span>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="header-1 text-2xl mb-2">Southern Cross Rangers Live at Hobart Town Hall</h3>
                  <div className="flex items-center space-x-4 text-sm text-text-light mb-2">
                    <span>📅 April 15, 2024</span>
                    <span>🕐 7:00 PM</span>
                    <span className="bg-gold text-text-dark px-2 py-1 rounded text-xs">Live Performance</span>
                  </div>
                  <p className="body-text mb-4">📍 Hobart Town Hall, Hobart, TAS</p>
                  <p className="body-text mb-4">
                    Join us for an intimate evening of authentic country music in the beautiful Hobart Town Hall. 
                    We'll be performing songs from our debut album "The One You Need" plus some new material.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <p className="header-2 text-xl">$25 AUD</p>
                      <p className="body-text text-sm">Per person</p>
                    </div>
                    <button className="gold-button">Get Tickets</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="parchment-section">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🎪</span>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="header-1 text-2xl mb-2">Tasmanian Country Music Festival</h3>
                  <div className="flex items-center space-x-4 text-sm text-text-light mb-2">
                    <span>📅 May 20, 2024</span>
                    <span>🕐 2:00 PM</span>
                    <span className="bg-gold text-text-dark px-2 py-1 rounded text-xs">Festival</span>
                  </div>
                  <p className="body-text mb-4">📍 Launceston Showgrounds, Launceston, TAS</p>
                  <p className="body-text mb-4">
                    We're excited to be part of the annual Tasmanian Country Music Festival. 
                    Come celebrate the best of Australian country music with us and other talented artists.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <p className="header-2 text-xl">$40 AUD</p>
                      <p className="body-text text-sm">Per person</p>
                    </div>
                    <button className="gold-button">Get Tickets</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="parchment-section">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🎸</span>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="header-1 text-2xl mb-2">Acoustic Sessions at Cradle Mountain</h3>
                  <div className="flex items-center space-x-4 text-sm text-text-light mb-2">
                    <span>📅 June 10, 2024</span>
                    <span>🕐 3:00 PM</span>
                    <span className="bg-gold text-text-dark px-2 py-1 rounded text-xs">Acoustic</span>
                  </div>
                  <p className="body-text mb-4">📍 Cradle Mountain Lodge, Cradle Mountain, TAS</p>
                  <p className="body-text mb-4">
                    An intimate acoustic performance in the stunning setting of Cradle Mountain. 
                    Limited seating available for this special outdoor concert.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <p className="header-2 text-xl">$35 AUD</p>
                      <p className="body-text text-sm">Per person</p>
                    </div>
                    <button className="gold-button">Get Tickets</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Event Calendar
          </h2>
          <div className="bg-gradient-to-br from-gold to-gold-dark rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="header-1 text-2xl mb-4">Interactive Calendar</h3>
            <p className="body-text mb-6">
              Our interactive calendar will be available soon. For now, check out our events list above.
            </p>
            <button className="gold-button">
              Subscribe to Calendar
            </button>
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { EventCalendar } from '@/components/EventCalendar'
import Image from 'next/image'

interface Event {
  id: string
  title: string
  date: Date
  time: string
  location: string
  description: string
  isRecurring?: boolean
  recurringPattern?: string
  image?: string
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 'country-gold-club',
      title: 'Southern Cross Rangers Live at Country Gold Club!!',
      date: new Date('2026-02-04'),
      time: '8:00pm',
      location: 'Country Gold Club, Claremont, Tasmania',
      description:
        'We will be guest starring at the Country Gold Music Club in Claremont Tasmania on the above date! Drop by for a night of fun, music and dancing. Tickets are $5, lucky door prizes included! More Details coming soon.',
      image: '/images/Country Gold Music Club.png'
    },
    {
      id: 'huonville-bowls-club',
      title: 'Southern Cross Rangers Live at Huonville Bowls Club',
      date: new Date('2026-02-08'),
      time: '1:00pm - 4:00pm',
      location: 'Huonville Bowls Club, Huonville, Tasmania',
      description:
        "We will be playing live for y'all at the Huonville Bowls Club! Come along for a great afternoon, hope to see you there! $10 entry.",
      image: '/images/Line Dancing!.jpeg'
    },
    {
      id: 'cygnet-nov-2025',
      title: 'Southern Cross Rangers Live - Cygnet Market!!',
      date: new Date('2025-11-16'),
      time: '10am - 2pm',
      location: 'Cygnet, Tasmania',
      description: 'We will be busking at the Cygnet Market on this day! Bring the family, have some fun, just come along, it\'ll be a blast! We\'d love to see you there!',
      image: '/images/Cygnet Town Hall.jpg'
    }
  ]

  return (
    <div className="flex flex-col min-h-full flex-grow">
      <Header />
      
      <main className="flex-grow">
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            Events!
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Join us for live performances across Tasmania and beyond, we'd love to see you there!
          </h2>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-1 text-3xl md:text-4xl mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {/* Country Gold Club Event */}
            <div className="parchment-section">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-full h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/images/Country Gold Music Club.png"
                      alt="Country Gold Music Club"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="header-1 text-2xl mb-2">Southern Cross Rangers Live at Country Gold Club!!</h3>
                  <div className="flex items-center space-x-4 text-sm body-text mb-2">
                    <span>📅 February 4, 2026</span>
                    <span>🕐 8:00pm</span>
                    <span className="bg-gold text-brown px-2 py-1 rounded text-xs">Live Performance</span>
                  </div>
                  <p className="body-text mb-4">📍 Country Gold Club, Claremont, Tasmania</p>
                  <p className="body-text mb-4">
                    We will be guest starring at the Country Gold Music Club in Claremont Tasmania on the above date! Drop by for a night of fun, music and dancing. Tickets are $5, lucky door prizes included! More Details coming soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Huonville Bowls Club Event */}
            <div className="parchment-section">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-full h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/images/Line Dancing!.jpeg"
                      alt="Huonville Bowls Club"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="header-1 text-2xl mb-2">Southern Cross Rangers Live at Huonville Bowls Club</h3>
                  <div className="flex items-center space-x-4 text-sm body-text mb-2">
                    <span>📅 February 8, 2026</span>
                    <span>🕐 1:00pm - 4:00pm</span>
                    <span className="bg-gold text-brown px-2 py-1 rounded text-xs">Live Performance</span>
                  </div>
                  <p className="body-text mb-4">📍 Huonville Bowls Club, Huonville, Tasmania</p>
                  <p className="body-text mb-4">
                    We will be playing live for y&apos;all at the Huonville Bowls Club! Come along for a great afternoon, hope to see you there! $10 entry.
                  </p>
                </div>
              </div>
            </div>

            {/* Cygnet Market November Event */}
            <div className="parchment-section">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-full h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/images/Cygnet Town Hall.jpg"
                      alt="Cygnet Town Hall"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="header-1 text-2xl mb-2">Southern Cross Rangers Live - Cygnet Market!!</h3>
                  <div className="flex items-center space-x-4 text-sm body-text mb-2">
                    <span>📅 November 16, 2025</span>
                    <span>🕐 10am - 2pm</span>
                    <span className="bg-gold text-brown px-2 py-1 rounded text-xs">Busking</span>
                  </div>
                  <p className="body-text mb-4">📍 Cygnet, Tasmania</p>
                  <p className="body-text mb-4">
                    We will be busking at the Cygnet Market on this day! Bring the family, have some fun, just come along, it'll be a blast! We'd love to see you there!
                  </p>
                </div>
              </div>
            </div>

            {/* Recurring Cygnet Market Event */}
            <div className="parchment-section">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="w-full h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/images/Cygnet Town Hall.jpg"
                      alt="Cygnet Town Hall"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="header-1 text-2xl mb-2">Southern Cross Rangers Live - Cygnet Market</h3>
                  <div className="flex items-center space-x-4 text-sm body-text mb-2">
                    <span className="bg-gold text-brown px-2 py-1 rounded text-xs">Recurring Event</span>
                  </div>
                  <p className="body-text mb-4">📍 Cygnet, Tasmania</p>
                  <p className="body-text mb-4">
                    We will be busking at the Cygnet Market every <strong>first and third Sunday of the month</strong>, unless otherwise stated! Bring the family, have some fun, just come along, it'll be a blast! We'd love to see you there!
                  </p>
                  <p className="body-text text-sm text-gray-600 italic">
                    Check the calendar below for specific dates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-1 text-3xl md:text-4xl mb-8 text-center">
            Event Calendar
          </h2>
          <div className="w-full">
            <EventCalendar events={events} />
          </div>
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

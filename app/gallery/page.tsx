import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import Image from 'next/image'

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-full flex-grow">
      <Header />
      
      <main className="flex-grow">
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
              { src: '/images/20250921_140510.jpg', alt: 'USB flash drives for George\'s very first album!!' },
              { src: '/images/CCMF 2023.jpeg', alt: 'CCMF 2023' },
              { src: '/images/CCMF.jpeg', alt: 'CCMF' },
              { src: '/images/Drawing of George McLarry.jpeg', alt: 'Drawing of George McLarry' },
              { src: '/images/George and Matthew.jpeg', alt: 'George and Matthew' },
              { src: '/images/George McLarry - 2025.jpeg', alt: 'George McLarry 2025' },
              { src: '/images/George McLarry 2025.jpeg', alt: 'George McLarry 2025' },
              { src: '/images/George McLarry- 2025.jpeg', alt: 'George McLarry 2025' },
              { src: '/images/George Riding Xanthe.jpeg', alt: 'George Riding Xanthe' },
              { src: '/images/Line Dancing!.jpeg', alt: 'Line Dancing' }
            ].map((photo, index) => (
              <div key={index} className="parchment-section overflow-hidden" style={{ 
                background: 'linear-gradient(135deg, #f5f1e8 0%, #e8ddd4 100%)',
                border: '2px solid #d4c4a8',
                borderRadius: '8px',
                padding: '0',
                marginBottom: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}>
                <div className="text-center">
                  <div className="w-full h-64 relative bg-gray-200">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="header-2 text-lg mb-2">{photo.alt}</h3>
                  </div>
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

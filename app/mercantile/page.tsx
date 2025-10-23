import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { FeaturedProduct } from '@/components/FeaturedProduct'
import { ProductGrid } from '@/components/ProductGrid'
import { CartSidebar } from '@/components/CartSidebar'
import { EnhancedProductCard } from '@/components/EnhancedProductCard'

export default function MercantilePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6">
            Southern Cross Rangers Mercantile
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6">
            Authentic Country Music & Merchandise
          </h2>
          <p className="body-text text-lg md:text-xl mb-8">
            Support independent Australian country music with our exclusive merchandise, 
            albums, and collectibles. Every purchase helps us continue creating the music we love.
          </p>
        </ParchmentSection>

        <ParchmentSection>
          <FeaturedProduct />
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            All Products
          </h2>
          <ProductGrid />
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8">
            Enhanced Shopping Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EnhancedProductCard 
              product={{
                id: 'enhanced-1',
                name: 'The One You Need - Album',
                description: 'Complete album with all tracks',
                price: 20.00,
                image: '/images/album-cover.jpg',
                formats: ['Digital Download', 'CD', 'Vinyl'],
                colors: ['Standard', 'Limited Edition'],
                stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
              }}
            />
            <EnhancedProductCard 
              product={{
                id: 'enhanced-2',
                name: 'Southern Cross Rangers T-Shirt',
                description: 'Official band merchandise',
                price: 25.00,
                image: '/images/tshirt.jpg',
                colors: ['Black', 'White', 'Navy'],
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
              }}
            />
            <EnhancedProductCard 
              product={{
                id: 'enhanced-3',
                name: 'Single Track Download',
                description: 'Individual track download',
                price: 2.50,
                image: '/images/single-track.jpg',
                formats: ['MP3', 'WAV', 'FLAC'],
                stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
              }}
            />
          </div>
        </ParchmentSection>
      </main>

      <CartSidebar />
      <Footer />
    </div>
  )
}

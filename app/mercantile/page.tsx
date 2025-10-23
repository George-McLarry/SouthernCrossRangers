import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { FeaturedProduct } from '@/components/FeaturedProduct'
import { ProductGrid } from '@/components/ProductGrid'
import { CartSidebar } from '@/components/CartSidebar'

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
      </main>

      <CartSidebar />
      <Footer />
    </div>
  )
}

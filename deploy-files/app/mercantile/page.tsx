'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { FeaturedProduct } from '@/components/FeaturedProduct'
import { ProductGrid } from '@/components/ProductGrid'
import { CartSidebar } from '@/components/CartSidebar'
import { EnhancedProductCard } from '@/components/EnhancedProductCard'
import { ProductDetailModal } from '@/components/ProductDetailModal'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  image: string
  formats?: string[]
  colors?: string[]
  sizes?: string[]
  stripe_price_id?: string
}

export default function MercantilePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products = [
    {
      id: 'album-1',
      name: 'The One You Need - Album',
      description: 'Complete album with all tracks from Southern Cross Rangers. Experience the full journey of our Tasmanian country music story.',
      price: 20.00,
      stock: 50,
      image: '/images/album-cover.jpg',
      formats: ['Digital Download', 'CD', 'Vinyl'],
      colors: ['Standard', 'Limited Edition'],
      stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
    },
    {
      id: 'tshirt-1',
      name: 'Southern Cross Rangers T-Shirt',
      description: 'Official band merchandise featuring our logo. Made from premium cotton for comfort and durability.',
      price: 25.00,
      stock: 30,
      image: '/images/tshirt.jpg',
      colors: ['Black', 'White', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
    },
    {
      id: 'single-1',
      name: 'Single Track Download',
      description: 'Individual track download in your preferred format. Perfect for sampling our music.',
      price: 2.50,
      stock: 100,
      image: '/images/single-track.jpg',
      formats: ['MP3', 'WAV', 'FLAC'],
      stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
    },
    {
      id: 'hat-1',
      name: 'Southern Cross Rangers Cap',
      description: 'Official band cap with embroidered logo. Perfect for outdoor adventures and country music events.',
      price: 18.00,
      stock: 25,
      image: '/images/cap.jpg',
      colors: ['Black', 'Brown', 'Navy'],
      sizes: ['One Size'],
      stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
    }
  ]

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="parchment-section cursor-pointer hover:scale-105 transition-transform" onClick={() => setSelectedProduct(product)}>
                <div className="text-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <h3 className="header-2 text-xl mb-2">{product.name}</h3>
                  <p className="body-text text-sm mb-4">{product.description}</p>
                  
                  <div className="text-2xl font-bold mb-2">
                    ${product.price.toFixed(2)} AUD
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    Stock: {product.stock} available
                  </div>
                  
                  <button className="gold-button w-full py-2">
                    View Details & Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ParchmentSection>
      </main>

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <CartSidebar />
      <Footer />
    </div>
  )
}

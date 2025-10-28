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
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            McLarry's Mercantile
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Welcome to our little country store!
          </h2>
          <p className="body-text text-lg md:text-xl mb-8 text-center">
            Here you can find George McLarry's latest song albums, merchandise and more. Thank you for your support!
          </p>
          
          {/* Format Explanation */}
          <div className="mt-8">
            <button 
              className="gold-button mb-4"
              onClick={() => {
                const dropdown = document.getElementById('format-dropdown')
                if (dropdown) {
                  dropdown.classList.toggle('hidden')
                }
              }}
            >
              Which format?
            </button>
            
            <div id="format-dropdown" className="hidden bg-parchment-light p-6 rounded-lg border border-parchment-border">
              <p className="body-text text-lg">
                You may be wondering which format to buy, and what the difference is between all of them. I'll keep it simple. CDs are the disks we all love and remember, great for those who like to listen to songs while travelling, since most vehicles have CD players! USB flash drives are newer, and less widely used, but still have their place. Most computers/laptops have USB ports from which you can play the contents of the flash drive. Both of these options are recommended. They are physical, Yours to keep forever and work even when the internet is down. On top of that, they are .wav files, which are "lossless". Now you don't need to know what that means, but they are much higher quality than what you get with digital downloads (Digital download files are mostly in .mp3 format - Although great for speedy downloads they lose some quality of the sound in the process.)<br/><br/>
                Digital Downloads are the easiest and quickest method, perfect for those who don't have a CD player or computer but want to listen to some songs on their mobile device. Don't worry, the quality is still what you normally get on platforms like Youtube and Spotify, and it's instant! Either way, I know that whichever you chose will be very entertaining. If you have further questions please feel free to contact us from the Contact Section, we'd love to hear from you!
              </p>
            </div>
          </div>
        </ParchmentSection>

        <ParchmentSection id="promotion">
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Promotion Section
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <img 
                src="https://instasize.com/p/8118536984dd76c4837dbe798fe7d8526f318239167f522a034ae5462ba1ce6f" 
                alt="The One You Need Album Cover"
                className="w-64 h-64 object-cover rounded-lg mx-auto mb-6"
              />
            </div>
            <div className="text-center">
              <h2 className="header-2 text-2xl md:text-3xl mb-6">
                The One You Need – Album!
              </h2>
              <p className="body-text text-lg mb-6">
                Get George McLarry's very first all original 10 song album! Stock is limited so be sure to grab yours now!
              </p>
              
              {/* Description Dropdown */}
              <div className="mb-6">
                <button 
                  className="gold-button mb-4"
                  onClick={() => {
                    const dropdown = document.getElementById('description-dropdown')
                    if (dropdown) {
                      dropdown.classList.toggle('hidden')
                    }
                  }}
                >
                  Description
                </button>
                
                <div id="description-dropdown" className="hidden bg-parchment-light p-4 rounded-lg border border-parchment-border text-left">
                  <h3 className="header-2 text-lg mb-3">10 Original Songs by George McLarry:</h3>
                  <ul className="body-text text-sm space-y-1">
                    <li>• The One You Need</li>
                    <li>• Being Near Is Better</li>
                    <li>• We Will Meet Again</li>
                    <li>• Don't Eat The Cheese</li>
                    <li>• Give Me Back The Good Old Days</li>
                    <li>• It Can't Buy You Love</li>
                    <li>• I Wouldn't Be Here Now</li>
                    <li>• The Junk Food Song</li>
                    <li>• You Love Me More</li>
                    <li>• I Don't Belong Here</li>
                  </ul>
                </div>
              </div>
              
              {/* Format Selection */}
              <div className="mb-6">
                <button 
                  className="gold-button mb-4"
                  onClick={() => {
                    const dropdown = document.getElementById('format-selection')
                    if (dropdown) {
                      dropdown.classList.toggle('hidden')
                    }
                  }}
                >
                  Format: CD (.wav), USB flash drive (.mp4) or Digital Download (.mp3)
                </button>
                
                <div id="format-selection" className="hidden bg-parchment-light p-4 rounded-lg border border-parchment-border">
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="format" value="cd" className="mr-2" />
                      <span className="body-text">CD (.wav)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="format" value="usb" className="mr-2" />
                      <span className="body-text">USB flash drive (.mp4)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="format" value="digital" className="mr-2" />
                      <span className="body-text">Digital Download (.mp3)</span>
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4">
                  <button className="gold-button px-4 py-2">-</button>
                  <span className="header-2 text-xl">1</span>
                  <button className="gold-button px-4 py-2">+</button>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <span className="header-1 text-3xl">$20.00 AUD</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="gold-button">
                  Add To Cart
                </button>
                <button className="gold-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-2 text-3xl md:text-4xl mb-8 text-center">
            Other Products
          </h2>
          <p className="body-text text-lg mb-8 text-center">
            <em>More products coming soon! These are placeholder items for demonstration purposes.</em>
          </p>
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

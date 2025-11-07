'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { CartSidebar } from '@/components/CartSidebar'
import { useCart } from '@/components/CartProvider'
import Image from 'next/image'

export default function MercantilePage() {
  const { addItem } = useCart()

  return (
    <div className="flex flex-col min-h-full flex-grow">
      <Header />
      
      <main className="flex-grow pb-24">
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
        </ParchmentSection>

        <ParchmentSection>
          <h1 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Promotion Section
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <Image 
                src="/images/The One You Need Album Cover.jpg" 
                alt="The One You Need Album Cover"
                width={256}
                height={256}
                className="object-cover rounded-lg mx-auto mb-6"
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
              
              {/* Price */}
              <div className="mb-6">
                <span className="header-1 text-3xl">$20.00 AUD</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="gold-button"
                  onClick={() => {
                    addItem({
                      id: 'album-1',
                      name: 'The One You Need - Album',
                      price: 20.00,
                      image: '/images/The One You Need Album Cover.jpg',
                      stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
                    })
                    alert('Album added to cart! Click the cart icon to checkout.')
                  }}
                >
                  Add To Cart
                </button>
                <button 
                  className="gold-button"
                  onClick={async () => {
                    addItem({
                      id: 'album-1',
                      name: 'The One You Need - Album',
                      price: 20.00,
                      image: '/images/The One You Need Album Cover.jpg',
                      stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
                    })
                    setTimeout(async () => {
                      try {
                        const response = await fetch('/api/checkout', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({ 
                            items: [{
                              id: 'album-1',
                              name: 'The One You Need - Album',
                              price: 20.00,
                              quantity: 1,
                              stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz'
                            }]
                          }),
                        })
                        
                        if (!response.ok) {
                          throw new Error('Failed to create checkout session')
                        }
                        
                        const { url } = await response.json()
                        if (url) {
                          window.location.href = url
                        }
                      } catch (error) {
                        console.error('Checkout error:', error)
                        alert('Failed to proceed to checkout. Please try again.')
                      }
                    }, 100)
                  }}
                >
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
            <em>More products coming soon!</em>
          </p>
        </ParchmentSection>
      </main>

      <CartSidebar />
      <Footer />
    </div>
  )
}

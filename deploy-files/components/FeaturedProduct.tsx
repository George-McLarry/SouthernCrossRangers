'use client'

import { useCart } from './CartProvider'

export function FeaturedProduct() {
  const { addItem } = useCart()

  const featuredProduct = {
    id: 'test-1',
    name: 'Single Track - Test Product',
    description: 'A single track download for testing purposes. This is a low-cost test product to verify payment processing works correctly.',
    price: 0.50,
    currency: 'AUD',
    image: '/images/album-cover.jpg',
    stripePriceId: 'price_1SKomU2eqQp2gdG7DTabI8qz', // Using your existing price ID
    stripeLink: 'https://buy.stripe.com/bJe6oA7wS9l137y5cffnO00',
    rating: 4.8,
    reviewCount: 24,
    features: [
      '1 test track',
      'High-quality WAV file',
      'Digital download included',
      'Perfect for testing payments',
      'Low-cost verification',
      'Safe testing environment'
    ],
    tracks: [
      'Test Track - Payment Verification'
    ]
  }

  const handleAddToCart = () => {
    addItem({
      id: featuredProduct.id,
      name: featuredProduct.name,
      price: featuredProduct.price,
      image: featuredProduct.image,
      stripe_price_id: 'price_1SKomU2eqQp2gdG7DTabI8qz', // Your actual Stripe price ID
    })
    alert('Added to cart! Check your cart to proceed to checkout.')
  }

  const handleBuyNow = () => {
    window.open(featuredProduct.stripeLink, '_blank')
  }

  return (
    <div className="parchment-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-gold to-gold-dark rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gold/80 to-gold-dark/80 flex items-center justify-center">
              <div className="text-center text-text-dark">
                <span className="text-6xl">🎵</span>
                <p className="header-2 text-xl mt-4">Album Cover</p>
                <p className="body-text text-sm mt-2">The One You Need</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-4 left-4 bg-gold text-text-dark px-3 py-1 rounded-full text-sm font-semibold">
            Featured Album
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="header-1 text-3xl mb-2">
              {featuredProduct.name}
            </h2>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">
                    ⭐
                  </span>
                ))}
              </div>
              <span className="body-text text-sm">
                {featuredProduct.rating} ({featuredProduct.reviewCount} reviews)
              </span>
            </div>

            <p className="body-text leading-relaxed mb-6">
              {featuredProduct.description}
            </p>

            <div className="mb-6">
              <h3 className="header-2 text-lg mb-3">Track Listing:</h3>
              <div className="grid grid-cols-1 gap-2">
                {featuredProduct.tracks.map((track, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <span className="text-text-light w-6">{index + 1}.</span>
                    <span className="body-text">{track}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="header-2 text-lg mb-3">What's Included:</h3>
            <ul className="space-y-2 mb-6">
              {featuredProduct.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="body-text text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="header-1 text-3xl">
                ${featuredProduct.price} {featuredProduct.currency}
              </span>
              <span className="body-text line-through">
                $1.00 AUD
              </span>
              <span className="bg-gold text-text-dark px-2 py-1 rounded text-sm font-semibold">
                Test Price
              </span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="gold-button flex items-center space-x-2 flex-1"
              >
                <span>🛒</span>
                <span>Add to Cart</span>
              </button>
              
              <button
                onClick={handleBuyNow}
                className="gold-button flex-1"
              >
                Buy Now
              </button>
            </div>

            <p className="body-text text-sm text-center">
              Secure checkout powered by Stripe • Free shipping within Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

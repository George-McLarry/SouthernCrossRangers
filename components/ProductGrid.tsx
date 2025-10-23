'use client'

import { useCart } from './CartProvider'

export function ProductGrid() {
  const { addItem } = useCart()

  const products = [
    {
      id: '1',
      name: 'The One You Need ~ Album 1',
      price: 20,
      image: '/images/album-cover.jpg',
      description: 'Our debut album featuring 10 authentic country tracks from the heart of Tasmania.',
    },
    {
      id: '2',
      name: 'Southern Cross Rangers T-Shirt',
      price: 25,
      image: '/images/tshirt.jpg',
      description: 'High-quality cotton t-shirt with our band logo and Tasmanian design.',
    },
    {
      id: '3',
      name: 'Country Music Sticker Pack',
      price: 8,
      image: '/images/stickers.jpg',
      description: 'Set of 10 vinyl stickers featuring our band logo and country music themes.',
    },
    {
      id: '4',
      name: 'Tasmanian Country Music Poster',
      price: 15,
      image: '/images/poster.jpg',
      description: 'Beautiful poster featuring the Tasmanian landscape and our band name.',
    },
  ]

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="parchment-section">
          <div className="text-center">
            <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">🎵</span>
            </div>
            <h3 className="header-2 text-xl mb-2">{product.name}</h3>
            <p className="body-text text-sm mb-4">{product.description}</p>
            <p className="header-2 text-lg mb-4">${product.price} AUD</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="gold-button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useCart } from './CartProvider'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  formats?: string[]
  colors?: string[]
  sizes?: string[]
  stripe_price_id?: string
}

interface EnhancedProductCardProps {
  product: Product
}

export function EnhancedProductCard({ product }: EnhancedProductCardProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedFormat, setSelectedFormat] = useState(product.formats?.[0] || '')
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '')
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '')

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      stripe_price_id: product.stripe_price_id,
      options: {
        format: selectedFormat,
        color: selectedColor,
        size: selectedSize
      }
    }
    addItem(cartItem)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD'
    }).format(price)
  }

  return (
    <div className="parchment-section max-w-md mx-auto">
      <div className="text-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        
        <h3 className="header-2 text-2xl mb-2">{product.name}</h3>
        <p className="body-text text-lg mb-4">{product.description}</p>
        
        <div className="space-y-4">
          {/* Format Selection */}
          {product.formats && product.formats.length > 1 && (
            <div>
              <label className="block text-sm font-semibold mb-2">Format:</label>
              <select 
                value={selectedFormat} 
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="form-select"
              >
                {product.formats.map(format => (
                  <option key={format} value={format}>{format}</option>
                ))}
              </select>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && product.colors.length > 1 && (
            <div>
              <label className="block text-sm font-semibold mb-2">Color:</label>
              <select 
                value={selectedColor} 
                onChange={(e) => setSelectedColor(e.target.value)}
                className="form-select"
              >
                {product.colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 1 && (
            <div>
              <label className="block text-sm font-semibold mb-2">Size:</label>
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)}
                className="form-select"
              >
                {product.sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity Selection */}
          <div>
            <label className="block text-sm font-semibold mb-2">Quantity:</label>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="gold-button px-3 py-1 text-sm"
                type="button"
              >
                -
              </button>
              <span className="text-lg font-semibold min-w-[2rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="gold-button px-3 py-1 text-sm"
                type="button"
              >
                +
              </button>
            </div>
          </div>

          {/* Price Display */}
          <div className="text-2xl font-bold text-center mb-4">
            {formatPrice(product.price * quantity)}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="gold-button w-full py-3 text-lg"
          >
            Add to Cart ({quantity})
          </button>
        </div>
      </div>
    </div>
  )
}

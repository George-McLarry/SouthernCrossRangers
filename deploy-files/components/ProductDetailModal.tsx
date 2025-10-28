'use client'

import { useState } from 'react'
import { useCart } from './CartProvider'

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

interface ProductDetailModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
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
    alert(`✅ ${product.name} added to cart!`)
    onClose()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD'
    }).format(price)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="parchment-section max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="header-1 text-3xl">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 lg:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="header-2 text-xl mb-2">Description</h3>
              <p className="body-text">{product.description}</p>
            </div>

            <div>
              <h3 className="header-2 text-xl mb-4">Options</h3>
              
              {/* Format Selection */}
              {product.formats && product.formats.length > 1 && (
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
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
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Quantity:</label>
                <div className="flex items-center space-x-4">
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

              {/* Price and Stock */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-center mb-2">
                  {formatPrice(product.price * quantity)}
                </div>
                <div className="text-center text-sm text-gray-600">
                  Stock: {product.stock} available
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="gold-button w-full py-4 text-xl"
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? 'Out of Stock' : `Add to Cart (${quantity})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

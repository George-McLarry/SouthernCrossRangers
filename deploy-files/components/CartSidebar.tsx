'use client'

import { useState } from 'react'
import { useCart } from './CartProvider'
import { createCheckoutSession, formatPrice } from '@/lib/stripe'

export function CartSidebar() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCheckout = async () => {
    try {
      const checkoutItems = items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        stripe_price_id: item.stripe_price_id || 'price_1SKomU2eqQp2gdG7DTabI8qz' // Default to your price ID
      }))
      
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: checkoutItems }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }
      
      const { url } = await response.json()
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to proceed to checkout. Please try again.')
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="gold-button fixed bottom-4 right-4 z-50 shadow-lg"
        style={{
          background: 'linear-gradient(145deg, #ffd700 0%, #d4af37 50%, #ffd700 100%)',
          border: '2px solid #b8860b',
          borderRadius: '6px',
          color: '#3e2723',
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          padding: '0.75rem 1.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          textAlign: 'center'
        }}
      >
        🛒 Cart ({items.length})
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative ml-auto w-full max-w-md bg-parchment border-l-2 border-parchment-border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="header-2 text-2xl">Shopping Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-light hover:text-text-dark text-2xl"
                >
                  ✕
                </button>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="body-text text-lg">Your cart is empty</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="gold-button mt-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="parchment-section p-4">
                      <div className="flex items-center space-x-3">
                        {item.image && (
                          <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                            <span className="text-lg">🎵</span>
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="header-2 text-sm">{item.name}</h3>
                          <p className="body-text text-xs">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs"
                          >
                            -
                          </button>
                          <span className="body-text text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="parchment-section p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="header-2">Total:</span>
                      <span className="header-2">{formatPrice(getTotalPrice())}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={handleCheckout}
                        className="gold-button w-full"
                      >
                        Proceed to Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="w-full py-2 px-4 border border-parchment-border text-text-medium hover:bg-parchment-dark rounded transition-colors"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

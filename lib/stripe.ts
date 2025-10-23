// Stripe configuration and utilities
export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder',
  secretKey: process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder',
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder'
}

export interface StripeProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  image?: string
}

export const createCheckoutSession = async (items: Array<{id: string, name: string, price: number, quantity: number}>) => {
  try {
    // In a real implementation, this would call your API route
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    })

    if (!response.ok) {
      throw new Error('Failed to create checkout session')
    }

    const { url } = await response.json()
    return url
  } catch (error) {
    console.error('Error creating checkout session:', error)
    // For demo purposes, redirect to a placeholder checkout
    return 'https://checkout.stripe.com/pay/cs_test_placeholder'
  }
}

export const formatPrice = (price: number, currency: string = 'AUD') => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: currency,
  }).format(price)
}


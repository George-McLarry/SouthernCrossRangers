import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, formId } = await request.json()
    
    // Validate required fields
    if (!email || !firstName || !formId) {
      return NextResponse.json(
        { error: 'Missing required fields: email, firstName, formId' },
        { status: 400 }
      )
    }

    // Call ConvertKit API
    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email,
        first_name: firstName
      }),
    })
    
    if (!response.ok) {
      const errorData = await response.text()
      console.error('ConvertKit API error:', errorData)
      throw new Error(`ConvertKit API error: ${response.status}`)
    }
    
    const data = await response.json()
    console.log('ConvertKit subscription successful:', data)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      data 
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to subscribe to newsletter',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}


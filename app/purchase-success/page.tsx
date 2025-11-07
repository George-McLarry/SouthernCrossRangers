'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'

function PurchaseSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [purchaseData, setPurchaseData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/verify-purchase?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setPurchaseData(data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error verifying purchase:', error)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [sessionId])

  const handleDownload = async (trackNumber: number, trackName: string) => {
    try {
      const trackFiles: Record<number, string> = {
        1: '1. The One You Need .mp3',
        2: '2. Being Near Is Better.mp3',
        3: '3. We Will Meet Again.mp3',
        4: '4. Don\'t Eat The Cheese!.mp3',
        5: '5. Give Me Back The Good Old Days .mp3',
        6: '6. It Can\'t Buy You Love .mp3',
        7: '7. I Wouldn\'t Be Here Now.mp3',
        8: '8. The Junk Food Song.mp3',
        9: '9. You Love Me More.mp3',
        10: '10. I Don\'t Belong Here.mp3',
      }

      const fileName = trackFiles[trackNumber]
      if (!fileName) {
        throw new Error('Invalid track number')
      }

      const trackUrl = `/audio/${encodeURIComponent(fileName)}`
      const response = await fetch(trackUrl)
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`)
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download error:', error)
      alert(`Failed to download track: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact support.`)
    }
  }

  const handleDownloadAll = async () => {
    const tracks = [
      { num: 1, name: 'The One You Need' },
      { num: 2, name: 'Being Near Is Better' },
      { num: 3, name: 'We Will Meet Again' },
      { num: 4, name: 'Don\'t Eat The Cheese!' },
      { num: 5, name: 'Give Me Back The Good Old Days' },
      { num: 6, name: 'It Can\'t Buy You Love' },
      { num: 7, name: 'I Wouldn\'t Be Here Now' },
      { num: 8, name: 'The Junk Food Song' },
      { num: 9, name: 'You Love Me More' },
      { num: 10, name: 'I Don\'t Belong Here' },
    ]

    for (const track of tracks) {
      await new Promise(resolve => setTimeout(resolve, 500))
      await handleDownload(track.num, track.name)
    }
  }

  const tracks = [
    { num: 1, name: 'The One You Need' },
    { num: 2, name: 'Being Near Is Better' },
    { num: 3, name: 'We Will Meet Again' },
    { num: 4, name: 'Don\'t Eat The Cheese!' },
    { num: 5, name: 'Give Me Back The Good Old Days' },
    { num: 6, name: 'It Can\'t Buy You Love' },
    { num: 7, name: 'I Wouldn\'t Be Here Now' },
    { num: 8, name: 'The Junk Food Song' },
    { num: 9, name: 'You Love Me More' },
    { num: 10, name: 'I Don\'t Belong Here' },
  ]

  return (
    <div className="flex flex-col min-h-full flex-grow">
      <Header />
      
      <main className="flex-grow">
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            Purchase Successful! 🎉
          </h1>
          
          {loading ? (
            <p className="body-text text-lg text-center">Verifying your purchase...</p>
          ) : purchaseData ? (
            <div>
              <p className="body-text text-lg mb-4 text-center">
                Thank you for your purchase! Your download links are below.
              </p>
              
              {purchaseData.customer_email && (
                <p className="body-text text-sm mb-6 text-center text-gray-600">
                  A confirmation email has been sent to: <strong>{purchaseData.customer_email}</strong>
                </p>
              )}

              <div className="mb-8 text-center">
                <button
                  onClick={handleDownloadAll}
                  className="gold-button mb-4"
                  style={{ color: '#5d4037', textShadow: 'none' }}
                >
                  Download All Tracks
                </button>
              </div>

              <div className="space-y-2">
                <h2 className="header-2 text-2xl mb-4">Individual Track Downloads:</h2>
                {tracks.map((track) => (
                  <div
                    key={track.num}
                    className="parchment-section flex items-center justify-between"
                  >
                    <span className="body-text">{track.num}. {track.name}</span>
                    <button
                      onClick={() => handleDownload(track.num, track.name)}
                      className="px-4 py-2 bg-gold text-brown rounded hover:opacity-80 transition-opacity"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>

              <p className="body-text text-sm mt-8 text-center text-gray-600">
                <em>You can always access your downloads by returning to this page. Bookmark it for easy access!</em>
              </p>
            </div>
          ) : (
            <div>
              <p className="body-text text-lg mb-4 text-center text-red-600">
                Unable to verify your purchase. Please contact support with your order details.
              </p>
              <p className="body-text text-sm text-center">
                Session ID: {sessionId || 'Not provided'}
              </p>
            </div>
          )}
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

export default function PurchaseSuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-full flex-grow">
        <Header />
        <main className="flex-grow">
          <ParchmentSection>
            <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
              Purchase Successful! 🎉
            </h1>
            <p className="body-text text-lg text-center">Loading...</p>
          </ParchmentSection>
        </main>
        <Footer />
      </div>
    }>
      <PurchaseSuccessContent />
    </Suspense>
  )
}


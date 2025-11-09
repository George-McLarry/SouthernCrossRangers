'use client'

import { useState, useMemo, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ParchmentSection } from '@/components/ParchmentSection'
import { useMusicPlayer } from '@/components/MusicPlayerContext'
import { MusicPlayer } from '@/components/MusicPlayer'

interface Track {
  id: string
  title: string
  artist: string
  album: string
  url: string
  description: string
  format: 'mp3'
  isOriginal?: boolean
}

export default function MusicPage() {
  const { setTracks, setCurrentTrackIndex, setIsPlayerVisible } = useMusicPlayer()
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)

  const originalTracks: Track[] = useMemo(() => ([
    { id: 'original-1', title: 'The One You Need', artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/1. The One You Need .mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-2', title: 'Being Near Is Better', artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/2. Being Near Is Better.mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-3', title: 'We Will Meet Again', artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/3. We Will Meet Again.mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-4', title: "Don't Eat The Cheese!", artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/4. Don\'t Eat The Cheese!.mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-5', title: 'Give Me Back The Good Old Days', artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/5. Give Me Back The Good Old Days .mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-6', title: "It Can't Buy You Love", artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/6. It Can\'t Buy You Love .mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-7', title: "I Wouldn't Be Here Now", artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/7. I Wouldn\'t Be Here Now.mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-8', title: 'The Junk Food Song', artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/8. The Junk Food Song.mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-9', title: 'You Love Me More', artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/9. You Love Me More.mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true },
    { id: 'original-10', title: "I Don't Belong Here", artist: 'George McLarry', album: 'The One You Need - Album', url: '/audio/10. I Don\'t Belong Here.mp3', description: 'An original song by George McLarry', format: 'mp3', isOriginal: true }
  ]), [])
  const originalTracksCount = originalTracks.length

  const coverTracks: Track[] = useMemo(() => ([
    { id: 'cover-1', title: "Hey Good Lookin'", artist: 'Hank Williams', album: 'Covers', url: '/audio/Hey Good Lookin\'.mp3', description: 'Cover by George McLarry', format: 'mp3' },
    { id: 'cover-2', title: 'I Saw The Light', artist: 'Hank Williams', album: 'Covers', url: '/audio/I Saw The Light.mp3', description: 'Cover by George McLarry', format: 'mp3' }
  ]), [])

  const coversByArtist = useMemo(() => {
    return coverTracks.reduce((acc, track) => {
      if (!acc[track.artist]) {
        acc[track.artist] = []
      }
      acc[track.artist].push(track)
      return acc
    }, {} as Record<string, Track[]>)
  }, [coverTracks])

  useEffect(() => {
    if (coverTracks.length > 0) {
      setTracks(coverTracks)
      setCurrentTrackIndex(0, false)
      setSelectedTrack(coverTracks[0].id)
      setIsPlayerVisible(false)
    }
  }, [coverTracks, setTracks, setCurrentTrackIndex, setIsPlayerVisible])

  const handleTrackClick = (track: Track, index: number) => {
    if (index < 0) return
    setTracks(coverTracks)
    setCurrentTrackIndex(index, true)
    setSelectedTrack(track.id)
    setIsPlayerVisible(false)
  }

  return (
    <div className="flex flex-col min-h-full flex-grow">
      <Header />
      
      <main className="flex-grow">
        <ParchmentSection>
          <h1 className="header-1 text-4xl md:text-6xl mb-6 text-center">
            The Jukebox
          </h1>
          <h2 className="header-2 text-2xl md:text-3xl mb-6 text-center">
            Welcome! I hope you enjoy our selection of country songs!
          </h2>
          <p className="body-text text-base max-w-3xl mx-auto">
            Originals unlock only after purchase. When you buy the album in Mercantile, Stripe collects your email and our system will send you a message titled <em>"Your Album Download - The One You Need"</em> with every track for download. Keep that email safe—you can re-download from it any time.
          </p>
        </ParchmentSection>

        <ParchmentSection>
          <h2 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Now Playing
          </h2>
          <MusicPlayer />
        </ParchmentSection>

        {/* George McLarry Section */}
        <ParchmentSection>
          <h2 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            George McLarry
          </h2>
          <p className="body-text text-lg mb-6 text-center">
            Sample George McLarry's originals here! (Full Albums may be purchased in Mercantile!)
          </p>
          <p className="body-text text-base mb-4 text-center">
            Once you purchase the full album in Mercantile, all {originalTracksCount} original tracks will unlock here for streaming and download. Until then, they stay hidden so only paying supporters receive the full experience.
          </p>
          <div className="flex justify-center">
            <a href="/mercantile" className="gold-button" style={{ textDecoration: 'none', color: '#5d4037' }}>
              Visit Mercantile
            </a>
          </div>
        </ParchmentSection>

        {/* Covers Section */}
        <ParchmentSection>
          <h2 className="header-1 text-3xl md:text-4xl mb-6 text-center">
            Covers
          </h2>
          <p className="body-text text-lg mb-6 text-center">
            Take a listen to some of the very best country songs, covered by George McLarry!
          </p>
          {Object.entries(coversByArtist).map(([artist, tracks]) => (
            <div key={artist} className="mb-8">
              <h3 className="header-2 text-2xl md:text-3xl mb-4">{artist}</h3>
              <div className="space-y-2">
                {tracks.map((track, trackIndex) => {
                  const coverIndex = coverTracks.findIndex(t => t.id === track.id)
                  return (
                    <div
                      key={track.id}
                      onClick={() => handleTrackClick(track, coverIndex)}
                      className={`parchment-section cursor-pointer hover:shadow-lg transition-all ${
                        selectedTrack === track.id ? 'ring-2 ring-gold' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <button
                          className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-brown hover:scale-105 transition-transform flex-shrink-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleTrackClick(track, coverIndex)
                          }}
                        >
                          ▶️
                        </button>
                        <div className="flex-1">
                          <h3 className="header-2 text-lg">{track.title}</h3>
                          <p className="body-text text-sm">{track.artist}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </ParchmentSection>
      </main>

      <Footer />
    </div>
  )
}

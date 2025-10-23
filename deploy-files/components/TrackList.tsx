'use client'

import { useState } from 'react'

export function TrackList() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null)
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set())
  const [displayedTracks, setDisplayedTracks] = useState(5)

  const tracks = [
    {
      id: '1',
      title: 'The One You Need',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 240,
      file_url: '/audio/The One You Need.wav',
      cover_url: '/images/album-cover-1.jpg',
      isLiked: false
    },
    {
      id: '2',
      title: 'Being Near Is Better',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 195,
      file_url: '/audio/Being Near Is Better.wav',
      cover_url: '/images/album-cover-2.jpg',
      isLiked: false
    },
    {
      id: '3',
      title: 'We Will Meet Again',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 210,
      file_url: '/audio/We Will Meet Again.wav',
      cover_url: '/images/album-cover-3.jpg',
      isLiked: false
    },
    {
      id: '4',
      title: 'Don\'t Eat The Cheese',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 225,
      file_url: '/audio/Don\'t Eat The Cheese.wav',
      cover_url: '/images/album-cover-4.jpg',
      isLiked: false
    },
    {
      id: '5',
      title: 'Give Me Back The Good Old Days',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 180,
      file_url: '/audio/Give Me Back The Good Old Days.wav',
      cover_url: '/images/album-cover-5.jpg',
      isLiked: false
    }
  ]

  const handlePlay = (trackId: string) => {
    setPlayingTrack(trackId)
    console.log('Playing track:', trackId)
    // In a real implementation, this would start playing the track
  }

  const handlePause = () => {
    setPlayingTrack(null)
    console.log('Paused track')
  }

  const handleLike = (trackId: string) => {
    const newLikedTracks = new Set(likedTracks)
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId)
      console.log('Unliked track:', trackId)
    } else {
      newLikedTracks.add(trackId)
      console.log('Liked track:', trackId)
    }
    setLikedTracks(newLikedTracks)
  }

  const handleDownload = (trackId: string, trackTitle: string) => {
    console.log('Downloading track:', trackTitle)
    // In a real implementation, this would trigger a download
    alert(`Downloading "${trackTitle}"...`)
  }

  const handleShare = (trackId: string, trackTitle: string) => {
    console.log('Sharing track:', trackTitle)
    if (navigator.share) {
      navigator.share({
        title: trackTitle,
        text: `Check out this track by Southern Cross Rangers: ${trackTitle}`,
        url: window.location.href
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareUrl = `${window.location.origin}/music?track=${trackId}`
      navigator.clipboard.writeText(shareUrl)
      alert('Track link copied to clipboard!')
    }
  }

  const handleLoadMore = () => {
    setDisplayedTracks(prev => Math.min(prev + 5, tracks.length))
    console.log('Loading more tracks...')
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="header-2 text-3xl sm:text-4xl mb-4">
          All Tracks
        </h2>
        <p className="body-text max-w-2xl mx-auto">
          Discover our complete collection of songs, each one a story from the heart of Tasmania.
        </p>
      </div>

      <div className="space-y-4">
        {tracks.slice(0, displayedTracks).map((track, index) => (
          <div key={track.id} className="parchment-section">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                {playingTrack === track.id ? (
                  <button
                    onClick={handlePause}
                    className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform"
                  >
                    ⏸️
                  </button>
                ) : (
                  <button
                    onClick={() => handlePlay(track.id)}
                    className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform"
                  >
                    ▶️
                  </button>
                )}
              </div>

              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gold/80 to-gold-dark/80 flex items-center justify-center">
                  <span className="text-lg">🎵</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="header-2 text-lg">{track.title}</h3>
                <p className="body-text text-sm">{track.artist}</p>
                <p className="body-text text-xs">{track.album}</p>
              </div>

              <div className="text-right">
                <p className="body-text text-sm">
                  {formatDuration(track.duration)}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleLike(track.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    likedTracks.has(track.id)
                      ? 'bg-gold text-text-dark'
                      : 'text-text-light hover:text-gold hover:bg-parchment/20'
                  }`}
                >
                  {likedTracks.has(track.id) ? '❤️' : '🤍'}
                </button>

                <button
                  onClick={() => handleDownload(track.id, track.title)}
                  className="p-2 text-text-light hover:text-gold hover:bg-parchment/20 rounded-lg transition-colors"
                >
                  ⬇️
                </button>

                <button 
                  onClick={() => handleShare(track.id, track.title)}
                  className="p-2 text-text-light hover:text-gold hover:bg-parchment/20 rounded-lg transition-colors"
                >
                  🔗
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayedTracks < tracks.length && (
        <div className="text-center pt-8">
          <button 
            onClick={handleLoadMore}
            className="gold-button"
          >
            Load More Tracks ({tracks.length - displayedTracks} remaining)
          </button>
        </div>
      )}
    </div>
  )
}

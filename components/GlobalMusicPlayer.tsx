'use client'

import { usePathname } from 'next/navigation'
import { useMusicPlayer } from './MusicPlayerContext'

export function GlobalMusicPlayer() {
  const pathname = usePathname()
  const {
    tracks,
    currentTrackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    isPlayerVisible,
    setIsPlayerVisible,
    playPause,
    nextTrack,
    previousTrack,
    seek,
    setVolume,
  } = useMusicPlayer()

  // Don't show on music page or if no tracks
  if (pathname === '/music' || tracks.length === 0) {
    return null
  }

  // If paused and hidden, show floating button to reopen
  if (!isPlayerVisible && !isPlaying) {
    return null
  }

  // Floating button when playing but hidden
  if (!isPlayerVisible && isPlaying) {
    return (
      <button
        onClick={() => setIsPlayerVisible(true)}
        className="fixed bottom-4 right-4 z-50 w-16 h-16 bg-gold rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Show music player"
      >
        <span className="text-2xl">🎵</span>
      </button>
    )
  }

  const currentTrack = tracks[currentTrackIndex]
  if (!currentTrack) return null

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-parchment to-parchment-dark border-t-4 border-gold shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Close button */}
          <button
            onClick={() => setIsPlayerVisible(false)}
            className="text-2xl hover:text-gold transition-colors flex-shrink-0"
            aria-label="Close player"
          >
            ×
          </button>

          {/* Track info */}
          <div className="flex-1 min-w-0">
            <h3 className="header-2 text-sm md:text-base truncate">{currentTrack.title}</h3>
            <p className="body-text text-xs text-gray-600 truncate">{currentTrack.artist}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={previousTrack}
              className="p-2 hover:bg-gold/20 rounded transition-colors"
              aria-label="Previous track"
            >
              ⏮️
            </button>
            <button
              onClick={playPause}
              className="p-2 bg-gold text-brown rounded hover:opacity-80 transition-opacity"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button
              onClick={nextTrack}
              className="p-2 hover:bg-gold/20 rounded transition-colors"
              aria-label="Next track"
            >
              ⏭️
            </button>
          </div>

          {/* Progress */}
          <div className="hidden md:flex flex-1 items-center gap-2 max-w-xs">
            <span className="text-xs body-text">{formatTime(currentTime)}</span>
            <div className="flex-1 h-2 bg-parchment-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs body-text">{formatTime(duration)}</span>
          </div>

          {/* Volume */}
          <div className="hidden lg:flex items-center gap-2 w-24">
            <span className="text-xs">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


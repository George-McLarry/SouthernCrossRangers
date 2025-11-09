'use client'

import { useMemo } from 'react'
import { useMusicPlayer } from './MusicPlayerContext'

export function MusicPlayer() {
  const {
    tracks,
    currentTrackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffled,
    isRepeating,
    playPause,
    nextTrack,
    previousTrack,
    seek,
    setVolume,
    setIsShuffled,
    setIsRepeating,
  } = useMusicPlayer()

  const currentTrack = useMemo(() => {
    if (tracks.length === 0) return null
    return tracks[Math.max(0, Math.min(currentTrackIndex, tracks.length - 1))]
  }, [tracks, currentTrackIndex])

  const formatTime = (time: number) => {
    if (!Number.isFinite(time) || time < 0) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (!currentTrack) {
    return (
      <div className="parchment-section text-center">
        <p className="body-text text-lg">Select a song from the playlist to start listening!</p>
      </div>
    )
  }

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0

  return (
    <div className="parchment-section">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gold/80 to-gold-dark/80 flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
        </div>
        <div className="flex-1 text-left">
          <h3 className="header-2 text-lg">{currentTrack.title}</h3>
          <p className="body-text text-sm">{currentTrack.artist}</p>
          <p className="body-text text-xs">{currentTrack.album}</p>
        </div>
        <div className="text-right">
          <p className="body-text text-xs">
            {currentTrackIndex + 1} of {tracks.length}
          </p>
          <p className="body-text text-xs text-text-lighter">
            {currentTrack.format.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <span className="body-text text-sm">{formatTime(currentTime)}</span>
          <div className="flex-1">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={Math.min(currentTime, duration || 0)}
              onChange={(e) => seek(parseFloat(e.target.value))}
              className="w-full h-2 bg-parchment-dark rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${progressPercent}%, #8b7355 ${progressPercent}%, #8b7355 100%)`
              }}
            />
          </div>
          <span className="body-text text-sm">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsShuffled(!isShuffled)}
            className={`p-2 transition-colors ${isShuffled ? 'text-gold' : 'text-text-light hover:text-gold'}`}
            aria-label="Toggle shuffle"
          >
            🔀
          </button>
          <button 
            onClick={previousTrack}
            className="p-2 text-text-light hover:text-gold transition-colors"
            aria-label="Previous track"
          >
            ⏮️
          </button>
        </div>

        <button
          onClick={playPause}
          className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>

        <div className="flex items-center space-x-4">
          <button 
            onClick={nextTrack}
            className="p-2 text-text-light hover:text-gold transition-colors"
            aria-label="Next track"
          >
            ⏭️
          </button>
          <button 
            onClick={() => setIsRepeating(!isRepeating)}
            className={`p-2 transition-colors ${isRepeating ? 'text-gold' : 'text-text-light hover:text-gold'}`}
            aria-label="Toggle repeat"
          >
            🔁
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3 mt-6">
        <span className="p-2 text-text-light">🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="flex-1 h-2 bg-parchment-dark rounded-lg appearance-none cursor-pointer"
        />
        <span className="body-text text-sm">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  )
}

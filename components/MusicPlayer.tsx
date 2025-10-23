'use client'

import { useState, useRef, useEffect } from 'react'

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  src: string
  format: 'wav' | 'mp3'
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isShuffled, setIsShuffled] = useState(false)
  const [isRepeating, setIsRepeating] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [tracks, setTracks] = useState<Track[]>([
    {
      id: '1',
      title: 'The One You Need',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 240,
      src: '/audio/The One You Need.wav',
      format: 'wav'
    },
    {
      id: '2',
      title: 'Being Near Is Better',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 195,
      src: '/audio/Being Near Is Better.wav',
      format: 'wav'
    },
    {
      id: '3',
      title: 'We Will Meet Again',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 210,
      src: '/audio/We Will Meet Again.wav',
      format: 'wav'
    },
    {
      id: '4',
      title: 'Don\'t Eat The Cheese',
      artist: 'Southern Cross Rangers',
      album: 'The One You Need',
      duration: 225,
      src: '/audio/Dont Eat The Cheese.wav',
      format: 'wav'
    }
  ])
  const audioRef = useRef<HTMLAudioElement>(null)

  // Set volume when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const handlePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.error('Error playing audio:', error)
        // Fallback: try to load the audio first
        if (audioRef.current.src) {
          audioRef.current.load()
          try {
            await audioRef.current.play()
            setIsPlaying(true)
          } catch (retryError) {
            console.error('Retry failed:', retryError)
          }
        }
      }
    }
  }

  const handleShuffle = () => {
    setIsShuffled(!isShuffled)
    console.log('Shuffle toggled:', !isShuffled)
  }

  const handleRepeat = () => {
    setIsRepeating(!isRepeating)
    console.log('Repeat toggled:', !isRepeating)
  }

  const handlePrevious = () => {
    const newTrack = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1
    setCurrentTrack(newTrack)
    setCurrentTime(0)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }

  const handleNext = () => {
    const newTrack = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    setCurrentTrack(newTrack)
    setCurrentTime(0)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleTrackEnd = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    if (isRepeating) {
      // Repeat current track
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
        setIsPlaying(true)
      }
    } else {
      // Go to next track
      handleNext()
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const currentTrackData = tracks[currentTrack]

  return (
    <div className="parchment-section">
      <audio
        ref={audioRef}
        src={currentTrackData.src}
        preload="metadata"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration)
          }
        }}
        onEnded={handleTrackEnd}
        onError={(e) => {
          console.error('Audio error:', e)
          setIsPlaying(false)
          // Show user-friendly message for missing files
          alert('Audio file not found. Please add audio files to the /public/audio/ directory to enable playback.')
        }}
      />
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gold/80 to-gold-dark/80 flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="header-2 text-lg">{currentTrackData.title}</h3>
          <p className="body-text text-sm">{currentTrackData.artist}</p>
          <p className="body-text text-xs">{currentTrackData.album}</p>
        </div>
        <div className="text-right">
          <p className="body-text text-xs">
            {currentTrack + 1} of {tracks.length}
          </p>
          <p className="body-text text-xs">
            {currentTrackData.format.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <span className="body-text text-sm">{formatTime(currentTime)}</span>
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-parchment-dark rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${(currentTime / duration) * 100}%, #8b7355 ${(currentTime / duration) * 100}%, #8b7355 100%)`
              }}
            />
          </div>
          <span className="body-text text-sm">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleShuffle}
            className={`p-2 transition-colors ${isShuffled ? 'text-gold' : 'text-text-light hover:text-gold'}`}
          >
            🔀
          </button>
          <button 
            onClick={handlePrevious}
            className="p-2 text-text-light hover:text-gold transition-colors"
          >
            ⏮️
          </button>
        </div>

        <button
          onClick={handlePlayPause}
          className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-text-dark hover:scale-105 transition-transform"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>

        <div className="flex items-center space-x-4">
          <button 
            onClick={handleNext}
            className="p-2 text-text-light hover:text-gold transition-colors"
          >
            ⏭️
          </button>
          <button 
            onClick={handleRepeat}
            className={`p-2 transition-colors ${isRepeating ? 'text-gold' : 'text-text-light hover:text-gold'}`}
          >
            🔁
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3 mt-6">
        <button className="p-2 text-text-light hover:text-gold transition-colors">
          🔊
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1 h-2 bg-parchment-dark rounded-lg appearance-none cursor-pointer"
        />
        <span className="body-text text-sm">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  )
}

'use client'

import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from 'react'

interface Track {
  id: string
  title: string
  artist: string
  album: string
  url: string
  description?: string
  format: 'mp3'
  isOriginal?: boolean
}

interface MusicPlayerContextType {
  tracks: Track[]
  currentTrackIndex: number
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isShuffled: boolean
  isRepeating: boolean
  isPlayerVisible: boolean
  setTracks: (tracks: Track[]) => void
  setCurrentTrackIndex: (index: number, autoPlay?: boolean) => void
  setIsPlaying: (playing: boolean) => void
  setCurrentTime: (time: number) => void
  setVolume: (volume: number) => void
  setIsShuffled: (shuffled: boolean) => void
  setIsRepeating: (repeating: boolean) => void
  setIsPlayerVisible: (visible: boolean) => void
  playPause: () => void
  nextTrack: () => void
  previousTrack: () => void
  seek: (time: number) => void
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined)

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [tracks, setTracks] = useState<Track[]>([])
  const [currentTrackIndex, setCurrentTrackIndexState] = useState(0)
  const [isPlaying, setIsPlayingState] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isShuffled, setIsShuffled] = useState(false)
  const [isRepeating, setIsRepeating] = useState(false)
  const [isPlayerVisible, setIsPlayerVisible] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isPlayingRef = useRef(false)
  const shouldAutoPlayRef = useRef(false)
  const isUserInteractionRef = useRef(false)

  // Initialize audio element
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.volume = volume
      
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      })

      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration)
        }
      })

      audioRef.current.addEventListener('ended', () => {
        nextTrack()
      })

      audioRef.current.addEventListener('error', () => {
        console.error('Audio error')
        setIsPlayingState(false)
        isPlayingRef.current = false
      })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Handle play/pause state changes
  useEffect(() => {
    if (!audioRef.current || tracks.length === 0) return

    if (isPlaying && !isPlayingRef.current) {
      isPlayingRef.current = true
      audioRef.current.play().catch((error) => {
        // Silent fail for autoplay restrictions
        if (error.name !== 'NotAllowedError' || isUserInteractionRef.current) {
          console.error('Play error:', error)
        }
        setIsPlayingState(false)
        isPlayingRef.current = false
      })
    } else if (!isPlaying && isPlayingRef.current) {
      audioRef.current.pause()
      isPlayingRef.current = false
    }
  }, [isPlaying, tracks.length])

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Load track when index changes
  useEffect(() => {
    if (!audioRef.current || tracks.length === 0 || currentTrackIndex < 0 || currentTrackIndex >= tracks.length) return

    const track = tracks[currentTrackIndex]
    if (audioRef.current.src !== track.url) {
      audioRef.current.src = track.url
      audioRef.current.load()
      if (shouldAutoPlayRef.current) {
        setTimeout(() => {
          audioRef.current?.play().catch(() => {
            // Silent fail for autoplay
          })
        }, 100)
      }
    }
  }, [currentTrackIndex, tracks])

  const setCurrentTrackIndex = useCallback((index: number, autoPlay: boolean = true) => {
    if (index >= 0 && index < tracks.length) {
      shouldAutoPlayRef.current = autoPlay
      setCurrentTrackIndexState(index)
      setIsPlayerVisible(true)
      if (autoPlay) {
        setIsPlayingState(true)
      }
    }
  }, [tracks.length])

  const playPause = useCallback(() => {
    if (!audioRef.current) return
    
    isUserInteractionRef.current = true
    
    if (isPlayingRef.current) {
      audioRef.current.pause()
      setIsPlayingState(false)
      isPlayingRef.current = false
      shouldAutoPlayRef.current = false
    } else {
      if (audioRef.current.src) {
        audioRef.current.play().then(() => {
          setIsPlayingState(true)
          isPlayingRef.current = true
        }).catch((error) => {
          console.error('Play error:', error)
          setIsPlayingState(false)
          isPlayingRef.current = false
        })
      }
    }
  }, [])

  const nextTrack = useCallback(() => {
    if (tracks.length === 0) return
    
    let nextIndex: number
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * tracks.length)
    } else {
      nextIndex = (currentTrackIndex + 1) % tracks.length
    }
    
    if (nextIndex === currentTrackIndex && !isRepeating) return
    
    setCurrentTrackIndex(nextIndex, true)
  }, [currentTrackIndex, tracks.length, isShuffled, isRepeating, setCurrentTrackIndex])

  const previousTrack = useCallback(() => {
    if (tracks.length === 0) return
    
    let prevIndex: number
    if (isShuffled) {
      prevIndex = Math.floor(Math.random() * tracks.length)
    } else {
      prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1
    }
    
    setCurrentTrackIndex(prevIndex, true)
  }, [currentTrackIndex, tracks.length, isShuffled, setCurrentTrackIndex])

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }, [])

  const value: MusicPlayerContextType = {
    tracks,
    currentTrackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffled,
    isRepeating,
    isPlayerVisible,
    setTracks,
    setCurrentTrackIndex,
    setIsPlaying: setIsPlayingState,
    setCurrentTime,
    setVolume,
    setIsShuffled,
    setIsRepeating,
    setIsPlayerVisible,
    playPause,
    nextTrack,
    previousTrack,
    seek,
  }

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
      <audio ref={audioRef} />
    </MusicPlayerContext.Provider>
  )
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext)
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider')
  }
  return context
}


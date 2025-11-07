'use client'

import { useEffect, useState } from 'react'

interface LyricFile {
  filename: string
  name: string
  url: string
}

export function LyricsList() {
  const [lyrics, setLyrics] = useState<LyricFile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/lyrics')
      .then(res => res.json())
      .then(data => {
        setLyrics(data.lyrics || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching lyrics:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="text-center">
        <p className="body-text text-lg">Loading lyrics...</p>
      </div>
    )
  }

  if (lyrics.length === 0) {
    return (
      <div className="text-center">
        <p className="body-text text-lg mb-8">
          <em>Song lyrics will be added here as they become available.</em>
        </p>
      </div>
    )
  }

  const handleDownload = async (filename: string, url: string, e: React.MouseEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`)
      }
      const blob = await response.blob()
      
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Download error:', error)
      alert(`Failed to download file. Please try clicking "View" and saving from there, or contact support. Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ul className="space-y-2">
        {lyrics.map((lyric) => (
          <li
            key={lyric.filename}
            className="parchment-section border-2 border-parchment-border p-3 hover:shadow-md transition-shadow flex items-center justify-between gap-4"
          >
            <span className="header-2 text-lg flex-1" style={{ textAlign: 'left' }}>
              {lyric.name}
            </span>
            <div className="flex gap-2 flex-shrink-0">
              <a
                href={lyric.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2 py-1 border border-gold bg-gold text-brown hover:opacity-80 transition-opacity rounded"
                style={{ 
                  textDecoration: 'none',
                  color: '#5d4037',
                  backgroundColor: '#d4af37',
                  borderColor: '#b8941f'
                }}
              >
                View
              </a>
              <button
                onClick={(e) => handleDownload(lyric.filename, lyric.url, e)}
                className="text-xs px-2 py-1 border border-gold bg-gold text-brown hover:opacity-80 transition-opacity rounded cursor-pointer"
                style={{ 
                  color: '#5d4037',
                  backgroundColor: '#d4af37',
                  borderColor: '#b8941f',
                  fontFamily: 'inherit'
                }}
              >
                Download
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


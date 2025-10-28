'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { db, ContentSection, MusicTrack } from '@/lib/database'
import { ParchmentSection } from '@/components/ParchmentSection'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'content' | 'music'>('content')
  const [contentSections, setContentSections] = useState<ContentSection[]>([])
  const [musicTracks, setMusicTracks] = useState<MusicTrack[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const router = useRouter()

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session || session.user.user_metadata?.role !== 'admin') {
        router.push('/login')
        return
      }
      loadData()
    }
    checkAuth()
  }, [router])

  const loadData = async () => {
    try {
      const [sections, tracks] = await Promise.all([
        db.getContentSections(),
        db.getMusicTracks()
      ])
      setContentSections(sections)
      setMusicTracks(tracks)
    } catch (error) {
      console.error('Error loading data:', error)
      setMessage('Error loading data')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const updateContent = async (id: string, content: string) => {
    try {
      await db.updateContentSection(id, content)
      setContentSections(prev => 
        prev.map(section => 
          section.id === id ? { ...section, content } : section
        )
      )
      setMessage('Content updated successfully!')
    } catch (error) {
      console.error('Error updating content:', error)
      setMessage('Error updating content')
    }
  }

  const addTrack = async (track: Omit<MusicTrack, 'id' | 'created_at'>) => {
    try {
      const newTrack = await db.addMusicTrack(track)
      setMusicTracks(prev => [newTrack, ...prev])
      setMessage('Track added successfully!')
    } catch (error) {
      console.error('Error adding track:', error)
      setMessage('Error adding track')
    }
  }

  const updateTrack = async (id: string, updates: Partial<MusicTrack>) => {
    try {
      const updatedTrack = await db.updateMusicTrack(id, updates)
      setMusicTracks(prev => 
        prev.map(track => track.id === id ? updatedTrack : track)
      )
      setMessage('Track updated successfully!')
    } catch (error) {
      console.error('Error updating track:', error)
      setMessage('Error updating track')
    }
  }

  const deleteTrack = async (id: string) => {
    try {
      await db.deleteMusicTrack(id)
      setMusicTracks(prev => prev.filter(track => track.id !== id))
      setMessage('Track deleted successfully!')
    } catch (error) {
      console.error('Error deleting track:', error)
      setMessage('Error deleting track')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1137996207/photo/brown-wood-texture-dark-wooden-abstract-background.jpg?s=612x612&w=0&k=20&c=qZS2TJ_1fQ9xRmcnqkyEIbBlT-5K_ShnRKPCzwfOcQI=')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <ParchmentSection className="p-8">
          <p className="body-text">Loading admin panel...</p>
        </ParchmentSection>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{
      backgroundImage: "url('https://media.istockphoto.com/id/1137996207/photo/brown-wood-texture-dark-wooden-abstract-background.jpg?s=612x612&w=0&k=20&c=qZS2TJ_1fQ9xRmcnqkyEIbBlT-5K_ShnRKPCzwfOcQI=')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="header-1 text-4xl mb-4">Admin Panel</h1>
          <p className="body-text">Manage your website content and music tracks</p>
        </div>

        {message && (
          <ParchmentSection className="mb-6">
            <p className={`body-text ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          </ParchmentSection>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('content')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'content' 
                  ? 'bg-gold text-gray-900 font-bold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Website Content
            </button>
            <button
              onClick={() => setActiveTab('music')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'music' 
                  ? 'bg-gold text-gray-900 font-bold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Music Tracks
            </button>
          </div>
        </div>

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <h2 className="header-2 text-2xl text-center">Edit Website Content</h2>
            {contentSections.map((section) => (
              <ContentEditor
                key={section.id}
                section={section}
                onUpdate={updateContent}
              />
            ))}
          </div>
        )}

        {/* Music Tab */}
        {activeTab === 'music' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="header-2 text-2xl">Music Tracks</h2>
              <AddTrackForm onAdd={addTrack} />
            </div>
            {musicTracks.map((track) => (
              <TrackEditor
                key={track.id}
                track={track}
                onUpdate={updateTrack}
                onDelete={deleteTrack}
              />
            ))}
          </div>
        )}

        {/* Logout Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleLogout}
            className="gold-button px-6 py-2"
          >
            Logout
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Content Editor Component
function ContentEditor({ 
  section, 
  onUpdate 
}: { 
  section: ContentSection
  onUpdate: (id: string, content: string) => void 
}) {
  const [content, setContent] = useState(section.content)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    onUpdate(section.id, content)
    setIsEditing(false)
  }

  return (
    <ParchmentSection>
      <div className="flex justify-between items-center mb-4">
        <h3 className="header-2 text-xl">{section.section_name}</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="gold-button px-4 py-2"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>
      
      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
            rows={6}
          />
          <button
            onClick={handleSave}
            className="gold-button px-4 py-2"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="body-text whitespace-pre-wrap">{content}</div>
      )}
    </ParchmentSection>
  )
}

// Add Track Form Component
function AddTrackForm({ onAdd }: { onAdd: (track: Omit<MusicTrack, 'id' | 'created_at'>) => void }) {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({ title, artist, url, description })
    setTitle('')
    setArtist('')
    setUrl('')
    setDescription('')
  }

  return (
    <ParchmentSection>
      <h3 className="header-2 text-xl mb-4">Add New Track</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Track Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="url"
          placeholder="Audio URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="form-input"
          required
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          rows={3}
        />
        <button type="submit" className="gold-button px-4 py-2">
          Add Track
        </button>
      </form>
    </ParchmentSection>
  )
}

// Track Editor Component
function TrackEditor({ 
  track, 
  onUpdate, 
  onDelete 
}: { 
  track: MusicTrack
  onUpdate: (id: string, updates: Partial<MusicTrack>) => void
  onDelete: (id: string) => void 
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(track.title)
  const [artist, setArtist] = useState(track.artist)
  const [url, setUrl] = useState(track.url)
  const [description, setDescription] = useState(track.description || '')

  const handleSave = () => {
    onUpdate(track.id, { title, artist, url, description })
    setIsEditing(false)
  }

  return (
    <ParchmentSection>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="header-2 text-lg">{track.title}</h3>
          <p className="body-text text-sm">by {track.artist}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="gold-button px-3 py-1 text-sm"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button
            onClick={() => onDelete(track.id)}
            className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
      
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            placeholder="Track Title"
          />
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="form-input"
            placeholder="Artist"
          />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-input"
            placeholder="Audio URL"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            placeholder="Description"
            rows={3}
          />
          <button
            onClick={handleSave}
            className="gold-button px-4 py-2"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="body-text">
            <strong>URL:</strong> <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{url}</a>
          </p>
          {description && (
            <p className="body-text">
              <strong>Description:</strong> {description}
            </p>
          )}
        </div>
      )}
    </ParchmentSection>
  )
}
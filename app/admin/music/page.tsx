'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { useState } from 'react'

export default function MusicManagement() {
  const [tracks, setTracks] = useState([
    { id: 1, title: 'The One You Need', artist: 'Southern Cross Rangers', album: 'The One You Need', duration: '4:00', status: 'Published' },
    { id: 2, title: 'Being Near Is Better', artist: 'Southern Cross Rangers', album: 'The One You Need', duration: '3:15', status: 'Published' },
    { id: 3, title: 'We Will Meet Again', artist: 'Southern Cross Rangers', album: 'The One You Need', duration: '3:30', status: 'Draft' }
  ])

  const [newTrack, setNewTrack] = useState({
    title: '',
    artist: 'Southern Cross Rangers',
    album: 'The One You Need',
    duration: ''
  })

  const handleAddTrack = () => {
    if (newTrack.title && newTrack.artist) {
      const track = {
        id: tracks.length + 1,
        ...newTrack,
        status: 'Draft'
      }
      setTracks([...tracks, track])
      setNewTrack({ title: '', artist: 'Southern Cross Rangers', album: 'The One You Need', duration: '' })
      alert('Track added successfully!')
    } else {
      alert('Please fill in all required fields')
    }
  }

  const handleDeleteTrack = (id: number) => {
    if (confirm('Are you sure you want to delete this track?')) {
      setTracks(tracks.filter(track => track.id !== id))
      alert('Track deleted successfully!')
    }
  }

  const handleEditTrack = (id: number) => {
    const track = tracks.find(t => t.id === id)
    if (track) {
      const newTitle = prompt('Enter new title:', track.title)
      const newDuration = prompt('Enter new duration:', track.duration)
      if (newTitle && newDuration) {
        setTracks(tracks.map(t => 
          t.id === id ? { ...t, title: newTitle, duration: newDuration } : t
        ))
        alert('Track updated successfully!')
      }
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="parchment-section max-w-4xl mx-auto">
          <h1 className="header-1 text-3xl sm:text-4xl lg:text-5xl mb-6">Music Management</h1>
          <p className="body-text text-lg sm:text-xl mb-8">Manage your tracks, albums, and playlists.</p>
        </div>

        {/* Add New Track */}
        <div className="parchment-section max-w-4xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Add New Track</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Track Title</label>
                <input 
                  type="text" 
                  value={newTrack.title}
                  onChange={(e) => setNewTrack({...newTrack, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter track title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Artist</label>
                <input 
                  type="text" 
                  value={newTrack.artist}
                  onChange={(e) => setNewTrack({...newTrack, artist: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Southern Cross Rangers"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Album</label>
                <select 
                  value={newTrack.album}
                  onChange={(e) => setNewTrack({...newTrack, album: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>The One You Need</option>
                  <option>Upcoming Album</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <input 
                  type="text" 
                  value={newTrack.duration}
                  onChange={(e) => setNewTrack({...newTrack, duration: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="4:00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Audio File</label>
              <input 
                type="file" 
                accept="audio/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button 
              type="button"
              onClick={handleAddTrack}
              className="gold-button w-full text-lg py-3"
            >
              Add Track
            </button>
          </form>
        </div>

        {/* Track List */}
        <div className="parchment-section max-w-6xl mx-auto">
          <h2 className="header-2 text-2xl mb-6">Current Tracks ({tracks.length})</h2>
          <div className="space-y-4">
            {tracks.map((track) => (
              <div key={track.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white bg-opacity-50">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🎵</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{track.title}</h3>
                    <p className="text-sm text-gray-600">{track.album} • {track.duration} • {track.status}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditTrack(track.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteTrack(track.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

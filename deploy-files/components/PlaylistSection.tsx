'use client'

export function PlaylistSection() {
  const playlists = [
    {
      id: '1',
      name: 'Tasmanian Favorites',
      description: 'Our most beloved tracks from the heart of Tasmania',
      trackCount: 8,
      duration: '32:45',
      cover: '/images/playlist-1.jpg'
    },
    {
      id: '2',
      name: 'Live Performances',
      description: 'Captured moments from our live shows',
      trackCount: 6,
      duration: '28:30',
      cover: '/images/playlist-2.jpg'
    },
    {
      id: '3',
      name: 'Acoustic Sessions',
      description: 'Intimate acoustic versions of our songs',
      trackCount: 5,
      duration: '22:15',
      cover: '/images/playlist-3.jpg'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="header-2 text-3xl sm:text-4xl mb-4">
          Featured Playlists
        </h2>
        <p className="body-text max-w-2xl mx-auto">
          Curated collections of our music, perfect for different moods and moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="parchment-section">
            <div className="text-center">
              <div className="w-full h-48 bg-gradient-to-br from-gold to-gold-dark rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🎵</span>
              </div>
              <h3 className="header-2 text-xl mb-2">{playlist.name}</h3>
              <p className="body-text text-sm mb-4">{playlist.description}</p>
              <div className="flex justify-between text-xs text-text-light mb-4">
                <span>{playlist.trackCount} tracks</span>
                <span>{playlist.duration}</span>
              </div>
              <button className="gold-button w-full">
                Play Playlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Southern Cross Rangers',
    short_name: 'SCRangers',
    description: 'Southern Cross Rangers - Authentic Tasmanian country music led by George McLarry.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4e4c1',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/images/final_logo_transparent.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/images/final_logo_transparent.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
